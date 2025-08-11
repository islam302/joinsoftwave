import React, { useEffect, useState } from "react";
import {
  Cpu, Home, Layers, Users, Phone, Mail, MapPin, ArrowRight, Zap, MessageSquare,
  Linkedin, Facebook, Github, Bot, Code2, Brain, CheckCircle2, Sparkles, Shield, MessageCircle, ExternalLink, Star, Quote
} from "lucide-react";
import ParticleEffect from "./ParticleEffect";
import StarryBackground from "./StarryBackground";
import logo from "./images/logo.jpg";
import whatsappIcon from "./images/whatsapp.png";

const Nav = ({ lang, setLang }) => (
  <nav className="sticky top-0 z-50 backdrop-blur-md bg-primary/80 border-b border-white/10">
    <div className="container h-16 flex items-center justify-between">
             <div className="flex items-center gap-3">
         <img src={logo} alt="JoinSoftWave Logo" className="h-10 w-10 rounded-full object-cover glow" />
                   <div className="leading-tight">
            <div className="font-semibold text-white text-lg">Join<span className="text-gradient">SoftWave</span></div>
          </div>
       </div>

      <ul className="hidden md:flex items-center gap-8 text-white/90">
        <li><a className="hover:text-white transition-colors duration-300" href="#home">{lang === 'ar' ? 'الرئيسية' : 'Home'}</a></li>
        <li><a className="hover:text-white transition-colors duration-300" href="#services">{lang === 'ar' ? 'الخدمات' : 'Services'}</a></li>
        <li><a className="hover:text-white transition-colors duration-300" href="#projects">{lang === 'ar' ? 'الأعمال' : 'Projects'}</a></li>
        <li><a className="hover:text-white transition-colors duration-300" href="#reviews">{lang === 'ar' ? 'التقييمات' : 'Reviews'}</a></li>
        <li><a className="hover:text-white transition-colors duration-300" href="#about">{lang === 'ar' ? 'من نحن' : 'About'}</a></li>
        <li><a className="hover:text-white transition-colors duration-300" href="#team">{lang === 'ar' ? 'الفريق' : 'Team'}</a></li>
        <li><a className="hover:text-white transition-colors duration-300" href="#contact">{lang === 'ar' ? 'تواصل' : 'Contact'}</a></li>
      </ul>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center bg-white/5 rounded-xl overflow-hidden">
          <button onClick={() => setLang('en')} className={`px-3 py-1 text-sm ${lang==='en' ? 'bg-[--brand] text-white' : 'text-white/80'}`}>EN</button>
          <button onClick={() => setLang('ar')} className={`px-3 py-1 text-sm ${lang==='ar' ? 'bg-[--brand] text-white' : 'text-white/80'}`}>AR</button>
        </div>
        <a
          href="https://wa.me/201013919821"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="p-2 rounded-lg bg-white/5 social-link"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
        </a>
        <a
          href="mailto:info@join-softwave.online"
          aria-label="Send Email"
          className="p-2 rounded-lg bg-white/5 social-link text-white"
        >
          <Mail size={18} className="text-brand" />
        </a>
      <a href="#contact" className="hidden md:inline-flex items-center gap-2 modern-btn text-white">
          {lang === 'ar' ? 'ابدأ الآن' : 'Get Started'}
      </a>
      </div>
    </div>
  </nav>
);

const ProjectCard = ({ image, title, description, tags = [], link = "#" }) => (
  <div className="card p-4 overflow-hidden hover-lift shimmer">
    <div className="relative rounded-2xl overflow-hidden bg-white/5">
      <img src={image} alt={title} className="w-full h-48 object-contain bg-white/5" />
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 p-2 rounded-xl bg-black/30 hover:bg-black/50 transition-colors">
        <ExternalLink size={16} className="text-brand" />
      </a>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {description && <p className="text-textDim mt-2 text-sm">{description}</p>}
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/90">{tag}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Projects = ({ lang }) => (
  <section id="projects" className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-center text-white text-5xl md:text-6xl font-extrabold">
        {lang === 'ar' ? (<>
          أحدث <span className="text-gradient">مشاريعنا</span>
        </>) : (<>
          Our <span className="text-gradient">Recent Projects</span>
        </>)}
      </h2>
      <p className="mt-4 text-center text-white max-w-3xl mx-auto">
        {lang === 'ar' ? 'مختارات من أعمالٍ حقيقية صنعت نتائج ملموسة لعملائنا.' : 'A glimpse of the products and platforms we have recently shipped for clients worldwide.'}
      </p>

      {(() => {
        const projects = [
          {
            title: "OmniFood",
            image: `${process.env.PUBLIC_URL}/projects/omnifood.png`,
            link: "https://omnifood-sable-xi.vercel.app/",
            tags: ["React", "HTML", "CSS", "JS", "Bootstrap"],
          },
          {
            title: "GoToMail",
            image: `${process.env.PUBLIC_URL}/projects/emails.png`,
            link: "https://email-sender-com.vercel.app/",
            tags: ["Python", "Django", "Brevo", "React", "HTML", "CSS", "JS", "Bootstrap"],
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
            title: "Ai Chat Bot",
            image: `${process.env.PUBLIC_URL}/projects/chatbot.png`,
            link: "https://una-chatbot.onrender.com/",
            tags: ["Python", "Django", "OpenAI"],
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
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={i} image={p.image} title={p.title} description={p.description} tags={p.tags} link={p.link} />
            ))}
          </div>
        );
      })()}
    </div>
  </section>
);

const ReviewCard = ({ name, quote, quoteImage }) => (
  <div className="card p-7 hover-lift shimmer glow-soft">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center text-white">
        <Quote size={16} />
      </div>
      <div>
        <div className="font-semibold text-white">{name}</div>
      </div>
    </div>
    <div className="mt-4">
      {quoteImage ? (
        <img src={quoteImage} alt="Client feedback" className="rounded-xl w-full object-contain bg-white/5 border border-white/10" />
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-textDim whitespace-pre-line">
          {quote}
        </div>
      )}
    </div>
    <div className="mt-4 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} className="text-brand neon-glow" />
      ))}
    </div>
  </div>
);

const Reviews = ({ lang }) => (
  <section id="reviews" className="py-20 md:py-24 bg-primary2/60">
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
  <div className="card p-8 text-center float-animation">
    <div className="text-4xl font-extrabold text-gradient">{value}</div>
    <div className="mt-2 text-textDim">{label}</div>
  </div>
);

const Hero = ({ lang }) => (
  <section id="home" className="relative overflow-hidden bg-hero-radial">
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mt-5 text-white font-extrabold leading-tight text-[44px] md:text-[72px]">
          {lang === 'ar' ? 'نبني المستقبل' : 'Building the Future'}
          <br/>
          {lang === 'ar' ? <span className="block text-gradient">بالبرمجيات الذكية</span> : <>
            with
          <span className="block text-gradient">Intelligent Software</span>
          </>}
        </h1>

        <p className="mt-5 text-lg md:text-xl text-textDim">
          {lang === 'ar'
            ? 'نحوّل أفكارك إلى منتجات ذكية وجاهزة للنمو — بدقة وسرعة وأداء يعتمد عليه.'
            : 'We transform complex challenges into elegant, high-performance applications powered by cutting-edge AI.'}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#services" className="inline-flex items-center gap-2 modern-btn text-white shimmer">
            {lang === 'ar' ? 'خدماتنا' : 'Our Services'} <ArrowRight size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-white/15 px-6 py-3 rounded-2xl text-white hover:bg-white/5 transition-all duration-300 hover-lift">
            <Zap size={18} className="text-brand" /> {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </a>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <Stat value="200+" label={lang === 'ar' ? 'نماذج ذكاء اصطناعي منشورة' : 'AI Models Deployed'} />
        <Stat value="99%" label={lang === 'ar' ? 'احتفاظ العملاء' : 'Client Retention'} />
        <Stat value="1M+" label={lang === 'ar' ? 'عدد المستخدمين' : 'Users Served'} />
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon, title, bullets }) => (
  <div className="card p-8 transition-all duration-300 hover-lift shimmer">
    <div className="w-14 h-14 rounded-2xl bg-brand/20 text-brand grid place-items-center mb-6 glow magnetic">{icon}</div>
    <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
    <ul className="space-y-3 text-textDim">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle2 size={18} className="text-brand mt-0.5" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = ({ lang }) => (
  <section id="services" className="py-20 md:py-24 bg-primary2/60">
    <div className="container">
      <h2 className="text-center text-white text-5xl md:text-6xl font-extrabold">
        {lang === 'ar' ? (<>
          حلول <span className="text-gradient">تصنع الفارق</span>
        </>) : (<>
          Our <span className="text-gradient">Services</span>
        </>)}
      </h2>
      <p className="mt-4 text-center text-white font-semibold max-w-3xl mx-auto">
        {lang === 'ar' ? 'من الفكرة إلى الإطلاق: نبتكر ونبني ونُطلق حلولًا رقمية سريعة وآمنة وقابلة للتوسع.' : 'We provide a complete suite of software and AI services to power your business’s growth.'}
      </p>

             <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
         <ServiceCard
           icon={<Brain />}
           title="AI Development"
           bullets={[
             "Natural Language Processing",
             "Computer Vision",
             "Predictive Analytics",
             "LLM Integration",
           ]}
         />
         <ServiceCard
           icon={<Code2 />}
           title="Software Engineering"
           bullets={[
             "Web & Mobile Apps",
             "Cloud-Native Architecture",
             "API Development",
             "System Integration",
           ]}
         />
         <ServiceCard
           icon={<Shield />}
           title="Cybersecurity"
           bullets={[
             "Penetration Testing",
             "Vulnerability Assessment",
             "Security Auditing",
             "Incident Response",
           ]}
         />
         <ServiceCard
           icon={<Bot />}
           title="AI Chatbots"
           bullets={[
             "Custom Knowledge Base",
             "Multi-platform Deployment",
             "Seamless Handoff",
             "Analytics",
           ]}
         />
       </div>
    </div>
  </section>
);

const AboutTile = ({ icon, title, text }) => (
  <div className="card p-6 md:p-7 transition-all duration-300 hover-lift">
    <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand grid place-items-center mb-4 glow magnetic">{icon}</div>
    <div className="text-white font-semibold text-xl mb-2">{title}</div>
    <div className="text-textDim">{text}</div>
  </div>
);

const About = ({ lang }) => (
  <section id="about" className="py-20 md:py-24">
    <div className="container">
             <h2 className="text-white text-6xl font-extrabold">
         {lang === 'ar' ? 'عن ' : 'About '}<span className="text-gradient">SoftWave</span>
       </h2>

      <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 mt-8">
        <div className="card p-8 bg-white/5">
          <p className="text-textDim text-lg leading-8">
            {lang === 'ar'
              ? 'تأسست Join SoftWave على مبدأ أن البرمجيات الذكية يمكنها حل أعقد المشكلات. نُبدع حلول برمجية وذكاء اصطناعي مخصّصة تعزّز الكفاءة والابتكار وتحقق ميزة تنافسية.'
              : "Join SoftWave was founded on the principle that intelligent software can solve the world's most complex problems. We specialize in creating custom software and AI solutions that drive efficiency, foster innovation, and create a competitive advantage."}
          </p>
          <p className="text-textDim text-lg leading-8 mt-4">
            {lang === 'ar'
              ? 'يجمع نهجنا بين خبرة تقنية عميقة وعملية تعاونية وشفافة لضمان تقديم نتائج أعمال حقيقية، لا مجرد كود.'
              : 'Our approach combines deep technical expertise with a collaborative, transparent process, ensuring we deliver not just code, but real business outcomes.'}
          </p>

                     <div className="mt-8 grid sm:grid-cols-2 gap-6">
             <div className="card p-6 text-center float-animation" style={{animationDelay: '0.2s'}}>
               <div className="text-3xl font-extrabold text-gradient">7+</div>
               <div className="text-textDim mt-1">Years of AI Expertise</div>
             </div>
             <div className="card p-6 text-center float-animation" style={{animationDelay: '0.4s'}}>
               <div className="text-3xl font-extrabold text-gradient">50+</div>
               <div className="text-textDim mt-1">Global Experts</div>
             </div>
           </div>
        </div>

        <div className="grid gap-6">
          <AboutTile icon={<Sparkles />} title="Innovation" text="We explore emerging AI and software trends to deliver future-proof solutions." />
          <AboutTile icon={<Users />} title="Partnership" text="We succeed when you succeed. We act as an extension of your team." />
          <AboutTile icon={<CheckCircle2 />} title="Quality" text="Excellence ensures robust, secure, high-performance applications." />
          <AboutTile icon={<Layers />} title="Impact" text="We focus on measurable outcomes and clear ROI." />
        </div>
      </div>
    </div>
  </section>
);

const TeamCard = ({ name, role }) => (
  <div className="card p-8 text-center transition-all duration-300 hover:scale-105">
    <div className="mx-auto w-40 h-40 rounded-full border-4 border-brand bg-white/5 mb-6 glow" />
    <div className="text-white text-2xl font-semibold">{name}</div>
    <div className="text-gradient font-medium mt-1">{role}</div>
    <p className="text-textDim mt-3">Expert in building secure, scalable, user-friendly AI solutions.</p>
         <div className="mt-5 flex justify-center gap-3">
       <a className="p-2 rounded-lg bg-white/5 social-link" href="https://www.linkedin.com/in/islam-badran-39a577225/" target="_blank" rel="noopener noreferrer"><Linkedin size={18}/></a>
        <a className="p-2 rounded-lg bg-white/5 social-link" href="https://www.facebook.com/islam.badran.77" target="_blank" rel="noopener noreferrer"><Facebook size={18}/></a>
       <a className="p-2 rounded-lg bg-white/5 social-link" href="https://github.com/islam302/" target="_blank" rel="noopener noreferrer"><Github size={18}/></a>
       <a className="p-2 rounded-lg bg-white/5 social-link" href="https://wa.me/201013919821" target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/></a>
     </div>
  </div>
);

const Team = () => (
  <section id="team" className="py-20 md:py-24 bg-primary2/60">
    <div className="container">
             <h2 className="text-center text-white text-6xl font-extrabold">
         Meet the <span className="text-gradient">Architects</span>
       </h2>
      <p className="text-center text-textDim mt-3">The brilliant minds turning complex algorithms into real-world impact.</p>

             <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         <TeamCard name="Islam Badran" role="Founder & Lead Developer" />
         <TeamCard name="JoinSoftWave Team" role="AI & Security Experts" />
         <TeamCard name="Development Team" role="Software Engineers" />
       </div>
    </div>
  </section>
);

const Contact = ({ lang }) => (
  <section id="contact" className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-center text-white text-6xl font-extrabold">
        {lang === 'ar' ? 'فلنَبنِ' : 'Let’s Build'} <span className="text-[--brand]">{lang === 'ar' ? 'معاً' : 'Together'}</span>
      </h2>
      <p className="text-center text-textDim mt-2">{lang === 'ar' ? 'لديك فكرة أو تحدٍ مُعقّد؟ تواصل معنا اليوم.' : 'Have an idea or a complex challenge? Reach out today.'}</p>

      {/* Quick icons removed here to reduce duplication; consolidated inside the card below */}

      <div className="mt-10 grid lg:grid-cols-2 gap-8">
                 <div className="card p-8 card-enhanced">
           <div className="flex items-center justify-between text-super-readable">
             <div className="flex items-center gap-3">
               <Mail className="text-brand" /> <span>info@join-softwave.online</span>
             </div>
             <a href="mailto:info@join-softwave.online" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 contact-link">
               <ExternalLink size={16} className="text-brand" />
             </a>
           </div>
           <div className="flex items-center justify-between text-super-readable mt-5">
             <div className="flex items-center gap-3">
               <Phone className="text-brand" /> <span>+20 101 391 9821</span>
             </div>
             <a href="tel:+201013919821" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 contact-link">
               <ExternalLink size={16} className="text-brand" />
             </a>
           </div>
           <div className="flex items-center justify-between text-super-readable mt-5">
             <div className="flex items-center gap-3">
               <MapPin className="text-brand" /> <span>{lang === 'ar' ? 'طنطا، مصر' : 'Tanta, Egypt'}</span>
             </div>
             <a href="https://maps.google.com/?q=Tanta,Egypt" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 contact-link">
               <ExternalLink size={16} className="text-brand" />
             </a>
           </div>
           <div className="flex items-center justify-between text-super-readable mt-5">
             <div className="flex items-center gap-3">
               <MessageCircle className="text-brand" /> <span>{lang === 'ar' ? 'واتساب متاح' : 'WhatsApp Available'}</span>
             </div>
             <a href="https://wa.me/201013919821" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 contact-link">
               <ExternalLink size={16} className="text-brand" />
             </a>
           </div>
          <div className="flex items-center justify-between text-super-readable mt-5">
            <div className="flex items-center gap-3">
              <Sparkles className="text-brand" /> <span>Quick Connect</span>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://wa.me/201013919821" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 social-link" aria-label="WhatsApp">
                <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
              </a>
              <a href="mailto:info@join-softwave.online" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 social-link" aria-label="Email">
                <Mail size={16} className="text-brand" />
              </a>
              <a href="https://www.linkedin.com/in/islam-badran-39a577225/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 social-link" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://www.facebook.com/islam.badran.77" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 social-link" aria-label="Facebook">
                <Facebook size={16} />
              </a>
            </div>
           </div>
         </div>

        <form className="card p-8">
          <div className="text-white text-2xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="text-[--brand]" /> {lang === 'ar' ? 'أرسل رسالة' : 'Send a Message'}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-textDim" placeholder={lang === 'ar' ? 'اسمك' : 'Your Name'} />
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-textDim" placeholder={lang === 'ar' ? 'youremail@company.com' : 'youremail@company.com'} />
          </div>
            <input className="mt-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-textDim" placeholder={lang === 'ar' ? 'اسم الشركة' : 'Your Company Name'} />
            <textarea rows="5" className="mt-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-textDim" placeholder={lang === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'} />
          <button type="button" className="mt-4 inline-flex items-center gap-2 bg-[--brand] text-white px-6 py-3 rounded-2xl shadow-soft">
            {lang === 'ar' ? 'إرسال' : 'Submit Inquiry'} <ArrowRight size={18}/>
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = ({ lang }) => (
  <footer className="border-t border-white/10 bg-primary/80">
    <div className="container py-14">
      <div className="grid md:grid-cols-4 gap-10">
                 <div>
           <div className="flex items-center gap-2">
             <img src={logo} alt="JoinSoftWave Logo" className="h-8 w-8 rounded-full object-cover" />
             <div className="font-semibold text-white text-lg">JoinSoftWave</div>
           </div>
                     <p className="text-white mt-4 max-w-sm">
             Delivering cutting-edge software & AI solutions to turn complex problems into elegant, high-performance applications.
           </p>
                     <div className="flex gap-3 mt-5">
             <a className="p-2 rounded-lg bg-white/5 social-link" href="https://www.linkedin.com/in/islam-badran-39a577225/" target="_blank" rel="noopener noreferrer"><Linkedin size={18}/></a>
              <a className="p-2 rounded-lg bg-white/5 social-link" href="https://www.facebook.com/islam.badran.77" target="_blank" rel="noopener noreferrer"><Facebook size={18}/></a>
             <a className="p-2 rounded-lg bg-white/5 social-link" href="https://github.com/islam302/" target="_blank" rel="noopener noreferrer"><Github size={18}/></a>
             <a className="p-2 rounded-lg bg-white/5 social-link" href="https://wa.me/201013919821" target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/></a>
           </div>
        </div>

                          <div>
            <div className="text-white font-semibold mb-3">{lang === 'ar' ? 'الخدمات' : 'Services'}</div>
           <ul className="space-y-2 text-white">
             <li>AI Development</li><li>Software Engineering</li><li>Cybersecurity</li>
             <li>AI Chatbots</li><li>Penetration Testing</li><li>Mobile Solutions</li>
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

             <div className="mt-10 pt-6 text-white border-t border-white/10 text-sm flex flex-wrap gap-4 justify-between">
         <span>{lang === 'ar' ? `© ${new Date().getFullYear()} جون سوفت ويف. جميع الحقوق محفوظة.` : `© ${new Date().getFullYear()} Join SoftWave. All rights reserved.`}</span>
         <div className="flex gap-6">
           <a href="#" className="hover:text-white transition-colors duration-300">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
           <a href="#" className="hover:text-white transition-colors duration-300">{lang === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</a>
         </div>
       </div>
    </div>
  </footer>
);

export default function App() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className="min-h-screen text-white bg-primary relative">
      <StarryBackground />
      <ParticleEffect />
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <Projects lang={lang} />
      <Reviews lang={lang} />
      <About lang={lang} />
      <Team />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
