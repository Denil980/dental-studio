import React, { useState } from 'react';
import { PageView } from '../types';
import { CLINIC_LOCATIONS } from '../data/dentalData';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { Phone, Clock, MapPin, ArrowRight, CheckCircle2, ChevronRight, Send, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: (clinic?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [selectedPin, setSelectedPin] = useState<'kurla' | 'south-mumbai'>('kurla');
  const [msgForm, setMsgForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [msgSent, setMsgSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgForm.name || !msgForm.phone) return;

    try {
      confetti({
        particleCount: 70,
        spread: 50,
        origin: { y: 0.7 }
      });
    } catch (err) {}

    setMsgSent(true);
  };

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50/80 to-white pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-bold">Contact Us</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="block">
              <TypewriterHeading
                text="Contact Us"
                className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
              />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Get in touch with Dr. Aslam Inamdar and our clinical team at our Kurla West and South Mumbai clinics.
            </p>
          </div>

        </div>
      </section>

      {/* Two Clinic Location Cards (Full Width & Controlled Height) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CLINIC_LOCATIONS.map((clinic, cIdx) => (
            <ScrollReveal key={clinic.id} index={cIdx} className="h-full">
              <div
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:border-[#0284C7] premium-card flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 group">
                    <img
                      src={clinic.image}
                      alt={clinic.name}
                      className="w-full h-full object-cover object-center card-img-zoom group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">{clinic.name}</h3>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-600 font-body">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                        <span>{clinic.address}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                        <a href={`tel:${clinic.phone}`} className="font-bold text-slate-900 hover:text-[#0284C7]">
                          {clinic.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-[#0284C7] shrink-0" />
                        <span>{clinic.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPin(clinic.id as any)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>View on Map</span>
                  </button>

                  <button
                    onClick={() => onOpenBookingModal(clinic.name)}
                    className="px-5 py-2 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                  >
                    Book Here
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Map & Send Message Form */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Map Mockup with interactive location pins */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Clinic Locations Map</h3>
                <p className="text-xs text-slate-500">Click a pin to view clinic details in Mumbai</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-emerald-700">Both Clinics Open Today</span>
              </div>
            </div>

            {/* Stylized Mumbai City Map Canvas */}
            <div className="relative w-full aspect-[16/10] bg-[#E8EEF5] rounded-2xl overflow-hidden border border-slate-200 select-none">
              
              <svg className="w-full h-full object-cover absolute inset-0 opacity-40">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CBD5E1" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M 120 0 Q 150 150 80 300 Q 60 400 130 600" fill="none" stroke="#93C5FD" strokeWidth="18" />
                <path d="M 0 160 Q 200 180 500 240" fill="none" stroke="#FFFFFF" strokeWidth="6" />
                <path d="M 280 0 L 260 500" fill="none" stroke="#FFFFFF" strokeWidth="5" />
                <path d="M 200 200 L 380 450" fill="none" stroke="#FFFFFF" strokeWidth="4" />
              </svg>

              {/* Kurla Clinic Pin */}
              <button
                onClick={() => setSelectedPin('kurla')}
                className={`absolute top-[42%] left-[58%] -translate-x-1/2 -translate-y-1/2 transition-all transform hover:scale-110 cursor-pointer ${
                  selectedPin === 'kurla' ? 'scale-110 z-20' : 'z-10 opacity-90'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-[#0284C7] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Kurla Clinic</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#0284C7] border-2 border-white shadow-md animate-bounce" />
                </div>
              </button>

              {/* South Mumbai Clinic Pin */}
              <button
                onClick={() => setSelectedPin('south-mumbai')}
                className={`absolute top-[72%] left-[42%] -translate-x-1/2 -translate-y-1/2 transition-all transform hover:scale-110 cursor-pointer ${
                  selectedPin === 'south-mumbai' ? 'scale-110 z-20' : 'z-10 opacity-90'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>South Mumbai Clinic</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-white shadow-md animate-bounce" />
                </div>
              </button>

              {/* Map Legend Card */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur rounded-xl p-3 shadow-md border border-slate-200 text-xs text-slate-700 max-w-xs">
                <span className="font-bold block text-slate-900">
                  {selectedPin === 'kurla' ? 'Kurla Clinic (Near Phoenix Marketcity)' : 'South Mumbai Clinic (Marine Lines / Colaba)'}
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  {selectedPin === 'kurla' ? 'LBS Marg, Kurla West • +91 98765 43210' : 'Ocean Breeze Chambers • +91 99876 54321'}
                </span>
              </div>
            </div>
          </div>

          {/* Send us a Message Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Send us a Message</h3>
            <p className="text-xs text-slate-500 mb-6">Have an inquiry or feedback? We will respond within 2 working hours.</p>

            {msgSent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you for reaching out, <span className="font-semibold">{msgForm.name}</span>. Our clinic desk will contact you at {msgForm.phone}.
                </p>
                <button
                  onClick={() => setMsgSent(false)}
                  className="text-xs font-bold text-[#0284C7] hover:underline pt-2 block mx-auto cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Patel"
                    value={msgForm.name}
                    onChange={(e) => setMsgForm({ ...msgForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={msgForm.phone}
                    onChange={(e) => setMsgForm({ ...msgForm, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="ananya@example.com"
                    value={msgForm.email}
                    onChange={(e) => setMsgForm({ ...msgForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can Dr. Aslam and the Dental Studio team assist you?"
                    value={msgForm.message}
                    onChange={(e) => setMsgForm({ ...msgForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
