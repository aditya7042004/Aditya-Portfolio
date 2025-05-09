import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">Aditya Yadav</h3>
            <p className="text-gray-400">Data Analyst | BSc IT Student</p>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} - All Rights Reserved</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#home"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;