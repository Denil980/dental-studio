import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Rotate3D } from 'lucide-react';

interface Tooth3DViewerProps {
  className?: string;
}

export const Tooth3DViewer: React.FC<Tooth3DViewerProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTooth, setSelectedTooth] = useState<'molar' | 'incisor'>('molar');

  // Keep a ref to switch active tooth dynamically
  const activeToothRef = useRef<'molar' | 'incisor'>('molar');
  activeToothRef.current = selectedTooth;

  const toothMeshesRef = useRef<{ molar?: THREE.Mesh; incisor?: THREE.Mesh }>({});
  const toothGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 560;

    // 1. Three.js Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup (calibrated focal length for natural perspective without distortion)
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.3, 7.5);

    // 3. WebGL Renderer with ACES Tone Mapping for photorealistic dynamic range
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 4. Clinical Studio Photography Lighting
    // Soft ambient base
    const ambientLight = new THREE.AmbientLight(0xf8fafc, 1.4);
    scene.add(ambientLight);

    // Key Studio Light (Warm white 5500K daylight)
    const keyLight = new THREE.DirectionalLight(0xfffaf0, 2.4);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    // Fill Light (Soft cool fill for natural shadows)
    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.5);
    fillLight.position.set(-4, 1.5, 3);
    scene.add(fillLight);

    // Rim/Back Light (Creates crisp edge reflections highlighting the enamel crown)
    const rimLight = new THREE.DirectionalLight(0xffffff, 2.6);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Bottom bounce light
    const bounceLight = new THREE.DirectionalLight(0xf1f5f9, 0.8);
    bounceLight.position.set(0, -4, 2);
    scene.add(bounceLight);

    // 5. Realistic Contact Shadow Plane under the roots
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(128, 128, 10, 128, 128, 115);
      grad.addColorStop(0, 'rgba(15, 23, 42, 0.28)');
      grad.addColorStop(0.4, 'rgba(15, 23, 42, 0.12)');
      grad.addColorStop(0.8, 'rgba(15, 23, 42, 0.02)');
      grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.05;
    scene.add(shadowMesh);

    // 6. Tooth Group
    const toothGroup = new THREE.Group();
    scene.add(toothGroup);
    toothGroupRef.current = toothGroup;

    // Helper to process raw anatomical mesh into a photorealistic, natural tooth
    const createNaturalToothMesh = (sourceMesh: THREE.Mesh, flipY: boolean = false) => {
      const geo = sourceMesh.geometry.clone();
      geo.center();

      // Orient tooth so crown is on top, roots taper down
      if (flipY) {
        geo.rotateZ(Math.PI);
      }

      // Recompute smooth vertex normals to eliminate any low-poly facets
      geo.computeVertexNormals();

      // Normalize scale to height of 3.4 units
      geo.computeBoundingBox();
      const bbox = geo.boundingBox!;
      const totalH = bbox.max.y - bbox.min.y;
      const targetH = 3.4;
      const scaleFactor = targetH / (totalH || 1);
      geo.scale(scaleFactor, scaleFactor, scaleFactor);
      geo.computeBoundingBox();

      const newBbox = geo.boundingBox!;
      const minY = newBbox.min.y;
      const maxY = newBbox.max.y;
      const h = maxY - minY;

      // Realistic anatomical vertex colors:
      // - Crown (enamel): natural pearl ivory white (#fbfbf7)
      // - Cervical margin (CEJ): subtle warm ivory (#eee3cf)
      // - Root (dentin/cementum): authentic natural root tone (#ded0b7 to #d4c4a8)
      const posAttr = geo.attributes.position;
      const colors = new Float32Array(posAttr.count * 3);

      const crownEnamel = new THREE.Color(0xfcfcf9);
      const cejLine = new THREE.Color(0xf1e5d0);
      const rootDentin = new THREE.Color(0xdfd1b8);
      const rootApex = new THREE.Color(0xd2c0a2);

      const c = new THREE.Color();
      for (let i = 0; i < posAttr.count; i++) {
        const y = posAttr.getY(i);
        const ny = Math.max(0, Math.min(1, (y - minY) / h)); // 0 = root apex, 1 = crown cusp top

        if (ny > 0.52) {
          // Anatomical Enamel Crown
          const t = (ny - 0.52) / 0.48;
          c.lerpColors(cejLine, crownEnamel, Math.pow(t, 0.7));
        } else if (ny > 0.28) {
          // Cervical junction to mid-root
          const t = (ny - 0.28) / 0.24;
          c.lerpColors(rootDentin, cejLine, t);
        } else {
          // Apical root tip
          const t = ny / 0.28;
          c.lerpColors(rootApex, rootDentin, t);
        }

        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Realistic Dental Porcelain / Enamel Physical Material
      const material = new THREE.MeshPhysicalMaterial({
        vertexColors: true,
        roughness: 0.16,
        metalness: 0.02,
        clearcoat: 0.95,
        clearcoatRoughness: 0.08,
        transmission: 0.14, // Subtle subsurface scattering
        ior: 1.54,
        reflectivity: 0.94,
        specularIntensity: 1.25,
        sheen: 0.35,
        sheenColor: new THREE.Color(0xffffff)
      });

      return new THREE.Mesh(geo, material);
    };

    // 7. Load BodyParts3D Authentic Anatomical Dental Models
    const loader = new GLTFLoader();
    loader.load(
      '/models/teeth.glb',
      (gltf) => {
        // A. Mandibular First Molar (Classic dual-root molar with 5-cusp crown)
        const molarRaw = gltf.scene.getObjectByName('lower-right-first-molar') as THREE.Mesh;
        if (molarRaw) {
          const molarMesh = createNaturalToothMesh(molarRaw, false);
          toothMeshesRef.current.molar = molarMesh;
          if (activeToothRef.current === 'molar') {
            toothGroup.add(molarMesh);
          }
        }

        // B. Maxillary Central Incisor (Front aesthetic incisor with natural single root)
        const incisorRaw = gltf.scene.getObjectByName('upper-left-central-incisor') as THREE.Mesh;
        if (incisorRaw) {
          const incisorMesh = createNaturalToothMesh(incisorRaw, true);
          toothMeshesRef.current.incisor = incisorMesh;
          if (activeToothRef.current === 'incisor') {
            toothGroup.add(incisorMesh);
          }
        }

        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.error('Failed to load anatomical tooth model:', err);
        setIsLoading(false);
      }
    );

    // Initial forward tilt
    toothGroup.position.set(0, 0.1, 0);
    toothGroup.rotation.x = 0.12;
    toothGroup.rotation.y = 0.45;

    // -------------------------------------------------------------------------
    // 8. Scroll-Driven 3D Rotation & Interactive Touch/Mouse Drag
    // -------------------------------------------------------------------------
    let targetRotationY = 0.45;
    let targetRotationX = 0.12;
    let scrollRotationOffset = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Smooth continuous 360-degree rotation as the visitor scrolls the page
      scrollRotationOffset = scrollY * 0.0045;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Interactive mouse / touch dragging
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMouseX = clientX;
      previousMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - previousMouseX;
      const deltaY = clientY - previousMouseY;

      mouseX += deltaX * 0.008;
      mouseY += deltaY * 0.008;

      previousMouseX = clientX;
      previousMouseY = clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handlePointerDown);
    domElement.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    domElement.addEventListener('touchstart', handlePointerDown, { passive: true });
    domElement.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // -------------------------------------------------------------------------
    // 9. Natural Physics Animation Loop
    // -------------------------------------------------------------------------
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Target combines scroll-driven spin + user manual drag + subtle organic breathing
      targetRotationY = 0.45 + scrollRotationOffset + mouseX + Math.sin(elapsedTime * 0.5) * 0.04;
      targetRotationX = 0.12 + mouseY * 0.5 + Math.cos(elapsedTime * 0.7) * 0.025;

      // Soft physical dampening (lerp)
      toothGroup.rotation.y += (targetRotationY - toothGroup.rotation.y) * 0.08;
      toothGroup.rotation.x += (targetRotationX - toothGroup.rotation.x) * 0.08;

      // Gentle vertical floating motion
      const floatY = 0.1 + Math.sin(elapsedTime * 1.1) * 0.05;
      toothGroup.position.y = floatY;
      shadowMesh.position.y = -2.05 + Math.sin(elapsedTime * 1.1) * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    // -------------------------------------------------------------------------
    // 10. Responsive Resize
    // -------------------------------------------------------------------------
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      domElement.removeEventListener('mousedown', handlePointerDown);
      domElement.removeEventListener('mousemove', handlePointerMove);
      domElement.removeEventListener('touchstart', handlePointerDown);
      domElement.removeEventListener('touchmove', handlePointerMove);
      resizeObserver.disconnect();

      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTexture.dispose();
    };
  }, []);

  // Handle switching between Molar & Incisor
  const handleSelectTooth = (type: 'molar' | 'incisor') => {
    setSelectedTooth(type);
    const group = toothGroupRef.current;
    if (!group) return;

    // Clear existing meshes in group
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }

    const mesh = toothMeshesRef.current[type];
    if (mesh) {
      group.add(mesh);
    }
  };

  return (
    <div className={`relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-sky-50/50 border-4 border-white shadow-2xl group select-none ${className}`}>
      
      {/* 3D WebGL Canvas */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white/80 backdrop-blur-xs space-y-3">
          <div className="w-9 h-9 border-3 border-sky-200 border-t-[#0284C7] rounded-full animate-spin" />
          <p className="text-xs font-bold text-slate-600">Loading 3D Anatomy...</p>
        </div>
      )}

      {/* Atmospheric Soft Studio Lighting Background */}
      <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-sky-200/35 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Top Controls & Scroll Indicator */}
      <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
        
        {/* Scroll Indicator Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-sky-100 text-[#0284C7] text-xs font-bold shadow-xs">
          <Rotate3D className="w-4 h-4 animate-spin-slow text-[#0284C7]" />
          <span>Scroll to Rotate 3D</span>
        </div>

        {/* Tooth Selector Tabs */}
        <div className="pointer-events-auto inline-flex items-center p-1 rounded-full bg-white/95 backdrop-blur-md border border-sky-100 shadow-xs">
          <button
            onClick={() => handleSelectTooth('molar')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedTooth === 'molar'
                ? 'bg-[#0284C7] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#0284C7]'
            }`}
          >
            Molar
          </button>
          <button
            onClick={() => handleSelectTooth('incisor')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedTooth === 'incisor'
                ? 'bg-[#0284C7] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#0284C7]'
            }`}
          >
            Incisor
          </button>
        </div>

      </div>

    </div>
  );
};
