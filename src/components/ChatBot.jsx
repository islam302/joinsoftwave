import React from "react";
import {
  Cpu, Home, Layers, Users, Phone, Mail, MapPin, ArrowRight, Zap, MessageSquare,
  Linkedin, Twitter, Github, Bot, Code2, Brain, CheckCircle2, Sparkles, Shield, MessageCircle, ExternalLink
} from "lucide-react";
import ParticleEffect from "./ParticleEffect";
import StarryBackground from "./StarryBackground";
import logo from "./images/logo.jpg";

const Nav = () => (
  <nav className="sticky top-0 z-50 backdrop-blur-md bg-primary/80 border-b border-white/10">
    <div className="container h-16 flex items-center justify-between">
             <div className="flex items-center gap-3">
         <img src={logo} alt="JoinSoftWave Logo" className="h-10 w-10 rounded-full object-cover glow" />
                   <div className="leading-tight">
            <div className="font-semibold text-white text-lg">Join<span className="text-gradient">SoftWave</span></div>
          </div>
       </div>

      <ul className="hidden md:flex items-center gap-8 text-white/90">
        <li><a className="hover:text-white transition-colors duration-300" href="#home">Home</a></li>
        <li><a className="hover:text-white transition-colors duration-300" href="#services">Services</a></li>
        <li><a className="hover:text-white transition-colors duration-300" href="#about">About</a></li>
        <li><a className="hover:text-white transition-colors duration-300" href="#team">Team</a></li>
        <li><a className="hover:text-white transition-colors duration-300" href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="hidden md:inline-flex items-center gap-2 modern-btn text-white">
        Get Started
      </a>
    </div>
  </nav>
);

const Stat = ({ value, label }) => (
  <div className="card p-8 text-center float-animation">
    <div className="text-4xl font-extrabold text-gradient">{value}</div>
    <div className="mt-2 text-textDim">{label}</div>
  </div>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-hero-radial">
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        

        <h1 className="mt-5 text-white font-extrabold leading-tight text-[44px] md:text-[72px]">
          Building the Future<br/>with
          <span className="block text-gradient">Intelligent Software</span>
        </h1>

        <p className="mt-5 text-lg md:text-xl text-textDim">
          We transform complex challenges into elegant, high-performance applications powered by cutting-edge AI.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#services" className="inline-flex items-center gap-2 modern-btn text-white shimmer">
            Our Services <ArrowRight size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-white/15 px-6 py-3 rounded-2xl text-white hover:bg-white/5 transition-all duration-300 hover-lift">
            <Zap size={18} className="text-brand" /> Contact Us
          </a>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <Stat value="200+" label="AI Models Deployed" />
        <Stat value="99%" label="Client Retention" />
        <Stat value="1M+" label="Users Served" />
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

const Services = () => (
  <section id="services" className="py-20 md:py-24 bg-primary2/60">
    <div className="container">
             <h2 className="text-center text-white text-5xl md:text-6xl font-extrabold">
         Our <span className="text-gradient">Services</span>
       </h2>
      <p className="mt-4 text-center text-textDim max-w-3xl mx-auto">
        We provide a complete suite of software and AI services to power your business’s growth.
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

const About = () => (
  <section id="about" className="py-20 md:py-24">
    <div className="container">
             <h2 className="text-white text-6xl font-extrabold">
         About <span className="text-gradient">SoftWave</span>
       </h2>

      <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 mt-8">
        <div className="card p-8 bg-white/5">
          <p className="text-textDim text-lg leading-8">
            Join SoftWave was founded on the principle that intelligent software can solve the world's most complex problems.
            We specialize in creating custom software and AI solutions that drive efficiency, foster innovation, and create a competitive advantage.
          </p>
          <p className="text-textDim text-lg leading-8 mt-4">
            Our approach combines deep technical expertise with a collaborative, transparent process, ensuring we deliver not just code, but real business outcomes.
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
       <a className="p-2 rounded-lg bg-white/5 social-link" href="https://www.facebook.com/islam.badran.77" target="_blank" rel="noopener noreferrer"><Twitter size={18}/></a>
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

const Contact = () => (
  <section id="contact" className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-center text-white text-6xl font-extrabold">
        Let’s Build <span className="text-[--brand]">Together</span>
      </h2>
      <p className="text-center text-textDim mt-2">Have an idea or a complex challenge? Reach out today.</p>

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
               <MapPin className="text-brand" /> <span>Tanta, Egypt</span>
             </div>
             <a href="https://maps.google.com/?q=Tanta,Egypt" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 contact-link">
               <ExternalLink size={16} className="text-brand" />
             </a>
           </div>
           <div className="flex items-center justify-between text-super-readable mt-5">
             <div className="flex items-center gap-3">
               <MessageCircle className="text-brand" /> <span>WhatsApp Available</span>
             </div>
             <a href="https://wa.me/201013919821" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 contact-link">
               <ExternalLink size={16} className="text-brand" />
             </a>
           </div>
         </div>

        <form className="card p-8">
          <div className="text-white text-2xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="text-[--brand]" /> Send a Message
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-textDim" placeholder="Your Name" />
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-textDim" placeholder="youremail@company.com" />
          </div>
          <input className="mt-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-textDim" placeholder="Your Company Name" />
          <textarea rows="5" className="mt-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-textDim" placeholder="How can we help you?" />
          <button type="button" className="mt-4 inline-flex items-center gap-2 bg-[--brand] text-white px-6 py-3 rounded-2xl shadow-soft">
            Submit Inquiry <ArrowRight size={18}/>
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-primary/80">
    <div className="container py-14">
      <div className="grid md:grid-cols-4 gap-10">
                 <div>
           <div className="flex items-center gap-2">
             <img src={logo} alt="JoinSoftWave Logo" className="h-8 w-8 rounded-full object-cover" />
             <div className="font-semibold text-white text-lg">JoinSoftWave</div>
           </div>
                     <p className="text-white/90 mt-4 max-w-sm">
             Delivering cutting-edge software & AI solutions to turn complex problems into elegant, high-performance applications.
           </p>
                     <div className="flex gap-3 mt-5">
             <a className="p-2 rounded-lg bg-white/5 social-link" href="https://www.linkedin.com/in/islam-badran-39a577225/" target="_blank" rel="noopener noreferrer"><Linkedin size={18}/></a>
             <a className="p-2 rounded-lg bg-white/5 social-link" href="https://www.facebook.com/islam.badran.77" target="_blank" rel="noopener noreferrer"><Twitter size={18}/></a>
             <a className="p-2 rounded-lg bg-white/5 social-link" href="https://github.com/islam302/" target="_blank" rel="noopener noreferrer"><Github size={18}/></a>
             <a className="p-2 rounded-lg bg-white/5 social-link" href="https://wa.me/201013919821" target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/></a>
           </div>
        </div>

                          <div>
           <div className="text-white font-semibold mb-3">Services</div>
           <ul className="space-y-2 text-white/80">
             <li>AI Development</li><li>Software Engineering</li><li>Cybersecurity</li>
             <li>AI Chatbots</li><li>Penetration Testing</li><li>Mobile Solutions</li>
           </ul>
         </div>

         <div>
           <div className="text-white font-semibold mb-3">Company</div>
           <ul className="space-y-2 text-white/80">
             <li>About Us</li><li>Our Team</li><li>Careers</li><li>Blog</li><li>Case Studies</li>
           </ul>
         </div>

         <div>
           <div className="text-white font-semibold mb-3">Resources</div>
           <ul className="space-y-2 text-white/80">
             <li>Documentation</li><li>API Reference</li><li>Support Center</li><li>Community</li>
           </ul>
         </div>
      </div>

             <div className="mt-10 pt-6 text-white/80 border-t border-white/10 text-sm flex flex-wrap gap-4 justify-between">
         <span>© {new Date().getFullYear()} Join SoftWave. All rights reserved.</span>
         <div className="flex gap-6">
           <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
         </div>
       </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen text-white bg-primary relative">
      <StarryBackground />
      <ParticleEffect />
      <Nav />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
