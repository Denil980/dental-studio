import React, { useState, useEffect } from 'react';
import { MedicalCertificationSeal } from './MedicalIcons';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  CustomTreatmentDropdown,
  CustomClinicSelector,
  CustomDatePicker,
  CustomTimeDropdown
} from './BookingFormControls';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
  defaultClinic?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultTreatment = '',
  defaultClinic = ''
}) => {
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
  const [submitted, setSubmitted] = useState(false);

  // When modal opens, sync default values only if explicitly provided, otherwise keep completely blank
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        treatment: defaultTreatment || '',
        clinic: defaultClinic || '',
        date: '',
        time: '',
        message: ''
      });
      setErrors({});
      setSubmitted(false);
    }
  }, [isOpen, defaultTreatment, defaultClinic]);

  if (!isOpen) return null;

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
    
    // trigger celebration
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-700 via-[#0284C7] to-sky-600 p-6 text-white relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <MedicalCertificationSeal className="w-4 h-4 text-sky-200" />
            <span className="text-xs font-bold tracking-wider uppercase text-sky-200">Dr. Inamdar's Dental Studio</span>
          </div>
          <h3 className="text-2xl font-bold font-heading">Book an Appointment</h3>
          <p className="text-sky-100 text-xs sm:text-sm mt-1">Schedule your visit with Dr. Aslam Inamdar & DentMatrix Specialists.</p>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2 font-heading">Appointment Requested!</h4>
            <p className="text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Our clinic care coordinator will call you shortly at <span className="font-semibold text-slate-800">{formData.phone}</span> to confirm your slot for <span className="text-[#0284C7] font-bold">{formData.treatment}</span> at our <span className="font-medium text-slate-800">{formData.clinic}</span>.
            </p>
            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 w-full text-left text-sm text-slate-700 mb-6 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Clinic:</span>
                <span className="font-semibold text-slate-900">{formData.clinic}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service / Treatment:</span>
                <span className="font-semibold text-[#0284C7]">{formData.treatment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date:</span>
                <span className="font-semibold text-slate-900">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Time Slot:</span>
                <span className="font-semibold text-slate-900">{formData.time}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4 overflow-y-auto flex-1">
            {/* Validation Notice if any field missing */}
            {Object.keys(errors).length > 0 && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Please fill in all required fields marked with * and select your preferences.</span>
              </div>
            )}

            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
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
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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

            {/* Email & Custom Treatment Dropdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
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

            {/* Custom Date & Time Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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

            {/* Optional Note */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Additional Message (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention any dental concerns or specific preferences..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Book Appointment</span>
              <span className="text-lg">→</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
