import React from 'react';
import { DentalLogo, StylizedToothArt } from './DentalLogo';
import { PageView } from '../types';
import { TREATMENT_CATEGORIES, SUPER_SPECIALITY_ITEMS } from '../data/dentalData';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onSelectTreatment?: (treatmentId: string) => void;
  onSelectSuperSpeciality?: (specId: string) => void;
  onOpenBookingModal: () => void;
}

const SocialInstagram = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const SocialFacebook = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const SocialYoutube = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
  </svg>
);

const SocialLinkedin = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onSelectTreatment, 
  onSelectSuperSpeciality,
  onOpenBookingModal 
}) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A1128] text-slate-300 pt-16 pb-12 overflow-hidden border-t border-sky-950">
      {/* Decorative background tooth watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 translate-x-12 translate-y-12">
        <StylizedToothArt className="w-96 h-96 text-sky-400" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div onClick={() => handleNav('home')} className="cursor-pointer inline-block">
              <DentalLogo light={true} />
            </div>
            <p className="text-xs text-sky-100/80 leading-relaxed">
              Enhancing Smiles. Changing Lives! Premier center for 3D facially driven implantology and restorative dentistry since 2003.
            </p>
            <div className="pt-2 text-[11px] text-sky-300/70 leading-relaxed">
              Dr. Aslam Inamdar, Chief Prosthodontist & Implantologist. Powered by DentMatrix 3D Digital Lab.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'About Dental Studio', page: 'about' as PageView },
                { label: 'Our Treatments', page: 'treatments' as PageView },
                { label: 'Super Speciality', page: 'super-speciality' as PageView },
                { label: 'Gallery Showcase', page: 'gallery' as PageView },
                { label: 'Patient Stories', page: 'testimonials' as PageView },
                { label: 'Contact & Clinic Map', page: 'contact' as PageView },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="hover:text-sky-400 transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 6 Main Treatments */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wider">Treatments</h4>
            <ul className="space-y-2 text-xs">
              {TREATMENT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      if (onSelectTreatment) {
                        onSelectTreatment(cat.items[0].id);
                      } else {
                        onNavigate('treatments');
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-sky-400 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Super Speciality */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wider">Super Speciality</h4>
            <ul className="space-y-2 text-xs">
              {SUPER_SPECIALITY_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      if (onSelectSuperSpeciality) {
                        onSelectSuperSpeciality(item.id);
                      } else {
                        onNavigate('super-speciality');
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-sky-400 transition-colors text-left cursor-pointer"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Explore & Insights */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wider">Discover</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Awards', page: 'awards' as PageView },
                { label: 'Technology', page: 'technology' as PageView },
                { label: 'Blogs', page: 'blogs' as PageView },
                { label: 'Career', page: 'career' as PageView },
                { label: 'Newsletter', page: 'newsletter' as PageView },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="hover:text-sky-400 transition-colors text-left cursor-pointer flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:bg-white transition-colors" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Contact Info & CTA */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider">Get in Touch</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-sky-400 transition-colors font-semibold text-white">
                <Phone className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:care@dentalstudio.co" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>care@dentalstudio.co</span>
              </a>
              <div className="flex items-start gap-2 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                <span>Kurla West & South Mumbai</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBookingModal}
                className="w-full py-2.5 px-4 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-sky-900/40 transition-all cursor-pointer"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: SocialInstagram, href: "#", label: "Instagram" },
                { icon: SocialFacebook, href: "#", label: "Facebook" },
                { icon: SocialYoutube, href: "#", label: "YouTube" },
                { icon: SocialLinkedin, href: "#", label: "LinkedIn" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#0284C7] flex items-center justify-center text-white transition-all cursor-pointer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} DR. INAMDAR'S® DENTAL STUDIO & DentMatrix. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button onClick={() => handleNav('about')} className="hover:text-slate-300">About Practice</button>
            <button onClick={() => handleNav('treatments')} className="hover:text-slate-300">Treatments</button>
            <button onClick={() => handleNav('super-speciality')} className="hover:text-slate-300">Super Speciality</button>
            <button onClick={() => handleNav('awards')} className="hover:text-slate-300">Awards</button>
            <button onClick={() => handleNav('technology')} className="hover:text-slate-300">Technology</button>
            <button onClick={() => handleNav('blogs')} className="hover:text-slate-300">Blogs</button>
            <button onClick={() => handleNav('career')} className="hover:text-slate-300">Career</button>
            <button onClick={() => handleNav('newsletter')} className="hover:text-slate-300">Newsletter</button>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300">Locations</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
