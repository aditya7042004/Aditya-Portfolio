import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-white">About</span>
          <span className="text-cyan-400"> Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500 mx-auto">
                <img 
                  src="https://i.postimg.cc/qqF5PBgj/Whats-App-Image-2025-05-03-at-14-49-55-c5e1b5a9.jpg" 
                  alt="Aditya Yadav" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                <span>BSc IT</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Aspiring Data Analyst</h3>
            <p className="text-gray-300 mb-6">
              Hi, I'm Aditya Yadav, actively pursuing a Bachelor's degree in Information Technology (BSc IT),
              demonstrating a strong commitment to academic excellence and a passion for the dynamic field of IT.
              My academic journey involves gaining practical skills and problem-solving capabilities.
              My foundational Knowledge spans IT principles, Power Bi, SQL, Excel and Python.
            </p>
            <p className="text-gray-300 mb-8">
              My foundational knowledge spans IT principles, Power BI, SQL, Excel, and Python. I'm particularly
              interested in data analysis and visualization, finding insights from complex datasets.
            </p>
            
            <a 
              href="https://www.linkedin.com/in/aditya-yadav-398902245/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;