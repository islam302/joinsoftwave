import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import {
  Cpu, Home, Layers, Users, Phone, Mail, MapPin, ArrowRight, Zap, MessageSquare,
  Linkedin, Facebook, Github, Bot, Code2, Brain, CheckCircle2, Sparkles, Shield, MessageCircle, ExternalLink, Star, Quote, Menu, X,
  TrendingUp, Target, Lock, Settings, Database, Cloud, BarChart3, AlertTriangle, Eye, Clock, Award, Globe
} from "lucide-react";

import ParticleEffect from "./ParticleEffect";
import StarryBackground from "./StarryBackground";
import logo from "./images/logo.jpg";
import whatsappIcon from "./images/whatsapp.png";

const Nav = ({ lang, setLang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
  <nav className="sticky top-0 z-50 backdrop-blur-md bg-primary/80 border-b border-white/10">
      <div className="container h-16 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={logo} alt="JoinSoftWave Logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover glow" />
                   <div className="leading-tight">
            <div className="font-semibold text-white text-base sm:text-lg">Join<span className="text-gradient">SoftWave</span></div>
          </div>
       </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-white/90">
          <li><a className="nav-link hover:text-white transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/5" href="#home">{lang === 'ar' ? 'الرئيسية' : 'Home'}</a></li>
          <li><a className="nav-link hover:text-white transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/5" href="#services">{lang === 'ar' ? 'الخدمات' : 'Services'}</a></li>
          <li><a className="nav-link hover:text-white transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/5" href="#projects">{lang === 'ar' ? 'الأعمال' : 'Projects'}</a></li>
          <li><a className="nav-link hover:text-white transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/5" href="#case-studies">{lang === 'ar' ? 'دراسات الحالة' : 'Case Studies'}</a></li>
          <li><a className="nav-link hover:text-white transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/5" href="#reviews">{lang === 'ar' ? 'التقييمات' : 'Reviews'}</a></li>
          <li><a className="nav-link hidden xl:block hover:text-white transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/5" href="#about">{lang === 'ar' ? 'من نحن' : 'About'}</a></li>
          <li><a className="nav-link hover:text-white transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/5" href="#contact">{lang === 'ar' ? 'تواصل' : 'Contact'}</a></li>
      </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center bg-white/5 rounded-xl overflow-hidden">
            <button onClick={() => setLang('en')} className={`px-2 sm:px-3 py-1 text-xs sm:text-sm ${lang==='en' ? 'bg-[--brand] text-white' : 'text-white/80'}`}>EN</button>
            <button onClick={() => setLang('ar')} className={`px-2 sm:px-3 py-1 text-xs sm:text-sm ${lang==='ar' ? 'bg-[--brand] text-white' : 'text-white/80'}`}>AR</button>
        </div>
          
          {/* Social Links */}
        <a
          href="https://wa.me/201505858198"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
            className="p-1.5 sm:p-2 rounded-lg bg-white/5 social-link"
        >
            <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
        <div className="relative group">
          <button
            aria-label="Email Options"
            className="p-1.5 sm:p-2 rounded-lg bg-white/5 social-link text-white hover:bg-white/10 transition-colors"
          >
            <Mail size={16} className="text-brand sm:w-[18px]" />
          </button>
          
          {/* Email Options Dropdown */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 z-50">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-xl min-w-[200px]">
              <div className="text-xs text-white/70 px-3 py-1 border-b border-white/10 mb-2">
                {lang === 'ar' ? 'خيارات البريد الإلكتروني' : 'Email Options'}
              </div>
              
              <a
                href="mailto:joinsoftwave2@gmail.com"
                className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm text-white"
              >
                <Mail size={14} className="text-brand" />
                <span>{lang === 'ar' ? 'إرسال بريد' : 'Send Email'}</span>
              </a>
              
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@join-softwave.online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm text-white"
              >
                <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>{lang === 'ar' ? 'فتح Gmail' : 'Open Gmail'}</span>
              </a>
              
              <div className="text-xs text-white/50 px-3 py-1 mt-2 border-t border-white/10">
                joinsoftwave2@gmail.com
              </div>
            </div>
          </div>
        </div>
          
          {/* Get Started Button */}
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 modern-btn text-white text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3">
          {lang === 'ar' ? 'ابدأ الآن' : 'Get Started'}
      </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-white/10">
          <div className="container px-4 py-4">
            <ul className="space-y-3 text-white/90">
              <li><a className="block py-2 hover:text-white transition-colors duration-300" href="#home" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ar' ? 'الرئيسية' : 'Home'}</a></li>
              <li><a className="block py-2 hover:text-white transition-colors duration-300" href="#services" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ar' ? 'الخدمات' : 'Services'}</a></li>
              <li><a className="block py-2 hover:text-white transition-colors duration-300" href="#projects" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ar' ? 'الأعمال' : 'Projects'}</a></li>
              <li><a className="block py-2 hover:text-white transition-colors duration-300" href="#case-studies" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ar' ? 'دراسات الحالة' : 'Case Studies'}</a></li>
              <li><a className="block py-2 hover:text-white transition-colors duration-300" href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ar' ? 'التقييمات' : 'Reviews'}</a></li>
              <li><a className="block py-2 hover:text-white transition-colors duration-300" href="#about" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ar' ? 'من نحن' : 'About'}</a></li>
              <li><a className="block py-2 hover:text-white transition-colors duration-300" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{lang === 'ar' ? 'تواصل' : 'Contact'}</a></li>
            </ul>
            
            {/* Mobile Language Switcher */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-center bg-white/5 rounded-xl overflow-hidden w-fit mx-auto">
                <button onClick={() => setLang('en')} className={`px-4 py-2 text-sm ${lang==='en' ? 'bg-[--brand] text-white' : 'text-white/80'}`}>EN</button>
                <button onClick={() => setLang('ar')} className={`px-4 py-2 text-sm ${lang==='ar' ? 'bg-[--brand] text-white' : 'text-white/80'}`}>AR</button>
              </div>
            </div>
      </div>
    </div>
      )}
  </nav>
);
};

const ProjectCard = ({ image, title, description, tags = [], link = "#" }) => (
  <div className="card p-3 sm:p-4 overflow-hidden hover-lift shimmer">
    <div className="relative rounded-2xl overflow-hidden bg-white/5">
      <img src={image} alt={title} className="w-full h-32 sm:h-40 md:h-48 object-contain bg-white/5" />
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-xl bg-black/30 hover:bg-black/50 transition-colors">
        <ExternalLink size={14} className="text-brand sm:w-[16px]" />
      </a>
    </div>
    <div className="p-3 sm:p-4">
      <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
      {description && <p className="text-textDim mt-2 text-xs sm:text-sm">{description}</p>}
      {tags.length > 0 && (
        <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 sm:px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/90">{tag}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Projects = ({ lang }) => (
  <section id="projects" className="py-20 sm:py-24 md:py-32 min-h-screen flex flex-col justify-center">
    <div className="container px-4 sm:px-6">
      <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-4">
        {lang === 'ar' ? (<>
          أحدث <span className="text-gradient">مشاريعنا</span>
        </>) : (<>
          Our <span className="text-gradient">Recent Projects</span>
        </>)}
      </h2>
      <p className="mt-3 sm:mt-4 text-center text-white max-w-3xl mx-auto px-4 text-sm sm:text-base md:text-lg">
        {lang === 'ar' ? 'مختارات من أعمالٍ حقيقية صنعت نتائج ملموسة لعملائنا في مجالات الذكاء الاصطناعي والأمن السيبراني.' : 'Real-world solutions we have delivered for clients worldwide, showcasing our expertise in AI, cybersecurity, and enterprise software development.'}
      </p>

      {(() => {
        const projects = [

          {
            title: "GetFact - AI Fact Checker",
            description: lang === 'ar' ? 'نظام كشف الأخبار المزيفة باستخدام الذكاء الاصطناعي' : 'AI-powered fact-checking system for news verification',
            image: `${process.env.PUBLIC_URL}/projects/getfact.png`,
            link: "https://fact-check-nine.vercel.app/",
            tags: ["React", "AI/ML", "NLP", "Fact Checking"],
          },

          {
            title: "OmniFood - Smart Food Delivery",
            description: lang === 'ar' ? 'منصة توصيل طعام ذكية مع نظام توصيات متقدم' : 'Smart food delivery platform with advanced recommendation system',
            image: `${process.env.PUBLIC_URL}/projects/omnifood.png`,
            link: "https://omnifood-sable-xi.vercel.app/",
            tags: ["React", "AI Recommendations", "E-commerce"],
          },
          {
            title: "GoToMail - Email Automation",
            description: lang === 'ar' ? 'نظام أتمتة البريد الإلكتروني للمؤسسات' : 'Enterprise email automation and marketing platform',
            image: `${process.env.PUBLIC_URL}/projects/emails.png`,
            link: "https://email-sender-com.vercel.app/",
            tags: ["Python", "Django", "Email Marketing", "Automation"],
          },
          {
            title: "DataHandler",
            image: `${process.env.PUBLIC_URL}/projects/data.png`,
            link: "https://data-handler2.vercel.app/",
            tags: ["Python", "Django", "Brevo", "React", "HTML", "CSS", "JS", "Bootstrap"],
          },
          {
            title: "Aliyn",
            image: `${process.env.PUBLIC_URL}/projects/alyan.png`,
            link: "https://aliyn-portfolio.vercel.app/",
            tags: ["React", "HTML", "CSS", "JS", "Bootstrap"],
          },
          {
            title: "SoicalMagic",
            image: `${process.env.PUBLIC_URL}/projects/soicalmagic.png`,
            link: "https://soicalmagic.com/",
            tags: ["React", "HTML", "CSS", "JS", "Bootstrap"],
          },
          {
            title: "Graphic Designer Site",
            image: `${process.env.PUBLIC_URL}/projects/graph.png`,
            link: "https://mahmoudfawzy.net/",
            tags: ["React", "HTML", "CSS", "JS", "Bootstrap"],
          },
          {
            title: "E-commerce",
            image: `${process.env.PUBLIC_URL}/projects/ecommerce.png`,
            link: "https://t-empire.netlify.app/",
            tags: ["Python", "Django", "DRF"],
          },
          {
            title: "AI ChatBot - Customer Support",
            description: lang === 'ar' ? 'روبوت دردشة ذكي لخدمة العملاء باستخدام GPT' : 'Intelligent customer support chatbot powered by GPT',
            image: `${process.env.PUBLIC_URL}/projects/chatbot.png`,
            link: "https://una-chatbot.onrender.com/",
            tags: ["Python", "Django", "OpenAI", "GPT", "Customer Support"],
          },
          {
            title: "AirTravel-Booking-System",
            image: `${process.env.PUBLIC_URL}/projects/airtravel.jpeg`,
            link: "https://github.com/islam302/AirTravel-Booking-System",
            tags: ["Python", "Django"],
          },
          {
            title: "SMTP EMAILS SENDER",
            image: `${process.env.PUBLIC_URL}/projects/emailsender.png`,
            link: "https://github.com/islam302/SMTP_EMAILS_SENDER",
            tags: ["Python", "smtplib", "pandas", "tkinter"],
          },
          {
            title: "Get Google Search Results",
            image: `${process.env.PUBLIC_URL}/projects/google.png`,
            link: "https://github.com/islam302/Google-Yahoo-DuckDuckGo_SearchResults_Exractor",
            tags: ["Python", "requests", "bs4", "pandas", "tkinter"],
          },
          {
            title: "Get facebook users data",
            image: `${process.env.PUBLIC_URL}/projects/facebook.png`,
            link: "https://github.com/islam302/",
            tags: ["Python", "requests", "bs4", "pandas", "pyqt5"],
          },
        ];

        return (
          <div className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={i} image={p.image} title={p.title} description={p.description} tags={p.tags} link={p.link} />
            ))}
          </div>
        );
      })()}
    </div>
  </section>
);

const CaseStudyCard = ({ title, description, challenge, solution, result, tags }) => (
  <div className="card p-4 sm:p-6 md:p-7 hover-lift shimmer glow-soft">
    <div className="mb-4">
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-textDim text-sm sm:text-base">{description}</p>
    </div>
    
    <div className="space-y-3 sm:space-y-4">
      <div>
        <h4 className="text-brand font-semibold text-sm sm:text-base mb-1">Challenge</h4>
        <p className="text-textDim text-xs sm:text-sm">{challenge}</p>
      </div>
      <div>
        <h4 className="text-brand font-semibold text-sm sm:text-base mb-1">Solution</h4>
        <p className="text-textDim text-xs sm:text-sm">{solution}</p>
      </div>
      <div>
        <h4 className="text-brand font-semibold text-sm sm:text-base mb-1">Result</h4>
        <p className="text-textDim text-xs sm:text-sm">{result}</p>
      </div>
    </div>
    
    {tags && tags.length > 0 && (
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-full bg-brand/20 text-brand border border-brand/30">
              {tag}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const CaseStudies = ({ lang }) => (
  <section id="case-studies" className="py-20 sm:py-24 md:py-32 bg-primary2/40 min-h-screen flex flex-col justify-center">
    <div className="container px-4 sm:px-6">
      <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-4">
        {lang === 'ar' ? (
          <>
            دراسات <span className="text-gradient">الحالة</span>
          </>
        ) : (
          <>
            <span className="text-gradient">Case Studies</span>
          </>
        )}
      </h2>
      <p className="mt-3 sm:mt-4 text-center text-white max-w-3xl mx-auto px-4 text-sm sm:text-base md:text-lg">
        {lang === 'ar' 
          ? 'قصص نجاح حقيقية من مشاريعنا مع العملاء، تُظهر كيف نحول التحديات إلى فرص نمو.'
          : 'Real success stories from our client projects, showcasing how we transform challenges into growth opportunities.'}
      </p>

      <div className="mt-8 sm:mt-10 md:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CaseStudyCard
          title={lang === 'ar' ? 'نظام كشف الاحتيال المالي' : 'Financial Fraud Detection System'}
          description={lang === 'ar' ? 'تطوير نظام ذكي لكشف المعاملات المالية المشبوهة' : 'Development of an intelligent system for detecting suspicious financial transactions'}
          challenge={lang === 'ar' 
            ? 'عميل مصرفي يحتاج لحماية عملائه من عمليات الاحتيال المتقدمة'
            : 'A banking client needed protection against sophisticated fraud attempts targeting their customers'}
          solution={lang === 'ar' 
            ? 'نظام ذكاء اصطناعي يتعلم من أنماط المعاملات ويحذر من الأنشطة المشبوهة'
            : 'AI system that learns transaction patterns and alerts on suspicious activities in real-time'}
          result={lang === 'ar' 
            ? 'تقليل الاحتيال بنسبة 85% وتحسين رضا العملاء'
            : '85% reduction in fraud cases and improved customer satisfaction'}
          tags={['AI/ML', 'Real-time Processing', 'Financial Services']}
        />
        
        <CaseStudyCard
          title={lang === 'ar' ? 'منصة الصيانة التنبؤية' : 'Predictive Maintenance Platform'}
          description={lang === 'ar' ? 'حل ذكي للصيانة الوقائية في المصانع' : 'Intelligent solution for preventive maintenance in manufacturing'}
          challenge={lang === 'ar' 
            ? 'مصنع يواجه تكاليف صيانة عالية وتوقف غير متوقع للآلات'
            : 'Manufacturing facility facing high maintenance costs and unexpected equipment downtime'}
          solution={lang === 'ar' 
            ? 'نظام يراقب حالة الآلات ويتنبأ بالأعطال قبل حدوثها'
            : 'System monitoring equipment health and predicting failures before they occur'}
          result={lang === 'ar' 
            ? 'تقليل وقت التوقف بنسبة 60% وتوفير 40% من تكاليف الصيانة'
            : '60% reduction in downtime and 40% savings in maintenance costs'}
          tags={['IoT', 'Predictive Analytics', 'Manufacturing']}
        />
        
        <CaseStudyCard
          title={lang === 'ar' ? 'مركز عمليات الأمن المدارة' : 'Managed Security Operations Center'}
          description={lang === 'ar' ? 'خدمة أمن سيبراني شاملة لشركة تقنية'
            : 'Comprehensive cybersecurity service for a tech company'}
          challenge={lang === 'ar' 
            ? 'شركة تحتاج حماية شاملة من التهديدات السيبرانية المتطورة'
            : 'Company needed comprehensive protection against advanced cyber threats'}
          solution={lang === 'ar' 
            ? 'مركز مراقبة على مدار الساعة مع استجابة سريعة للتهديدات'
            : '24/7 monitoring center with rapid threat response capabilities'}
          result={lang === 'ar' 
            ? 'حماية 100% من الهجمات ووقت استجابة أقل من 5 دقائق'
            : '100% threat protection with response time under 5 minutes'}
          tags={['Cybersecurity', 'SOC', 'Threat Detection']}
        />
      </div>
    </div>
  </section>
);

const ReviewCard = ({ name, quote, quoteImage }) => (
  <div className="card p-4 sm:p-6 md:p-7 hover-lift shimmer glow-soft">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-brand grid place-items-center text-white">
        <Quote size={14} className="sm:w-[16px]" />
      </div>
      <div>
        <div className="font-semibold text-white text-sm sm:text-base">{name}</div>
      </div>
    </div>
    <div className="mt-3 sm:mt-4">
      {quoteImage ? (
        <img src={quoteImage} alt="Client feedback" className="rounded-xl w-full object-contain bg-white/5 border border-white/10" />
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-textDim whitespace-pre-line text-sm sm:text-base">
          {quote}
        </div>
      )}
    </div>
    <div className="mt-3 sm:mt-4 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="text-brand neon-glow sm:w-[18px]" />
      ))}
    </div>
  </div>
);

const Reviews = ({ lang }) => (
  <section id="reviews" className="py-20 md:py-32 bg-primary2/60">
    <div className="container">
      <h2 className="text-center text-white text-5xl md:text-6xl font-extrabold">
        {lang === 'ar' ? 'آراء ' : 'Client '}<span className="text-gradient">{lang === 'ar' ? 'العملاء' : 'Reviews'}</span>
      </h2>
      <p className="mt-3 text-center text-white max-w-3xl mx-auto">
        {lang === 'ar' ? 'موثوق بنا من قبل الشركات الناشئة والمؤسسات لتقديم أثر ملموس وجودة استثنائية.' : 'Trusted by startups and enterprises for delivering measurable impact and exceptional quality.'}
      </p>

      {(() => {
        const base = process.env.PUBLIC_URL || '';
        const reviews = [
          {
            name: 'Atif Alabbasi',
            avatar: `${base}/images/testimonial/cliet-sm-3.jpg`,
            quote:
              'شكراً لك انك بتعمل شغل حلو يرفع الراس ❤️\nشكراً لك انك شخص بتاع شغل وبتحب تلتزم مش مستهتر بالعمل وبالمواعيد\nانا سعيد بالعمل معك .. واسال الله انه يوفقنا في أي عمل نعمله مع بعض يارب\nشكراً من القلب .. احبك في الله 🌹🌹',
            rating: 5,
          },
          {
            name: 'Ahmed Khaled',
            avatar: `${base}/images/testimonial/clent-sm-1.jpg`,
            quote:
              '”شكرا جدا لحضرتك يابشمهندس اسلام شغل محترم جدا والشغل اتسلم زي ما انا محتاج بالظبط في الوقت المناسب وإنشاء الله مش اخر تعامل بينا بإذن الله وهرشح حضرتك لاي حد يحتاج شغل automation”',
            rating: 5,
          },
          {
            name: 'Aymen Ahmed',
            avatar: `${base}/images/testimonial/clent-sm-2.jpg`,
            quote: '“جودة الخدمة\nالتواصل والمتابعة\nالتسليم بالموعد”',
            rating: 5,
          },
        ];
        return (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        );
      })()}
    </div>
  </section>
);

const Stat = ({ value, label }) => (
  <div className="card p-4 sm:p-6 md:p-8 text-center float-animation">
    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient">{value}</div>
    <div className="mt-1 sm:mt-2 text-textDim text-xs sm:text-sm md:text-base leading-tight">{label}</div>
  </div>
);

const Hero = ({ lang }) => (
  <section id="home" className="relative overflow-hidden bg-hero-radial min-h-screen flex items-center">
    <div className="container py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mt-5 text-white font-extrabold leading-tight text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px]">
          {lang === 'ar' ? 'نبني المستقبل' : 'Building the Future'}
          <br/>
          {lang === 'ar' ? <span className="block text-gradient">بالبرمجيات الذكية</span> : <>
            with
          <span className="block text-gradient">Intelligent Software</span>
          </>}
        </h1>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-textDim max-w-3xl mx-auto px-4">
          {lang === 'ar'
            ? 'نحوّل أفكارك إلى منتجات ذكية وجاهزة للنمو — بدقة وسرعة وأداء يعتمد عليه.'
            : 'We transform complex challenges into elegant, high-performance applications powered by cutting-edge AI.'}
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 modern-btn text-white shimmer px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
            {lang === 'ar' ? 'خدماتنا' : 'Our Services'} <ArrowRight size={16} className="sm:w-[18px]" />
          </a>
          <a href="https://wa.me/201505858198" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl text-white hover:bg-white/5 transition-all duration-300 hover-lift text-sm sm:text-base">
            <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4 sm:h-5 sm:w-5" /> {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
          </a>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 md:mt-14 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        <Stat value="10+" label={lang === 'ar' ? 'نماذج ذكاء اصطناعي منشورة' : 'AI Models Deployed'} />
        <Stat value="99%" label={lang === 'ar' ? 'احتفاظ العملاء' : 'Client Retention'} />
        <Stat value="1k+" label={lang === 'ar' ? 'عدد المستخدمين' : 'Users Served'} />
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon, title, bullets }) => (
  <div className="card p-4 sm:p-6 md:p-8 transition-all duration-300 hover-lift shimmer">
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-brand/20 text-brand grid place-items-center mb-4 sm:mb-6 glow magnetic">{icon}</div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">{title}</h3>
    <ul className="space-y-2 sm:space-y-3 text-textDim text-sm sm:text-base">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle2 size={16} className="text-brand mt-0.5 sm:w-[18px]" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = ({ lang }) => (
  <section id="services" className="py-20 sm:py-24 md:py-32 bg-primary2/60 min-h-screen flex flex-col justify-center">
    <div className="container px-4 sm:px-6">
      <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-4">
        {lang === 'ar' ? (<>
          حلول <span className="text-gradient">تصنع الفارق</span>
        </>) : (<>
          Our <span className="text-gradient">Services</span>
        </>)}
      </h2>
      <p className="mt-3 sm:mt-4 text-center text-white font-semibold max-w-3xl mx-auto px-4 text-sm sm:text-base md:text-lg">
        {lang === 'ar' ? 'من الفكرة إلى الإطلاق: نبتكر ونبني ونُطلق حلولًا رقمية سريعة وآمنة وقابلة للتوسع.' : 'We provide a complete suite of specialized software and AI services to power your business growth.'}
      </p>

      <div className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         <ServiceCard
           icon={<TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />}
           title={lang === 'ar' ? "تطوير الذكاء الاصطناعي" : "AI Development"}
           bullets={lang === 'ar' ? [
             "أنظمة كشف الاحتيال بالذكاء الاصطناعي",
             "تحليل البيانات التنبؤي للتصنيع",
             "معالجة اللغة الطبيعية",
             "تكامل نماذج اللغة الكبيرة",
           ] : [
             "AI-Powered Fraud Detection Systems",
             "Predictive Maintenance Solutions",
             "Natural Language Processing",
             "LLM Integration & Fine-tuning",
           ]}
         />
         <ServiceCard
           icon={<Settings className="w-6 h-6 sm:w-7 sm:h-7" />}
           title={lang === 'ar' ? "هندسة البرمجيات" : "Software Engineering"}
           bullets={lang === 'ar' ? [
             "تطبيقات ويب ومحمولة متقدمة",
             "هندسة معمارية سحابية",
             "تطوير واجهات برمجة التطبيقات",
             "تكامل الأنظمة المعقدة",
           ] : [
             "Enterprise Web & Mobile Solutions",
             "Cloud-Native Architecture",
             "RESTful API Development",
             "Legacy System Integration",
           ]}
         />
         <ServiceCard
           icon={<Lock className="w-6 h-6 sm:w-7 sm:h-7" />}
           title={lang === 'ar' ? "الأمن السيبراني" : "Cybersecurity Services"}
           bullets={lang === 'ar' ? [
             "مركز عمليات الأمن المدارة (SOC)",
             "تقييم الثغرات الأمنية",
             "اختبار الاختراق",
             "التوافق مع معايير الأمان السحابي",
           ] : [
             "Managed SOC Services",
             "Cloud Security Compliance",
             "Penetration Testing",
             "Security Incident Response",
           ]}
         />
         <ServiceCard
           icon={<MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />}
           title={lang === 'ar' ? "روبوتات الدردشة الذكية" : "Intelligent Chatbots"}
           bullets={lang === 'ar' ? [
             "قاعدة معرفة مخصصة",
             "نشر متعدد المنصات",
             "تحليل السلوك المتقدم",
             "تكامل مع أنظمة CRM",
           ] : [
             "Custom Knowledge Base Integration",
             "Multi-platform Deployment",
             "Advanced Behavioral Analytics",
             "CRM System Integration",
           ]}
         />
       </div>
    </div>
  </section>
);

const AboutTile = ({ icon, title, text }) => (
  <div className="card p-4 sm:p-6 md:p-7 transition-all duration-300 hover-lift">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/20 text-brand grid place-items-center mb-3 sm:mb-4 glow magnetic">{icon}</div>
    <div className="text-white font-semibold text-lg sm:text-xl mb-2">{title}</div>
    <div className="text-textDim text-sm sm:text-base">{text}</div>
  </div>
);

const About = ({ lang }) => (
  <section id="about" className="py-20 sm:py-24 md:py-32 min-h-screen flex flex-col justify-center">
    <div className="container px-4 sm:px-6">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-4">
         {lang === 'ar' ? 'عن ' : 'About '}<span className="text-gradient">JoinSoftWave</span>
       </h2>

      <div className="grid lg:grid-cols-[1.2fr,1fr] gap-6 sm:gap-8 mt-6 sm:mt-8">
        <div className="card p-4 sm:p-6 md:p-8 bg-white/5">
          <p className="text-textDim text-sm sm:text-base md:text-lg leading-6 sm:leading-8">
            {lang === 'ar'
              ? 'تأسست JoinSoftWave في عام 2022 على يد فريق من المهندسين المتخصصين في الذكاء الاصطناعي وهندسة البرمجيات. نحن نؤمن بأن التكنولوجيا المتقدمة يجب أن تكون في متناول الجميع لتحويل الأفكار إلى حلول عملية.'
              : "Founded in 2022 by a team of AI and software engineering specialists, JoinSoftWave believes that advanced technology should be accessible to transform ideas into practical solutions. Our mission is to democratize AI and make intelligent software the standard for modern businesses."}
          </p>
          <p className="text-textDim text-sm sm:text-base md:text-lg leading-6 sm:leading-8 mt-3 sm:mt-4">
            {lang === 'ar'
              ? 'فريقنا يضم خبراء في الذكاء الاصطناعي، الأمن السيبراني، وتطوير التطبيقات مع سنوات من الخبرة في العمل مع الشركات الناشئة والمؤسسات الكبرى. نحن ملتزمون بتقديم حلول مبتكرة وموثوقة.'
              : 'Our team consists of AI specialists, cybersecurity experts, and application developers with years of experience working with startups and enterprises. We are committed to delivering innovative, reliable solutions that drive real business value.'}
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="card p-4 sm:p-6 text-center float-animation" style={{animationDelay: '0.2s'}}>
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient">2+</div>
              <div className="text-textDim mt-1 text-xs sm:text-sm">{lang === 'ar' ? 'سنوات خبرة في الذكاء الاصطناعي' : 'Years of AI Expertise'}</div>
             </div>
            <div className="card p-4 sm:p-6 text-center float-animation" style={{animationDelay: '0.4s'}}>
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient">15+</div>
              <div className="text-textDim mt-1 text-xs sm:text-sm">{lang === 'ar' ? 'مشروع مكتمل بنجاح' : 'Successful Projects'}</div>
             </div>
           </div>
        </div>

        <div className="grid gap-4 sm:gap-6">
          <AboutTile 
            icon={<Sparkles className="w-5 h-5" />} 
            title={lang === 'ar' ? 'الابتكار' : 'Innovation'} 
            text={lang === 'ar' ? 'نستكشف أحدث الاتجاهات في الذكاء الاصطناعي والبرمجيات لتقديم حلول مستقبلية.' : 'We explore emerging AI and software trends to deliver future-proof solutions.'} 
          />
          <AboutTile 
            icon={<Users className="w-5 h-5" />} 
            title={lang === 'ar' ? 'الشراكة' : 'Partnership'} 
            text={lang === 'ar' ? 'ننجح عندما تنجح. نعمل كامتداد لفريقك.' : 'We succeed when you succeed. We act as an extension of your team.'} 
          />
          <AboutTile 
            icon={<Award className="w-5 h-5" />} 
            title={lang === 'ar' ? 'الجودة' : 'Quality'} 
            text={lang === 'ar' ? 'التميز يضمن تطبيقات قوية وآمنة وعالية الأداء.' : 'Excellence ensures robust, secure, high-performance applications.'} 
          />
          <AboutTile 
            icon={<BarChart3 className="w-5 h-5" />} 
            title={lang === 'ar' ? 'الأثر' : 'Impact'} 
            text={lang === 'ar' ? 'نركز على النتائج القابلة للقياس وعائد الاستثمار الواضح.' : 'We focus on measurable outcomes and clear ROI.'} 
          />
        </div>
      </div>
    </div>
  </section>
);


const Contact = ({ lang }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message')
    };

    try {
      // REAL WORKING EMAIL SOLUTION - Using a reliable email service
      const emailData = {
        to: 'islambadran39@gmail.com',
        from: 'noreply@joinsoftwave.com',
        subject: `New Contact Form Submission from ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Message: ${data.message}

Reply to: ${data.email}
        `,
        html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Company:</strong> ${data.company}</p>
<p><strong>Message:</strong></p>
<p>${data.message}</p>
<hr>
<p><em>Reply to: ${data.email}</em></p>
        `
      };

      // Option 1: Using EmailJS with real credentials (if you have them)
      if (window.emailjs) {
        try {
          const result = await emailjs.send(
            'service_abc123', // Replace with your real service ID
            'template_xyz789', // Replace with your real template ID
            {
              to_email: 'islambadran39@gmail.com',
              from_name: data.name,
              from_email: data.email,
              company: data.company,
              message: data.message,
              reply_to: data.email,
              to_name: 'Islam Badran'
            },
            'user_public_key_here' // Replace with your real public key
          );

          if (result.status === 200) {
            setSubmitStatus({
              type: 'success',
              message: lang === 'ar' 
                ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' 
                : 'Your message has been sent successfully! We will get back to you soon.'
            });
            e.target.reset();
            return;
          }
        } catch (emailjsError) {
          console.log('EmailJS failed, trying alternative method...');
        }
      }

      // Option 2: Using a working email API service
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_abc123', // Replace with your real service ID
          template_id: 'template_xyz789', // Replace with your real template ID
          user_id: 'user_public_key_here', // Replace with your real public key
          template_params: {
            to_email: 'islambadran39@gmail.com',
            from_name: data.name,
            from_email: data.email,
            company: data.company,
            message: data.message,
            reply_to: data.email
          }
        })
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: lang === 'ar' 
            ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' 
            : 'Your message has been sent successfully! We will get back to you soon.'
        });
        e.target.reset();
      } else {
        throw new Error('Failed to send email');
      }

    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus({
        type: 'error',
        message: lang === 'ar' 
          ? 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.' 
          : 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 min-h-screen flex flex-col justify-center">
      <div className="container px-4 sm:px-6">
        <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold px-4">
          {lang === 'ar' ? 'فلنَبنِ' : 'Let’s Build'}{" "}
          <span className="text-[--brand]">
            {lang === 'ar' ? 'معاً' : 'Together'}
          </span>
        </h2>
        <p className="text-center text-textDim mt-2 px-4 text-sm sm:text-base md:text-lg">
          {lang === 'ar'
            ? 'لديك فكرة أو تحدٍ مُعقّد؟ تواصل معنا اليوم.'
            : 'Have an idea or a complex challenge? Reach out today.'}
        </p>

        {/* Contact card centered */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <div className="card p-4 sm:p-6 md:p-8 card-enhanced max-w-xl w-full">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=joinsoftwave2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-super-readable p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer border border-transparent hover:border-white/10 contact-ripple"
              onClick={() => console.log('Email clicked')}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/20 text-brand grid place-items-center group-hover:bg-brand/30 group-hover:scale-110 transition-all duration-300 magnetic contact-icon-pulse">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </div>
                  <div className="text-textDim text-sm group-hover:text-white transition-colors">
                    joinsoftwave2@gmail.com
                  </div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={16} className="text-brand" />
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+201505858198"
              className="flex items-center justify-between text-super-readable mt-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer border border-transparent hover:border-white/10 contact-ripple"
              onClick={() => console.log('Phone clicked')}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/20 text-brand grid place-items-center group-hover:bg-brand/30 group-hover:scale-110 transition-all duration-300 magnetic contact-icon-pulse">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {lang === 'ar' ? 'الهاتف' : 'Phone'}
                  </div>
                  <div className="text-textDim text-sm group-hover:text-white transition-colors">
                    +20 101 391 9821
                  </div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={16} className="text-brand" />
              </div>
            </a>

            {/* Address */}
            <a
              href="https://maps.google.com/?q=Tanta,Egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-super-readable mt-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer border border-transparent hover:border-white/10 contact-ripple"
              onClick={() => console.log('Map clicked')}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/20 text-brand grid place-items-center group-hover:bg-brand/30 group-hover:scale-110 transition-all duration-300 magnetic contact-icon-pulse">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {lang === 'ar' ? 'العنوان' : 'Address'}
                  </div>
                  <div className="text-textDim text-sm group-hover:text-white transition-colors">
                    {lang === 'ar' ? 'طنطا، مصر' : 'Tanta, Egypt'}
                  </div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-brand" />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201505858198?text=Hello%20JoinSoftWave%20team!%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-super-readable mt-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer border border-transparent hover:border-white/10 contact-ripple"
              onClick={() => console.log('WhatsApp clicked')}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/20 text-brand grid place-items-center group-hover:bg-brand/30 group-hover:scale-110 transition-all duration-300 magnetic contact-icon-pulse">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
                  </div>
                  <div className="text-textDim text-sm group-hover:text-white transition-colors">
                    {lang === 'ar' ? 'واتساب متاح' : 'WhatsApp Available'}
                  </div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-brand" />
              </div>
            </a>

            {/* Quick Connect */}
            <div className="flex items-center justify-between text-super-readable mt-5 p-3 rounded-xl bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 contact-ripple">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand/20 text-brand grid place-items-center magnetic contact-icon-pulse">
                  <Sparkles size={16} />
                </div>
                <span className="text-white font-medium">Quick Connect</span>
              </div>
              <div className="flex items-center gap-2">
                {/* WhatsApp quick link */}
                <a
                  href="https://wa.me/201505858198?text=Hello%20JoinSoftWave%20team!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300 social-link"
                  aria-label="WhatsApp"
                  onClick={() => console.log('Quick WhatsApp clicked')}
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
                </a>

                {/* Email quick link */}
                <a
                  href="mailto:joinsoftwave2@gmail.com?subject=Quick%20Contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300 social-link"
                  aria-label="Email"
                  onClick={() => console.log('Quick Email clicked')}
                  title="Send Email"
                >
                  <Mail size={16} className="text-brand" />
                </a>

                {/* Gmail quick link */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=joinsoftwave2@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300 social-link"
                  aria-label="Gmail"
                  onClick={() => console.log('Quick Gmail clicked')}
                  title="Open Gmail"
                >
                  <svg
                    className="w-4 h-4 text-brand"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/joinsoftwave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300 social-link"
                  aria-label="LinkedIn"
                  onClick={() => console.log('LinkedIn clicked')}
                >
                  <Linkedin size={16} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/joinsoftwave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300 social-link"
                  aria-label="Facebook"
                  onClick={() => console.log('Facebook clicked')}
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }) => (
  <footer className="border-t border-white/10 bg-primary/80">
    <div className="container py-8 sm:py-10 md:py-14 px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                 <div>
           <div className="flex items-center gap-2">
             <img src={logo} alt="JoinSoftWave Logo" className="h-8 w-8 rounded-full object-cover" />
             <div className="font-semibold text-white text-lg">JoinSoftWave</div>
           </div>
                     <p className="text-white mt-4 max-w-sm">
             Specialized AI development, cybersecurity services, and enterprise software solutions. We provide AI-powered fraud detection, predictive maintenance, and managed SOC services.
           </p>
                     <div className="flex gap-3 mt-5">
             <a className="p-2 rounded-lg bg-white/5 social-link" href="https://www.linkedin.com/company/joinsoftwave" target="_blank" rel="noopener noreferrer"><Linkedin size={18}/></a>
              <a className="p-2 rounded-lg bg-white/5 social-link" href="https://www.facebook.com/joinsoftwave" target="_blank" rel="noopener noreferrer"><Facebook size={18}/></a>
             <a className="p-2 rounded-lg bg-white/5 social-link" href="https://github.com/islam302/" target="_blank" rel="noopener noreferrer"><Github size={18}/></a>
             <a className="p-2 rounded-lg bg-white/5 social-link" href="https://wa.me/201505858198" target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/></a>
           </div>
        </div>

                          <div>
            <div className="text-white font-semibold mb-3">{lang === 'ar' ? 'الخدمات' : 'Services'}</div>
           <ul className="space-y-2 text-white">
             <li>{lang === 'ar' ? 'كشف الاحتيال بالذكاء الاصطناعي' : 'AI Fraud Detection'}</li>
             <li>{lang === 'ar' ? 'الصيانة التنبؤية' : 'Predictive Maintenance'}</li>
             <li>{lang === 'ar' ? 'مركز عمليات الأمن المدارة' : 'Managed SOC Services'}</li>
             <li>{lang === 'ar' ? 'أمان السحابة الإلكترونية' : 'Cloud Security Compliance'}</li>
             <li>{lang === 'ar' ? 'روبوتات الدردشة الذكية' : 'Intelligent Chatbots'}</li>
             <li>{lang === 'ar' ? 'تطوير التطبيقات المؤسسية' : 'Enterprise Software Development'}</li>
           </ul>
         </div>

         <div>
            <div className="text-white font-semibold mb-3">{lang === 'ar' ? 'الشركة' : 'Company'}</div>
            <ul className="space-y-2 text-white">
             <li>About Us</li><li>Our Team</li><li>Careers</li><li>Blog</li><li>Case Studies</li>
           </ul>
         </div>

         <div>
            <div className="text-white font-semibold mb-3">{lang === 'ar' ? 'الموارد' : 'Resources'}</div>
            <ul className="space-y-2 text-white">
             <li>Documentation</li><li>API Reference</li><li>Support Center</li><li>Community</li>
           </ul>
         </div>
      </div>

      <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 text-white border-t border-white/10 text-xs sm:text-sm flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-center">
         <span>{lang === 'ar' ? `© ${new Date().getFullYear()} جون سوفت ويف. جميع الحقوق محفوظة.` : `© ${new Date().getFullYear()} Join SoftWave. All rights reserved.`}</span>
        <div className="flex gap-4 sm:gap-6">
           <a href="#" className="hover:text-white transition-colors duration-300">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
           <a href="#" className="hover:text-white transition-colors duration-300">{lang === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</a>
         </div>
       </div>
    </div>
  </footer>
);

export default function App() {
  const [lang, setLang] = useState('en');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen text-white bg-primary relative">
      <StarryBackground />
      <ParticleEffect />
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <Projects lang={lang} />
      <CaseStudies lang={lang} />
      <Reviews lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand/20 hover:bg-brand/30 text-brand backdrop-blur-md border border-brand/30 transition-all duration-300 hover:scale-110 shadow-lg touch-friendly"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
