import React, { useState } from 'react';
import { PageView } from '../types';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  Trophy, 
  ChevronRight, 
  CheckCircle2, 
  X, 
  ZoomIn, 
  Sparkles, 
  Award,
  Calendar,
  Medal
} from 'lucide-react';

interface AwardsPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: () => void;
}

interface AwardItem {
  id: string;
  title: string;
  event: string;
  year: string;
  image: string;
  category: string;
  recipient: string;
  badge: string;
  details?: string;
}

const CLINICAL_AWARDS: AwardItem[] = [
  {
    id: 'feda-2025-clinical-team',
    title: 'Clinical Team of The Year',
    event: 'FEDA Awards, 2025',
    year: '2025',
    image: '/images/awards/award_1.png',
    category: 'Team Excellence',
    recipient: 'Dr. Aslam Inamdar & Dental Studio Team',
    badge: 'Highly Commended',
    details: 'Famdent Excellence in Dentistry Awards (FEDA) 2025 honoring the collective surgical precision, sterile protocols, and patient outcomes of our clinical practice.'
  },
  {
    id: 'dea-2024-aesthetician',
    title: 'Dental Aesthetician of The Year',
    event: 'Dental Excellence Awards 2024',
    year: '2024',
    image: '/images/awards/award_2.png',
    category: 'Aesthetic Dentistry',
    recipient: 'Dr. Aslam Inamdar',
    badge: 'Winner',
    details: 'Conferred for master-level ceramic veneer craftsmanship, micro-invasive smile design, and 3D facially driven aesthetic rehabilitation.'
  },
  {
    id: 'feda-2024-innovative',
    title: 'Innovative Dentist of The Year',
    event: 'FEDA Awards, 2024',
    year: '2024',
    image: '/images/awards/award_3.png',
    category: 'Innovation & Tech',
    recipient: 'Dr. Aslam Inamdar',
    badge: 'Winner',
    details: 'Recognizing groundbreaking adoption of digital 3D guided surgery, same-day chairside milling, and zero-pain protocols.'
  },
  {
    id: 'feda-2019-superstar',
    title: 'SUPERSTAR Above & Beyond Award',
    event: 'FEDA Awards, 2019',
    year: '2019',
    image: '/images/awards/award_4.png',
    category: 'Clinical Leadership',
    recipient: 'Dr. Aslam Inamdar',
    badge: 'Special Honor',
    details: 'Special jury recognition for going above and beyond in complex emergency trauma and full mouth dental rehabilitations.'
  },
  {
    id: 'feda-2018-aesthetic-practice',
    title: 'Aesthetic Practice Of The Year',
    event: 'FEDA Awards, 2018',
    year: '2018',
    image: '/images/awards/award_5.png',
    category: 'Practice Excellence',
    recipient: "Dr. Inamdar's Dental Studio",
    badge: 'Winner',
    details: 'National award for outstanding clinic ambiance, state-of-the-art sterilization, and predictable smile makeover results.'
  },
  {
    id: 'feda-2017-aesthetic-practice',
    title: 'Aesthetic Practice Of The Year',
    event: 'FEDA Awards, 2017',
    year: '2017',
    image: '/images/awards/award_6.png',
    category: 'Practice Excellence',
    recipient: "Dr. Inamdar's Dental Studio",
    badge: 'Winner',
    details: 'Prestigious FEDA trophy recognizing excellence in cosmetic dentistry, patient satisfaction, and cutting-edge prosthodontic care.'
  },
  {
    id: 'feda-2025-associate-dentist',
    title: 'Associate Dentist of The Year',
    event: 'FEDA Awards, 2025',
    year: '2025',
    image: '/images/awards/award_7.png',
    category: 'Associate Excellence',
    recipient: 'Dr. Khalida S. Ansari',
    badge: 'Nominated',
    details: 'Official nomination certificate from Famdent Excellence in Dentistry Awards recognizing exceptional clinical dedication and operative care.'
  },
  {
    id: 'feda-2025-exceptional-contributions',
    title: 'Exceptional Contributions to Dentistry',
    event: 'FEDA Awards, 2025',
    year: '2025',
    image: '/images/awards/award_8.png',
    category: 'Professional Contribution',
    recipient: 'Dr. Khalida S. Ansari',
    badge: 'Appreciation',
    details: 'Dentalkart & FEDA certificate of appreciation presented in recognition of remarkable clinical standards and outstanding contributions to dentistry.'
  },
  {
    id: 'feda-2025-5-under-5',
    title: '5 Under 5 Dentist of The Year',
    event: 'FEDA Awards, 2025',
    year: '2025',
    image: '/images/awards/award_9.png',
    category: 'Young Clinician',
    recipient: 'Dental Studio Clinical Team',
    badge: 'Winner',
    details: 'Prestigious Famdent Excellence in Dentistry Awards WINNER certificate recognizing top-tier clinical mastery and rising talent.'
  }
];

export const AwardsPage: React.FC<AwardsPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModal, setActiveModal] = useState<AwardItem | null>(null);

  const filters = ['All', '2025', '2024', '2019 – 2017'];

  const filteredAwards = CLINICAL_AWARDS.filter((award) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === '2025') return award.year === '2025';
    if (selectedFilter === '2024') return award.year === '2024';
    if (selectedFilter === '2019 – 2017') return ['2019', '2018', '2017'].includes(award.year);
    return true;
  });

  return (
    <div className="space-y-12 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/80 to-white pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-semibold">Awards & Accolades</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <TypewriterHeading
              text="Awards & Accolades"
              className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
            />
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
              Recognized at the prestigious Famdent Excellence in Dentistry Awards (FEDA) and National Dental Summits for aesthetic mastery, innovative digital workflows, and patient care.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedFilter === f
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-[#0284C7]'
                }`}
              >
                {f === 'All' ? 'All Accolades (9)' : f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Official FEDA & Dental Excellence Citations</span>
          </div>
        </div>

        {/* 3-Column Awards Grid Matching User Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredAwards.map((award, idx) => (
            <ScrollReveal key={award.id} index={idx} className="h-full">
              <div 
                onClick={() => setActiveModal(award)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#0284C7] transition-all flex flex-col justify-between h-full group hover:shadow-md cursor-pointer"
              >
                {/* Upper Photo Frame */}
                <div className="relative h-48 sm:h-52 w-full bg-slate-50/70 border-b border-slate-100 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Subtle Zoom Badge on Hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#0284C7] p-1.5 rounded-full shadow-xs">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 left-3 bg-[#0284C7]/10 text-[#0284C7] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {award.year}
                  </div>
                </div>

                {/* Lower Information Area */}
                <div className="p-5 sm:p-6 text-center space-y-1.5 flex-1 flex flex-col justify-center">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading group-hover:text-[#0284C7] transition-colors leading-snug">
                    {award.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-body">
                    {award.event}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Practice Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">Experience Award-Winning Dental Care</h3>
            <p className="text-sky-200/80 text-sm leading-relaxed font-body">
              Schedule your consultation with Dr. Aslam Inamdar and experience premier restorative and aesthetic dentistry.
            </p>
          </div>
          <button
            onClick={onOpenBookingModal}
            className="px-8 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Book Appointment
          </button>
        </div>

      </section>

      {/* High-Resolution Award Details Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#0284C7]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">{activeModal.event}</span>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo */}
            <div className="p-8 bg-slate-50/50 flex items-center justify-center border-b border-slate-100">
              <img
                src={activeModal.image}
                alt={activeModal.title}
                className="max-h-64 object-contain filter drop-shadow-md rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-bold text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full">
                  {activeModal.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mt-2">
                  {activeModal.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  Conferred by {activeModal.event}
                </p>
              </div>

              {activeModal.details && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                  {activeModal.details}
                </p>
              )}

              <div className="pt-2 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100">
                <span>Recipient: <strong className="text-slate-800">{activeModal.recipient}</strong></span>
                <span>Year: <strong className="text-slate-800">{activeModal.year}</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
