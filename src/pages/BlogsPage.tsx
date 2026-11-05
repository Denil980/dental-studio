import React, { useState } from 'react';
import { PageView } from '../types';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Search, 
  ChevronRight, 
  X, 
  Share2, 
  Check, 
  Sparkles,
  Bookmark
} from 'lucide-react';

interface BlogsPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBookingModal: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'Dental Implants' | 'Cosmetic Dentistry' | 'Oral Health' | 'Digital Tech';
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  featured?: boolean;
  content: {
    introduction: string;
    sections: { heading: string; body: string }[];
    clinicalTakeaway: string;
  };
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'single-visit-implants-guide',
    title: 'Immediate-Load Implants: Same-Day Permanent Teeth Explained',
    excerpt: 'How Dr. Aslam Inamdar and DentMatrix 3D Digital Lab engineer natural-looking fixed teeth in a single visit without months of waiting.',
    category: 'Dental Implants',
    readTime: '6 min read',
    date: 'Oct 28, 2026',
    author: 'Dr. Aslam Inamdar',
    authorRole: 'Chief Prosthodontist & Implantologist',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    content: {
      introduction: 'For decades, traditional implant protocols required patients to endure four to six months of bone healing with a removable denture before final teeth could be placed. With advancements in primary stability biomechanics and in-house 3D CAD/CAM milling at DentMatrix, immediate-load dental implants have revolutionized the patient journey.',
      sections: [
        {
          heading: '1. The Science of Immediate Primary Stability',
          body: 'Immediate loading relies on precise bone anchorage achieved through progressive-thread titanium fixtures. By utilizing dual-axis CBCT 3D planning, we pinpoint the exact bone density and angulation, ensuring zero micro-movement during the critical osseointegration phase.'
        },
        {
          heading: '2. The DentMatrix Digital Workflow',
          body: 'On the day of your surgery, high-speed intraoral optical scans capture the post coordinates in seconds. Our in-house digital lab designs and precision-mills a custom PMMA or zirconia bridge that seats onto the implants that very afternoon.'
        },
        {
          heading: '3. Who is an Ideal Candidate?',
          body: 'Patients presenting with failing dentition, broken root crowns, or long-standing removable dentures are prime candidates. Adequate bone volume and good periodontal health are confirmed during your digital pre-surgical evaluation.'
        }
      ],
      clinicalTakeaway: 'Immediate implants eliminate the emotional and social stress of living without teeth, delivering functional stability and natural aesthetics from day one.'
    }
  },
  {
    id: 'facially-driven-smile-design',
    title: 'Facially Driven Smile Design: When Art Meets Digital Precision',
    excerpt: 'Why modern cosmetic dentistry designs smiles based on your unique facial proportions, lips, and eye horizon rather than generic tooth templates.',
    category: 'Cosmetic Dentistry',
    readTime: '5 min read',
    date: 'Oct 20, 2026',
    author: 'Dr. Aslam Inamdar',
    authorRole: 'Aesthetic Specialist',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
    content: {
      introduction: 'A great smile is not just about straight, ultra-white teeth. A natural, radiant smile must harmonize perfectly with your facial contours, pupillary line, smile curvature, and speech dynamics.',
      sections: [
        {
          heading: 'Beyond Cookie-Cutter Veneers',
          body: 'Generic dental templates often result in teeth that look unnatural or bulky. Facially Driven Dentistry integrates high-definition 3D facial scans with 3D intraoral dental scans, allowing our team to design teeth that follow your natural lip curvature and resting lip display.'
        },
        {
          heading: 'Digital Mock-Up Simulation',
          body: 'Before a single tooth is touched, we transfer the digital smile simulation directly into your mouth using a composite mock-up. You can look in the mirror, smile, speak, and preview your future appearance in real life.'
        }
      ],
      clinicalTakeaway: 'The best aesthetic dentistry is invisible—friends and colleagues should notice your radiant confidence, never the dental work.'
    }
  },
  {
    id: 'porcelain-veneers-longevity-care',
    title: 'Porcelain Veneers: How Long Do They Last and How to Care for Them',
    excerpt: 'Debunking the myths around ceramic veneers, tooth preparation depth, stain resistance, and how to maintain them for 15 to 20+ years.',
    category: 'Cosmetic Dentistry',
    readTime: '4 min read',
    date: 'Oct 12, 2026',
    author: 'Clinical Prosthodontics Team',
    authorRole: 'Dental Studio Specialists',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    content: {
      introduction: 'Porcelain and lithium disilicate (E.max) veneers are the gold standard for correcting severe enamel discoloration, micro-fractures, gaps, and worn edges. But how durable are they in daily life?',
      sections: [
        {
          heading: 'Minimally Invasive Micro-Preparation',
          body: 'Modern ceramics can be milled as thin as 0.3mm to 0.5mm, requiring conservative enamel preparation. By keeping bonding strictly within the enamel layer, shear bond strength is maximized, preventing veneer dislodgement.'
        },
        {
          heading: 'Lifespan & Routine Maintenance',
          body: 'Clinical studies show ultra-high success rates exceeding 95% at 15 years when placed by experienced prosthodontists. Regular non-abrasive brushing, nightguards for clenchers, and bi-annual dental cleanings preserve their glaze indefinitely.'
        }
      ],
      clinicalTakeaway: 'Quality ceramic veneers do not stain from coffee or tea and retain their glass-like gloss for decades.'
    }
  },
  {
    id: 'full-mouth-rehab-guide',
    title: 'Full Mouth Rehabilitation: Rebuilding Worn Bites and Lost Facial Height',
    excerpt: 'How restoring eroded enamel and collapsed vertical dimension alleviates jaw joint pain (TMD) and takes years off your facial appearance.',
    category: 'Dental Implants',
    readTime: '7 min read',
    date: 'Sep 29, 2026',
    author: 'Dr. Aslam Inamdar',
    authorRole: 'Prosthodontic Director',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    content: {
      introduction: 'Severe nocturnal bruxism, acid erosion, and multiple missing teeth cause gradual loss of vertical facial height. Patients often notice sunken lips, deep nasolabial folds, and chronic clicking or pain in the jaw joints.',
      sections: [
        {
          heading: 'Comprehensive Occlusal Diagnostics',
          body: 'Full Mouth Rehabilitation is a systematic reconstruction of every tooth in both jaws to re-establish physiological chewing harmony, muscular relaxation, and ideal jaw alignment.'
        },
        {
          heading: 'Aesthetic Rejuvenation of Lower Third of Face',
          body: 'By restoring just 2 to 4 millimeters of lost vertical dimension, facial muscle tone is restored, wrinkles around the mouth soften, and premature facial sagging is reversed.'
        }
      ],
      clinicalTakeaway: 'Full mouth reconstruction isn\'t merely cosmetic—it re-engineers your entire masticatory system for comfortable, lifelong chewing.'
    }
  },
  {
    id: 'digital-dentistry-cbct-future',
    title: 'Inside DentMatrix: How CBCT 3D Scanning Prevents Implant Complications',
    excerpt: 'Why 2D panoramic X-rays are outdated for implant planning and how sub-millimeter 3D imaging guarantees nerve and sinus safety.',
    category: 'Digital Tech',
    readTime: '5 min read',
    date: 'Sep 15, 2026',
    author: 'DentMatrix Digital Lab Team',
    authorRole: '3D Imaging Engineers',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80',
    content: {
      introduction: 'In dental implantology, missing anatomical structures by even a single millimeter can lead to nerve paresthesia or sinus perforation. At Dental Studio, every surgical plan is verified in 3-dimensional virtual space.',
      sections: [
        {
          heading: 'The Limitation of 2D X-Rays',
          body: 'Standard 2D panoramic radiographs distort bone dimensions by up to 25% and hide bone width entirely. Cone Beam Computed Tomography (CBCT) captures true 1:1 volumetric slices with zero distortion.'
        },
        {
          heading: '3D Guided Surgical Templates',
          body: 'Using the 3D DICOM scan, our software models the mandibular nerve canal and maxillary sinus. A 3D-printed surgical guide slots securely over your gums, piloting the drill with sub-millimeter precision.'
        }
      ],
      clinicalTakeaway: 'Guided 3D implant surgery minimizes trauma, eliminates guesswork, and results in virtually painless post-operative recovery.'
    }
  },
  {
    id: 'gum-health-and-systemic-wellness',
    title: 'The Oral-Systemic Connection: How Periodontal Health Protects Your Heart',
    excerpt: 'The critical link between chronic gum disease bacteria and cardiovascular inflammation, diabetes management, and overall longevity.',
    category: 'Oral Health',
    readTime: '4 min read',
    date: 'Aug 30, 2026',
    author: 'Clinical Periodontics Team',
    authorRole: 'Dental Studio Specialists',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    content: {
      introduction: 'Oral wellness does not end at your teeth. Mounting cardiological and immunological research confirms that chronic inflammation in oral tissues sends bacterial toxins into the bloodstream.',
      sections: [
        {
          heading: 'Bleeding Gums Are Not Normal',
          body: 'If your hands bled every time you washed them, you would seek immediate medical care. Yet millions ignore bleeding gums during daily brushing. Bleeding is the hallmark sign of active periodontal infection.'
        },
        {
          heading: 'Preventive Ultrasonic Protocols',
          body: 'Our clinic utilizes gentle ultrasonic scaling and subgingival laser debridement to sterilize infected pockets without scalpels or stitches, preserving the natural attachment of your teeth.'
        }
      ],
      clinicalTakeaway: 'Investing in preventive periodontal cleanings every six months protects your heart, regulates blood sugar, and preserves your natural smile for life.'
    }
  }
];

export const BlogsPage: React.FC<BlogsPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Dental Implants', 'Cosmetic Dentistry', 'Oral Health', 'Digital Tech'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="space-y-12 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/80 to-white pt-8 pb-12 border-b border-sky-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-[#0284C7] cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-semibold">Dental Blogs & Clinical Insights</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <TypewriterHeading
              text="Dental Studio Clinical Blogs"
              className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading"
            />
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
              Expert articles, surgical insights, and patient guides written by Dr. Aslam Inamdar and the DentMatrix digital lab team.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Featured Blog Highlight */}
        {selectedCategory === 'All' && !searchQuery && (
          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:border-[#0284C7] transition-all group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden bg-slate-100">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover card-img-zoom group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#0284C7] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Article</span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] font-bold">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading leading-tight group-hover:text-[#0284C7] transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed font-body">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold text-sm">
                        AI
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{featuredPost.author}</p>
                        <p className="text-[11px] text-slate-500">{featuredPost.authorRole}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveArticle(featuredPost)}
                      className="px-5 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2 border-b border-slate-200">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-[#0284C7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search clinical topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-slate-800"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <ScrollReveal key={post.id} index={idx} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#0284C7] transition-all flex flex-col justify-between h-full group hover:shadow-md">
                
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover card-img-zoom group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#0284C7] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 font-heading leading-snug group-hover:text-[#0284C7] transition-colors line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed font-body line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900">{post.author}</p>
                    <p className="text-[10px] text-slate-400">{post.authorRole}</p>
                  </div>

                  <button
                    onClick={() => setActiveArticle(post)}
                    className="p-2.5 rounded-full bg-sky-50 text-[#0284C7] hover:bg-[#0284C7] hover:text-white transition-all cursor-pointer group-hover:translate-x-1"
                    title="Read Full Article"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA to Book or Ask Question */}
        <div className="bg-gradient-to-r from-sky-900 to-[#0284C7] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">Have Questions About Your Dental Condition?</h3>
            <p className="text-sky-100 text-sm leading-relaxed font-body">
              Schedule a one-on-one clinical evaluation with Dr. Aslam Inamdar at our Kurla West or South Mumbai clinic.
            </p>
          </div>
          <button
            onClick={onOpenBookingModal}
            className="px-8 py-3.5 rounded-full bg-white text-[#0284C7] hover:bg-sky-50 font-bold text-sm shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Book Consultation
          </button>
        </div>

      </section>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 shrink-0">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-slate-500">{activeArticle.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  title="Copy Link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-heading leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
                  <span className="font-bold text-slate-800">{activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.authorRole}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-sm">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed border-l-4 border-[#0284C7] pl-4 font-body">
                {activeArticle.content.introduction}
              </p>

              {/* Content Sections */}
              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                {activeArticle.content.sections.map((sec, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                      {sec.heading}
                    </h3>
                    <p>{sec.body}</p>
                  </div>
                ))}
              </div>

              {/* Clinical Takeaway Callout */}
              <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 sm:p-6 space-y-2">
                <h4 className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">Clinical Takeaway</h4>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {activeArticle.content.clinicalTakeaway}
                </p>
              </div>

              {/* CTA Inside Modal */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <p className="text-xs text-slate-500">
                  Need clinical advice on this treatment? Book a consultation with Dr. Aslam Inamdar.
                </p>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenBookingModal();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#0284C7] text-white text-xs font-bold hover:bg-[#0369A1] transition-all cursor-pointer whitespace-nowrap"
                >
                  Book Appointment
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
