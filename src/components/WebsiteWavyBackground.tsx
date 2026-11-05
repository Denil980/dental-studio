import React from 'react';

/**
 * Ultra-Luxury Architectural Clinic Background
 * Pure, human-designed quiet luxury atmosphere:
 * - Serene optical light diffusion (gentle morning clinic daylight)
 * - Film-grade micro-grain texture that adds organic warmth and removes synthetic digital flatness
 * - Subtle precision alignment guides framing the content with architectural poise
 * - Completely free of cartoon doodles, wavy line vectors, or synthetic AI clutter
 */
export const WebsiteWavyBackground: React.FC = () => {
  return (
    <aside
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Base Alabaster/Porcelain Foundation with Soft Vignette */}
      <div 
        className="absolute inset-0 bg-[#F8FAFC]" 
      />

      {/* 2. Soft Natural Diffuse Light Blooms with Warm Gray & Sky Balances */}
      {/* Upper-right soft sky ambiance */}
      <div 
        className="absolute -top-[20%] right-[-10%] w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(226, 232, 240, 0.7) 0%, rgba(241, 245, 249, 0.4) 45%, transparent 75%)',
          filter: 'blur(80px)'
        }}
      />
      {/* Mid-left luminous slate gray fill */}
      <div 
        className="absolute top-[35%] -left-[15%] w-[850px] h-[850px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(203, 213, 225, 0.5) 0%, rgba(224, 242, 254, 0.2) 45%, transparent 70%)',
          filter: 'blur(90px)'
        }}
      />
      {/* Lower subtle depth accent in slate gray */}
      <div 
        className="absolute -bottom-[20%] right-[10%] w-[950px] h-[750px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(226, 232, 240, 0.6) 0%, rgba(248, 250, 252, 0.3) 50%, transparent 75%)',
          filter: 'blur(100px)'
        }}
      />

      {/* 3. Subtle Architectural Precision Grid (Whisper-soft 56px hairline in slate gray) */}
      <div 
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100, 116, 139, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 116, 139, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 25%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 45%, black 25%, transparent 90%)'
        }}
      />

      {/* 4. Film Grain / Micro-Texture Overlay (Removes flat digital/AI sterility) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="studioNoiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#studioNoiseFilter)" />
      </svg>
    </aside>
  );
};
