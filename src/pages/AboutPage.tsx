import React from 'react';
import { PageView } from '../types';
import { DOCTOR_INFO, CLINIC_STATS } from '../data/dentalData';
import { CountUp } from '../components/CountUp';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { DentMatrixLabIcon, MedicalCertificationSeal, SmileDesignIcon, DentalImplantIcon } from '../components/MedicalIcons';
import { Building2, Users, HeartHandshake, Award, ArrowRight, ChevronRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div className="space-y-14 pb-20">
      
      {/* Breadcrumb & Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/80 to-white pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-bold">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <TypewriterHeading
                text="About Dr. Inamdar's Dental Studio"
                className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
              />
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                A center of excellence in modern, aesthetic and restorative dentistry since 2003.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                Founded with a mission to eliminate dental anxiety and provide cutting-edge care, Dental Studio combines soothing contemporary ambiance with our proprietary in-house <strong>DentMatrix 3-D Digital Lab</strong>.
              </p>
            </div>

            {/* Reception Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-video relative">
                <img
                  src={DOCTOR_INFO.receptionImage}
                  alt="Dental Studio Clinic Reception"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-center shadow-md">
                    <p className="text-xs font-bold text-slate-900">Dental Studio Reception</p>
                    <p className="text-[10px] text-[#0284C7] font-bold uppercase tracking-wider">World Class Clinic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Dr. Aslam Inamdar */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Doctor Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-4 border-sky-50">
                <img
                  src={DOCTOR_INFO.image}
                  alt={DOCTOR_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-[#0284C7] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  Chief Clinical Director
                </div>
              </div>
            </div>

            {/* Doctor Story */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  About Dr. Aslam Inamdar
                </h2>
                <p className="text-base font-bold text-[#0284C7]">
                  {DOCTOR_INFO.title}
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With over two decades of clinical experience, Dr. Aslam Inamdar is known for his expertise in cosmetic dentistry, dental implants and full mouth rehabilitation.
              </p>

              <p className="text-slate-500 text-sm leading-relaxed">
                He has undergone advanced surgical training across international dental academies and actively incorporates guided digital workflows, 3D cone-beam computed tomography (CBCT), and painless dental protocols to achieve natural-looking, lifelong smiles.
              </p>

              {/* Badges with Number Counting Animation */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 premium-card">
                  <CountUp value="20+" className="text-2xl font-black text-[#0284C7] block" />
                  <span className="text-xs font-bold text-slate-800">Years Experience</span>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 premium-card">
                  <CountUp value="10,000+" className="text-2xl font-black text-[#0284C7] block" />
                  <span className="text-xs font-bold text-slate-800">Patients Treated</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenBookingModal}
                  className="px-7 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-sky-500/25 flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <span>Book Consultation with Dr. Aslam</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Clinic */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-50/50 via-white to-sky-50/30 rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-sm space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Clinic & DentMatrix Setup</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dental Studio is a state-of-the-art dental center committed to delivering world-class dental care with a personalized, patient-first approach.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[21/9] max-h-80 shadow-md border-2 border-white group">
            <img
              src={DOCTOR_INFO.chairImage}
              alt="Dental Studio Operatory"
              className="w-full h-full object-cover card-img-zoom group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* 4 Pillars with Premium Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Modern Infrastructure", icon: Building2, desc: "Acoustically insulated suites and ergonomic patient lounges." },
              { title: "DentMatrix Technology", icon: DentMatrixLabIcon, desc: "Digital intraoral scanners, 5-axis milling & 3D surgical guides." },
              { title: "Expert Clinical Team", icon: Users, desc: "Board-certified specialists across all dental disciplines." },
              { title: "Patient-Centric Care", icon: HeartHandshake, desc: "Transparent treatment plans, gentle touch, and zero rush." },
            ].map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} index={pIdx} className="h-full">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center flex flex-col items-center premium-card h-full">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{pillar.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Our Experience & Achievements (Laurel Badges) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Experience & Achievements
          </h2>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
            Recognized for clinical precision and patient trust since 2003
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "20+", label: "Years of Practice", sub: "Since 2003", icon: Award },
            { value: "10,000+", label: "Happy Patients", sub: "Global smiles", icon: SmileDesignIcon },
            { value: "Expert in", label: "Dental Implants", sub: "Immediate & Guided", icon: DentalImplantIcon },
            { value: "Specialist in", label: "Smile Makeovers", sub: "Veneers & Aesthetics", icon: MedicalCertificationSeal },
          ].map((item, idx) => {
            const AchIcon = item.icon;
            return (
              <ScrollReveal key={idx} index={idx} className="h-full">
                <div 
                  className="bg-white rounded-2xl p-6 border-2 border-sky-100 shadow-xs premium-card text-center flex flex-col items-center justify-center h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center mb-2">
                    <AchIcon className="w-5 h-5" />
                  </div>
                  {item.value.includes('+') ? (
                    <CountUp value={item.value} className="text-2xl font-black text-[#0284C7]" />
                  ) : (
                    <span className="text-2xl font-black text-[#0284C7]">{item.value}</span>
                  )}
                  <span className="text-sm font-bold text-slate-800 mt-0.5">{item.label}</span>
                  <span className="text-xs text-slate-400 mt-1">{item.sub}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

    </div>
  );
};
