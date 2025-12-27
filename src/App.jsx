import React, { useState, useEffect } from 'react';
import { Play, Film, Image, ArrowRight, Menu, X, Sparkles, Star } from 'lucide-react';
import heroImg from "./assets/hero.png";

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Cinematic Videography',
      category: 'videography',
      description: 'Professional video production with stunning visuals',
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
      icon: Film
    },
    {
      id: 2,
      title: 'Video Editing',
      category: 'editing',
      description: 'Transform raw footage into compelling stories',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      icon: Play
    },
    {
      id: 3,
      title: 'YouTube Thumbnails',
      category: 'thumbnails',
      description: 'Eye-catching designs that boost click-through rates',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      icon: Image
    }
  ];

  // const projects = [
  //   { id: 1, type: 'videography', title: 'Brand Commercial', views: '2.5M', thumbnail: 'https://www.youtube.com/embed/HsmtqA_VRZ0' },
  //   { id: 2, type: 'editing', title: 'Music Video Edit', views: '1.8M', thumbnail: 'https://www.youtube.com/embed/_zFrrlbTL84' },
  //   { id: 3, type: 'thumbnails', title: 'Tech Review Series', views: '500K', thumbnail: 'https://www.youtube.com/embed/8IB-AWPJQ5k' },
  //   { id: 4, type: 'videography', title: 'Documentary Film', views: '3.2M', thumbnail: 'https://www.youtube.com/embed/subJmLKpGbw' },


  //   { id: 5, type: 'editing', title: 'Fashion Showcase', views: '1.2M', thumbnail: 'https://www.youtube.com/embed/5i62NEqC-bk' },
  //   { id: 6, type: 'thumbnails', title: 'Gaming Channel', views: '890K', thumbnail: 'https://www.youtube.com/embed/5i62NEqC-bk' }
    
  // ];


  const projects = [
    // Videography Projects
    { id: 1, type: 'videography', title: 'Brand Commercial', videoUrl: 'https://www.youtube.com/embed/HsmtqA_VRZ0', isVideo: true },
    { id: 2, type: 'videography', title: 'Documentary Film', videoUrl: 'https://www.youtube.com/embed/subJmLKpGbw', isVideo: true },
    
    // Editing Projects - REPLACE THESE VIDEO IDs WITH YOUR YOUTUBE VIDEO IDs
    { id: 3, type: 'editing', title: 'Music Video Edit 1',  videoUrl: 'https://www.youtube.com/embed/5i62NEqC-bk', isVideo: true },
    { id: 4, type: 'editing', title: 'Music Video Edit 2', videoUrl: 'https://www.youtube.com/embed/8IB-AWPJQ5k', isVideo: true },
    // { id: 5, type: 'editing', title: 'Music Video Edit 3', views: '1.3M', videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3', isVideo: true },
    // { id: 6, type: 'editing', title: 'Music Video Edit 4', views: '1.1M', videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_4', isVideo: true },
    // { id: 7, type: 'editing', title: 'Music Video Edit 5', views: '900K', videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_5', isVideo: true },
    // { id: 8, type: 'editing', title: 'Music Video Edit 6', views: '850K', videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_6', isVideo: true },
    
    // Thumbnail Projects
    { id: 9, type: 'thumbnails', title: 'Nuclear Base/Action Theme', thumbnail: img1, isVideo: false },
    { id: 10, type: 'thumbnails', title: 'Mythology Podcast', thumbnail: img2, isVideo: false },
    { id: 11, type: 'thumbnails', title: 'Plane Crash Survival', thumbnail: img3, isVideo: false },
    { id: 12, type: 'thumbnails', title: 'Political/Geopolitical Podcast', thumbnail: img4, isVideo: false },
    { id: 13, type: 'thumbnails', title: 'Luxury Brand History', thumbnail: img5, isVideo: false },
    { id: 14, type: 'thumbnails', title: 'Cinematic Horror/Survival', thumbnail: img6, isVideo: false }
  ];





  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      {/* Animated Glow Effect */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 215, 0, 0.15) 0%, transparent 100%)`
        }}
      />
      
      {/* Floating Accent Elements */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-[120px] opacity-10 animate-pulse" />
      <div className="fixed bottom-40 left-20 w-80 h-80 bg-amber-400 rounded-full blur-[100px] opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-2xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <Star size={20} fill="currentColor" />
            </div>
            <span className="text-2xl font-bold tracking-tight">PraveenMultimedia</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-gray-400 hover:text-white transition tracking-wide">Services</a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition tracking-wide">Portfolio</a>
            <a href="#about" className="text-gray-400 hover:text-white transition tracking-wide">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition tracking-wide">Contact</a>
          </div>
          
          <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-lg font-semibold hover:shadow-xl hover:shadow-yellow-500/30 transition transform hover:scale-105">
            Get Started
          </button>

          <button 
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl px-6 py-6 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-gray-400 hover:text-white transition py-2">Services</a>
              <a href="#portfolio" className="text-gray-400 hover:text-white transition py-2">Portfolio</a>
              <a href="#about" className="text-gray-400 hover:text-white transition py-2">About</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition py-2">Contact</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-lg font-semibold mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl transform hover:scale-105 transition">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-gray-300 text-sm font-medium tracking-wide">PROFESSIONAL VIDEO SERVICES</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight" style={{ 
            textShadow: '0 0 80px rgba(255, 215, 0, 0.3)'
          }}>
            Bringing Your Vision
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              To Life
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expert videography, precision editing, and scroll-stopping thumbnails that captivate your audience
          </p>
          
          <div className="flex gap-5 justify-center flex-wrap">
            <a href="#portfolio" className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl font-bold hover:shadow-2xl hover:shadow-yellow-500/40 transition flex items-center gap-2 transform hover:scale-110 hover:-translate-y-2">
              View Portfolio <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-10 py-4 bg-white/5 backdrop-blur-xl rounded-xl font-bold hover:bg-white/10 transition border border-white/10 transform hover:scale-110 hover:-translate-y-2">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              What I <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-gray-500 text-lg">Premium services tailored to your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group relative bg-white/5 backdrop-blur-2xl rounded-2xl p-10 border border-white/10 hover:border-yellow-500/50 transition overflow-hidden transform hover:scale-105 hover:-translate-y-6 duration-500"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                    transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateY(-1.5rem)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0)';
                  }}
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-yellow-500/30">
                      <Icon size={36} className="text-black" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                    
                    <button className="text-yellow-400 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                      Learn More <ArrowRight size={18} />
                    </button>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

     


{/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Recent <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-500 text-lg">Showcase of my finest work</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {['all', 'videography', 'editing', 'thumbnails'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 hover:-translate-y-1 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-xl shadow-yellow-500/30'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-6 duration-500"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateY(-1.5rem)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0)';
                }}
              >
                <div className="relative h-72 overflow-hidden">
                  {project.isVideo ? (
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <p className="text-yellow-400 text-sm font-semibold">{project.views} views</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Me Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-500 text-lg">The creative mind behind the lens</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 transform hover:scale-105 transition-all duration-500" style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}>
                <img 
                  src={heroImg} 
                  alt="Profile" 
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/10 text-center transform hover:scale-110 transition">
                      <div className="text-2xl font-bold text-yellow-400">3+</div>
                      <div className="text-xs text-gray-300 mt-1">Years Exp</div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/10 text-center transform hover:scale-110 transition">
                      <div className="text-2xl font-bold text-yellow-400">100+</div>
                      <div className="text-xs text-gray-300 mt-1">Projects</div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-white/10 text-center transform hover:scale-110 transition">
                      <div className="text-2xl font-bold text-yellow-400">4</div>
                      <div className="text-xs text-gray-300 mt-1">Awards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                <span className="text-yellow-400 text-sm font-semibold">CREATIVE DIRECTOR & VIDEOGRAPHER</span>
              </div>
              
              <h3 className="text-4xl font-bold leading-tight">
                Crafting Stories Through  <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Visuals</span>
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                I’m Praveen, a creative multimedia professional with expertise in video editing, thumbnail design, video shooting, and graphic visuals. I enjoy transforming raw ideas and footage into engaging visual content that connects with audiences. With a strong understanding of digital media trends and storytelling techniques, I focus on creating high-quality visuals that are both visually appealing and purpose-driven across platforms like YouTube, Instagram, and other social media channels.
              </p>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                I believe great visuals have the power to communicate, inspire, and leave a lasting impression. From cinematic video edits and eye-catching thumbnails to creative multimedia graphics, I work with attention to detail, consistency, and creativity. My goal is to help brands, creators, and businesses enhance their online presence through impactful visuals that drive engagement and deliver real results.
              </p>

              {/* Skills */}
              <div className="pt-6">
                <h4 className="text-xl font-bold mb-4">Expertise</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="text-gray-300">Cinematic Production</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="text-gray-300">Video Editing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="text-gray-300">Color Grading</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="text-gray-300">Motion Graphics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="text-gray-300">Thumbnail Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="text-gray-300">Brand Strategy</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl font-bold hover:shadow-2xl hover:shadow-yellow-500/40 transition-all transform hover:scale-105">
                  Let's Work Together <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Let's <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-500 text-lg">Ready to bring your vision to life? Get in touch</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-10 border border-white/10 transform hover:scale-105 transition-all duration-500" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
            }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[120px] opacity-10" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="eg. Gautam Keshri"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="eg. Gautam@example.com"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Project Type</label>
                    <select className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition">
                      <option value="" className="bg-black">Select a service</option>
                      <option value="videography" className="bg-black">Videography</option>
                      <option value="editing" className="bg-black">Video Editing</option>
                      <option value="thumbnails" className="bg-black">YouTube Thumbnails</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Message</label>
                    <textarea 
                      rows="5" 
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl font-bold hover:shadow-2xl hover:shadow-yellow-500/40 transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300" style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/30">
                    <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Email</h4>
                    <p className="text-gray-400">praveenvirat7061@gmail.com</p>
                    <p className="text-gray-400">support@praveenmultimedia.in</p>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300" style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/30">
                    <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Phone</h4>
                    <p className="text-gray-400">+91 70618 38440</p>
                    <p className="text-gray-400">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/7061838440?text='Hi%2C%20Im%20interested%20in%20your%20video%20services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transform hover:scale-105 transition-all duration-300 block group" 
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-green-400 transition">WhatsApp</h4>
                    <p className="text-gray-400">Chat with me instantly</p>
                    <p className="text-green-400 text-sm font-semibold mt-1">Click to start conversation →</p>
                  </div>
                </div>
              </a>

              <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300" style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/30">
                    <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Location</h4>
                    <p className="text-gray-400">Babugaon, Hazaribagh </p>
                    <p className="text-gray-400">Jharkhand, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10" style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}>
                <h4 className="text-xl font-bold mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white/5 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-amber-500 rounded-xl flex items-center justify-center border border-white/10 hover:border-transparent transition-all transform hover:scale-110 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/5 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-amber-500 rounded-xl flex items-center justify-center border border-white/10 hover:border-transparent transition-all transform hover:scale-110 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/5 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-amber-500 rounded-xl flex items-center justify-center border border-white/10 hover:border-transparent transition-all transform hover:scale-110 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/5 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-amber-500 rounded-xl flex items-center justify-center border border-white/10 hover:border-transparent transition-all transform hover:scale-110 group">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
  ©2025{" "}
  <a
    href="https://wa.me/916203094055?text=Hi%2C%20I%20want%20to%20discuss%20a%20software%20or%20mobile%20app%20development%20project."
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-400 transition font-semibold"
  >
    KeshriTechSolution
  </a>
</p>

          

            
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition">Twitter</a>
              <a href="https://www.instagram.com/praveen_vfx_?igsh=MTMwaDNqNHVxb2Fy" className="text-gray-500 hover:text-white transition">Instagram</a>
              <a href="https://youtube.com/@ajeetkumar0108?si=8MUxkoXJ4Glduntw" className="text-gray-500 hover:text-white transition">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}