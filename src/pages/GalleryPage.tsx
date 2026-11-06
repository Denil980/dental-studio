import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { GALLERY_ITEMS } from '../data/dentalData';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  DentalImplantIcon, 
  DentMatrixLabIcon, 
  SmileDesignIcon, 
  MedicalCertificationSeal 
} from '../components/MedicalIcons';
import { ChevronRight, Camera, Building2 } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: (treatment?: string) => void;
  selectedCategory?: string;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ 
  onNavigate, 
  onOpenBookingModal,
  selectedCategory
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(
    selectedCategory && selectedCategory !== 'All' ? selectedCategory : 'Patient Gallery'
  );

  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'All') {
      setSelectedFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const galleryCategories = [
    { label: 'Patient Gallery', value: 'Patient Gallery', icon: Camera },
    { label: 'Implant Smile Gallery', value: 'Implant Smile Gallery', icon: DentalImplantIcon },
    { label: 'Clinic Gallery', value: 'Clinic Gallery', icon: Building2 },
    { label: 'DentMatrix Lab Gallery', value: 'DentMatrix Lab Gallery', icon: DentMatrixLabIcon },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <div className="space-y-12 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-sky-50/20 pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-bold">Gallery</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="block">
              <TypewriterHeading
                text="Dental Studio & DentMatrix Gallery"
                className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
              />
            </div>

            <p className="text-lg text-slate-800 max-w-2xl leading-relaxed">
              Explore real patient smile transformations, our advanced clinic operatories in Mumbai, and our proprietary DentMatrix 3D Digital Laboratory where natural smiles are engineered.
            </p>
          </div>

        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {galleryCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedFilter(cat.value)}
                className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0284C7] text-white shadow-md shadow-sky-500/25'
                    : 'bg-white text-slate-700 hover:text-[#0284C7] hover:bg-sky-50 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Cards Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} index={idx} className="h-full">
              <div 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs premium-card p-5 space-y-4 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100 group">
                    <img
                      src={item.image || item.singleImg || item.afterImg}
                      alt={item.title}
                      className="w-full h-full object-cover card-img-zoom group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="space-y-1.5 px-1">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="inline-flex items-center gap-1.5 text-[#0284C7] font-bold">
                    <MedicalCertificationSeal className="w-3.5 h-3.5" />
                    DentMatrix Precision
                  </span>
                  <button
                    onClick={() => onOpenBookingModal(`Inquiry: ${item.title}`)}
                    className="font-bold text-[#0284C7] hover:underline cursor-pointer"
                  >
                    Consult Case →
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-14 bg-gradient-to-r from-sky-50 via-white to-sky-50 rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-sky-100 shadow-sm premium-card">
          <SmileDesignIcon className="w-8 h-8 text-[#0284C7] mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Want to Envision Your Next Smile?</h3>
          <p className="text-sm text-slate-800 max-w-xl mx-auto">
            Book a 3D facially driven smile assessment with Dr. Aslam Inamdar and preview your custom cosmetic restoration before starting.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBookingModal('Smile Simulation & Design')}
              className="px-8 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-md shadow-sky-500/25 transition-all cursor-pointer"
            >
              Book Smile Assessment
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
