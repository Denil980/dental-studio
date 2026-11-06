import React, { useState } from 'react';
import { PageView } from '../types';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  BookOpen, 
  Download, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  Bell,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface NewsletterPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: () => void;
}

interface NewsletterIssue {
  issueNumber: string;
  month: string;
  title: string;
  headline: string;
  summary: string;
  topics: string[];
  readTime: string;
}

const PAST_ISSUES: NewsletterIssue[] = [
  {
    issueNumber: "Issue #12",
    month: "October 2026",
    title: "The Zirconia Era: Bio-Inert Materials in Immediate Load Implants",
    headline: "How monolithic zirconia and DentMatrix 3D planning are transforming implant longevity and gum seal aesthetics.",
    summary: "Dr. Aslam Inamdar details the biological advantages of zirconia abutments over traditional metal margins, and shares clinical case photos of 5-year soft-tissue papilla stability.",
    topics: ["Zirconia Implants", "DentMatrix 3D Protocols", "Soft Tissue Aesthetics"],
    readTime: "7 min read"
  },
  {
    issueNumber: "Issue #11",
    month: "September 2026",
    title: "Facially Driven Smile Design: Proportion, Texture & Natural Light Transmission",
    headline: "Why true aesthetic dentistry rejects monochromatic chiclet teeth in favor of polychromatic natural translucency.",
    summary: "A deep dive into incisal halo effects, tooth surface micro-texture, and how our in-house ceramists hand-stain ceramic veneers for undetectable realism.",
    topics: ["Smile Makeover", "Ceramic Veneers", "Facial Harmony"],
    readTime: "5 min read"
  },
  {
    issueNumber: "Issue #10",
    month: "August 2026",
    title: "Full Mouth Rehabilitation in the Era of Digital Occlusion",
    headline: "Restoring collapsed vertical facial dimension and eliminating chronic TMJ muscle tension.",
    summary: "Exploring the T-Scan digital occlusal analysis system used at Dental Studio to measure bite balance with microsecond precision.",
    topics: ["Full Mouth Reconstruction", "TMJ Health", "Digital Occlusion"],
    readTime: "6 min read"
  },
  {
    issueNumber: "Issue #09",
    month: "July 2026",
    title: "Preventive Periodontics: Protecting Your Heart Through Oral Wellness",
    headline: "The systemic link between subgingival oral bacteria and cardiovascular wellness.",
    summary: "New clinical research demonstrating the protective power of regular ultrasonic prophylaxis and deep pocket sterilization.",
    topics: ["Preventive Dentistry", "Heart Health", "Laser Debridement"],
    readTime: "4 min read"
  }
];

export const NewsletterPage: React.FC<NewsletterPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    'Dental Implants',
    'Smile Design & Veneers'
  ]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setIsSubscribed(true);
  };

  return (
    <div className="space-y-12 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/80 to-white pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-semibold">Clinical Newsletter</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <TypewriterHeading
              text="The Smile Digest Newsletter"
              className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
            />
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-body">
              Curated by Dr. Aslam Inamdar. Cutting-edge dental implant science, smile aesthetics, patient case studies, and home care innovations delivered once a month.
            </p>
          </div>

        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Subscribe Card Banner */}
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#0A1128] via-[#03446A] to-[#0284C7] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="max-w-2xl space-y-6 relative z-10">
              
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-4xl font-bold font-heading leading-tight">
                  Stay Informed on Advanced Dental Health & Smile Transformations
                </h3>
                <p className="text-sky-100/90 text-sm leading-relaxed font-body">
                  No spam. Ever. Just concise, clinically backed oral health guides, seasonal care tips, and exclusive clinic announcements directly from our specialists.
                </p>
              </div>

              {isSubscribed ? (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-3">
                  <div className="flex items-center gap-2.5 text-emerald-300">
                    <CheckCircle2 className="w-6 h-6" />
                    <h4 className="text-lg font-bold">You're Subscribed!</h4>
                  </div>
                  <p className="text-xs text-sky-100 leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{name}</span>! We’ve sent a confirmation email to <span className="font-semibold text-white">{email}</span>. You will receive the upcoming monthly edition directly in your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-sky-200/60 text-sm focus:outline-none focus:bg-white/20 focus:border-white"
                    />
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-sky-200/60 text-sm focus:outline-none focus:bg-white/20 focus:border-white"
                    />
                  </div>

                  {/* Topic Selectors */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-sky-200">Topics you're interested in:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Dental Implants',
                        'Smile Design & Veneers',
                        'Full Mouth Rehabilitation',
                        'Clear Aligners',
                        'Oral Wellness & Prevention'
                      ].map((topic) => {
                        const isChecked = selectedTopics.includes(topic);
                        return (
                          <button
                            type="button"
                            key={topic}
                            onClick={() => toggleTopic(topic)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                              isChecked
                                ? 'bg-white text-[#0284C7] font-bold shadow-xs'
                                : 'bg-white/10 text-sky-100 hover:bg-white/20'
                            }`}
                          >
                            <span>{topic}</span>
                            {isChecked && <CheckCircle2 className="w-3 h-3 text-[#0284C7]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#0284C7] hover:bg-sky-50 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Subscribe to The Smile Digest</span>
                  </button>

                  <p className="text-[11px] text-sky-200/70 flex items-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
                    <span>We respect your privacy. One click unsubscribe anytime.</span>
                  </p>
                </form>
              )}

            </div>
          </div>
        </ScrollReveal>

        {/* Previous Issues Archive */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">Previous Editions</h3>
              <p className="text-xs text-slate-700 font-body">Browse highlights from past issues of The Smile Digest.</p>
            </div>
            <span className="text-xs font-bold text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full">
              4 Issues Archived
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAST_ISSUES.map((issue, idx) => (
              <ScrollReveal key={issue.issueNumber} index={idx} className="h-full">
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between h-full hover:border-[#0284C7] shadow-xs hover:shadow-md transition-all group">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full">
                        {issue.issueNumber}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {issue.month}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#0284C7] transition-colors">
                      {issue.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-body">
                      {issue.headline}
                    </p>

                    <div className="pt-2">
                      <p className="text-xs text-slate-700 leading-relaxed italic border-l-2 border-sky-300 pl-3">
                        "{issue.summary}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {issue.topics.map((t) => (
                        <span key={t} className="text-[10px] font-semibold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600">{issue.readTime}</span>
                    <button
                      onClick={() => onNavigate('blogs')}
                      className="text-[#0284C7] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Online</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-900 font-heading">Looking for Personalized Dental Consultation?</h4>
            <p className="text-xs sm:text-sm text-slate-800 font-body">
              Visit Dr. Aslam Inamdar at our Kurla West or South Mumbai clinics for digital diagnosis and treatment planning.
            </p>
          </div>
          <button
            onClick={onOpenBookingModal}
            className="px-6 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold transition-all shadow-xs whitespace-nowrap cursor-pointer shrink-0"
          >
            Book Appointment
          </button>
        </div>

      </section>

    </div>
  );
};
