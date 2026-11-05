import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { WebsiteWavyBackground } from './components/WebsiteWavyBackground';
import { CalendarCheck } from 'lucide-react';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { SuperSpecialityPage } from './pages/SuperSpecialityPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { AwardsPage } from './pages/AwardsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { BlogsPage } from './pages/BlogsPage';
import { CareerPage } from './pages/CareerPage';
import { NewsletterPage } from './pages/NewsletterPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>('single-tooth-implant');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [selectedSuperSpecId, setSelectedSuperSpecId] = useState<string>('single-same-day-dentistry');
  const [selectedGalleryCat, setSelectedGalleryCat] = useState<string>('Patient Gallery');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTreatment, setModalTreatment] = useState('Single Tooth Implant');
  const [modalClinic, setModalClinic] = useState('Kurla Clinic');

  // Handle URL hash if user or browser modifies it
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('treatment/')) {
        const tId = hash.replace('treatment/', '');
        setSelectedTreatmentId(tId);
        setCurrentPage('treatment-detail');
      } else if (hash.startsWith('super/')) {
        const sId = hash.replace('super/', '');
        setSelectedSuperSpecId(sId);
        setCurrentPage('super-speciality');
      } else if (['home', 'about', 'treatments', 'treatment-detail', 'super-speciality', 'gallery', 'testimonials', 'booking', 'contact', 'awards', 'technology', 'blogs', 'career', 'newsletter'].includes(hash)) {
        setCurrentPage(hash as PageView);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTreatment = (treatmentId: string) => {
    setSelectedTreatmentId(treatmentId);
    setCurrentPage('treatment-detail');
    window.location.hash = `treatment/${treatmentId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTreatmentCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage('treatments');
    window.location.hash = `treatments`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSuperSpeciality = (specId: string) => {
    setSelectedSuperSpecId(specId);
    setCurrentPage('super-speciality');
    window.location.hash = `super/${specId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGalleryCategory = (categoryName: string) => {
    setSelectedGalleryCat(categoryName);
    setCurrentPage('gallery');
    window.location.hash = 'gallery';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (treatment = '', clinic = '') => {
    setModalTreatment(treatment);
    setModalClinic(clinic);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-900 font-sans selection:bg-sky-200 selection:text-sky-900 relative">
      
      {/* Global Modern Blue Gradient & Translucent Wave Background (Reference Image Inspired) */}
      <WebsiteWavyBackground />

      {/* Top Mega-Menu Navigation Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onSelectTreatment={handleSelectTreatment}
        onSelectTreatmentCategory={handleSelectTreatmentCategory}
        onSelectSuperSpeciality={handleSelectSuperSpeciality}
        onSelectGalleryCategory={handleSelectGalleryCategory}
        onOpenBookingModal={() => handleOpenModal()}
      />

      {/* Main Screen Content */}
      <main className="flex-1 relative z-10">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectTreatment={handleSelectTreatment}
            onSelectSuperSpeciality={handleSelectSuperSpeciality}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'treatments' && (
          <TreatmentsPage
            selectedCategoryId={selectedCategoryId}
            onNavigate={navigateTo}
            onSelectTreatment={handleSelectTreatment}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'treatment-detail' && (
          <TreatmentDetailPage
            treatmentId={selectedTreatmentId}
            onNavigate={navigateTo}
            onSelectTreatment={handleSelectTreatment}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'super-speciality' && (
          <SuperSpecialityPage
            selectedSpecId={selectedSuperSpecId}
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            selectedCategory={selectedGalleryCat}
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsPage
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'booking' && (
          <BookingPage
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'awards' && (
          <AwardsPage
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'technology' && (
          <TechnologyPage
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'blogs' && (
          <BlogsPage
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'career' && (
          <CareerPage
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'newsletter' && (
          <NewsletterPage
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenModal()}
          />
        )}
      </main>

      {/* Global Footer matching design */}
      <Footer
        onNavigate={navigateTo}
        onSelectTreatment={handleSelectTreatment}
        onSelectSuperSpeciality={handleSelectSuperSpeciality}
        onOpenBookingModal={() => handleOpenModal()}
      />

      {/* Floating Travel "Book Appointment" Button on Right-Side Center */}
      <aside aria-label="Quick Booking" className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
        <button
          onClick={() => handleOpenModal()}
          className="bg-[#0284C7] hover:bg-[#0369A1] text-white py-3.5 px-4 sm:px-5 rounded-l-full shadow-[0_8px_30px_rgba(2,132,199,0.45)] hover:shadow-[0_12px_40px_rgba(2,132,199,0.6)] flex items-center gap-2.5 font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:pr-6 cursor-pointer border-t border-l border-b border-sky-300/40 group active:scale-95"
          title="Click to Book an Appointment"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <CalendarCheck className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading tracking-tight whitespace-nowrap">Book Appointment</span>
        </button>
      </aside>

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTreatment={modalTreatment}
        defaultClinic={modalClinic}
      />
    </div>
  );
}

export default App;
