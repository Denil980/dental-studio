import { 
  TreatmentCategory, 
  SubTreatmentItem, 
  SuperSpecialityItem, 
  GalleryItem, 
  BeforeAfterItem, 
  TestimonialItem, 
  ClinicLocation 
} from '../types';

export const DOCTOR_INFO = {
  name: "Dr. Aslam Inamdar",
  title: "Chief Prosthodontist & Implantologist",
  experienceYears: "20+",
  smilesDelivered: "10,000+",
  tagline: "A leading cosmetic and implant dentist with over 20 years of experience in creating healthy, natural and confident smiles.",
  bio: "With over two decades of clinical experience since 2003, Dr. Aslam Inamdar is a pioneer in immediate-load dental implantology, 3D facially driven smile design, and complex full mouth rehabilitations. Combining clinical mastery with our in-house DentMatrix 3D Digital Lab, Dr. Inamdar engineers natural, durable, life-transforming smiles.",
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
  receptionImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  chairImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  labImage: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80"
};

export const CLINIC_STATS = [
  { value: "20+", label: "Years of Expertise", subtitle: "Serving patients since 2003" },
  { value: "10,000+", label: "Happy Smiles", subtitle: "Delivered with precision" },
  { value: "DentMatrix", label: "In-House 3D Lab", subtitle: "Custom milled restorations" },
  { value: "2", label: "Clinic Locations", subtitle: "Kurla West & South Mumbai" },
];

/* -------------------------------------------------------------
 * 6 MAIN TREATMENT CATEGORIES & SUB-TREATMENTS (As per screenshot)
 * ------------------------------------------------------------- */
export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: "dental-implants",
    name: "Dental Implants",
    shortDesc: "Permanent, titanium and zirconia root replacements that look, feel, and function like natural teeth.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    iconName: "ShieldCheck",
    items: [
      {
        id: "single-tooth-implant",
        name: "Single Tooth Implant",
        categoryId: "dental-implants",
        categoryName: "Dental Implants",
        shortDesc: "Replace a single missing tooth without touching or damaging neighboring healthy teeth.",
        overview: "A single tooth dental implant is an individual medical-grade titanium fixture placed into the jawbone, topped by a custom porcelain or zirconia crown tailored to match your natural smile.",
        detailedExplanation: "When a single tooth is lost due to injury or decay, a single tooth implant offers the gold standard restorative solution. Unlike a traditional bridge that requires irreversible trimming of healthy neighboring teeth, an implant stands independently. The implant post integrates directly into the jawbone, stimulating bone tissue and preventing natural facial collapse.",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
        clinicalImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
        highlights: [
          "Zero damage to adjacent natural healthy teeth",
          "Permanent osseointegration with natural jawbone",
          "Custom shade-matched zirconia crown from our DentMatrix Lab",
          "98.5% long-term success rate"
        ],
        benefits: [
          { title: "Natural Function", desc: "Chew apples, nuts and your favorite foods with zero hesitation.", icon: "Utensils" },
          { title: "Bone Preservation", desc: "Stimulates bone density and halts jaw resorption.", icon: "Shield" },
          { title: "Flawless Aesthetics", desc: "Hand-crafted ceramic seamlessly blends with surrounding teeth.", icon: "Sparkles" },
          { title: "Lifelong Durability", desc: "Designed to last a lifetime with routine oral hygiene.", icon: "HeartPulse" }
        ],
        procedureSteps: [
          { step: 1, title: "3D CBCT Digital Planning", desc: "High-resolution bone scan to map exact nerve position and bone width." },
          { step: 2, title: "Gentle Guided Placement", desc: "Micro-surgical guided placement of the titanium fixture under local anesthesia." },
          { step: 3, title: "Healing & Integration", desc: "Biocompatible fusion of the implant with your jawbone over a few weeks." },
          { step: 4, title: "Crown Delivery", desc: "Scanning and precision milling of your final ceramic tooth." }
        ],
        faqs: [
          { question: "Is single tooth implant placement painful?", answer: "No, the procedure is carried out with gentle local anesthesia. Most patients report minimal tenderness easily managed with mild pain medication for 24 hours." }
        ]
      },
      {
        id: "multiple-teeth-implants",
        name: "Multiple Teeth Implants",
        categoryId: "dental-implants",
        categoryName: "Dental Implants",
        shortDesc: "Restore several missing teeth with implant-supported bridges without removable partial dentures.",
        overview: "When multiple adjacent teeth are missing, two or more strategically placed implants can securely support a permanent ceramic bridge.",
        detailedExplanation: "Multiple teeth implants avoid the discomfort and slipping associated with traditional partial dentures. By anchoring an aesthetic bridge across securely integrated dental implants, we restore full chewing bite force and harmonious smile contours without placing stress on remaining natural teeth.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        clinicalImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
        highlights: [
          "Secure non-slip fixed teeth—no messy adhesives",
          "Preserves remaining natural teeth from overloaded chewing stress",
          "Engineered for high structural stability and natural smile line"
        ],
        benefits: [
          { title: "Permanent Stability", desc: "Fixed securely in place; never slips or clicks.", icon: "Shield" },
          { title: "Restored Chewing", desc: "Enjoy your normal diet with 100% restored bite pressure.", icon: "Utensils" }
        ]
      },
      {
        id: "full-mouth-dental-implants",
        name: "Full Mouth Dental Implants",
        categoryId: "dental-implants",
        categoryName: "Dental Implants",
        shortDesc: "Complete fixed full-arch teeth restorations (All-on-4 / All-on-6) for complete tooth loss.",
        overview: "Transform fully edentulous arches or terminal dentition into permanent, beautiful fixed teeth anchored by 4 to 6 precision implants.",
        detailedExplanation: "Full mouth dental implants are a life-changing procedure for patients with failing teeth or tired of loose dentures. Dr. Aslam Inamdar utilizes computer-guided All-on-4 and All-on-6 surgical protocols to place implants at precise angles. Often, immediate fixed provisional teeth are attached on the exact same day.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        clinicalImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
        highlights: [
          "Same-day fixed provisional teeth capability",
          "All-on-4 and All-on-6 computer-guided implantology",
          "Rejuvenates lower facial support and eliminates sunken appearance"
        ],
        benefits: [
          { title: "Immediate Smile", desc: "Leave our clinic with fixed, confident teeth.", icon: "Sparkles" },
          { title: "No Loose Dentures", desc: "Say goodbye to palate-covering acrylic and slipping plates.", icon: "Smile" }
        ]
      }
    ]
  },
  {
    id: "full-mouth-rehabilitation",
    name: "Full Mouth Rehabilitation",
    shortDesc: "Comprehensive reconstruction harmonizing occlusion, chewing function, and aesthetic facial beauty.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    iconName: "Award",
    items: [
      {
        id: "full-mouth-rehab-treatment",
        name: "Full Mouth Rehabilitation",
        categoryId: "full-mouth-rehabilitation",
        categoryName: "Full Mouth Rehabilitation",
        shortDesc: "A complete restorative rebuild for severely worn, broken down, or misaligned dentition.",
        overview: "Restores collapsed bite vertical dimension, cures chronic TMJ pain, and rebuilds every single tooth for balanced health and timeless beauty.",
        detailedExplanation: "As a specialist Prosthodontist, Dr. Aslam Inamdar is renowned for tackling complex full mouth cases. When severe tooth grinding (bruxism), multiple missing teeth, and acid erosion collapse your bite, standard patchwork fillings fail. Full mouth rehabilitation resets your jaw position, relieves muscle strain, and re-engineers every tooth with biocompatible ceramics.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
        clinicalImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
        highlights: [
          "Re-establishes optimal vertical dimension of occlusion (VDO)",
          "Eliminates chronic TMJ clicking, facial tension, and headaches",
          "Full digital facially driven aesthetic transformation"
        ],
        benefits: [
          { title: "Pain Relief", desc: "Resolves chronic jaw muscle discomfort and bite fatigue.", icon: "HeartPulse" },
          { title: "Facial Rejuvenation", desc: "Re-inflates lost facial height, reducing wrinkles around mouth.", icon: "Sparkles" }
        ]
      }
    ]
  },
  {
    id: "general-dentistry",
    name: "General Dentistry",
    shortDesc: "Comprehensive preventative, hygiene, and restorative treatments for healthy teeth and gums.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    iconName: "Stethoscope",
    items: [
      {
        id: "dental-cleanup",
        name: "Dental Cleanup",
        categoryId: "general-dentistry",
        categoryName: "General Dentistry",
        shortDesc: "Ultrasonic scaling, prophy polishing, and plaque eradication for pristine oral hygiene.",
        overview: "Gentle removal of hardened tartar (calculus) and surface stains to keep gums firm and prevent periodontitis.",
        detailedExplanation: "Even with diligent daily brushing and flossing, saliva minerals harden plaque into calculus that cannot be removed at home. Our gentle ultrasonic scaling uses micro-vibrations and warm water jets to clear subgingival calculus, finished with high-gloss prophy paste for smooth, gleaming teeth.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        highlights: ["Painless ultrasonic scaling", "Eliminates bad breath (halitosis)", "Protects against receding gums and bone loss"]
      },
      {
        id: "cavity-management",
        name: "Cavity Management",
        categoryId: "general-dentistry",
        categoryName: "General Dentistry",
        shortDesc: "Early detection, remineralization, and conservative tooth-colored composite restorations.",
        overview: "Identify microscopic enamel lesions before they turn into painful toothaches, with biomimetic composite bonding.",
        detailedExplanation: "We practice minimally invasive dentistry. With high-definition intraoral cameras and laser diagnostic tools, we detect cavities at their earliest stages, removing decayed enamel conservatively and restoring the tooth with multi-layered, nano-hybrid composite resin that blends invisibly.",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
        highlights: ["Micro-invasive enamel preservation", "Mercury-free tooth colored resin", "Restores original tooth anatomy and bite"]
      },
      {
        id: "root-canal-treatment",
        name: "Root Canal Treatment",
        categoryId: "general-dentistry",
        categoryName: "General Dentistry",
        shortDesc: "Single-sitting rotary endodontics to save infected teeth and provide instant pain relief.",
        overview: "Gentle removal of inflamed or infected pulp tissue inside the tooth root, followed by sterile 3D seal and reinforcement.",
        detailedExplanation: "At Dental Studio, root canal treatments are gentle, quiet, and pain-free. Dr. Inamdar's team utilizes motorized rotary titanium files, apex locators, and bio-ceramic sealers to disinfect the inner canals thoroughly, usually completing the treatment in a single comfortable visit.",
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
        highlights: ["Single-sitting comfort", "Electronic precision apex localization", "Saves natural tooth from extraction"]
      },
      {
        id: "crowns-and-bridges",
        name: "Crowns & Bridges",
        categoryId: "general-dentistry",
        categoryName: "General Dentistry",
        shortDesc: "High-strength monolithic zirconia and E-max porcelain caps to protect compromised teeth.",
        overview: "Custom-milled ceramic crowns engineered at our in-house DentMatrix lab for maximum structural strength and translucency.",
        detailedExplanation: "Crowns reinforce heavily decayed, fractured, or post-root-canal teeth. Bridges bridge the gap created by one or more missing teeth. We use zero dark-metal margins; every restoration is crafted from translucent zirconia or lithium disilicate for lifelike reflection.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
        highlights: ["100% metal-free biocompatible ceramics", "Digital CAD/CAM micron fit", "Same-day crown capability"]
      },
      {
        id: "soft-tissue-management",
        name: "Soft Tissue Management",
        categoryId: "general-dentistry",
        categoryName: "General Dentistry",
        shortDesc: "Periodontal deep scaling, laser gum depigmentation, and treatment for bleeding gums.",
        overview: "Target deep bacteria pockets, treat gum inflammation, and sculpt symmetrical pink gum margins.",
        detailedExplanation: "Healthy gums are the foundation of healthy teeth. Our periodontal soft tissue management includes laser pocket decontamination, deep root planing, and aesthetic gum contouring to stop bleeding and eliminate dark gum pigmentation.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        highlights: ["Laser-assisted periodontal therapy", "Stops bleeding and bad breath", "Aesthetic gingival recontouring"]
      },
      {
        id: "dental-extractions",
        name: "Dental Extractions",
        categoryId: "general-dentistry",
        categoryName: "General Dentistry",
        shortDesc: "Atraumatic tooth removal and surgical wisdom tooth extractions with socket preservation.",
        overview: "Minimally invasive extractions designed to preserve surrounding bone for future implant placement.",
        detailedExplanation: "When a tooth cannot be saved or an impacted wisdom tooth causes severe crowding, our atraumatic extraction protocol uses micro-luxators to ease the tooth out with minimal bone trauma, coupled with PRF (Platelet-Rich Fibrin) for rapid, comfortable healing.",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        highlights: ["Atraumatic bone-preserving techniques", "Painless impacted third molar removal", "Platelet-Rich Fibrin (PRF) accelerated healing"]
      }
    ]
  },
  {
    id: "aesthetic-dentistry",
    name: "Aesthetic Dentistry",
    shortDesc: "Sculpt the smile of your dreams with digital facially driven porcelain veneers, whitening, and smile design.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    iconName: "Sparkles",
    items: [
      {
        id: "digital-smile-design",
        name: "Digital Smile Design",
        categoryId: "aesthetic-dentistry",
        categoryName: "Aesthetic Dentistry",
        shortDesc: "Virtual 3D preview and test-drive of your new smile before any treatment begins.",
        overview: "Facial photography and 3D intraoral scans analyzed to design teeth contours perfectly proportional to your eyes and lips.",
        detailedExplanation: "Digital Smile Design (DSD) eliminates guesswork. We photograph your face from multiple angles, capture your dynamic speaking and smiling expressions, and design the ideal tooth proportions on-screen. You can even try in a physical temporary mockup to experience your new look before proceeding.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
        highlights: ["Test-drive your smile beforehand", "Facially harmonized tooth anatomy", "Interactive 3D patient consultation"]
      },
      {
        id: "smile-makeover",
        name: "Smile Makeover",
        categoryId: "aesthetic-dentistry",
        categoryName: "Aesthetic Dentistry",
        shortDesc: "Comprehensive aesthetic transformation combining veneers, teeth whitening, and alignment.",
        overview: "Custom aesthetic makeover tailored to your unique personality and facial features.",
        detailedExplanation: "A smile makeover addresses multiple aesthetic concerns simultaneously: gaps, chips, discolored enamel, and crooked teeth. Dr. Inamdar coordinates a harmonious treatment plan that turns tired teeth into a vibrant, photogenic masterpiece.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        highlights: ["Bespoke personalized aesthetic plan", "Minimal enamel preparation", "Completed in 2 to 3 comfortable visits"]
      },
      {
        id: "dental-veneers",
        name: "Dental Veneers",
        categoryId: "aesthetic-dentistry",
        categoryName: "Aesthetic Dentistry",
        shortDesc: "Ultra-thin custom porcelain and composite laminates bonded to front teeth.",
        overview: "Conceal stubborn stains, uneven edges, gaps, and chips with natural-looking porcelain shells.",
        detailedExplanation: "Hand-crafted by master ceramists at our DentMatrix Lab, our ultra-thin porcelain veneers are just 0.3mm to 0.5mm thick. They replicate natural dental translucency, reflect light beautifully, and resist coffee and wine stains for over 15 to 20 years.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        highlights: ["Ultra-thin conservative preparation", "100% stain-resistant glazed ceramic", "Hand-crafted in DentMatrix Lab"]
      },
      {
        id: "teeth-whitening",
        name: "Teeth Whitening",
        categoryId: "aesthetic-dentistry",
        categoryName: "Aesthetic Dentistry",
        shortDesc: "In-office laser whitening that brightens your smile up to 8 shades in just 60 minutes.",
        overview: "Safe, fast, and highly effective whitening gel activated by specialized dental LED technology.",
        detailedExplanation: "Say goodbye to coffee, tea, and aging yellow stains. Our safe in-office laser whitening penetrates deep enamel pores to break down stubborn discolored pigments without damaging enamel, backed by desensitizing protocols for zero post-procedure sensitivity.",
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
        highlights: ["Up to 8 shades brighter in 1 hour", "Safe on tooth enamel & gums", "Includes take-home maintenance kit"]
      },
      {
        id: "tooth-colored-fillings",
        name: "Tooth Colored Fillings",
        categoryId: "aesthetic-dentistry",
        categoryName: "Aesthetic Dentistry",
        shortDesc: "Biomimetic composite restorations that invisibly match your natural enamel shade.",
        overview: "Replace old ugly silver amalgam fillings with strong, healthy, tooth-colored composite resins.",
        detailedExplanation: "We use high-grade nano-ceramic composites that bond directly to the tooth structure, restoring up to 90% of the tooth's original strength while remaining indistinguishable from surrounding enamel.",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
        highlights: ["100% mercury-free", "Chemically bonds to tooth structure", "Flawless shade blending"]
      }
    ]
  },
  {
    id: "orthodontic-treatment",
    name: "Orthodontic Treatment",
    shortDesc: "Straighten misaligned teeth and fix bites with invisible aligners or modern aesthetic braces.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    iconName: "AlignJustify",
    items: [
      {
        id: "braces-treatment",
        name: "Braces Treatment",
        categoryId: "orthodontic-treatment",
        categoryName: "Orthodontic Treatment",
        shortDesc: "Advanced low-friction metal and tooth-colored ceramic brackets for all orthodontic corrections.",
        overview: "Reliable, precision alignment for complex crowding, deep bites, and severe skeletal bite discrepancies.",
        detailedExplanation: "Traditional and ceramic braces remain the most versatile tool for complex tooth movements and bite correction. Modern self-ligating brackets apply lighter, continuous biological forces, reducing treatment discomfort and shortening overall clinic time.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        highlights: ["Aesthetic ceramic brackets available", "Low-friction self-ligating technology", "Proven results for complex malocclusions"]
      },
      {
        id: "aligners-invisalign",
        name: "Aligners / Invisalign",
        categoryId: "orthodontic-treatment",
        categoryName: "Orthodontic Treatment",
        shortDesc: "Virtually invisible, removable clear aligners to straighten teeth discreetly.",
        overview: "Straighten your teeth without wires or dietary restrictions using laser-trimmed clear aligners.",
        detailedExplanation: "Clear aligners are custom-made medical grade plastic trays that gently move your teeth in sequential increments. Remove them for meals, meetings, and photos, and maintain normal brushing and flossing throughout your treatment.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
        highlights: ["Nearly invisible when worn", "Removable for meals and oral hygiene", "3D computerized progress simulation"]
      }
    ]
  },
  {
    id: "kids-dentistry",
    name: "Kids Dentistry",
    shortDesc: "Gentle, compassionate, and fun dental care specially tailored for infants, children, and teens.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    iconName: "Smile",
    items: [
      {
        id: "preventive-treatments-kids",
        name: "Preventive Treatments",
        categoryId: "kids-dentistry",
        categoryName: "Kids Dentistry",
        shortDesc: "Fluoride applications, pit & fissure sealants, and early interceptive oral habits counseling.",
        overview: "Shield young developing enamel against aggressive cavities and guide healthy jaw development.",
        detailedExplanation: "Children's teeth have thinner enamel, making them vulnerable to rapid decay. Our preventive pediatric care includes fluoride varnish that strengthens mineral density and BPA-free dental sealants that seal deep grooves against cavity bacteria.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        highlights: ["Painless, quick preventive applications", "Enamel-hardening fluoride therapy", "Cavity-shield fissure sealants"]
      },
      {
        id: "treatment-under-general-anaesthesia",
        name: "Treatment under General Anaesthesia",
        categoryId: "kids-dentistry",
        categoryName: "Kids Dentistry",
        shortDesc: "Safe, stress-free full dental care while your child sleeps comfortably under pediatric anesthesiologists.",
        overview: "Complete extensive pediatric dental procedures in a single session for anxious or young patients.",
        detailedExplanation: "For very young children with severe early childhood caries or intense anxiety, treatment under general anaesthesia in an accredited hospital setting allows our pediatric dentists to resolve all dental issues in one safe, comfortable sleep session with zero emotional trauma.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        highlights: ["Supervised by pediatric medical anesthesiologists", "Resolves all cavities in a single visit", "Zero fear, anxiety, or pain for child"]
      },
      {
        id: "myofunctional-dentistry",
        name: "Myofunctional Dentistry",
        categoryId: "kids-dentistry",
        categoryName: "Kids Dentistry",
        shortDesc: "Correct mouth breathing, thumb sucking, and tongue thrusting to foster natural jaw alignment.",
        overview: "Early intervention to treat the root causes of crooked teeth and sleep-disordered breathing in children.",
        detailedExplanation: "Poor oral habits such as mouth breathing, reverse swallowing, and thumb sucking restrict upper jaw development and cause crooked teeth. Our myofunctional trainers gently exercise the tongue and facial muscles, guiding straight teeth growth naturally without heavy braces later.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        highlights: ["Corrects root causes of crooked teeth", "Improves airway, posture, and nasal breathing", "Reduces need for future tooth extractions"]
      },
      {
        id: "special-needs-dentistry",
        name: "Treatment for Special Needs Children and Adults",
        categoryId: "kids-dentistry",
        categoryName: "Kids Dentistry",
        shortDesc: "Dedicated compassionate dental care tailored for individuals with physical, cognitive, or sensory challenges.",
        overview: "A patient, customized approach accommodating sensory sensitivities and specialized medical histories.",
        detailedExplanation: "Dental Studio is committed to accessible, inclusive care for individuals with autism, Down syndrome, cerebral palsy, or other special healthcare needs. Our gentle staff adapts appointments with sensory accommodations, behavioral management, or sedation as required.",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        highlights: ["Sensory-adapted calming environment", "Experienced special care clinical team", "Wheelchair-accessible operatory suites"]
      }
    ]
  }
];

/* Flat lookup array for all sub-treatments */
export const ALL_SUB_TREATMENTS: SubTreatmentItem[] = TREATMENT_CATEGORIES.flatMap(cat => cat.items);

/* -------------------------------------------------------------
 * SUPER SPECIALITY ITEMS (As per screenshot)
 * ------------------------------------------------------------- */
export const SUPER_SPECIALITY_ITEMS: SuperSpecialityItem[] = [
  {
    id: "single-same-day-dentistry",
    title: "Single / Same Day Dentistry",
    tagline: "Precision Ceramic Restorations in a Single Visit",
    shortDesc: "Walk in with damaged teeth, walk out the same day with permanently milled ceramic crowns and implants.",
    overview: "Leveraging chairside CAD/CAM milling and in-house 3D printing, we design, fabricate, and cement your dental crown or bridge in under 2 hours.",
    detailedExplanation: "Gone are the days of multiple clinic appointments, uncomfortable temporary plastic caps, and waiting weeks for outside laboratories. At Dental Studio, our Same Day Dentistry workflow utilizes high-speed intraoral digital scanning and robotic diamond milling to craft monolithic zirconia or lithium disilicate restorations while you relax in our patient lounge.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    features: [
      "No temporary crowns that fall off or leak",
      "Optical digital scans replace messy impression trays",
      "Finished and cemented in a single 90-minute visit",
      "Immediate loading for suitable dental implant cases"
    ],
    highlights: ["Saves your valuable time", "Hospital-grade sterilization", "Micron-level computer margin fit"]
  },
  {
    id: "3d-facially-driven-dentistry",
    title: "3D Facially Driven Dentistry",
    tagline: "Designing Teeth to Perfectly Harmonize With Your Facial Aesthetics",
    shortDesc: "Holistic aesthetic dentistry planning that integrates facial balance, lip curvature, and eye symmetry into your smile.",
    overview: "We do not just look at isolated teeth; we evaluate how your smile enhances your facial contours, dynamic expressions, and speech.",
    detailedExplanation: "Every person has a unique facial architecture. 3D Facially Driven Dentistry connects full-face 3D photography, jaw relation measurements, and cone-beam scans into integrated planning software. Dr. Aslam Inamdar sculpts the length, width, angle, and emergence profile of your teeth to complement your eye line, cheekbones, and lip movement.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Full-face dynamic video and 3D facial capture",
      "Golden proportion aesthetic analysis",
      "Interactive 3D preview before touching teeth",
      "Preserves biological facial height and lip support"
    ],
    highlights: ["100% bespoke aesthetic outcome", "Prevents premature facial aging", "Natural appearance that never looks fake"]
  },
  {
    id: "dentmatrix-lab",
    title: "DentMatrix Lab",
    tagline: "3-D Planning | Digital Lab — Where Natural Smiles Are Engineered",
    shortDesc: "Our proprietary in-house digital dental laboratory equipped with 5-axis milling, 3D printing, and master ceramists.",
    overview: "Direct clinical-to-lab synergy allows Dr. Inamdar and master dental technicians to work side-by-side on your restorations.",
    detailedExplanation: "Most dental clinics outsource crowns and implants to commercial labs miles away, leading to delays and communication gaps. DentMatrix is Dental Studio's exclusive in-house digital lab. With state-of-the-art German 5-axis milling units, 3D surgical guide printers, and hand-layering ceramic furnaces, our master technicians can consult with you in the chair, verifying shade matching and micro-texture in person.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Direct communication between dentist, ceramist, and patient",
      "In-person custom custom tooth shade matching",
      "Rapid turnaround for modifications and adjustments",
      "Premium European certified zirconia and lithium disilicate materials"
    ],
    highlights: ["Sub-millimeter accuracy", "Zero lab shipping delays", "Strict quality control on every restoration"]
  },
  {
    id: "dental-tourism",
    title: "Dental Tourism",
    tagline: "World-Class Dental Care in Mumbai at a Fraction of International Costs",
    shortDesc: "Specialized concierge dental services for NRI and international patients visiting Mumbai for treatment.",
    overview: "Receive high-tier European-standard implantology, smile makeovers, and rehabilitation while enjoying a trip to India.",
    detailedExplanation: "Patients from the US, UK, Australia, UAE, and Europe travel to Dental Studio for world-class dental procedures at 60% to 75% savings compared to Western prices. Our International Patient Desk handles virtual pre-consultations, customized treatment itineraries, airport transfers, hotel accommodations, and expedited clinic scheduling.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Complimentary virtual video consultation with Dr. Aslam Inamdar",
      "Transparent upfront pricing with zero hidden fees",
      "Expedited scheduling so your care is finished within your travel dates",
      "Dedicated concierge for airport pickup and Mumbai accommodation"
    ],
    highlights: ["Save up to 70% with international warranty", "Fluent English-speaking clinical team", "Located in prime Kurla and South Mumbai"]
  }
];

/* -------------------------------------------------------------
 * GALLERY ITEMS (Categorized as per screenshot: Patient Gallery, Implant Smile Gallery, Clinic Gallery, DentMatrix Lab Gallery)
 * ------------------------------------------------------------- */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    category: "Patient Gallery",
    title: "10-Unit Ultra-Thin Porcelain Veneers",
    description: "Closed gaps, corrected deep tetracycline discoloration, and rejuvenated smile contour.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    tag: "Aesthetic Dentistry"
  },
  {
    id: "gal-2",
    category: "Patient Gallery",
    title: "Digital Smile Design Transformation",
    description: "Facially driven cosmetic contouring creating youthful, balanced, and radiant smile symmetry.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    tag: "Smile Makeover"
  },
  {
    id: "gal-3",
    category: "Patient Gallery",
    title: "Invisible Aligner Bite & Spacing Correction",
    description: "Resolved severe upper and lower crowding in 10 months with clear aligners.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    tag: "Orthodontics"
  },
  {
    id: "gal-4",
    category: "Patient Gallery",
    title: "Cosmetic Diastema Closure & Laser Teeth Whitening",
    description: "Single-visit aesthetic enamel bonding restoring ideal front tooth proportions.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80",
    tag: "Aesthetic Dentistry"
  },
  {
    id: "gal-5",
    category: "Implant Smile Gallery",
    title: "Full Arch Immediate Implant Transformation",
    description: "All-on-6 immediate load zirconia bridge restoring full bite force and radiant aesthetics.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    tag: "Dental Implants"
  },
  {
    id: "gal-6",
    category: "Implant Smile Gallery",
    title: "Single Anterior Missing Incisor Implant",
    description: "Preserved natural pink papilla and matched adjacent tooth translucency seamlessly.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    tag: "Dental Implants"
  },
  {
    id: "gal-7",
    category: "Implant Smile Gallery",
    title: "Computer-Guided Full Mouth Rehabilitation",
    description: "Keyhole flapless surgical placement planned via 3D CBCT digital imaging.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    tag: "Full Mouth Rehab"
  },
  {
    id: "gal-8",
    category: "Clinic Gallery",
    title: "State-of-the-Art Ergonomic Operatory Suite",
    description: "Acoustically isolated operatories with panoramic digital monitors and ambient lighting.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    tag: "Clinic Facility"
  },
  {
    id: "gal-9",
    category: "Clinic Gallery",
    title: "Dental Studio Kurla Clinic Reception & Consultation Lounge",
    description: "Warm, welcoming atmosphere eliminating all conventional dental anxieties.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    tag: "Clinic Facility"
  },
  {
    id: "gal-10",
    category: "DentMatrix Lab Gallery",
    title: "5-Axis High Precision German Milling Unit",
    description: "Milling zirconia and hybrid ceramic dental crowns with micron-level margin fit.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80",
    tag: "DentMatrix Lab"
  },
  {
    id: "gal-11",
    category: "DentMatrix Lab Gallery",
    title: "3D CAD/CAM Virtual Surgical Guide Printing",
    description: "Printing biocompatible guided surgical templates for computer-guided implant placement.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    tag: "DentMatrix Lab"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: "case-1",
    category: "Smile Makeover",
    title: "Full Smile Makeover with Porcelain Veneers",
    description: "Correction of severe enamel wear, discoloration, and irregular spacing.",
    beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "case-2",
    category: "Dental Implants",
    title: "Anterior Missing Tooth Fixed with Dental Implant",
    description: "Replaced missing central incisor with natural gum contour and color match.",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "case-3",
    category: "Cosmetic Dentistry",
    title: "In-Office Laser Teeth Whitening & Edge Bonding",
    description: "8 shades brighter in a single 60-minute session with smooth chipped tooth repair.",
    beforeImg: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "case-4",
    category: "Orthodontics",
    title: "Clear Aligner Therapy - Severe Crowding Resolved",
    description: "Corrected deep bite and alignment in 11 months with invisible aligners.",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
  }
];

export const VIDEO_REVIEWS: TestimonialItem[] = [
  {
    id: "vid-1",
    patientName: "Aditi Mishra",
    treatment: "Smile Makeover Patient",
    location: "Mumbai",
    clinic: "South Mumbai Clinic",
    date: "March 2026",
    quote: "The entire experience was smooth and comfortable. The results have been amazing, my smile has never looked better! Dr. Aslam and the DentMatrix team gave me total confidence.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    videoThumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    duration: "1:45 min",
    verified: true
  },
  {
    id: "vid-2",
    patientName: "Vikram Singhania",
    treatment: "Dental Implant Patient",
    location: "Bandra, Mumbai",
    clinic: "Kurla Clinic",
    date: "February 2026",
    quote: "I was extremely anxious about getting an implant. Dr. Aslam and his DentMatrix lab team explained every detail with 3D scans and the procedure was completely painless. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    videoThumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    duration: "2:15 min",
    verified: true
  },
  {
    id: "vid-3",
    patientName: "Dr. Farida Merchant",
    treatment: "Full Mouth Rehabilitation",
    location: "Colaba, Mumbai",
    clinic: "South Mumbai Clinic",
    date: "January 2026",
    quote: "Being a medical professional myself, I evaluated many dental centers. Dental Studio's in-house 3D lab and Dr. Inamdar's biomechanical precision reconstructed my bite and smile flawlessly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    videoThumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    duration: "2:50 min",
    verified: true
  },
  {
    id: "vid-4",
    patientName: "Rahul Nair",
    treatment: "Dental Tourism & Same-Day Implants",
    location: "Dubai, UAE",
    clinic: "South Mumbai Clinic",
    date: "December 2025",
    quote: "I traveled from Dubai specifically for Dr. Inamdar's same-day dentistry. Within 48 hours, I had my temporary fixed teeth. The cost was a fraction of overseas clinics and the quality is peerless.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    videoThumb: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    duration: "1:35 min",
    verified: true
  },
  {
    id: "vid-5",
    patientName: "Sneha Shah",
    treatment: "Clear Aligners & Orthodontics",
    location: "Kurla West",
    clinic: "Kurla Clinic",
    date: "November 2025",
    quote: "No painful metal wires! My aligner journey took just 8 months. The 3D scan visualization kept me motivated every month seeing teeth glide into place. Thank you Dental Studio!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    videoThumb: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    duration: "1:55 min",
    verified: true
  }
];

export const TEXT_REVIEWS: TestimonialItem[] = [
  {
    id: "text-1",
    patientName: "Pooja Kulkarni",
    treatment: "Digital Smile Design & Veneers",
    location: "South Mumbai",
    clinic: "South Mumbai Clinic",
    date: "2 weeks ago",
    quote: "State of the art clinic in South Mumbai with international standards. The hygiene, digital planning, and attention to detail from Dr. Aslam Inamdar is second to none. He patiently explained each step on 3D monitor screens before beginning.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    verified: true
  },
  {
    id: "text-2",
    patientName: "Karan Mehra",
    treatment: "Painless Root Canal & Zirconia Crown",
    location: "Kurla West",
    clinic: "Kurla Clinic",
    date: "1 month ago",
    quote: "I was suffering from excruciating toothache over the weekend. Dr. Inamdar's team accommodated me immediately. The root canal was 100% painless under local anesthesia and the custom DentMatrix zirconia crown fits like my original tooth.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    verified: true
  },
  {
    id: "text-3",
    patientName: "Sunita Deshmukh",
    treatment: "Kids Dentistry & Preventive Care",
    location: "Dadar, Mumbai",
    clinic: "South Mumbai Clinic",
    date: "1 month ago",
    quote: "My 7-year-old daughter was previously terrified of dentists. Dental Studio's child-friendly team and gentle approach made her feel like she was in a playhouse! She had her cavity fillings done without shedding a single tear.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
    verified: true
  },
  {
    id: "text-4",
    patientName: "Capt. Rajesh Malhotra",
    treatment: "All-on-4 Full Arch Dental Implants",
    location: "Kurla",
    clinic: "Kurla Clinic",
    date: "2 months ago",
    quote: "After struggling with loose removable dentures for 6 years, Dr. Aslam gave me fixed permanent teeth with 4 implants. I can now eat apples and bite into solid food without fear. Life-changing care by a master clinician.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    verified: true
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  ...VIDEO_REVIEWS,
  ...TEXT_REVIEWS
];

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: "kurla",
    name: "Kurla Clinic",
    area: "Kurla West, Mumbai",
    phone: "+91 98765 43210",
    hours: "Mon – Sat: 11:00 AM – 8:00 PM",
    address: "Shop 4 & 5, Crystal Heights, LBS Marg, Near Phoenix Marketcity, Kurla West, Mumbai 400070",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    coords: { x: 55, y: 48 }
  },
  {
    id: "south-mumbai",
    name: "South Mumbai Clinic",
    area: "South Mumbai, Mumbai",
    phone: "+91 99876 54321",
    hours: "Mon – Sat: 11:00 AM – 8:00 PM",
    address: "Suite 102, Ocean Breeze Medical Chambers, Marine Lines / Colaba Causeway, South Mumbai 400020",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    coords: { x: 42, y: 75 }
  }
];
