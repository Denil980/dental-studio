import React from 'react';

/**
 * Modern Blue Gradient & Layered Translucent Wave Background
 * Exactly matching the user's provided visual reference:
 * - Light blue and white luminous background foundation
 * - Smooth blue gradients (Sky 400, Azure 500, Cerulean 600, Ice Blue)
 * - Layered translucent flowing wave shapes (top header and bottom transitions)
 * - Soft glowing light blooms and subtle glass-like ribbon overlays
 * - Gentle rounded visual surfaces with clean, elegant, premium appearance
 */
export const WebsiteWavyBackground: React.FC = () => {
  return (
    <aside
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Base Foundation: Smooth Vertical Transition from Light Sky Blue to White */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#E0F2FE]/60 via-white to-[#F0F9FF]"
        style={{
          background: 'linear-gradient(180deg, #E0F2FE 0%, #F0F9FF 12%, #FFFFFF 32%, #FFFFFF 75%, #F0F9FF 90%, #E0F2FE 100%)'
        }}
      />

      {/* 2. Soft Glowing Ambient Light Blooms (Behind Waves for Rich Depth) */}
      {/* Top Center Radiant Sky Bloom */}
      <div 
        className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, rgba(56, 189, 248, 0.42) 0%, rgba(14, 165, 233, 0.22) 42%, rgba(224, 242, 254, 0.08) 72%, transparent 100%)',
          filter: 'blur(70px)'
        }}
      />

      {/* Top Right Deep Azure Glow */}
      <div 
        className="absolute -top-[160px] -right-[120px] w-[800px] h-[750px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 65% 35%, rgba(2, 132, 199, 0.32) 0%, rgba(56, 189, 248, 0.16) 48%, transparent 75%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Top Left Soft Sky Glow */}
      <div 
        className="absolute -top-[140px] -left-[100px] w-[750px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(14, 165, 233, 0.28) 0%, rgba(186, 230, 253, 0.18) 50%, transparent 75%)',
          filter: 'blur(75px)'
        }}
      />

      {/* Bottom Glowing Ambient Bloom */}
      <div 
        className="absolute -bottom-[120px] left-1/2 -translate-x-1/2 w-[1150px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 85%, rgba(2, 132, 199, 0.26) 0%, rgba(56, 189, 248, 0.16) 45%, rgba(224, 242, 254, 0.06) 72%, transparent 100%)',
          filter: 'blur(80px)'
        }}
      />

      {/* 3. Top Layered Translucent Wave System (Exact Style from Reference Image) */}
      <div className="absolute top-0 left-0 right-0 w-full h-[320px] sm:h-[380px] lg:h-[460px] pointer-events-none">
        <svg
          viewBox="0 0 1440 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            {/* Primary Sky to Deep Blue Gradient */}
            <linearGradient id="refTopSkyGrad" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.65" />
              <stop offset="45%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="85%" stopColor="#7DD3FC" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.12" />
            </linearGradient>

            {/* Secondary Deep Cerulean Gradient */}
            <linearGradient id="refTopDeepGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>

            {/* Translucent Foreground Wave Gradient */}
            <linearGradient id="refTopForeGrad" x1="30%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#BAE6FD" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
            </linearGradient>

            {/* Luminous Glass Crest Highlights */}
            <linearGradient id="refCrestShine1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="55%" stopColor="#BAE6FD" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.15" />
            </linearGradient>

            <linearGradient id="refCrestShine2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#7DD3FC" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Wave Layer 1: Background Billowing Deep Wave */}
          <path
            d="M0 0 L1440 0 L1440 220 C1160 310 880 150 620 250 C360 350 160 190 0 270 Z"
            fill="url(#refTopDeepGrad)"
          />

          {/* Wave Layer 2: Mid Translucent Flowing Ribbon Wave */}
          <path
            d="M0 0 L1440 0 L1440 280 C1220 180 940 310 680 210 C440 130 200 270 0 190 Z"
            fill="url(#refTopSkyGrad)"
          />

          {/* Wave Layer 3: Foreground Gentle Undulating Wave */}
          <path
            d="M0 0 L1440 0 L1440 160 C1080 270 820 180 540 280 C300 370 120 220 0 310 Z"
            fill="url(#refTopForeGrad)"
          />

          {/* Translucent Glass-Like Ribbon Crest Highlight Lines (From Reference Image) */}
          <path
            d="M0 270 C160 190 360 350 620 250 C880 150 1160 310 1440 220"
            stroke="url(#refCrestShine1)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M0 190 C200 270 440 130 680 210 C940 310 1220 180 1440 280"
            stroke="url(#refCrestShine2)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M0 310 C120 220 300 370 540 280 C820 180 1080 270 1440 160"
            stroke="rgba(255, 255, 255, 0.65)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 4. Mid-Background Subtle Flowing Ribbon (Reference Panels 5, 6, 8) */}
      <div className="absolute top-[42%] left-0 right-0 w-full h-[260px] pointer-events-none opacity-25">
        <svg
          viewBox="0 0 1440 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0 120 C320 210 640 40 960 150 C1240 230 1360 90 1440 110"
            stroke="url(#refCrestShine1)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M0 160 C280 80 580 240 880 110 C1160 20 1340 180 1440 140"
            stroke="url(#refCrestShine2)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 5. Bottom Layered Translucent Wave System (Reference Panels 3, 4, 7, 8) */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[240px] sm:h-[300px] lg:h-[360px] pointer-events-none">
        <svg
          viewBox="0 0 1440 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            {/* Bottom Upward Blue Gradient */}
            <linearGradient id="refBottomSkyGrad" x1="0%" y1="100%" x2="100%" y2="20%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.55" />
              <stop offset="40%" stopColor="#0EA5E9" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#38BDF8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.06" />
            </linearGradient>

            {/* Bottom Secondary Wave Gradient */}
            <linearGradient id="refBottomSoftGrad" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Bottom Wave Layer 1 */}
          <path
            d="M0 360 L1440 360 L1440 160 C1180 70 920 190 660 100 C400 20 180 150 0 90 Z"
            fill="url(#refBottomSkyGrad)"
          />

          {/* Bottom Wave Layer 2 */}
          <path
            d="M0 360 L1440 360 L1440 90 C1120 190 860 90 580 170 C340 240 140 120 0 180 Z"
            fill="url(#refBottomSoftGrad)"
          />

          {/* Bottom Crest Highlights */}
          <path
            d="M0 90 C180 150 400 20 660 100 C920 190 1180 70 1440 160"
            stroke="url(#refCrestShine1)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M0 180 C140 120 340 240 580 170 C860 90 1120 190 1440 90"
            stroke="url(#refCrestShine2)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 6. Subtle Micro-Diffusion Overlay (Prevents CSS Color Banding) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.015] mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="blueSmoothDiffusion">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.75" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#blueSmoothDiffusion)" />
      </svg>
    </aside>
  );
};
