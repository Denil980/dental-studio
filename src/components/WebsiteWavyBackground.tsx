import React from 'react';

/**
 * Adorable, clean cartoon tooth illustration
 * Light blue color, gentle outline, sweet smiling face & gleam
 * Calibrated for delicate watermark visibility that never obstructs text
 */
export const CartoonTooth: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}> = ({ className = '', style = {}, size = 52 }) => (
  <svg
    viewBox="0 0 100 110"
    width={size}
    height={size * 1.1}
    className={`transition-all duration-500 select-none filter drop-shadow-[0_2px_8px_rgba(2,132,199,0.15)] ${className}`}
    style={style}
    aria-hidden="true"
  >
    {/* Cute cartoon tooth contour with soft sky blue fill and subtle outline */}
    <path
      d="M32 12 C18 12 10 26 10 42 C10 58 16 72 24 96 C27 106 37 106 41 96 C45 84 48 74 50 74 C52 74 55 84 59 96 C63 106 73 106 76 96 C84 72 90 58 90 42 C90 26 82 12 68 12 C58 12 54 20 50 20 C46 20 42 12 32 12 Z"
      fill="#38BDF8"
      fillOpacity="0.50"
      stroke="#0284C7"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    
    {/* Cute Cartoon Eyes with pupil gleam */}
    <circle cx="36" cy="42" r="4.5" fill="#FFFFFF" fillOpacity="0.9" />
    <circle cx="64" cy="42" r="4.5" fill="#FFFFFF" fillOpacity="0.9" />
    <circle cx="37" cy="42" r="2" fill="#0369A1" fillOpacity="0.75" />
    <circle cx="65" cy="42" r="2" fill="#0369A1" fillOpacity="0.75" />
    <circle cx="38" cy="40.5" r="0.8" fill="#FFFFFF" />
    <circle cx="66" cy="40.5" r="0.8" fill="#FFFFFF" />
    
    {/* Sweet Cartoon Smile */}
    <path
      d="M39 53 Q50 63 61 53"
      stroke="#0369A1"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      strokeOpacity="0.8"
    />
    
    {/* Soft Cheek Blushes */}
    <ellipse cx="26" cy="51" rx="4" ry="2.4" fill="#FFFFFF" fillOpacity="0.6" />
    <ellipse cx="74" cy="51" rx="4" ry="2.4" fill="#FFFFFF" fillOpacity="0.6" />
    
    {/* Crown Gloss Gleam */}
    <path
      d="M24 23 Q28 16 36 16"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      strokeOpacity="0.9"
    />
  </svg>
);

export const WebsiteWavyBackground: React.FC = () => {
  return (
    <aside
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* -------------------------------------------------------------
       * Ambient Luxury Clinic Glow Spheres
       * ------------------------------------------------------------- */}
      <div 
        className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] rounded-full blur-[120px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(2, 132, 199, 0.08) 50%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[130px] opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(224, 242, 254, 0.1) 50%, transparent 70%)'
        }}
      />

      {/* -------------------------------------------------------------
       * 1. WAVY FADED TEXTURE OF BLUE, BLACK & GRAY LINES
       * Perfectly balanced: easily visible, yet soft & faded so text is 100% readable
       * ------------------------------------------------------------- */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-85 animate-wave-shimmer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Blue Line Gradients - Noticeable light blue, soft & non-obtrusive */}
          <linearGradient id="waveBlueGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.24" />
          </linearGradient>

          <linearGradient id="waveBlueGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0369A1" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.15" />
          </linearGradient>

          {/* Gray Line Gradients - Faded soft slate */}
          <linearGradient id="waveGrayGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#64748B" stopOpacity="0.13" />
            <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#64748B" stopOpacity="0.12" />
          </linearGradient>

          {/* Black Line Gradients - Gentle charcoal whisper, never dark */}
          <linearGradient id="waveBlackGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" stopOpacity="0.12" />
            <stop offset="45%" stopColor="#1E293B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.13" />
          </linearGradient>
        </defs>

        {/* --- Top Band Waves (Blue, Gray, Black) --- */}
        {/* Blue Wave 1 */}
        <path
          d="M-50,75 C220,165 480,-25 740,75 C1000,165 1250,15 1500,95"
          fill="none"
          stroke="url(#waveBlueGrad1)"
          strokeWidth="1.5"
        />
        {/* Gray Wave 1 */}
        <path
          d="M-40,105 C240,195 500,5 760,105 C1020,195 1270,45 1510,125"
          fill="none"
          stroke="url(#waveGrayGrad1)"
          strokeWidth="1.1"
        />
        {/* Black Wave 1 */}
        <path
          d="M-30,135 C250,225 510,35 770,135 C1030,225 1280,75 1520,155"
          fill="none"
          stroke="url(#waveBlackGrad1)"
          strokeWidth="1.1"
        />

        {/* --- Upper-Mid Band Waves --- */}
        {/* Blue Wave 2 */}
        <path
          d="M-60,255 C260,175 540,345 820,255 C1100,155 1340,315 1520,245"
          fill="none"
          stroke="url(#waveBlueGrad2)"
          strokeWidth="1.5"
        />
        {/* Gray Wave 2 */}
        <path
          d="M-50,285 C270,205 550,375 830,285 C1110,185 1350,345 1530,275"
          fill="none"
          stroke="url(#waveGrayGrad1)"
          strokeWidth="1.1"
        />
        {/* Black Wave 2 */}
        <path
          d="M-40,315 C280,235 560,405 840,315 C1120,215 1360,375 1540,305"
          fill="none"
          stroke="url(#waveBlackGrad1)"
          strokeWidth="1.1"
        />

        {/* --- Center Rhythm Waves (Gentle Flow Across Page) --- */}
        {/* Blue Wave 3 */}
        <path
          d="M-80,475 C180,565 480,395 760,495 C1040,585 1300,425 1550,515"
          fill="none"
          stroke="url(#waveBlueGrad1)"
          strokeWidth="1.6"
        />
        {/* Gray Wave 3 */}
        <path
          d="M-70,505 C190,595 490,425 770,525 C1050,615 1310,455 1560,545"
          fill="none"
          stroke="url(#waveGrayGrad1)"
          strokeWidth="1.2"
        />
        {/* Black Wave 3 */}
        <path
          d="M-60,535 C200,625 500,455 780,555 C1060,645 1320,485 1570,575"
          fill="none"
          stroke="url(#waveBlackGrad1)"
          strokeWidth="1.1"
        />

        {/* --- Lower-Mid Band Waves --- */}
        {/* Blue Wave 4 */}
        <path
          d="M-50,675 C260,595 560,765 840,675 C1120,575 1350,735 1530,665"
          fill="none"
          stroke="url(#waveBlueGrad2)"
          strokeWidth="1.5"
        />
        {/* Gray Wave 4 */}
        <path
          d="M-40,705 C270,625 570,795 850,705 C1130,605 1360,765 1540,695"
          fill="none"
          stroke="url(#waveGrayGrad1)"
          strokeWidth="1.1"
        />
        {/* Black Wave 4 */}
        <path
          d="M-30,735 C280,655 580,825 860,735 C1140,635 1370,795 1550,725"
          fill="none"
          stroke="url(#waveBlackGrad1)"
          strokeWidth="1.1"
        />

        {/* --- Bottom Base Waves --- */}
        {/* Blue Wave 5 */}
        <path
          d="M-60,815 C220,895 520,765 800,845 C1080,915 1340,785 1540,865"
          fill="none"
          stroke="url(#waveBlueGrad1)"
          strokeWidth="1.6"
        />
        {/* Gray Wave 5 */}
        <path
          d="M-50,845 C230,925 530,795 810,875 C1090,945 1350,815 1550,895"
          fill="none"
          stroke="url(#waveGrayGrad1)"
          strokeWidth="1.1"
        />
        {/* Black Wave 5 */}
        <path
          d="M-40,875 C240,955 540,825 820,905 C1100,975 1360,845 1560,925"
          fill="none"
          stroke="url(#waveBlackGrad1)"
          strokeWidth="1.1"
        />
      </svg>

      {/* -------------------------------------------------------------
       * 2. FOUR CARTOON TEETH (LIGHT BLUE, VISIBLE YET DELICATE)
       * Placed unevenly across 4 distinct quadrants with wide distance
       * ------------------------------------------------------------- */}
      
      {/* Tooth 1: Upper Left Quadrant */}
      <div
        className="absolute opacity-45 hover:opacity-80 transition-opacity animate-tooth-float-1"
        style={{
          top: '11%',
          left: '6%',
          transform: 'rotate(-10deg)'
        }}
        title="Dental Studio Watermark Tooth 1"
      >
        <CartoonTooth size={50} />
      </div>

      {/* Tooth 2: Upper Right Quadrant (Generous distance from Tooth 1) */}
      <div
        className="absolute opacity-45 hover:opacity-80 transition-opacity animate-tooth-float-2"
        style={{
          top: '32%',
          right: '7%',
          transform: 'rotate(12deg)'
        }}
        title="Dental Studio Watermark Tooth 2"
      >
        <CartoonTooth size={54} />
      </div>

      {/* Tooth 3: Lower Left Quadrant (Generous distance from Tooth 2) */}
      <div
        className="absolute opacity-45 hover:opacity-80 transition-opacity animate-tooth-float-3"
        style={{
          top: '63%',
          left: '8%',
          transform: 'rotate(8deg)'
        }}
        title="Dental Studio Watermark Tooth 3"
      >
        <CartoonTooth size={48} />
      </div>

      {/* Tooth 4: Lower Right Quadrant (Generous distance from Tooth 3 & 2) */}
      <div
        className="absolute opacity-45 hover:opacity-80 transition-opacity animate-tooth-float-4"
        style={{
          top: '83%',
          right: '9%',
          transform: 'rotate(-8deg)'
        }}
        title="Dental Studio Watermark Tooth 4"
      >
        <CartoonTooth size={52} />
      </div>
    </aside>
  );
};
