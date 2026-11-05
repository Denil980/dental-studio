import React, { useState, useRef } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  title?: string;
  category?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImg,
  afterImg,
  title,
  category,
  className = ""
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className={`group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all ${className}`}>
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] select-none cursor-ew-resize overflow-hidden bg-slate-100"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImg} 
          alt="After treatment result" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        />
        <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur text-[11px] font-bold text-white tracking-wide uppercase">
          After
        </div>

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImg} 
            alt="Before treatment" 
            className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          />
          <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur text-[11px] font-bold text-white tracking-wide uppercase">
            Before
          </div>
        </div>

        {/* Divider Line & Handle */}
        <div 
          className="absolute top-0 bottom-0 z-20 w-[2px] bg-white cursor-ew-resize flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-lg border-2 border-[#0284C7] flex items-center justify-center text-[#0284C7] -ml-[15px] pointer-events-auto transition-transform group-hover:scale-110">
            <ChevronsLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {title && (
        <div className="p-4">
          {category && (
            <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider">
              {category}
            </span>
          )}
          <h4 className="text-sm font-bold text-slate-800 line-clamp-1 mt-0.5">{title}</h4>
        </div>
      )}
    </div>
  );
};
