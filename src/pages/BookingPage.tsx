import React, { useState } from 'react';
import { PageView } from '../types';
import { DOCTOR_INFO } from '../data/dentalData';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { MedicalCertificationSeal } from '../components/MedicalIcons';
import { CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  CustomTreatmentDropdown,
  CustomClinicSelector,
  CustomDatePicker,
  CustomTimeDropdown
} from '../components/BookingFormControls';

interface BookingPageProps {
  onNavigate: (page: PageView) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: '',
    clinic: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, boolean> = {};
    if (!formData.fullName.trim()) newErrors.fullName = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.treatment) newErrors.treatment = true;
    if (!formData.clinic) newErrors.clinic = true;
    if (!formData.date) newErrors.date = true;
    if (!formData.time) newErrors.time = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setIsSuccess(true);
  };

  return (
    <div className="space-y-12 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50/80 to-white pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-semibold">Book an Appointment</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="block">
              <TypewriterHeading
                text="Book an Appointment"
                className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
              />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-body">
              Schedule a consultation with Dr. Aslam Inamdar and our expert dental team.
            </p>
          </div>

        </div>
      </section>

      {/* Main Split Section: Clinic Photo on Left, Booking Form on Right */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm premium-card animate-card-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Operatory Room Photo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md border-2 border-sky-50 relative group">
                <img
                  src={DOCTOR_INFO.chairImage}
                  alt="Modern Dental Operatory Suite"
                  className="w-full h-full object-cover card-img-zoom group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-2 w-fit">
                    <MedicalCertificationSeal className="w-3.5 h-3.5 text-sky-300" />
                    <span>Hygienic & Ultra-Modern</span>
                  </div>
                  <h4 className="text-lg font-bold font-heading">State-of-the-Art Care</h4>
                  <p className="text-xs text-slate-200 mt-1 font-body">Zero-pain protocols, high-precision CBCT digital planning, and personalized attention.</p>
                </div>
              </div>

              {/* Quick Contact Assist */}
              <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100 text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-800">Need immediate assistance?</p>
                <p>Call our reception helpline directly at <a href="tel:+919876543210" className="text-[#0284C7] font-semibold hover:underline">+91 98765 43210</a></p>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-7">
              {isSuccess ? (
                <div className="bg-sky-50/60 rounded-3xl p-8 sm:p-10 border border-sky-100 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">Your Appointment is Booked!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-body">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>! We have reserved your preferred slot on <span className="font-semibold text-slate-900">{formData.date} at {formData.time}</span> for <span className="font-semibold text-[#0284C7]">{formData.treatment}</span> at our <span className="text-[#0284C7] font-semibold">{formData.clinic}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          treatment: '',
                          clinic: '',
                          date: '',
                          time: '',
                          message: ''
                        });
                        setErrors({});
                      }}
                      className="px-8 py-3 rounded-full bg-[#0284C7] text-white font-semibold text-sm hover:bg-[#0369A1] transition-all transform hover:scale-[1.02] shadow-md cursor-pointer"
                    >
                      Book Another Visit
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Validation Notice if any field missing */}
                  {Object.keys(errors).length > 0 && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Please complete all fields marked with * to confirm your booking.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: false });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0284C7] ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: false });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0284C7] ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Select Treatment <span className="text-rose-500">*</span>
                      </label>
                      <CustomTreatmentDropdown
                        value={formData.treatment}
                        onChange={(val) => {
                          setFormData({ ...formData, treatment: val });
                          if (errors.treatment) setErrors({ ...errors, treatment: false });
                        }}
                        error={errors.treatment}
                      />
                    </div>
                  </div>

                  {/* Preferred Clinic Location - Cards with NO Auto-Select */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-body">
                      Preferred Clinic Location <span className="text-rose-500">*</span>
                    </label>
                    <CustomClinicSelector
                      value={formData.clinic}
                      onChange={(clinicId) => {
                        setFormData({ ...formData, clinic: clinicId });
                        if (errors.clinic) setErrors({ ...errors, clinic: false });
                      }}
                      error={errors.clinic}
                    />
                  </div>

                  {/* Date & Time with NO Auto-Select */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Preferred Date <span className="text-rose-500">*</span>
                      </label>
                      <CustomDatePicker
                        value={formData.date}
                        onChange={(val) => {
                          setFormData({ ...formData, date: val });
                          if (errors.date) setErrors({ ...errors, date: false });
                        }}
                        error={errors.date}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Preferred Time Slot <span className="text-rose-500">*</span>
                      </label>
                      <CustomTimeDropdown
                        value={formData.time}
                        onChange={(val) => {
                          setFormData({ ...formData, time: val });
                          if (errors.time) setErrors({ ...errors, time: false });
                        }}
                        error={errors.time}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                      Dental Concerns or Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your dental symptoms or preferred consultation time..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#0284C7] text-white font-bold text-sm hover:bg-[#0369A1] transition-all transform hover:scale-[1.01] shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Appointment</span>
                    <span className="text-base">→</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
