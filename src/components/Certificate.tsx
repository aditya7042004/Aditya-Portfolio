import React from 'react';

const Certificate: React.FC = () => {
  const certificates = [
    {
      id: 1,
      title: 'Power BI Data Analytics',
      issuer: 'Microsoft',
      date: 'January 2024',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg',
      link: '#'
    },
    {
      id: 2,
      title: 'Advanced Excel for Data Analysis',
      issuer: 'LinkedIn Learning',
      date: 'December 2023',
      image: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg',
      link: '#'
    },
    {
      id: 3,
      title: 'SQL Database Management',
      issuer: 'Coursera',
      date: 'November 2023',
      image: 'https://images.pexels.com/photos/5905711/pexels-photo-5905711.jpeg',
      link: '#'
    }
  ];

  return (
    <section id="certificate" className="py-20 bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-white">My</span>
          <span className="text-cyan-400"> Certificates</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mb-2">Issued by: {cert.issuer}</p>
                <p className="text-gray-500 mb-4">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-cyan-500/10 text-cyan-400 rounded-full hover:bg-cyan-500/20 transition-colors duration-300"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;