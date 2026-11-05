import React from 'react';
import { PageView } from '../types';
import { 
  Layers, Home, UserCheck, Stethoscope, Sparkles, Image, 
  MessageSquareQuote, CalendarCheck, MapPin, Trophy, Cpu, 
  BookOpen, Briefcase, Mail 
} from 'lucide-react';

interface ScreenSwitcherProps {
  currentPage: PageView;
  onSelectPage: (page: PageView) => void;
}

export const ScreenSwitcher: React.FC<ScreenSwitcherProps> = ({
  currentPage,
  onSelectPage
}) => {
  const screens: { id: PageView; name: string; number: number; icon: React.ElementType }[] = [
    { id: 'home', name: 'Home', number: 1, icon: Home },
    { id: 'about', name: 'About', number: 2, icon: UserCheck },
    { id: 'treatments', name: 'Treatments', number: 3, icon: Stethoscope },
    { id: 'treatment-detail', name: 'Dental Implants', number: 4, icon: Sparkles },
    { id: 'super-speciality', name: 'Super Speciality', number: 5, icon: Sparkles },
    { id: 'gallery', name: 'Smile Gallery', number: 6, icon: Image },
    { id: 'testimonials', name: 'Testimonials', number: 7, icon: MessageSquareQuote },
    { id: 'booking', name: 'Appointment', number: 8, icon: CalendarCheck },
    { id: 'contact', name: 'Contact Us', number: 9, icon: MapPin },
    { id: 'awards', name: 'Awards', number: 10, icon: Trophy },
    { id: 'technology', name: 'Technology', number: 11, icon: Cpu },
    { id: 'blogs', name: 'Blogs', number: 12, icon: BookOpen },
    { id: 'career', name: 'Career', number: 13, icon: Briefcase },
    { id: 'newsletter', name: 'Newsletter', number: 14, icon: Mail },
  ];

  return (
    <aside aria-label="Mockup Screen Navigator" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] bg-slate-900/90 text-white backdrop-blur-md px-3 py-2 rounded-full shadow-2xl border border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-bold text-purple-300 uppercase tracking-wider shrink-0 border-r border-slate-700 pr-3">
        <Layers className="w-3.5 h-3.5 text-purple-400" />
        <span className="hidden sm:inline">Design Screens</span>
      </div>

      <div className="flex items-center gap-1">
        {screens.map((s) => {
          const isActive = currentPage === s.id;
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => {
                onSelectPage(s.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#7C3AED] text-white shadow-md shadow-purple-600/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              title={`Switch to Screen ${s.number}: ${s.name}`}
            >
              <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                isActive ? 'bg-white text-[#7C3AED]' : 'bg-slate-800 text-slate-300'
              }`}>
                {s.number}
              </span>
              <Icon className="w-3.5 h-3.5 hidden md:inline" />
              <span>{s.name}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
