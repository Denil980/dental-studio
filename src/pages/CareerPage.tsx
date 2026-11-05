import React, { useState, useRef } from 'react';
import { PageView } from '../types';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  MapPin, 
  Clock, 
  GraduationCap, 
  Heart, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Send,
  Building,
  Users,
  UploadCloud,
  FileText,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CareerPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: () => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Associate Dentist',
    experience: '2-5 years',
    message: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openPositions = [
    {
      title: "Associate Prosthodontist & Implantologist",
      department: "Clinical Prosthodontics",
      location: "Kurla West & South Mumbai",
      type: "Full-Time",
      experience: "MDS in Prosthodontics with 3+ years clinical experience in immediate implants.",
      responsibilities: "Chairside surgical and restorative procedures, digital treatment planning, full mouth cases."
    },
    {
      title: "CAD/CAM Digital Lab Ceramist",
      department: "DentMatrix 3D Lab",
      location: "Kurla West Lab Center",
      type: "Full-Time",
      experience: "Proficient in exocad / 3Shape, ceramic micro-layering, zirconia bridge design.",
      responsibilities: "Digital wax-ups, milling operation, custom staining, and implant abutment design."
    },
    {
      title: "Senior Dental Surgery Assistant",
      department: "Clinical Operations",
      location: "South Mumbai Clinic",
      type: "Full-Time",
      experience: "2+ years assisting in implantology, sterile sterilization protocols, four-handed dentistry.",
      responsibilities: "Patient chairside assistance, surgical tray setup, autoclaving standards."
    },
    {
      title: "Patient Care Coordinator & Reception Lead",
      department: "Front Office & Concierge",
      location: "Kurla West Clinic",
      type: "Full-Time",
      experience: "Excellent verbal communication in English & Hindi, experience in premium healthcare hospitality.",
      responsibilities: "Patient scheduling, treatment plan explanation, follow-up coordination."
    }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/80 to-white pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-semibold">Careers at Dental Studio</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <TypewriterHeading
              text="Careers & Professional Growth"
              className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
            />
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
              Be part of Mumbai's premier 3D implant and digital smile practice. Work alongside Dr. Aslam Inamdar and learn master clinical protocols.
            </p>
          </div>

        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Culture / Perks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-heading">Advanced Digital Mentorship</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-body">
              Direct exposure to 3D guided surgery, exocad design, and full arch restorations with Dr. Inamdar.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-3">
              <Building className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-heading">In-House DentMatrix Lab</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-body">
              State-of-the-art 5-axis milling units, intraoral 3D scanners, and immediate-load chairside workflows.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-heading">Patient-First Culture</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-body">
              A collaborative, ethical environment focused on zero-compromise clinical excellence and warmth.
            </p>
          </div>
        </div>

        {/* Current Openings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">Current Opportunities</h3>
              <p className="text-xs text-slate-500 font-body">Explore open positions across our clinical, lab, and front-desk teams.</p>
            </div>
            <span className="text-xs font-bold text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full">
              4 Roles Open
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((pos, idx) => (
              <ScrollReveal key={pos.title} index={idx} className="h-full">
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between h-full hover:border-[#0284C7] shadow-xs hover:shadow-md transition-all group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] font-bold">
                        {pos.department}
                      </span>
                      <span className="text-slate-400 font-medium">{pos.type}</span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#0284C7] transition-colors">
                      {pos.title}
                    </h4>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{pos.location}</span>
                    </div>

                    <div className="pt-2 text-xs text-slate-600 space-y-1.5 font-body">
                      <p><span className="font-semibold text-slate-800">Requirements:</span> {pos.experience}</p>
                      <p><span className="font-semibold text-slate-800">Scope:</span> {pos.responsibilities}</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Competitive salary & growth</span>
                    <a
                      href="#apply"
                      onClick={() => setFormData({ ...formData, role: pos.title })}
                      className="px-4 py-2 rounded-full bg-sky-50 text-[#0284C7] hover:bg-[#0284C7] hover:text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Clean Light-Themed Application Form with Resume Upload */}
        <div id="apply" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-3xl mx-auto">
          <div className="space-y-6">
            
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                Submit Your Application
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-body">
                We review applications on a rolling basis. You may also email your CV directly to <a href="mailto:careers@dentalstudio.co" className="font-semibold text-[#0284C7] hover:underline">careers@dentalstudio.co</a>.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900 font-heading">Application Received!</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto font-body">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. We have received your application{resumeFile ? ` and resume (${resumeFile.name})` : ''} for the <span className="font-semibold text-[#0284C7]">{formData.role}</span> position. Our clinical hiring coordinator will get in touch shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        role: 'Associate Dentist',
                        experience: '2-5 years',
                        message: ''
                      });
                      setResumeFile(null);
                    }}
                    className="px-6 py-2 rounded-full bg-[#0284C7] text-white text-xs font-bold hover:bg-[#0369A1] transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Mr. / Ms. Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-[#0284C7]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                      Role of Interest
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-[#0284C7]"
                    />
                  </div>
                </div>

                {/* Resume / CV Upload Option */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                    Upload Resume or CV (PDF, DOC, DOCX)
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  {resumeFile ? (
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-slate-800 text-sm">
                      <div className="flex items-center gap-2.5 truncate">
                        <FileText className="w-5 h-5 text-[#0284C7] shrink-0" />
                        <div className="truncate">
                          <p className="font-semibold text-slate-900 truncate text-xs sm:text-sm">{resumeFile.name}</p>
                          <p className="text-[11px] text-slate-500">{(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Ready for HR review</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer shrink-0 ml-2"
                        title="Remove uploaded CV"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      className="border-2 border-dashed border-slate-200 hover:border-[#0284C7] rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-sky-50/30 group"
                    >
                      <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-[#0284C7] mx-auto mb-2 transition-colors" />
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-[#0284C7]">
                        Click to upload your Resume / CV or drag and drop
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Supported formats: PDF, DOC, DOCX (Max 10MB)
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                    Summary of Experience or Cover Note (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your clinical qualifications, dental degrees, and availability..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-[#0284C7] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </section>

    </div>
  );
};
