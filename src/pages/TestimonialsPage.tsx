import React, { useState } from 'react';
import { PageView, TestimonialItem } from '../types';
import { VIDEO_REVIEWS, TEXT_REVIEWS } from '../data/dentalData';
import { CountUp } from '../components/CountUp';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { SmileDesignIcon, MedicalCertificationSeal, DentMatrixLabIcon } from '../components/MedicalIcons';
import { 
  Play, Star, ChevronRight, CheckCircle2, ShieldCheck, 
  Quote, X, MapPin, CalendarCheck, ArrowRight, Video 
} from 'lucide-react';

interface TestimonialsPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [activeVideo, setActiveVideo] = useState<TestimonialItem | null>(null);

  const featuredVideo = VIDEO_REVIEWS[0];
  const otherVideos = VIDEO_REVIEWS.slice(1);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-sky-50/20 pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-bold">Patient Stories</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="block">
              <TypewriterHeading
                text="Patient Stories & Video Reviews"
                className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
              />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Discover real transformation journeys recorded by our patients. From complex smile makeovers and full mouth rehabilitation to painless dental implants, hear how Dr. Aslam Inamdar and Dental Studio revitalize smiles and confidence.
            </p>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
       * SECTION 1: Patient Video Reviews (5 Video Stories)
       * ------------------------------------------------------------- */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sky-100 pb-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Featured Video Testimonials
            </h2>
          </div>
          <p className="text-xs text-slate-500">Click any video card to watch their complete smile story</p>
        </div>

        {/* 1. Featured Big Video Card */}
        <ScrollReveal index={0}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden premium-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Video Thumbnail with Interactive Play Button */}
              <div className="lg:col-span-5 flex justify-center">
                <div 
                  onClick={() => setActiveVideo(featuredVideo)}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-sky-100 group cursor-pointer"
                >
                  <img
                    src={featuredVideo.videoThumb || featuredVideo.avatar}
                    alt={featuredVideo.patientName}
                    className="w-full h-full object-cover card-img-zoom group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/35 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#0284C7] group-hover:bg-[#0369A1] text-white flex items-center justify-center shadow-2xl transition-all transform group-hover:scale-115">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#0284C7] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    Featured Story
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {featuredVideo.duration}
                  </div>
                </div>
              </div>

              {/* Quote Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-600 ml-2">5.0 Star Patient Rating</span>
                </div>

                <div className="text-sky-300">
                  <Quote className="w-10 h-10 fill-current opacity-80" />
                </div>

                <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug font-heading">
                  "{featuredVideo.quote}"
                </blockquote>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={featuredVideo.avatar}
                      alt={featuredVideo.patientName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#0284C7]"
                    />
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{featuredVideo.patientName}</h4>
                      <p className="text-xs font-bold text-[#0284C7]">{featuredVideo.treatment}</p>
                      <p className="text-[11px] text-slate-400">{featuredVideo.clinic} • {featuredVideo.location}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveVideo(featuredVideo)}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors cursor-pointer"
                  >
                    <span>Watch Full Video</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* 2. Grid of Remaining 4 Video Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherVideos.map((video, idx) => (
            <ScrollReveal key={video.id} index={idx + 1} className="h-full">
              <div 
                onClick={() => setActiveVideo(video)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:border-[#0284C7] premium-card flex flex-col justify-between group cursor-pointer h-full"
              >
                <div>
                  {/* Video Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={video.videoThumb || video.avatar}
                      alt={video.patientName}
                      className="w-full h-full object-cover card-img-zoom group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/15 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#0284C7] group-hover:bg-[#0369A1] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-[#0284C7] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Video Story
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug line-clamp-1">
                      {video.patientName}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed italic">
                      "{video.quote}"
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{video.location}</span>
                  <span className="font-bold text-[#0284C7] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Watch</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </section>

      {/* -------------------------------------------------------------
       * SECTION 2: Trust Metrics Bar with Number Counting Animation
       * ------------------------------------------------------------- */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "10,000+", label: "Happy Patients", icon: SmileDesignIcon },
            { value: "4.9/5", label: "Patient Rating", icon: Star },
            { value: "1000+", label: "Verified Reviews", icon: CheckCircle2 },
            { value: "20+", label: "Years of Trust", icon: MedicalCertificationSeal },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} index={idx} className="h-full">
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

      {/* -------------------------------------------------------------
       * SECTION 3: Verified Written Patient Reviews (4 Text Reviews)
       * ------------------------------------------------------------- */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sky-100 pb-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Written Patient Experiences
            </h2>
          </div>
          <p className="text-xs text-slate-500">Feedback from Google & Practo verified consultations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEXT_REVIEWS.map((item, tIdx) => (
            <ScrollReveal key={item.id} index={tIdx} className="h-full">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-xs space-y-4 premium-card flex flex-col justify-between h-full">
                <div className="space-y-3">
                  
                  {/* Rating & Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Review</span>
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic font-body">
                    "{item.quote}"
                  </p>
                </div>

                {/* Patient Signature */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.avatar} 
                      alt={item.patientName} 
                      className="w-11 h-11 rounded-full object-cover border-2 border-sky-200" 
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.patientName}</h4>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#0284C7]" />
                        <span>{item.clinic}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400 font-medium">
                    {item.date}
                  </span>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </section>

      {/* -------------------------------------------------------------
       * SECTION 4: Bottom Call to Action Consultation Banner
       * ------------------------------------------------------------- */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-sky-600 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
              Ready to Begin Your Smile Transformation?
            </h3>
            <p className="text-sky-100 text-sm max-w-xl font-body">
              Join thousands of happy patients across Mumbai and worldwide. Book your consultation with Dr. Aslam Inamdar and experience modern, gentle dental care.
            </p>
          </div>
          <button
            onClick={onOpenBookingModal}
            className="px-8 py-3.5 rounded-full bg-white text-[#0284C7] hover:bg-sky-50 font-bold text-sm shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Schedule Assessment →
          </button>
        </div>
      </section>

      {/* -------------------------------------------------------------
       * Video Story Interactive Modal Popup
       * ------------------------------------------------------------- */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-sky-100 space-y-0 relative">
            
            {/* Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-100 bg-sky-50/50">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-[#0284C7]" />
                <h3 className="text-base font-bold text-slate-900">{activeVideo.patientName}'s Smile Story</h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Screen */}
            <div className="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center group">
              <img
                src={activeVideo.videoThumb || activeVideo.avatar}
                alt={activeVideo.patientName}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">{activeVideo.treatment}</span>
                <h4 className="text-lg font-bold">{activeVideo.patientName} — {activeVideo.location}</h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">"{activeVideo.quote}"</p>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-[#0284C7]/90 text-white flex items-center justify-center shadow-2xl animate-pulse">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
            </div>

            {/* Modal Footer Info */}
            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-slate-900">Dr. Inamdar's Dental Studio • {activeVideo.clinic}</p>
                <p className="text-[11px] text-slate-500">Duration: {activeVideo.duration} • Full Clinical Case Record</p>
              </div>
              <button
                onClick={() => {
                  setActiveVideo(null);
                  onOpenBookingModal();
                }}
                className="px-6 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold shadow-md cursor-pointer whitespace-nowrap"
              >
                Book Similar Treatment →
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
