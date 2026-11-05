export type PageView = 
  | 'home' 
  | 'about' 
  | 'treatments' 
  | 'treatment-detail' 
  | 'super-speciality'
  | 'gallery' 
  | 'testimonials' 
  | 'booking' 
  | 'contact'
  | 'awards'
  | 'technology'
  | 'blogs'
  | 'career'
  | 'newsletter';

export interface SubTreatmentItem {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  shortDesc: string;
  overview: string;
  detailedExplanation: string;
  image: string;
  clinicalImage?: string;
  highlights?: string[];
  benefits?: { title: string; desc: string; icon: string }[];
  procedureSteps?: { step: number; title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
}

export interface TreatmentCategory {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  iconName: string;
  items: SubTreatmentItem[];
}

export interface SuperSpecialityItem {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  overview: string;
  detailedExplanation: string;
  image: string;
  features: string[];
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  category: 'Patient Gallery' | 'Implant Smile Gallery' | 'Clinic Gallery' | 'DentMatrix Lab Gallery';
  title: string;
  description: string;
  image: string;
  beforeImg?: string;
  afterImg?: string;
  singleImg?: string;
  tag: string;
}

export interface BeforeAfterItem {
  id: string;
  category: 'Smile Makeover' | 'Dental Implants' | 'Cosmetic Dentistry' | 'Orthodontics' | 'Clinic';
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  treatment: string;
  quote: string;
  rating: number;
  avatar: string;
  videoThumb?: string;
  duration?: string;
  location?: string;
  date?: string;
  clinic?: string;
  verified?: boolean;
}

export interface ClinicLocation {
  id: string;
  name: string;
  area: string;
  phone: string;
  hours: string;
  address: string;
  image: string;
  coords: { x: number; y: number };
}
