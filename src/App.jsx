import React, { useState, useEffect } from 'react';
import { Play, Film, Image, ArrowRight, Menu, X, Sparkles, Star, PlayCircle, Mail, Phone, MapPin, Award, Users, Clock } from 'lucide-react';

import hero from "./assets/hero.png";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";





export default function VideoPortfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [playingVideo, setPlayingVideo] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: 'Cinematic Videography',
      category: 'videography',
      description: 'Professional video production with stunning visuals and compelling narratives',
      icon: Film,
      features: ['4K Quality', 'Drone Shots', 'Professional Lighting']
    },
    {
      id: 2,
      title: 'Video Editing',
      category: 'editing',
      description: 'Transform raw footage into compelling stories with advanced editing techniques',
      icon: Play,
      features: ['Color Grading', 'Motion Graphics', 'Sound Design']
    },
    {
      id: 3,
      title: 'YouTube Thumbnails',
      category: 'thumbnails',
      description: 'Eye-catching designs that boost click-through rates and maximize engagement',
      icon: Image,
      features: ['Custom Design', 'Fast Delivery', 'Unlimited Revisions']
    }
  ];

  const projects = [
    { 
      id: 1, 
      type: 'videography', 
      title: 'Brand Commercial', 
      views: '2.5M',
      duration: '2:30',
      videoUrl: 'https://www.youtube.com/embed/HsmtqA_VRZ0', 
      thumbnail: 'https://img.youtube.com/vi/HsmtqA_VRZ0/maxresdefault.jpg',
      isVideo: true 
    },
    { 
      id: 2, 
      type: 'videography', 
      title: 'Documentary Film', 
      views: '3.2M',
      duration: '15:45',
      videoUrl: 'https://www.youtube.com/embed/subJmLKpGbw', 
      thumbnail: 'https://img.youtube.com/vi/subJmLKpGbw/maxresdefault.jpg',
      isVideo: true 
    },
    { 
      id: 3, 
      type: 'editing', 
      title: 'Music Video Edit',
      views: '1.8M',
      duration: '3:45',
      videoUrl: 'https://www.youtube.com/embed/5i62NEqC-bk', 
      thumbnail: 'https://img.youtube.com/vi/5i62NEqC-bk/maxresdefault.jpg',
      isVideo: true 
    },
    { 
      id: 4, 
      type: 'editing', 
      title: 'Fashion Showcase', 
      views: '1.5M',
      duration: '4:20',
      videoUrl: 'https://www.youtube.com/embed/8IB-AWPJQ5k', 
      thumbnail: 'https://img.youtube.com/vi/8IB-AWPJQ5k/maxresdefault.jpg',
      isVideo: true 
    },
    { 
      id: 5, 
      type: 'thumbnails', 
      title: 'Action Themed Design', 
      views: '500K',
      thumbnail: img1,
      isVideo: false 
    },
    { 
      id: 6, 
      type: 'thumbnails', 
      title: 'Mythology Content', 
      views: '450K',
      thumbnail: img2,
      isVideo: false 
    },
    { 
      id: 7, 
      type: 'thumbnails', 
      title: 'Survival Series', 
      views: '890K',
      thumbnail: img3,
      isVideo: false 
    },
    { 
      id: 8, 
      type: 'thumbnails', 
      title: 'Podcast Cover', 
      views: '320K',
      thumbnail: img4,
      isVideo: false 
    }
    
  ];

  const stats = [
    { icon: Clock, value: '3+', label: 'Years Experience' },
    { icon: Award, value: '100+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  const handleVideoClick = (projectId) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none transition-all duration-300 hidden md:block"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 215, 0, 0.15) 0%, transparent 100%)`
        }}
      />
      
      <div className="fixed top-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-[120px] opacity-10 animate-pulse" />
      <div className="fixed bottom-40 left-20 w-80 h-80 bg-amber-400 rounded-full blur-[100px] opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }} />

      <nav className={`fixed top-0 w-full ${scrolled ? 'bg-black/95' : 'bg-black/80'} backdrop-blur-2xl border-b border-white/10 z-50 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <Star size={16} fill="currentColor" className="md:w-5 md:h-5" />
            </div>
            <span className="text-lg md:text-2xl font-bold tracking-tight">PraveenMultimedia</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-gray-400 hover:text-white transition tracking-wide">Services</a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition tracking-wide">Portfolio</a>
            <a href="#about" className="text-gray-400 hover:text-white transition tracking-wide">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition tracking-wide">Contact</a>
          </div>
          
          <a href="#contact" className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-lg font-semibold hover:shadow-xl hover:shadow-yellow-500/30 transition transform hover:scale-105">
            Get Started
          </a>

          <button 
            className="md:hidden text-gray-400 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl px-4 py-6 border-t border-white/10 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition py-3 border-b border-white/10">Services</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition py-3 border-b border-white/10">Portfolio</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition py-3 border-b border-white/10">About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition py-3 border-b border-white/10">Contact</a>
              <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-lg font-semibold mt-2 text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl transform hover:scale-105 transition">
            <Sparkles size={14} className="text-yellow-400 md:w-4 md:h-4" />
            <span className="text-gray-300 text-xs md:text-sm font-medium tracking-wide">PROFESSIONAL VIDEO SERVICES</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight tracking-tight px-4" style={{ 
            textShadow: '0 0 80px rgba(255, 215, 0, 0.3)'
          }}>
            Bringing Your Vision
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              To Life
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Expert videography, precision editing, and scroll-stopping thumbnails that captivate your audience
          </p>
          
          <div className="flex gap-4 md:gap-5 justify-center flex-wrap px-4">
            <a href="#portfolio" className="px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl font-bold hover:shadow-2xl hover:shadow-yellow-500/40 transition flex items-center gap-2 transform hover:scale-110 hover:-translate-y-2">
              View Portfolio <ArrowRight size={18} className="md:w-5 md:h-5" />
            </a>
            <a href="#contact" className="px-6 md:px-10 py-3 md:py-4 bg-white/5 backdrop-blur-xl rounded-xl font-bold hover:bg-white/10 transition border border-white/10 transform hover:scale-110 hover:-translate-y-2">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-6 relative bg-white/5 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/30">
                    <Icon size={24} className="text-black md:w-8 md:h-8" />
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              What I <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg">Premium services tailored to your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group relative bg-white/5 backdrop-blur-2xl rounded-2xl p-6 md:p-10 border border-white/10 hover:border-yellow-500/50 transition overflow-hidden transform hover:scale-105 hover:-translate-y-3 md:hover:-translate-y-6 duration-500"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-yellow-500/30">
                      <Icon size={28} className="text-black md:w-9 md:h-9" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6 md:mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="text-yellow-400 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm md:text-base">
                      Learn More <ArrowRight size={16} className="md:w-5 md:h-5" />
                    </button>
                  </div>

                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              Recent <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg">Showcase of my finest work</p>
          </div>
          
          <div className="flex justify-center gap-2 md:gap-4 mb-12 md:mb-16 flex-wrap">
            {['all', 'videography', 'editing', 'thumbnails'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-xl font-semibold transition-all transform hover:scale-105 hover:-translate-y-1 text-sm md:text-base ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-xl shadow-yellow-500/30'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-all transform hover:scale-105 hover:-translate-y-3 md:hover:-translate-y-6 duration-500"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                }}
              >
                <div className="relative h-48 md:h-72 overflow-hidden">
                  {project.isVideo && playingVideo === project.id ? (
                    <iframe
                      src={`${project.videoUrl}?autoplay=1`}
                      title={project.title}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    <>
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {project.isVideo && (
                        <button 
                          onClick={() => handleVideoClick(project.id)}
                          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl shadow-yellow-500/50">
                            <PlayCircle size={32} className="text-black md:w-10 md:h-10" fill="currentColor" />
                          </div>
                        </button>
                      )}
                      
                      {project.duration && (
                        <div className="absolute top-3 right-3 px-2 md:px-3 py-1 bg-black/80 backdrop-blur-xl rounded-lg text-xs md:text-sm font-semibold">
                          {project.duration}
                        </div>
                      )}
                    </>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 pointer-events-none">
                    <h3 className="text-lg md:text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <p className="text-yellow-400 text-xs md:text-sm font-semibold">{project.views} views</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              About <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg">The creative mind behind the lens</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 transform hover:scale-105 transition-all duration-500" style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}>
                <img 
                  src={hero} 
                  alt="Profile" 
                  className="w-full h-80 md:h-[600px] object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    <div className="bg-black/40 backdrop-blur-xl rounded-xl p-2 md:p-4 border border-white/10 text-center transform hover:scale-110 transition">
                      <div className="text-lg md:text-2xl font-bold text-yellow-400">3+</div>
                      <div className="text-[10px] md:text-xs text-gray-300 mt-1">Years Exp</div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-xl rounded-xl p-2 md:p-4 border border-white/10 text-center transform hover:scale-110 transition">
                      <div className="text-lg md:text-2xl font-bold text-yellow-400">100+</div>
                      <div className="text-[10px] md:text-xs text-gray-300 mt-1">Projects</div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-xl rounded-xl p-2 md:p-4 border border-white/10 text-center transform hover:scale-110 transition">
                      <div className="text-lg md:text-2xl font-bold text-yellow-400">4.9</div>
                      <div className="text-[10px] md:text-xs text-gray-300 mt-1">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                <span className="text-yellow-400 text-xs md:text-sm font-semibold">CREATIVE DIRECTOR & VIDEOGRAPHER</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Crafting Stories Through <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Visuals</span>
              </h3>
              
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I’m Praveen, a creative multimedia professional specializing in video editing, thumbnail design, video production, and graphic visuals. I transform raw ideas and footage into high-impact, engaging visual content that captures attention and delivers results.
              </p>
              
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                From cinematic video edits to eye-catching thumbnails, I focus on attention to detail, creative consistency, and visual storytelling to deliver results that boost engagement and audience retention.
              </p>

              <div className="pt-4 md:pt-6">
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Expertise</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {['Cinematic Production', 'Video Editing', 'Color Grading', 'Motion Graphics', 'Thumbnail Design', 'Brand Strategy'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 md:pt-6">
                <a href="#contact" className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl font-bold hover:shadow-2xl hover:shadow-yellow-500/40 transition-all transform hover:scale-105 text-sm md:text-base">
                  Let's Work Together <ArrowRight size={18} className="md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-500 text-lg mb-12">Ready to bring your vision to life?</p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="mailto:praveenvirat7061@gmail.com" 
              className="px-8 py-4 bg-white/5 backdrop-blur-xl rounded-xl font-bold hover:bg-white/10 transition border border-white/10 transform hover:scale-105"
            >
              Email Me
            </a>
            <a 
              href="https://wa.me/917061838440?text=Hello%20Praveen!%20I%20am%20interested%20in%20your%20video%20editing%20services." 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-green-500/40 transition transform hover:scale-105"
            >
              WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/praveen_vfx_" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-pink-500/40 transition transform hover:scale-105"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                <Star size={16} fill="currentColor" />
              </div>
              <span className="font-bold text-lg">PraveenMultimedia</span>
            </div>
           <p className="text-gray-500 text-sm">
  © 2025{" "}
  <a
    href="https://wa.me/917061838440?text=Hello%20KeshriTechSolution!%20I%20am%20interested%20in%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-600 font-medium transition"
  >
    KeshriTechSolution
  </a>
</p>

          </div>
        </div>
      </footer>
    </div>
  );
}