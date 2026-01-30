import React, { useState, useEffect } from 'react';
import { Play, Film, Image, ArrowRight, Menu, X, Sparkles, Star, PlayCircle, Mail, Phone, MapPin, Award, Users, Clock, Send, MessageCircle, Zap, TrendingUp, Crown } from 'lucide-react';

export default function VideoPortfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [playingVideo, setPlayingVideo] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [heroTextIndex, setHeroTextIndex] = useState(0);

  const heroTexts = [
    {
      main: "Bringing Your Vision",
      gradient: "To Life",
      subtitle: "Professional videography aur editing jo aapke content ko banaye viral-worthy"
    },
    {
      main: "Aapki Kahani Ko",
      gradient: "Banaye Yaadgaar",
      subtitle: "Har frame mein emotions, har shot mein perfection - yehi hai hamara commitment"
    },
    {
      main: "Creative Excellence",
      gradient: "Meets Technology",
      subtitle: "Latest tools aur creative minds ka perfect combination - sirf aapke liye"
    }
  ];

  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "YouTube Creator",
      rating: 5,
      text: "Praveen's video editing is top-notch! My channel grew 300% after working with him. Professional and creative!",
      avatar: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      role: "Wedding Videographer",
      rating: 5,
      text: "Amazing work on our wedding videos! The cinematic quality was beyond expectations. Highly recommended!",
      avatar: "👰"
    },
    {
      name: "Amit Patel",
      role: "Business Owner",
      rating: 5,
      text: "Best thumbnail designer! Our CTR increased by 45%. Worth every penny!",
      avatar: "👨‍💻"
    },
    {
      name: "Sneha Reddy",
      role: "Content Creator",
      rating: 5,
      text: "Praveen transformed my raw footage into engaging content. Very professional and quick delivery!",
      avatar: "👩‍🎨"
    }
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 5000);
    return () => clearInterval(heroTimer);
  }, [heroTexts.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    const message = `*New Enquiry - Praveen Multimedia*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/917061838440?text=${message}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      id: 1,
      title: 'Cinematic Videography',
      category: 'videography',
      description: 'Professional video production with stunning visuals and compelling narratives',
      icon: Film,
      features: ['4K Quality', 'Drone Shots', 'Professional Lighting'],
      gradient: 'from-amber-400 via-yellow-500 to-amber-600'
    },
    {
      id: 2,
      title: 'Video Editing',
      category: 'editing',
      description: 'Transform raw footage into compelling stories with advanced editing techniques',
      icon: Play,
      features: ['Color Grading', 'Motion Graphics', 'Sound Design'],
      gradient: 'from-rose-400 via-pink-500 to-rose-600'
    },
    {
      id: 3,
      title: 'YouTube Thumbnails',
      category: 'thumbnails',
      description: 'Eye-catching designs that boost click-through rates and maximize engagement',
      icon: Image,
      features: ['Custom Design', 'Fast Delivery', 'Unlimited Revisions'],
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600'
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
    }
  ];

  const stats = [
    { icon: Clock, value: '3+', label: 'Years Experience', gradient: 'from-amber-400 via-yellow-500 to-amber-600' },
    { icon: Award, value: '100+', label: 'Projects Completed', gradient: 'from-rose-400 via-pink-500 to-rose-600' },
    { icon: Users, value: '50+', label: 'Happy Clients', gradient: 'from-cyan-400 via-blue-500 to-indigo-600' },
    { icon: Star, value: '4.9', label: 'Average Rating', gradient: 'from-purple-400 via-violet-500 to-purple-600' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  const handleVideoClick = (projectId) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Luxury Gold Grid Background */}
      <div className="fixed inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.15) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />
      
      {/* Premium Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95" />
      
      {/* Dynamic Mouse Glow - Gold */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none transition-all duration-700 hidden md:block"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 191, 36, 0.25) 0%, transparent 100%)`
        }}
      />
      
      {/* Luxury Floating Orbs */}
      <div className="fixed top-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full blur-[150px] opacity-20 animate-pulse" />
      <div className="fixed bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 rounded-full blur-[130px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-full blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '4s' }} />

      {/* Premium WhatsApp Button */}
      <a 
        href="https://wa.me/917061838440" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 animate-pulse" />
          <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-green-400/50">
            <MessageCircle size={32} className="animate-bounce" />
          </div>
        </div>
      </a>

      {/* Premium Navigation */}
      <nav className={`fixed top-0 w-full ${scrolled ? 'bg-black/98' : 'bg-black/85'} backdrop-blur-2xl border-b ${scrolled ? 'border-amber-500/40' : 'border-amber-500/20'} z-40 transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-amber-300/50">
                <Crown size={16} fill="currentColor" className="md:w-5 md:h-5 text-black" />
              </div>
            </div>
            <span className="text-lg md:text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">PraveenMultimedia</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-gray-400 hover:text-amber-400 transition-all duration-300 tracking-wide font-semibold relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#portfolio" className="text-gray-400 hover:text-amber-400 transition-all duration-300 tracking-wide font-semibold relative group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#reviews" className="text-gray-400 hover:text-amber-400 transition-all duration-300 tracking-wide font-semibold relative group">
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-all duration-300 tracking-wide font-semibold relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
          
          <a href="#contact" className="hidden md:block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-6 py-2.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black rounded-xl font-bold hover:scale-105 transition-transform duration-300 border-2 border-amber-300/50">
              Get Started
            </div>
          </a>

          <button 
            className="md:hidden text-gray-400 hover:text-amber-400 p-2 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-2xl px-4 py-6 border-t border-amber-500/30 animate-slideDown">
            <div className="flex flex-col gap-4">
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-amber-400 transition py-3 border-b border-amber-500/20 font-semibold">Services</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-amber-400 transition py-3 border-b border-amber-500/20 font-semibold">Portfolio</a>
              <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-amber-400 transition py-3 border-b border-amber-500/20 font-semibold">Reviews</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-amber-400 transition py-3 border-b border-amber-500/20 font-semibold">Contact</a>
              <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black rounded-xl font-bold mt-2 text-center hover:scale-105 transition-transform border-2 border-amber-300/50">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Premium Hero Section with Rotating Text */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-600/10 backdrop-blur-xl rounded-full border border-amber-500/40 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Crown size={14} className="text-amber-400 md:w-5 md:h-5 animate-pulse" />
            <span className="text-amber-300 text-xs md:text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Premium Video Services</span>
            <Sparkles size={14} className="text-amber-400 md:w-5 md:h-5 animate-pulse" />
          </div>
          
          <div className="min-h-[320px] md:min-h-[400px] flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight tracking-tight px-4">
              <div className="transition-all duration-1000 ease-in-out text-white drop-shadow-2xl">
                {heroTexts[heroTextIndex].main}
              </div>
              <div className="transition-all duration-1000 ease-in-out">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
                  {heroTexts[heroTextIndex].gradient}
                </span>
              </div>
            </h1>
            
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-1000 ease-in-out min-h-[60px] flex items-center font-medium">
              {heroTexts[heroTextIndex].subtitle}
            </p>
          </div>
          
          <div className="flex gap-4 md:gap-5 justify-center flex-wrap px-4">
            <a href="#portfolio" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black rounded-2xl font-bold hover:scale-110 transition-all duration-300 flex items-center gap-2 border-2 border-amber-300/50 shadow-2xl">
                View Portfolio <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a href="#contact" className="group relative">
              <div className="relative px-6 md:px-10 py-3 md:py-4 bg-white/5 backdrop-blur-xl rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 border-2 border-amber-500/40 hover:border-amber-500/70 hover:scale-110 shadow-xl">
                Contact Me
              </div>
            </a>
          </div>

          {/* Premium Rotating Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {heroTexts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroTextIndex(idx)}
                className={`transition-all duration-500 rounded-full ${
                  idx === heroTextIndex 
                    ? 'w-8 h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-lg shadow-amber-500/50' 
                    : 'w-2 h-2 bg-gray-700 hover:bg-gray-600 border border-amber-500/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="relative py-12 md:py-16 px-4 md:px-6 bg-gradient-to-r from-amber-900/10 via-yellow-900/10 to-amber-900/10 backdrop-blur-xl border-y border-amber-500/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-3 md:mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity`} />
                    <div className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl border-2 border-white/20`}>
                      <Icon size={24} className="text-white md:w-8 md:h-8" />
                    </div>
                  </div>
                  <div className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 md:mb-2 drop-shadow-lg`}>{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section id="services" className="relative py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-500/10 backdrop-blur-xl rounded-full border border-amber-500/40">
              <TrendingUp size={16} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-bold tracking-widest">PREMIUM SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white">
              What I <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-semibold">Luxury services crafted for excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group relative bg-black/60 backdrop-blur-2xl rounded-3xl p-6 md:p-10 border-2 border-amber-500/30 hover:border-amber-500/70 transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-translate-y-6 shadow-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 opacity-10`} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="relative mb-6 md:mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity`} />
                      <div className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl border-2 border-white/20`}>
                        <Icon size={28} className="text-white md:w-9 md:h-9" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight text-white">{service.title}</h3>
                    <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6 md:mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full shadow-lg shadow-amber-500/50`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-sm md:text-base`}>
                      Learn More <ArrowRight size={16} className="md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Portfolio Section */}
      <section id="portfolio" className="relative py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-500/10 backdrop-blur-xl rounded-full border border-amber-500/40">
              <Film size={16} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-bold tracking-widest">PORTFOLIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white">
              Recent <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-semibold">Masterpieces in motion</p>
          </div>
          
          <div className="flex justify-center gap-2 md:gap-4 mb-12 md:mb-16 flex-wrap">
            {['all', 'videography', 'editing', 'thumbnails'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 md:px-8 py-2 md:py-3 rounded-xl font-bold transition-all transform hover:scale-105 text-sm md:text-base group ${
                  activeCategory === cat
                    ? 'text-black'
                    : 'bg-white/5 hover:bg-white/10 border-2 border-amber-500/30 text-gray-300'
                }`}
              >
                {activeCategory === cat && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-xl blur-lg opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-xl border-2 border-amber-300/50" />
                  </>
                )}
                <span className="relative z-10">{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
              </button>
            ))}
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-black/60 backdrop-blur-2xl rounded-3xl overflow-hidden border-2 border-amber-500/30 hover:border-amber-500/70 transition-all transform hover:scale-105 hover:-translate-y-6 duration-500 shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
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
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {project.isVideo && (
                        <button 
                          onClick={() => handleVideoClick(project.id)}
                          className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full blur-2xl opacity-75 animate-pulse" />
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl border-2 border-amber-300/50">
                              <PlayCircle size={32} className="text-black md:w-10 md:h-10" fill="currentColor" />
                            </div>
                          </div>
                        </button>
                      )}
                      
                      {project.duration && (
                        <div className="absolute top-3 right-3 px-2 md:px-3 py-1 bg-black/95 backdrop-blur-xl rounded-lg text-xs md:text-sm font-bold border border-amber-500/40 text-amber-400">
                          {project.duration}
                        </div>
                      )}
                    </>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 pointer-events-none">
                    <h3 className="text-lg md:text-2xl font-bold mb-2 tracking-tight text-white">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse shadow-lg shadow-amber-500/50" />
                      <p className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent text-xs md:text-sm font-bold">{project.views} views</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Reviews Section */}
      <section id="reviews" className="relative py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-500/10 backdrop-blur-xl rounded-full border border-amber-500/40">
              <Star size={16} className="text-amber-400" fill="currentColor" />
              <span className="text-amber-400 text-sm font-bold tracking-widest">TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white">
              Client <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Reviews</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-semibold">Excellence recognized by our clients</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-black/60 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border-2 border-amber-500/40 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="text-7xl mb-4 animate-bounce">{reviews[activeReview].avatar}</div>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(reviews[activeReview].rating)].map((_, i) => (
                      <Star key={i} size={24} className="text-amber-400 animate-pulse drop-shadow-lg" fill="currentColor" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                </div>
                
                <p className="text-xl md:text-2xl text-gray-200 italic text-center mb-8 leading-relaxed transition-all duration-500 font-medium">
                  "{reviews[activeReview].text}"
                </p>
                
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-lg">
                    {reviews[activeReview].name}
                  </p>
                  <p className="text-gray-400 mt-2 font-semibold">{reviews[activeReview].role}</p>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveReview(idx)}
                      className={`rounded-full transition-all duration-500 ${
                        idx === activeReview 
                          ? 'w-8 h-3 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-lg shadow-amber-500/50' 
                          : 'w-3 h-3 bg-gray-700 hover:bg-gray-600 border border-amber-500/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Form Section */}
      <section id="contact" className="relative py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-500/10 backdrop-blur-xl rounded-full border border-amber-500/40">
              <Send size={16} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-bold tracking-widest">GET IN TOUCH</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Let's <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-semibold">Transform your vision into reality</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-black/60 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border-2 border-amber-500/40">
                <h3 className="text-3xl font-bold mb-8 text-white">Send Message</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2 font-bold">Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-6 py-4 bg-black/70 border-2 border-amber-500/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 mb-2 font-bold">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-6 py-4 bg-black/70 border-2 border-amber-500/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 mb-2 font-bold">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-6 py-4 bg-black/70 border-2 border-amber-500/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="+91 1234567890"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 mb-2 font-bold">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-6 py-4 bg-black/70 border-2 border-amber-500/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="group relative w-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-full px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 border-2 border-amber-300/50 shadow-2xl">
                      <Send size={20} />
                      Send via WhatsApp
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-black/60 backdrop-blur-2xl rounded-3xl p-8 border-2 border-amber-500/40">
                  <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl blur-lg opacity-75 group-hover/item:opacity-100 transition-opacity" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-amber-300/50">
                          <Phone size={24} className="text-black" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1 font-bold">Phone</p>
                        <a href="tel:+917061838440" className="text-white font-bold hover:text-amber-400 transition">+91 7061838440</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-75 group-hover/item:opacity-100 transition-opacity" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-cyan-300/50">
                          <Mail size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1 font-bold">Email</p>
                        <a href="mailto:praveenvirat7061@gmail.com" className="text-white font-bold hover:text-amber-400 transition break-all">praveenvirat7061@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group/item">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl blur-lg opacity-75 group-hover/item:opacity-100 transition-opacity" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-rose-300/50">
                          <MapPin size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1 font-bold">Location</p>
                        <p className="text-white font-bold">India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-black/60 backdrop-blur-2xl rounded-3xl p-8 border-2 border-amber-500/40">
                  <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>
                  <div className="space-y-4">
                    <a 
                      href="https://wa.me/917061838440" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl blur-lg opacity-75 group-hover/link:opacity-100 transition-opacity" />
                      <div className="relative flex items-center gap-4 p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:scale-105 transition-transform border-2 border-green-400/50">
                        <MessageCircle size={24} />
                        <span className="font-bold">WhatsApp</span>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.instagram.com/praveen_vfx_" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur-lg opacity-75 group-hover/link:opacity-100 transition-opacity" />
                      <div className="relative flex items-center gap-4 p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl hover:scale-105 transition-transform border-2 border-pink-400/50">
                        <Instagram size={24} />
                        <span className="font-bold">Instagram</span>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:praveenvirat7061@gmail.com"
                      className="group/link relative block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl blur-lg opacity-75 group-hover/link:opacity-100 transition-opacity" />
                      <div className="relative flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl hover:scale-105 transition-transform border-2 border-blue-400/50">
                        <Mail size={24} />
                        <span className="font-bold">Email</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="relative border-t-2 border-amber-500/40 py-10 px-6 backdrop-blur-2xl bg-black/80">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-8 h-8 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-lg flex items-center justify-center border-2 border-amber-300/50">
                  <Crown size={16} fill="currentColor" className="text-black" />
                </div>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">PraveenMultimedia</span>
            </div>
            <p className="text-gray-500 text-sm font-semibold">
              © 2025 <a href="https://wa.me/917061838440" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 font-bold transition">KeshriTechSolution</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);