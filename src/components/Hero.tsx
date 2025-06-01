import React, { useEffect, useRef } from 'react';
import { Github } from 'lucide-react';

const Hero: React.FC = () => {
  const skillsRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const skills = [
      'Power BI',
      'Advanced MS Excel',
      'SQL',
      'Python',
      'Git Hub',
      'HTML5',
      'CSS'
    ];
    
    let currentIndex = 0;
    
    const rotateSkills = () => {
      if (skillsRef.current) {
        skillsRef.current.style.opacity = '0';
        
        setTimeout(() => {
          if (skillsRef.current) {
            skillsRef.current.textContent = skills[currentIndex];
            skillsRef.current.style.opacity = '1';
            currentIndex = (currentIndex + 1) % skills.length;
          }
        }, 500);
      }
    };
    
    const interval = setInterval(rotateSkills, 3000);
    rotateSkills(); // Start immediately
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-neutral-900 overflow-hidden"
    >
      {/* Particle background */}
      <div className="particles absolute inset-0" id="tsparticles"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="block text-white leading-tight">Hi, I am</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Aditya Yadav
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-300 mb-6 opacity-0 animate-fade-up">
            Data Analyst
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            I'm a BSc IT student with knowledge in data analysis using{' '}
            <span ref={skillsRef} className="text-cyan-300 transition-opacity duration-500">
              Power BI
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://drive.google.com/file/d/1GE08ljion1iCwi8uh58O9hreEvRxM7YC/view" 
              className="px-8 py-3 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Resume
            </a>
            <a 
              href="https://github.com/aditya7042004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-neutral-800 text-white font-medium rounded-full border border-cyan-500 hover:bg-neutral-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-cyan-300 hover:text-white transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
