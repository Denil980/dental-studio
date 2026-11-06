import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { ALL_SUB_TREATMENTS, TREATMENT_CATEGORIES, BEFORE_AFTER_CASES } from '../data/dentalData';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { CountUp } from '../components/CountUp';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  DentalImplantIcon, 
  DentMatrixLabIcon, 
  SmileDesignIcon, 
  FullMouthRehabIcon, 
  OrthodonticsIcon, 
  GeneralDentistryIcon, 
  KidsDentistryIcon, 
  MedicalCertificationSeal 
} from '../components/MedicalIcons';
import { 
  ChevronRight, Shield, HeartPulse, Utensils, 
  CheckCircle2, HelpCircle, ArrowRight, CalendarCheck, MapPin, 
  ShieldCheck, Stethoscope 
} from 'lucide-react';

interface TreatmentDetailPageProps {
  treatmentId?: string;
  onNavigate: (page: PageView) => void;
  onSelectTreatment: (treatmentId: string) => void;
  onOpenBookingModal: (treatmentName?: string) => void;
}

export const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({
  treatmentId = 'single-tooth-implant',
  onNavigate,
  onSelectTreatment,
  onOpenBookingModal
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'procedure' | 'benefits' | 'faqs'>('overview');

  // Find the selected sub-treatment, fallback to first item
  const currentTreatment = ALL_SUB_TREATMENTS.find((t) => t.id === treatmentId) || 
    ALL_SUB_TREATMENTS.find((t) => t.categoryId === treatmentId) ||
    ALL_SUB_TREATMENTS[0];

  useEffect(() => {
    setActiveTab('overview');
  }, [treatmentId]);

  const benefitIcons = [MedicalCertificationSeal, Shield, HeartPulse, Utensils, SmileDesignIcon];

  // Sibling treatments in the same category
  const siblingTreatments = ALL_SUB_TREATMENTS.filter(
    (t) => t.categoryId === currentTreatment.categoryId
  );

  return (
    <div className="space-y-12 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-sky-50/20 pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('treatments')} className="hover:text-[#0284C7] cursor-pointer">Treatments</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-700 font-medium">{currentTreatment.categoryName}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-bold">{currentTreatment.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Title & Actions */}
            <div className="lg:col-span-7 space-y-4">
              <div className="block">
                <TypewriterHeading
                  key={currentTreatment.id}
                  text={currentTreatment.name}
                  className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
                />
              </div>

              <p className="text-lg text-slate-800 max-w-xl leading-relaxed">
                {currentTreatment.shortDesc}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBookingModal(currentTreatment.name)}
                  className="px-7 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all cursor-pointer flex items-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>

                <button
                  onClick={() => onOpenBookingModal(`${currentTreatment.name} - Consultation`)}
                  className="px-7 py-3 rounded-full bg-white hover:bg-sky-50 text-slate-800 border border-sky-200 font-bold text-sm transition-all cursor-pointer"
                >
                  Consult Dr. Aslam
                </button>
              </div>
            </div>

            {/* Right Graphic / Clinical Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={currentTreatment.clinicalImage || currentTreatment.image}
                  alt={currentTreatment.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-sm font-bold">{currentTreatment.name}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Sibling Sub-Treatments Bar */}
      {siblingTreatments.length > 1 && (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-3.5 rounded-2xl border border-sky-100 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-slate-400 px-3 uppercase tracking-wider shrink-0">
              Related {currentTreatment.categoryName}:
            </span>
            {siblingTreatments.map((t) => (
              <button
                key={t.id}
                onClick={() => onSelectTreatment(t.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  t.id === currentTreatment.id
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-[#0284C7]'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Detailed Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Detailed Explanation Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xs space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                About {currentTreatment.name}
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {currentTreatment.detailedExplanation}
              </p>

              {currentTreatment.highlights && (
                <div className="space-y-3 pt-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Key Clinical Highlights:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentTreatment.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-sky-50/50 p-2.5 rounded-xl border border-sky-100/60">
                        <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* In-Clinic / Lab Photo */}
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-sky-50 border-2 border-white shadow-md">
                <img
                  src={currentTreatment.image}
                  alt={currentTreatment.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] text-slate-600 text-center italic">
                Treated with DentMatrix digital laboratory precision & biocompatible materials
              </p>
            </div>

          </div>
        </section>

        {/* Benefits Section */}
        {currentTreatment.benefits && currentTreatment.benefits.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Key Benefits of {currentTreatment.name}
              </h2>
              <p className="text-xs text-slate-700">
                Why patients choose Dental Studio for this procedure
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {currentTreatment.benefits.map((benefit, idx) => {
                const Icon = benefitIcons[idx] || MedicalCertificationSeal;
                return (
                  <ScrollReveal key={benefit.title} index={idx} className="h-full">
                    <div
                      className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#0284C7] shadow-xs text-center flex flex-col items-center justify-center transition-all group premium-card h-full"
                    >
                      <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-[#0284C7] text-[#0284C7] group-hover:text-white flex items-center justify-center transition-colors mb-3">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-[11px] text-slate-700 leading-tight">
                        {benefit.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        )}

        {/* Procedure Steps */}
        {currentTreatment.procedureSteps && currentTreatment.procedureSteps.length > 0 && (
          <section className="bg-gradient-to-br from-sky-50/60 to-white rounded-3xl p-6 sm:p-10 border border-sky-100 space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Step-by-Step Procedure
              </h2>
              <p className="text-xs text-slate-700">
                What to expect during your {currentTreatment.name} appointment
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentTreatment.procedureSteps.map((step) => (
                <div key={step.step} className="bg-white p-5 rounded-2xl border border-sky-100 shadow-xs space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#0284C7] text-white font-black text-xs flex items-center justify-center">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                  <p className="text-xs text-slate-800 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        {currentTreatment.faqs && currentTreatment.faqs.length > 0 && (
          <section className="bg-sky-50/50 rounded-3xl p-6 sm:p-10 border border-sky-100 space-y-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0284C7]" />
              <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentTreatment.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-sky-100 shadow-xs space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">{faq.question}</h4>
                  <p className="text-xs text-slate-800 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Booking CTA */}
        <section className="rounded-3xl bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-sky-600 text-white p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold">Ready for your {currentTreatment.name}?</h3>
            <p className="text-sky-100 text-xs sm:text-sm max-w-lg">
              Book a consultation with Dr. Aslam Inamdar at our Kurla or South Mumbai clinic.
            </p>
          </div>
          <button
            onClick={() => onOpenBookingModal(currentTreatment.name)}
            className="px-8 py-3.5 rounded-full bg-white text-[#0284C7] hover:bg-sky-50 font-bold text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Schedule Consultation →
          </button>
        </section>

      </div>
    </div>
  );
};
