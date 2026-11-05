import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

/**
 * Real clinical dental implant icon:
 * Crown, transmucosal collar, and osseointegrated screw threads.
 */
export const DentalImplantIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    {/* Dental Crown */}
    <path d="M7 3C5.5 3 4.5 4.5 5 7C5.5 9 6.5 10 8 10H16C17.5 10 18.5 9 19 7C19.5 4.5 18.5 3 17 3C15 3 14.5 5 12 5C9.5 5 9 3 7 3Z" />
    {/* Abutment collar */}
    <path d="M8 10L9 12H15L16 10" />
    {/* Implant root screw threads */}
    <line x1="9" y1="14" x2="15" y2="14" />
    <line x1="9.5" y1="16.5" x2="14.5" y2="16.5" />
    <line x1="10" y1="19" x2="14" y2="19" />
    {/* Tapered apex */}
    <path d="M9 12L10.5 21C11 21.6 13 21.6 13.5 21L15 12" />
  </svg>
);

/**
 * DentMatrix 3D Digital Lab / CAD-CAM Milling Unit Icon
 */
export const DentMatrixLabIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    {/* 3D Box / Milling Chamber */}
    <path d="M12 2L3 7L12 12L21 7L12 2Z" />
    <path d="M3 7V17L12 22V12" />
    <path d="M21 7V17L12 22" />
    {/* Precision CAD alignment crosshair in center */}
    <circle cx="12" cy="12" r="3" strokeDasharray="1.5 1.5" />
    <line x1="12" y1="7" x2="12" y2="9" />
    <line x1="12" y1="15" x2="12" y2="17" />
  </svg>
);

/**
 * Aesthetic Smile Makeover & Digital Smile Design Icon
 */
export const SmileDesignIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    {/* Anatomical Upper Smile Curve */}
    <path d="M4 11C6 14.5 8.5 16.5 12 16.5C15.5 16.5 18 14.5 20 11" />
    {/* Incisor contour definition */}
    <path d="M9 11.5V14.5" />
    <path d="M12 12V16.5" />
    <path d="M15 11.5V14.5" />
    {/* Facial symmetry balance calipers */}
    <path d="M3 7C7 9 17 9 21 7" strokeDasharray="2 2" />
  </svg>
);

/**
 * Full Mouth Rehabilitation Icon: Complete dental arch
 */
export const FullMouthRehabIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    {/* Full Maxillary/Mandibular Restorative Arch */}
    <path d="M4 18C4 10 7.5 4 12 4C16.5 4 20 10 20 18" />
    <circle cx="6" cy="17" r="1.5" fill="currentColor" />
    <circle cx="8" cy="12" r="1.5" fill="currentColor" />
    <circle cx="12" cy="9" r="1.5" fill="currentColor" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" />
    <circle cx="18" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * Orthodontic Braces & Aligners Icon
 */
export const OrthodonticsIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    {/* Curved continuous archwire */}
    <path d="M3 12C6 10 18 10 21 12" />
    {/* Orthodontic twin brackets */}
    <rect x="5" y="10" width="3.5" height="4" rx="1" />
    <rect x="10.25" y="9.5" width="3.5" height="4" rx="1" />
    <rect x="15.5" y="10" width="3.5" height="4" rx="1" />
  </svg>
);

/**
 * General Clinical Dentistry: Mirror & Dental Probe
 */
export const GeneralDentistryIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    {/* Dental Mouth Mirror */}
    <circle cx="9" cy="8" r="5" />
    <line x1="12.5" y1="11.5" x2="20" y2="19" />
    {/* Dental Explorer / Probe */}
    <path d="M19 4L16 7L13 10L6 17" />
    <path d="M19 4C20 4.5 21 6 20 7" />
  </svg>
);

/**
 * Pediatric / Kids Dentistry Protective Tooth Icon
 */
export const KidsDentistryIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    {/* Gentle primary tooth */}
    <path d="M7 6C5 6 4 7.5 4 9.5C4 12 5 14 6.5 17L8 20C8.5 20.8 10 20.8 10.5 20L11.5 16C11.8 15.5 12.2 15.5 12.5 16L13.5 20C14 20.8 15.5 20.8 16 20L17.5 17C19 14 20 12 20 9.5C20 7.5 19 6 17 6C15 6 14.5 7.5 12 7.5C9.5 7.5 9 6 7 6Z" />
    {/* Little healthy sparkle point */}
    <circle cx="9" cy="11" r="1" fill="currentColor" />
    <circle cx="15" cy="11" r="1" fill="currentColor" />
    <path d="M10 13.5C11 14.2 13 14.2 14 13.5" />
  </svg>
);

/**
 * Authentic Medical Shield / Certified Specialist Seal
 */
export const MedicalCertificationSeal: React.FC<IconProps> = ({ className = 'w-6 h-6', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    <path d="M12 2L4 5V11C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 11V5L12 2Z" />
    {/* Clinical Cross in center */}
    <line x1="12" y1="8" x2="12" y2="15" />
    <line x1="8.5" y1="11.5" x2="15.5" y2="11.5" />
  </svg>
);

/**
 * 3D CBCT Volumetric Scan Icon
 */
export const Digital3DScanIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="12" cy="12" r="5" />
    <line x1="3" y1="12" x2="7" y2="12" />
    <line x1="17" y1="12" x2="21" y2="12" />
    <line x1="12" y1="3" x2="12" y2="7" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
