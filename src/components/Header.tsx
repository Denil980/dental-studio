import React, { useState } from 'react';
import { DentalLogo } from './DentalLogo';
import { PageView } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onSelectTreatment?: (treatmentId: string) => void;
  onSelectTreatmentCategory?: (categoryId: string) => void;
  onSelectSuperSpeciality?: (specId: string) => void;
  onSelectGalleryCategory?: (catName: string) => void;
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBookingModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_3px_rgba(15,23,42,0.03)] select-none transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Dual Brand Logo */}
        <div 
          onClick={() => handleNav('home')} 
          className="cursor-pointer transition-transform hover:opacity-95"
        >
          <DentalLogo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          
          {/* Home */}
          <button
            onClick={() => handleNav('home')}
            className={`px-4 py-2 rounded-full text-[14px] transition-all duration-200 cursor-pointer ${
              currentPage === 'home' 
                ? 'bg-slate-900 text-white shadow-xs font-medium' 
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 font-normal'
            }`}
          >
            Home
          </button>

          {/* About */}
          <button
            onClick={() => handleNav('about')}
            className={`px-4 py-2 rounded-full text-[14px] transition-all duration-200 cursor-pointer ${
              currentPage === 'about' 
                ? 'bg-slate-900 text-white shadow-xs font-medium' 
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 font-normal'
            }`}
          >
            About
          </button>

          {/* Treatments */}
          <button
            onClick={() => handleNav('treatments')}
            className={`px-4 py-2 rounded-full text-[14px] transition-all duration-200 cursor-pointer ${
              currentPage === 'treatments' || currentPage === 'treatment-detail' 
                ? 'bg-slate-900 text-white shadow-xs font-medium' 
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 font-normal'
            }`}
          >
            Treatments
          </button>

          {/* Super Speciality */}
          <button
            onClick={() => handleNav('super-speciality')}
            className={`px-4 py-2 rounded-full text-[14px] transition-all duration-200 cursor-pointer ${
              currentPage === 'super-speciality' 
                ? 'bg-slate-900 text-white shadow-xs font-medium' 
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 font-normal'
            }`}
          >
            Super Speciality
          </button>

          {/* Gallery */}
          <button
            onClick={() => handleNav('gallery')}
            className={`px-4 py-2 rounded-full text-[14px] transition-all duration-200 cursor-pointer ${
              currentPage === 'gallery' 
                ? 'bg-slate-900 text-white shadow-xs font-medium' 
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 font-normal'
            }`}
          >
            Gallery
          </button>

          {/* Patient Stories */}
          <button
            onClick={() => handleNav('testimonials')}
            className={`px-4 py-2 rounded-full text-[14px] transition-all duration-200 cursor-pointer ${
              currentPage === 'testimonials' 
                ? 'bg-slate-900 text-white shadow-xs font-medium' 
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 font-normal'
            }`}
          >
            Patient Stories
          </button>

          {/* Contact */}
          <button
            onClick={() => handleNav('contact')}
            className={`px-4 py-2 rounded-full text-[14px] transition-all duration-200 cursor-pointer ${
              currentPage === 'contact' 
                ? 'bg-slate-900 text-white shadow-xs font-medium' 
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 font-normal'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center">
          {/* Blue outlined circular hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full border border-[#0284C7] text-[#0284C7] hover:bg-sky-50 flex items-center justify-center transition-colors cursor-pointer lg:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-sky-100 px-6 py-6 shadow-2xl max-h-[85vh] overflow-y-auto space-y-3">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNav('home')}
              className={`text-left font-bold text-base py-2.5 border-b border-slate-100 ${
                currentPage === 'home' ? 'text-[#0284C7]' : 'text-slate-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`text-left font-bold text-base py-2.5 border-b border-slate-100 ${
                currentPage === 'about' ? 'text-[#0284C7]' : 'text-slate-800'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNav('treatments')}
              className={`text-left font-bold text-base py-2.5 border-b border-slate-100 ${
                currentPage === 'treatments' || currentPage === 'treatment-detail' ? 'text-[#0284C7]' : 'text-slate-800'
              }`}
            >
              Treatments
            </button>
            <button
              onClick={() => handleNav('super-speciality')}
              className={`text-left font-bold text-base py-2.5 border-b border-slate-100 ${
                currentPage === 'super-speciality' ? 'text-[#0284C7]' : 'text-slate-800'
              }`}
            >
              Super Speciality
            </button>
            <button
              onClick={() => handleNav('gallery')}
              className={`text-left font-bold text-base py-2.5 border-b border-slate-100 ${
                currentPage === 'gallery' ? 'text-[#0284C7]' : 'text-slate-800'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleNav('testimonials')}
              className={`text-left font-bold text-base py-2.5 border-b border-slate-100 ${
                currentPage === 'testimonials' ? 'text-[#0284C7]' : 'text-slate-800'
              }`}
            >
              Patient Stories
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`text-left font-bold text-base py-2.5 border-b border-slate-100 ${
                currentPage === 'contact' ? 'text-[#0284C7]' : 'text-slate-800'
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
