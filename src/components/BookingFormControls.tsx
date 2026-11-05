import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  MapPin, 
  Calendar as CalendarIcon, 
  Clock, 
  Check, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

/* --------------------------------------------------------------------------
 * TREATMENT GROUPS & DATA
 * -------------------------------------------------------------------------- */
const TREATMENT_GROUPS = [
  {
    category: "Dental Implants",
    options: [
      "Single Tooth Implant",
      "Multiple Teeth Implants",
      "Full Mouth Dental Implants"
    ]
  },
  {
    category: "Full Mouth Rehabilitation",
    options: [
      "Full Mouth Rehabilitation"
    ]
  },
  {
    category: "General Dentistry",
    options: [
      "Dental Cleanup",
      "Cavity Management",
      "Root Canal Treatment",
      "Crowns & Bridges",
      "Soft Tissue Management",
      "Dental Extractions"
    ]
  },
  {
    category: "Aesthetic Dentistry",
    options: [
      "Digital Smile Design",
      "Smile Makeover",
      "Dental Veneers",
      "Teeth Whitening",
      "Tooth Colored Fillings"
    ]
  },
  {
    category: "Orthodontic Treatment",
    options: [
      "Braces Treatment",
      "Aligners / Invisalign"
    ]
  },
  {
    category: "Kids Dentistry",
    options: [
      "Preventive Treatments (Kids)",
      "Treatment under General Anaesthesia",
      "Myofunctional Dentistry",
      "Special Needs Children and Adults"
    ]
  },
  {
    category: "Super Speciality",
    options: [
      "Single / Same Day Dentistry",
      "3D Facially Driven Dentistry",
      "DentMatrix Lab Consultation",
      "Dental Tourism Concierge"
    ]
  }
];

/* --------------------------------------------------------------------------
 * TIME SLOTS DATA
 * -------------------------------------------------------------------------- */
const TIME_SLOT_GROUPS = [
  {
    period: "Morning",
    slots: [
      { value: "10:00 AM", label: "10:00 AM – Morning" },
      { value: "11:30 AM", label: "11:30 AM – Morning" }
    ]
  },
  {
    period: "Afternoon",
    slots: [
      { value: "01:00 PM", label: "01:00 PM – Afternoon" },
      { value: "03:30 PM", label: "03:30 PM – Afternoon" }
    ]
  },
  {
    period: "Evening",
    slots: [
      { value: "05:00 PM", label: "05:00 PM – Evening" },
      { value: "06:30 PM", label: "06:30 PM – Evening" },
      { value: "07:30 PM", label: "07:30 PM – Evening" }
    ]
  }
];

/* --------------------------------------------------------------------------
 * 1. CUSTOM TREATMENT DROPDOWN
 * -------------------------------------------------------------------------- */
interface TreatmentDropdownProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

export const CustomTreatmentDropdown: React.FC<TreatmentDropdownProps> = ({
  value,
  onChange,
  error
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredGroups = TREATMENT_GROUPS.map(group => ({
    ...group,
    options: group.options.filter(opt => 
      opt.toLowerCase().includes(search.toLowerCase()) || 
      group.category.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(group => group.options.length > 0);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2.5 rounded-xl border text-left flex items-center justify-between text-sm transition-all cursor-pointer bg-white ${
          isOpen 
            ? 'border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-xs' 
            : error 
              ? 'border-rose-400 bg-rose-50/20' 
              : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          {value ? (
            <span className="font-semibold text-slate-800 truncate">{value}</span>
          ) : (
            <span className="text-slate-400 font-normal">Select the treatment</span>
          )}
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#0284C7]' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-2xl shadow-xl border border-sky-100 p-2 z-50 max-h-72 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
          <div className="p-1 pb-2 border-b border-slate-100">
            <input
              type="text"
              placeholder="Search treatment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0284C7] focus:bg-white"
              autoFocus
            />
          </div>

          <div className="overflow-y-auto max-h-56 divide-y divide-slate-100 py-1">
            {filteredGroups.length === 0 ? (
              <div className="py-4 text-center text-xs text-slate-400">
                No treatment found matching "{search}"
              </div>
            ) : (
              filteredGroups.map((group) => (
                <div key={group.category} className="py-1.5 first:pt-0 last:pb-0">
                  <div className="px-2.5 py-1 text-[10px] font-bold text-sky-800 uppercase tracking-wider bg-sky-50/50 rounded-md mb-1">
                    {group.category}
                  </div>
                  <div className="space-y-0.5">
                    {group.options.map((option) => {
                      const isSelected = value === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            onChange(option);
                            setIsOpen(false);
                            setSearch('');
                          }}
                          className={`w-full px-2.5 py-1.5 rounded-lg text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#0284C7] text-white font-semibold'
                              : 'text-slate-700 hover:bg-sky-50 hover:text-[#0284C7]'
                          }`}
                        >
                          <span className="truncate">{option}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

/* --------------------------------------------------------------------------
 * 2. CUSTOM CLINIC LOCATION SELECTOR (NO PRE-SELECTION)
 * -------------------------------------------------------------------------- */
interface ClinicSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

export const CustomClinicSelector: React.FC<ClinicSelectorProps> = ({
  value,
  onChange,
  error
}) => {
  const clinics = [
    {
      id: "Kurla Clinic",
      name: "Kurla Clinic",
      area: "Kurla West, Near Phoenix Marketcity",
      hours: "Mon – Sat: 11 AM – 8 PM"
    },
    {
      id: "South Mumbai Clinic",
      name: "South Mumbai Clinic",
      area: "Marine Lines / Colaba Causeway",
      hours: "Mon – Sat: 11 AM – 8 PM"
    }
  ];

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {clinics.map((clinic) => {
          const isSelected = value === clinic.id;
          return (
            <button
              key={clinic.id}
              type="button"
              onClick={() => onChange(clinic.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative group flex items-start gap-3 ${
                isSelected
                  ? 'border-[#0284C7] bg-sky-50/80 shadow-xs ring-2 ring-[#0284C7]/20'
                  : error
                    ? 'border-rose-300 bg-rose-50/20 hover:border-[#0284C7]'
                    : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50/50'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                isSelected ? 'bg-[#0284C7] text-white' : 'bg-slate-100 text-slate-500 group-hover:text-[#0284C7] group-hover:bg-sky-50'
              }`}>
                <MapPin className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold truncate ${isSelected ? 'text-[#0284C7]' : 'text-slate-900'}`}>
                    {clinic.name}
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">{clinic.area}</p>
                <p className="text-[11px] text-slate-400 mt-1">{clinic.hours}</p>
              </div>

              {/* Radio Indicator */}
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                isSelected ? 'border-[#0284C7] bg-[#0284C7]' : 'border-slate-300 bg-white'
              }`}>
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          );
        })}
      </div>
      {!value && (
        <p className="text-[11px] text-slate-400">
          * Please choose either the Kurla or South Mumbai clinic location.
        </p>
      )}
    </div>
  );
};

/* --------------------------------------------------------------------------
 * 3. CUSTOM DATE PICKER (NO AUTO-SELECTION & NO BROWSER CALENDAR CLUTTER)
 * -------------------------------------------------------------------------- */
interface DatePickerProps {
  value: string; // "YYYY-MM-DD"
  onChange: (value: string) => void;
  error?: boolean;
}

export const CustomDatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  error
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Month navigation view state
  const today = new Date();
  const [viewDate, setViewDate] = useState(() => {
    if (value) {
      const parts = value.split('-').map(Number);
      return new Date(parts[0], parts[1] - 1, 1);
    }
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();

  // First day of current view month
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  // Total days in current view month
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Don't navigate to past months
    if (currentYear === today.getFullYear() && currentMonth <= today.getMonth()) return;
    setViewDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const isPrevDisabled = currentYear === today.getFullYear() && currentMonth <= today.getMonth();

  // Format display text
  const formatDisplay = (val: string) => {
    if (!val) return '';
    try {
      const parts = val.split('-').map(Number);
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      return d.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return val;
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2.5 rounded-xl border text-left flex items-center justify-between text-sm transition-all cursor-pointer bg-white ${
          isOpen
            ? 'border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-xs'
            : error
              ? 'border-rose-400 bg-rose-50/20'
              : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          <CalendarIcon className={`w-4 h-4 shrink-0 ${value ? 'text-[#0284C7]' : 'text-slate-400'}`} />
          {value ? (
            <span className="font-semibold text-slate-800">{formatDisplay(value)}</span>
          ) : (
            <span className="text-slate-400 font-normal">Select the date</span>
          )}
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#0284C7]' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 sm:right-auto right-0 top-full mt-1.5 bg-white rounded-2xl shadow-xl border border-sky-100 p-4 z-50 w-72 sm:w-80 animate-in fade-in zoom-in-95 duration-150">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
            <span className="font-heading font-bold text-sm text-slate-900">
              {monthNames[currentMonth]} {currentYear}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={isPrevDisabled}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isPrevDisabled ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {dayNames.map((day) => (
              <span key={day} className="text-[11px] font-bold text-slate-400 py-1">
                {day}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Empty slots before first day of month */}
            {Array.from({ length: firstDayIndex }).map((_, idx) => (
              <div key={`empty-${idx}`} className="h-8" />
            ))}

            {/* Days in Month */}
            {Array.from({ length: totalDays }).map((_, idx) => {
              const day = idx + 1;
              const dateObj = new Date(currentYear, currentMonth, day);
              const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              
              // Normalize today for comparison
              const isPast = dateObj.setHours(0,0,0,0) < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
              const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
              const isSelected = value === dateString;

              return (
                <button
                  key={day}
                  type="button"
                  disabled={isPast}
                  onClick={() => {
                    onChange(dateString);
                    setIsOpen(false);
                  }}
                  className={`h-8 w-8 mx-auto rounded-lg text-xs font-medium flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-[#0284C7] text-white font-bold shadow-sm shadow-sky-500/30'
                      : isPast
                        ? 'text-slate-300 cursor-not-allowed'
                        : isToday
                          ? 'border border-[#0284C7] text-[#0284C7] hover:bg-sky-50 cursor-pointer font-bold'
                          : 'text-slate-700 hover:bg-sky-50 hover:text-[#0284C7] cursor-pointer'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Quick Clear / Today Action */}
          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            {value ? (
              <button
                type="button"
                onClick={() => {
                  onChange('');
                  setIsOpen(false);
                }}
                className="text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
              >
                Clear Selection
              </button>
            ) : <span />}
            <button
              type="button"
              onClick={() => {
                const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
                onChange(todayStr);
                setIsOpen(false);
              }}
              className="text-[#0284C7] font-semibold hover:underline cursor-pointer ml-auto"
            >
              Select Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* --------------------------------------------------------------------------
 * 4. CUSTOM TIME SLOT DROPDOWN (NO AUTO-SELECTION)
 * -------------------------------------------------------------------------- */
interface TimeDropdownProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

export const CustomTimeDropdown: React.FC<TimeDropdownProps> = ({
  value,
  onChange,
  error
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2.5 rounded-xl border text-left flex items-center justify-between text-sm transition-all cursor-pointer bg-white ${
          isOpen
            ? 'border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-xs'
            : error
              ? 'border-rose-400 bg-rose-50/20'
              : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          <Clock className={`w-4 h-4 shrink-0 ${value ? 'text-[#0284C7]' : 'text-slate-400'}`} />
          {value ? (
            <span className="font-semibold text-slate-800 truncate">{value}</span>
          ) : (
            <span className="text-slate-400 font-normal">Select the time</span>
          )}
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#0284C7]' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-2xl shadow-xl border border-sky-100 p-2 z-50 max-h-64 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
          <div className="divide-y divide-slate-100">
            {TIME_SLOT_GROUPS.map((group) => (
              <div key={group.period} className="py-1.5 first:pt-0 last:pb-0">
                <div className="px-2.5 py-1 text-[10px] font-bold text-sky-800 uppercase tracking-wider bg-sky-50/50 rounded-md mb-1">
                  {group.period} Slots
                </div>
                <div className="space-y-0.5">
                  {group.slots.map((slot) => {
                    const isSelected = value === slot.label || value === slot.value;
                    return (
                      <button
                        key={slot.value}
                        type="button"
                        onClick={() => {
                          onChange(slot.label);
                          setIsOpen(false);
                        }}
                        className={`w-full px-2.5 py-1.5 rounded-lg text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#0284C7] text-white font-semibold'
                            : 'text-slate-700 hover:bg-sky-50 hover:text-[#0284C7]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                          <span>{slot.label}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
