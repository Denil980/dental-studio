import React from 'react';
import { PageView } from '../types';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  Layers, 
  Eye, 
  Activity, 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Digital3DScanIcon, DentMatrixLabIcon } from '../components/MedicalIcons';

interface TechnologyPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const techSuite = [
    {
      title: "DentMatrix 3D Digital Lab",
      subtitle: "In-House Precision CAD/CAM Milling",
      desc: "Our on-site dental lab eliminates third-party outsourcing delays. With German 5-axis wet/dry milling units, restorations are crafted with micron accuracy.",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80",
      tag: "In-House Digital Lab"
    },
    {
      title: "CBCT 3D Volumetric Imaging",
      subtitle: "Sub-Millimeter 3D Bone Scans",
      desc: "True 1:1 scale visualization of bone height, density, and nerve canals. Guarantees safe, guided implant placement with ultra-low radiation doses.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      tag: "Diagnostic Imaging"
    },
    {
      title: "Intraoral 3D Optical Scanners",
      subtitle: "Zero-Gag Digital Impressions",
      desc: "Say goodbye to uncomfortable putty impressions. Millions of data points are captured in 60 seconds to produce a true-color 3D digital model of your teeth.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      tag: "Digital Impressions"
    },
    {
      title: "3D Facially Driven Smile Simulation",
      subtitle: "Virtual Smile Test-Drive",
      desc: "Advanced facial mapping software analyzes your lip dynamics, speech, and facial symmetry so you can preview and approve your smile before treatment begins.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      tag: "Aesthetic Simulation"
    },
    {
      title: "Dual-Wavelength Soft Tissue Lasers",
      subtitle: "Minimally Invasive Gum Contouring",
      desc: "Provides scalpel-free gingival sculpting, immediate sterilization, zero bleeding, and accelerated post-procedure healing.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      tag: "Laser Dentistry"
    },
    {
      title: "T-Scan Digital Occlusal Analysis",
      subtitle: "Microsecond Bite Force Measurement",
      desc: "Pinpoints premature tooth contacts that lead to chipped veneers, failed implants, and chronic jaw joint pain.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      tag: "Occlusal Balance"
    }
  ];

  return (
    <div className="space-y-12 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/80 to-white pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-semibold">Technology & In-House Lab</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <TypewriterHeading
              text="Advanced Dental Technology"
              className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
            />
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-body">
              Engineering world-class clinical outcomes with our in-house DentMatrix 3D Digital Lab, 3D CBCT scanners, and computer-guided protocols.
            </p>
          </div>

        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techSuite.map((tech, idx) => (
            <ScrollReveal key={tech.title} index={idx} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#0284C7] transition-all flex flex-col justify-between h-full group hover:shadow-md">
                
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover card-img-zoom group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 space-y-2">
                    <h4 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#0284C7] transition-colors">
                      {tech.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-body pt-1">
                      {tech.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600">Available at both clinics</span>
                  <button
                    onClick={onOpenBookingModal}
                    className="text-[#0284C7] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Experience Care</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note: User will provide specific technology details */}
        <div className="bg-sky-50/70 border border-sky-100 rounded-3xl p-8 text-center space-y-3">
          <Sparkles className="w-6 h-6 text-[#0284C7] mx-auto" />
          <h3 className="text-xl font-bold text-slate-900 font-heading">Technology Specifications Update</h3>
          <p className="text-xs sm:text-sm text-slate-800 max-w-xl mx-auto font-body">
            Have specific equipment or hardware details to add? We will incorporate your custom specs and equipment descriptions right here.
          </p>
        </div>

      </section>

    </div>
  );
};
