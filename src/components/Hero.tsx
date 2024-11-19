import React from 'react';
import { Code, Terminal, ChevronDown } from 'lucide-react';
import my_photo from '../assets/images/my_photo.jpg';

// import { Code, Terminal, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative h-screen flex items-center justify-center text-white overflow-hidden matrix-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/95 to-purple-900/90 z-10"></div>
      <div className="absolute inset-0 code-pattern z-20"></div>
      
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
              <img 
                src={my_photo}
                alt="Profile" 
                className="w-32 h-32 rounded-full border-2 border-white/20 shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
          <Terminal size={16} className="text-blue-400" />
          <span className="text-blue-300">~/developer/portfolio</span>
        </div>

        <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400">
          Anish Bhowmick
        </h1>

        <div className="flex items-center justify-center gap-3 mb-8">
          <Code size={24} className="text-blue-400" />
          <p className="text-2xl text-blue-100 typing-effect">Full Stack Developer & Photography Enthusiast</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              View Projects
              <Terminal size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-3 bg-white/5 hover:bg-white/10 rounded-full font-semibold backdrop-blur-sm transition-all border border-white/10 hover:border-white/20"
          >
            <span className="flex items-center gap-2">
              Contact Me
              <Code size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-1/4 left-10 animate-float opacity-20">
          <Terminal size={48} className="text-blue-500" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Code size={48} className="text-purple-500" />
        </div>
      </div>
    </header>
  );
}