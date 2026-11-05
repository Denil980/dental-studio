import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  DOCTOR_INFO, 
  CLINIC_STATS, 
  TREATMENT_CATEGORIES, 
  SUPER_SPECIALITY_ITEMS, 
  TESTIMONIALS, 
  GALLERY_ITEMS, 
  CLINIC_LOCATIONS 
} from '../data/dentalData';
import { CountUp } from '../components/CountUp';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { Tooth3DViewer } from '../components/Tooth3DViewer';
import { 
  DentalImplantIcon, 
  DentMatrixLabIcon, 
  SmileDesignIcon, 
  FullMouthRehabIcon, 
  OrthodonticsIcon, 
  GeneralDentistryIcon, 
  KidsDentistryIcon, 
  MedicalCertificationSeal,
  Digital3DScanIcon 
} from '../components/MedicalIcons';
import { 
  ArrowRight, ShieldCheck, MapPin, Stethoscope, 
  Award, HeartPulse, CheckCircle2, ChevronRight, Play, Quote, Star,
  Calendar, Clock, Phone, Mail, Navigation, Eye, Clock as ClockIcon, AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  CustomTreatmentDropdown,
  CustomClinicSelector,
  CustomDatePicker,
  CustomTimeDropdown
} from '../components/BookingFormControls';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onSelectTreatment?: (treatmentId: string) => void;
  onSelectSuperSpeciality?: (specId: string) => void;
  onOpenBookingModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onSelectTreatment, 
  onSelectSuperSpeciality, 
  onOpenBookingModal 
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const featured = TESTIMONIALS[0];

  const [bookingData, setBookingData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: '',
    clinic: '',
    date: '',
    time: '',
    message: ''
  });
  const [bookingErrors, setBookingErrors] = useState<Record<string, boolean>>({});
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!bookingData.fullName.trim()) newErrors.fullName = true;
    if (!bookingData.phone.trim()) newErrors.phone = true;
    if (!bookingData.treatment) newErrors.treatment = true;
    if (!bookingData.clinic) newErrors.clinic = true;
    if (!bookingData.date) newErrors.date = true;
    if (!bookingData.time) newErrors.time = true;

    if (Object.keys(newErrors).length > 0) {
      setBookingErrors(newErrors);
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setBookingSuccess(true);
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'dental-implants':
        return DentalImplantIcon;
      case 'full-mouth-rehabilitation':
        return FullMouthRehabIcon;
      case 'general-dentistry':
        return GeneralDentistryIcon;
      case 'aesthetic-dentistry':
        return SmileDesignIcon;
      case 'orthodontic-treatment':
        return OrthodonticsIcon;
      case 'kids-dentistry':
        return KidsDentistryIcon;
      default:
        return MedicalCertificationSeal;
    }
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Section - Clean, Premium & Elegant */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-sky-50/40 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-sky-100/50">
        {/* Soft atmospheric ambient light glows */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/30 to-blue-100/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-sky-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Text typing animation on H1 main heading */}
              <div className="block">
                <TypewriterHeading
                  segments={[
                    { text: "Advanced Dental Care\n" },
                    { text: "for a Healthier,\n", highlight: true },
                    { text: "Brighter Smile" }
                  ]}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
                />
              </div>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Modern, comprehensive and personalized dental care powered by our in-house <strong>DentMatrix 3D Digital Lab</strong>. From same-day implants to facially driven smile makeovers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBookingModal}
                  className="px-7 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>

                <button
                  onClick={() => onNavigate('treatments')}
                  className="px-7 py-3.5 rounded-full bg-white hover:bg-sky-50 text-slate-800 border border-slate-300 font-bold text-sm transition-all hover:border-[#0284C7] hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-2 group"
                >
                  <span>Our 6 Main Treatments</span>
                  <ArrowRight className="w-4 h-4 text-[#0284C7] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: 3D Anatomical Tooth Model with Scroll-Driven Rotation */}
            <div className="lg:col-span-5 relative flex justify-center">
              <Tooth3DViewer className="max-w-md w-full" />
            </div>

          </div>

          {/* Stats Bar with Number Counting Animation on Scroll */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CLINIC_STATS.map((stat, idx) => {
              const icons = [Award, SmileDesignIcon, DentMatrixLabIcon, MapPin];
              const StatIcon = icons[idx];
              return (
                <ScrollReveal key={stat.label} index={idx}>
                  <div 
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs premium-card text-center flex flex-col items-center justify-center group h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#0284C7] group-hover:text-white transition-all">
                      <StatIcon className="w-5 h-5" />
                    </div>
                    <CountUp 
                      value={stat.value} 
                      className="text-2xl sm:text-3xl font-extrabold text-[#0284C7] tracking-tight font-heading"
                    />
                    <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-heading">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5">{stat.subtitle}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Doctor Highlight Section ("Meet the Expert") */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-50/70 via-white to-sky-50/40 rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-100 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Doctor Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={DOCTOR_INFO.image}
                  alt={DOCTOR_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-xs text-white p-2.5 rounded-xl text-center">
                  <p className="text-xs font-bold">{DOCTOR_INFO.name}</p>
                  <p className="text-[10px] text-sky-300 font-medium">{DOCTOR_INFO.title}</p>
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0284C7] block">
                Meet the Expert
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {DOCTOR_INFO.name}
              </h2>

              <p className="text-base font-bold text-[#0284C7]">
                {DOCTOR_INFO.title}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {DOCTOR_INFO.bio}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-sky-500/20 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenBookingModal}
                  className="px-6 py-3 rounded-full bg-white hover:bg-sky-50 text-slate-800 border border-slate-300 font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
                >
                  Consult Dr. Aslam
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6 Key Treatments Section (Matching Image 1) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-[#0284C7] block">
            Comprehensive Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Key Treatments
          </h2>
          <p className="text-sm text-slate-600">
            Click any treatment category below to explore all procedures, diagnostic protocols, and patient transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENT_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.id);
            return (
              <ScrollReveal key={cat.id} index={idx}>
                <div
                  onClick={() => {
                    if (onSelectTreatment) {
                      onSelectTreatment(cat.items[0].id);
                    } else {
                      onNavigate('treatments');
                    }
                  }}
                  className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#0284C7] shadow-xs premium-card cursor-pointer group flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-full">
                        {cat.items.length} {cat.items.length === 1 ? 'Procedure' : 'Procedures'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors mb-2 font-heading">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4 font-body">
                      {cat.shortDesc}
                    </p>

                    {/* Sub-item pills */}
                    <div className="space-y-1.5 pt-1">
                      {cat.items.map((sub) => (
                        <div key={sub.id} className="text-xs text-slate-700 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                          <span className="font-medium hover:text-[#0284C7]">{sub.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284C7]">
                    <span>Explore All {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Super Speciality Section (Matching Clean Theme) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-50/80 via-white to-sky-50/40 rounded-3xl p-8 sm:p-12 border border-sky-100 shadow-sm relative overflow-hidden space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10 border-b border-sky-100 pb-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#0284C7] block mb-2">
                Super Speciality Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Dental Studio Super Speciality
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mt-1 font-body">
                Equipped with chairside robotics, DentMatrix 3D planning, and dedicated international dental concierge.
              </p>
            </div>

            <button
              onClick={() => onNavigate('super-speciality')}
              className="px-6 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold transition-all shadow-md shadow-sky-500/20 w-fit cursor-pointer flex items-center gap-2"
            >
              <span>Explore Super Speciality</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {SUPER_SPECIALITY_ITEMS.map((item, idx) => (
              <ScrollReveal key={item.id} index={idx} className="h-full">
                <div
                  onClick={() => {
                    if (onSelectSuperSpeciality) onSelectSuperSpeciality(item.id);
                    onNavigate('super-speciality');
                  }}
                  className="bg-white hover:bg-sky-50/40 p-6 rounded-2xl border border-slate-200 hover:border-[#0284C7] transition-all cursor-pointer flex flex-col justify-between group premium-card shadow-xs h-full"
                >
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors mb-2 font-heading">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-body">
                      {item.overview}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-[#0284C7] flex items-center justify-between">
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0284C7] block">
              Patient Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hear from Our Happy Patients
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Discover how Dr. Aslam Inamdar and Dental Studio are transforming lives with healthy, natural and confident smiles.
            </p>
          </div>

          <button
            onClick={() => onNavigate('testimonials')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors group cursor-pointer"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Video Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-sky-100 group">
                <img
                  src={featured.videoThumb || featured.avatar}
                  alt={featured.patientName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="w-16 h-16 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 cursor-pointer"
                    aria-label="Play patient testimonial"
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {featured.duration}
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-sky-300">
                <Quote className="w-12 h-12 fill-current opacity-80" />
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                "{featured.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <img
                  src={featured.avatar}
                  alt={featured.patientName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0284C7]"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900">{featured.patientName}</h4>
                  <p className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">{featured.treatment}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Badges with Number Counting Animation on Scroll */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "10,000+", label: "Happy Patients", icon: SmileDesignIcon },
            { value: "4.9/5", label: "Patient Rating", icon: Star },
            { value: "1000+", label: "Verified Reviews", icon: CheckCircle2 },
            { value: "20+", label: "Years of Trust", icon: MedicalCertificationSeal },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} index={idx}>
                <div
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-center flex flex-col items-center justify-center group hover:border-[#0284C7] premium-card h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#0284C7] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CountUp value={item.value} className="text-3xl font-extrabold text-[#0284C7] tracking-tight font-heading" />
                  <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-heading">{item.label}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Smile Gallery Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0284C7] block">
              Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Smile Gallery
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Real treatments. Real transformations. Explore how Dr. Aslam Inamdar and DentMatrix revitalize smiles with precision digital care.
            </p>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors group cursor-pointer"
          >
            <span>View Full Gallery (Patient, Implant & Lab)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Gallery Image Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.slice(0, 4).map((item, idx) => (
            <ScrollReveal key={item.id} index={idx} className="h-full">
              <div
                onClick={() => onNavigate('gallery')}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs premium-card flex flex-col justify-between cursor-pointer group h-full"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover card-img-zoom group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#0284C7] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      {item.tag}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-[#0284C7]">
                  <span>View in Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-50/70 via-white to-sky-50/40 rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-100 shadow-sm space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0284C7] block">
              Visit or Book Online
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Schedule Your Consultation
            </h2>
            <p className="text-sm text-slate-600">
              Select your preferred clinic location in Mumbai and book your appointment with Dr. Aslam Inamdar and our clinical team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Clinic Locations & Quick Helpline */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Our Clinics in Mumbai</h3>
              
              <div className="space-y-4">
                {CLINIC_LOCATIONS.map((clinic, cIdx) => (
                  <ScrollReveal key={clinic.id} index={cIdx}>
                    <div 
                      className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 hover:border-[#0284C7] premium-card transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-slate-900">{clinic.name}</h4>
                        <span className="text-[11px] font-bold text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full">
                          Open Mon-Sat
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                        <span>{clinic.address}</span>
                      </p>

                      <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
                        <a 
                          href={`tel:${clinic.phone}`} 
                          className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#0284C7] transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                          <span>{clinic.phone}</span>
                        </a>

                        <button
                          onClick={() => {
                            setBookingData(prev => ({ ...prev, clinic: clinic.name }));
                            const formEl = document.getElementById('home-booking-form');
                            formEl?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-xs font-bold text-[#0284C7] hover:underline cursor-pointer"
                        >
                          Select Clinic →
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Direct helpline card */}
              <div className="bg-gradient-to-br from-[#0284C7] to-sky-800 text-white rounded-2xl p-6 shadow-md space-y-3 premium-card">
                <div className="flex items-center gap-2 text-sky-100 text-xs font-bold uppercase tracking-wider">
                  <MedicalCertificationSeal className="w-4 h-4 text-sky-100" />
                  <span>Immediate Assistance</span>
                </div>
                <h4 className="text-lg font-bold">Have an urgent dental inquiry?</h4>
                <p className="text-xs text-sky-100 leading-relaxed font-body">
                  Call our clinical support desk directly to get answers on treatments, scheduling, or emergency pain relief.
                </p>
                <div className="pt-1">
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-sky-50 text-[#0284C7] text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call +91 98765 43210</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Inline Booking Form */}
            <div id="home-booking-form" className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Book an Appointment Online</h3>
              <p className="text-xs text-slate-500 mb-6">Fill out the form below and we will confirm your preferred time slot promptly.</p>

              {bookingSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Appointment Requested!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900">{bookingData.fullName}</span>! We have received your consultation request for <span className="text-[#0284C7] font-bold">{bookingData.treatment}</span> at our <span className="font-semibold text-slate-900">{bookingData.clinic}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setBookingSuccess(false);
                      setBookingData({
                        fullName: '',
                        phone: '',
                        email: '',
                        treatment: '',
                        clinic: '',
                        date: '',
                        time: '',
                        message: ''
                      });
                      setBookingErrors({});
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#0284C7] text-white text-xs font-bold hover:bg-[#0369A1] transition-colors shadow-sm cursor-pointer"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  {/* Validation Notice if any field missing */}
                  {Object.keys(bookingErrors).length > 0 && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Please complete all fields marked with * to confirm your consultation.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Aditi Sharma"
                        value={bookingData.fullName}
                        onChange={(e) => {
                          setBookingData({ ...bookingData, fullName: e.target.value });
                          if (bookingErrors.fullName) setBookingErrors({ ...bookingErrors, fullName: false });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0284C7] ${
                          bookingErrors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={bookingData.phone}
                        onChange={(e) => {
                          setBookingData({ ...bookingData, phone: e.target.value });
                          if (bookingErrors.phone) setBookingErrors({ ...bookingErrors, phone: false });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0284C7] ${
                          bookingErrors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="aditi@example.com"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Treatment Required <span className="text-rose-500">*</span>
                      </label>
                      <CustomTreatmentDropdown
                        value={bookingData.treatment}
                        onChange={(val) => {
                          setBookingData({ ...bookingData, treatment: val });
                          if (bookingErrors.treatment) setBookingErrors({ ...bookingErrors, treatment: false });
                        }}
                        error={bookingErrors.treatment}
                      />
                    </div>
                  </div>

                  {/* Clinic Location Selector - No auto-selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-body">
                      Preferred Clinic <span className="text-rose-500">*</span>
                    </label>
                    <CustomClinicSelector
                      value={bookingData.clinic}
                      onChange={(clinicId) => {
                        setBookingData({ ...bookingData, clinic: clinicId });
                        if (bookingErrors.clinic) setBookingErrors({ ...bookingErrors, clinic: false });
                      }}
                      error={bookingErrors.clinic}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Preferred Date <span className="text-rose-500">*</span>
                      </label>
                      <CustomDatePicker
                        value={bookingData.date}
                        onChange={(val) => {
                          setBookingData({ ...bookingData, date: val });
                          if (bookingErrors.date) setBookingErrors({ ...bookingErrors, date: false });
                        }}
                        error={bookingErrors.date}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Preferred Time Slot <span className="text-rose-500">*</span>
                      </label>
                      <CustomTimeDropdown
                        value={bookingData.time}
                        onChange={(val) => {
                          setBookingData({ ...bookingData, time: val });
                          if (bookingErrors.time) setBookingErrors({ ...bookingErrors, time: false });
                        }}
                        error={bookingErrors.time}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share any specific dental preferences or dental history..."
                      value={bookingData.message}
                      onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Confirm Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
