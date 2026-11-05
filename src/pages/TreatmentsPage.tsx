import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { TREATMENT_CATEGORIES, ALL_SUB_TREATMENTS } from '../data/dentalData';
import { TypewriterHeading } from '../components/TypewriterHeading';
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
  ArrowRight, ChevronRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';

interface TreatmentsPageProps {
  onNavigate: (page: PageView) => void;
  onSelectTreatment: (treatmentId: string) => void;
  onOpenBookingModal: (treatmentName?: string) => void;
  selectedCategoryId?: string;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ 
  onNavigate, 
  onSelectTreatment, 
  onOpenBookingModal,
  selectedCategoryId
}) => {
  const [selectedCat, setSelectedCat] = useState<string>(selectedCategoryId || 'all');

  useEffect(() => {
    if (selectedCategoryId) {
      setSelectedCat(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
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

  const displayedCategories = selectedCat === 'all'
    ? TREATMENT_CATEGORIES
    : TREATMENT_CATEGORIES.filter((c) => c.id === selectedCat);

  return (
    <div className="space-y-14 pb-20">
      
      {/* Breadcrumb & Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-sky-50/20 pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-bold">Treatments</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="block">
                <TypewriterHeading
                  text="Our Dental Treatments"
                  className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
                />
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Comprehensive, evidence-based dental care across 6 core disciplines. Explore every treatment in detail to understand procedure steps, biological benefits, and outcomes.
              </p>
            </div>

            {/* Graphic Badge */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white rounded-3xl p-6 border border-sky-100 shadow-xl text-center space-y-2 premium-card">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center mx-auto">
                  <DentMatrixLabIcon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">DentMatrix Synergy</h3>
                <p className="text-xs text-slate-500">Every treatment is digitally planned in 3D for pain-free precision.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {TREATMENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(selectedCat === cat.id ? 'all' : cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCat === cat.id
                  ? 'bg-[#0284C7] text-white shadow-md shadow-sky-500/25'
                  : 'bg-white text-slate-600 hover:text-[#0284C7] hover:bg-sky-50 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* 6 Categories Grouped with their Sub-Treatments */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {displayedCategories.map((category) => {
          const CatIcon = getCategoryIcon(category.id);
          return (
            <div key={category.id} className="space-y-6">
              
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-sky-100 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {category.name}
                    </h2>
                    <p className="text-xs text-slate-500">{category.shortDesc}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full w-fit">
                  {category.items.length} {category.items.length === 1 ? 'Specialty' : 'Sub-Treatments'}
                </span>
              </div>

              {/* Sub-Treatments Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((sub, sIdx) => (
                  <ScrollReveal key={sub.id} index={sIdx} className="h-full">
                    <div
                      onClick={() => onSelectTreatment(sub.id)}
                      className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#0284C7] shadow-xs premium-card flex flex-col justify-between cursor-pointer h-full"
                    >
                      <div>
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-sky-50">
                          <img
                            src={sub.image}
                            alt={sub.name}
                            className="w-full h-full object-cover card-img-zoom group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#0284C7] shadow-xs">
                            {category.name}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-2.5">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                            {sub.name}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                            {sub.shortDesc}
                          </p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#0284C7] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                          <span>Explore Treatment Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

            </div>
          );
        })}
      </section>

      {/* Bottom Consultation Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-sky-600 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Not Sure Which Treatment Is Right for You?
            </h3>
            <p className="text-sky-100 text-sm max-w-xl">
              Book a comprehensive 3D evaluation with Dr. Aslam Inamdar. We will analyze your bite, bone density, and smile aesthetics to create a customized treatment roadmap.
            </p>
          </div>
          <button
            onClick={() => onOpenBookingModal('Comprehensive Evaluation')}
            className="px-8 py-3.5 rounded-full bg-white text-[#0284C7] hover:bg-sky-50 font-bold text-sm shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Book Free Assessment →
          </button>
        </div>
      </section>

    </div>
  );
};
