import React from 'react';

/**
 * Executive Studio Background
 * Professional, human-designed architectural clinic atmosphere:
 * - Subtle ambient luminescence (soft clinical sky & pure porcelain)
 * - Ultra-fine precision micro-grid matrix (DentMatrix precision dental theme)
 * - Whisper-soft ambient gradient caustics with zero cartoon or vector clutter
 */
export const WebsiteWavyBackground: React.FC = () => {
  return (
    <aside
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Subtle Precision Medical Grid (Whisper-soft 64px matrix) */}
      <div 
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(2, 132, 199, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2, 132, 199, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 95%)'
        }}
      />

      {/* 2. Soft Ambient Luminescence Orbs (Gentle depth & luxury warmth) */}
      <div 
        className="absolute -top-[15%] right-[-5%] w-[720px] h-[720px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(2, 132, 199, 0.03) 50%, transparent 75%)'
        }}
      />
      <div 
        className="absolute top-[45%] -left-[10%] w-[680px] h-[680px] rounded-full blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.05) 0%, rgba(224, 242, 254, 0.04) 50%, transparent 75%)'
        }}
      />
      <div 
        className="absolute -bottom-[15%] right-[15%] w-[800px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, rgba(240, 249, 255, 0.02) 60%, transparent 80%)'
        }}
      />

      {/* 3. Delicate Organic Wave Accents (Ultra-soft, fluid, human-crafted) */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveDelicateBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="waveDelicateSlate" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64748B" stopOpacity="0.06" />
            <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#64748B" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        <path
          d="M-40,120 C280,240 560,-10 860,110 C1160,230 1340,50 1520,130"
          fill="none"
          stroke="url(#waveDelicateBlue)"
          strokeWidth="1.2"
        />
        <path
          d="M-60,480 C260,360 580,590 880,470 C1180,350 1360,510 1540,440"
          fill="none"
          stroke="url(#waveDelicateSlate)"
          strokeWidth="1"
        />
        <path
          d="M-50,780 C240,880 540,710 840,820 C1140,920 1350,760 1530,830"
          fill="none"
          stroke="url(#waveDelicateBlue)"
          strokeWidth="1.2"
        />
      </svg>
    </aside>
  );
};
