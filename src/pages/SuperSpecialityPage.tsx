import React, { useState } from 'react';
import { PageView } from '../types';
import { SUPER_SPECIALITY_ITEMS } from '../data/dentalData';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  DentMatrixLabIcon, 
  Digital3DScanIcon, 
  MedicalCertificationSeal, 
  DentalImplantIcon 
} from '../components/MedicalIcons';
import { 
  ChevronRight, CheckCircle2, ArrowRight, Clock, 
  Plane, CalendarCheck, ShieldCheck 
} from 'lucide-react';

interface SuperSpecialityPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: (serviceName?: string) => void;
  selectedSpecId?: string;
}

export const SuperSpecialityPage: React.FC<SuperSpecialityPageProps> = ({
  onNavigate,
  onOpenBookingModal,
  selectedSpecId
}) => {
  const [activeItem, setActiveItem] = useState<string>(
    selectedSpecId || SUPER_SPECIALITY_ITEMS[0].id
  );

  const current = SUPER_SPECIALITY_ITEMS.find((s) => s.id === activeItem) || SUPER_SPECIALITY_ITEMS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'single-same-day-dentistry':
        return DentMatrixLabIcon;
      case '3d-facially-driven-dentistry':
        return Digital3DScanIcon;
      case 'dentmatrix-lab':
        return DentMatrixLabIcon;
      case 'dental-tourism':
        return Plane;
      default:
        return MedicalCertificationSeal;
    }
  };

  return (
    <div className="space-y-14 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-sky-50/20 pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-bold">Super Speciality</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="block">
                <TypewriterHeading
                  text="Super Speciality Dental Care"
                  className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
                />
              </div>

              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Beyond routine dentistry: our super-specialized infrastructure unites same-day robotics, 3D facially driven algorithms, an in-house digital laboratory, and international dental tourism.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white rounded-3xl p-6 border border-sky-100 shadow-xl space-y-3 text-center premium-card">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center mx-auto">
                  <DentMatrixLabIcon className="w-7 h-7" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">DentMatrix Engineered</h4>
                <p className="text-xs text-slate-500">Every super-specialty case is designed in 3D and verified for life-long biological function.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Super Specialities Switcher Buttons */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-3 rounded-3xl border border-sky-100 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SUPER_SPECIALITY_ITEMS.map((item) => {
              const Icon = getIcon(item.id);
              const isSelected = item.id === activeItem;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveItem(item.id);
                    const el = document.getElementById('super-speciality-detail');
                    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  }}
                  className={`group relative flex items-center gap-3.5 p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0284C7] to-sky-600 text-white shadow-md shadow-sky-500/30 ring-2 ring-[#0284C7]/30 -translate-y-0.5'
                      : 'bg-sky-50/50 hover:bg-white text-slate-800 hover:text-[#0284C7] border border-transparent hover:border-sky-200 hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    isSelected 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white text-[#0284C7] shadow-xs group-hover:bg-[#0284C7] group-hover:text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className={`text-xs font-bold leading-snug line-clamp-1 ${
                      isSelected ? 'text-white' : 'text-slate-900 group-hover:text-[#0284C7]'
                    }`}>
                      {item.title}
                    </p>
                    <p className={`text-[11px] truncate mt-0.5 ${
                      isSelected ? 'text-sky-100' : 'text-slate-500'
                    }`}>
                      {item.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Super Speciality Detailed View */}
      <section id="super-speciality-detail" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div key={current.id} className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-sky-100 shadow-lg space-y-10 animate-fade-in transition-all">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Details */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0284C7] block">
                {current.tagline}
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {current.title}
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                {current.detailedExplanation}
              </p>

              {/* Features List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">What Makes It Exceptional:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-sky-50/60 p-3 rounded-xl border border-sky-100/60">
                      <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenBookingModal(`Super Speciality: ${current.title}`)}
                  className="px-7 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-md shadow-sky-500/20 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book Consultation for {current.title}</span>
                </button>
              </div>
            </div>

            {/* High-Res Clinical/Facility Image */}
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border-2 border-white relative group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold text-sky-300">Dental Studio Super Speciality</span>
                  <p className="text-sm font-semibold">{current.title}</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 text-center italic">
                Advanced surgical and laboratory protocols directed by Dr. Aslam Inamdar
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-sky-600 text-white p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Need a Specialized Opinion?</h3>
            <p className="text-sky-100 text-sm max-w-xl">
              From same-day teeth in hours to full 3D facial reconstructive planning, discuss your goals with our clinical team.
            </p>
          </div>
          <button
            onClick={() => onOpenBookingModal('Super Speciality Evaluation')}
            className="px-8 py-3.5 rounded-full bg-white text-[#0284C7] hover:bg-sky-50 font-bold text-sm shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Schedule Assessment →
          </button>
        </div>
      </section>

    </div>
  );
};
