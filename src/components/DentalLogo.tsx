import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const DentalLogo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dental Studio Brand */}
      <div className="flex items-center gap-2">
        {/* Blue 3D Stylized Tooth Logo */}
        <div className="relative w-9 h-10 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 40 44" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="toothBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="60%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>
            </defs>
            {/* Crown and Roots */}
            <path
              d="M20 3 C12 3, 5 7, 5 14 C5 20, 8 26, 11 33 C13 38, 15 41, 18 41 C20 41, 20.5 35, 20.5 35 C20.5 35, 21 41, 23 41 C26 41, 28 38, 30 33 C33 26, 36 20, 36 14 C36 7, 28 3, 20 3 Z"
              fill="url(#toothBlueGrad)"
            />
            {/* White/Highlight Root Contour */}
            <path
              d="M17 16 C17 26, 18 36, 18.5 38"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M12 10 C16 6, 24 6, 28 10"
              stroke="#E0F2FE"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-0.5">
            <span className={`text-[13px] font-black tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
              DR. INAMDAR'S
            </span>
            <span className="text-[9px] font-bold text-slate-500">®</span>
          </div>
          <span className="text-[17px] font-extrabold tracking-tight text-[#0284C7]">
            DENTAL STUDIO
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`text-[8.5px] font-medium tracking-tight ${light ? 'text-sky-200' : 'text-slate-500'}`}>
              Enhancing Smiles. Changing Lives!
            </span>
            <span className="text-[7.5px] font-bold text-[#0284C7] bg-sky-50 px-1 rounded">
              SINCE 2003
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StylizedToothArt: React.FC<{ className?: string }> = ({ className = "w-64 h-64 text-sky-900/20" }) => (
  <svg 
    viewBox="0 0 120 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M60 15C40 15 22 28 22 46C22 62 28 75 33 92C37 105 41 110 49 110C55 110 57 98 60 98C63 98 65 110 71 110C79 110 83 105 87 92C92 75 98 62 98 46C98 28 80 15 60 15Z" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M42 42C48 37 54 34.5 60 34.5C66 34.5 72 37 78 42" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
  </svg>
);
