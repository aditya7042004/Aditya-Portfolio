import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Walmart Sales Data Analysis',
      description: 'Analyzed sales data to identify trends and opportunities for growth',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      category: 'excel',
      technologies: ['Excel', 'SQL Database'],
      link: 'https://github.com/aditya7042004/walmart_saleData_analysis_SQL.git'
    },
    {
      id: 2,
      title: 'shopping cart data store-and-simple-analysis',
      description: 'creation and management of a database using SQL, including the storing of data and performing simple analysis',
      image: 'https://github.com/user-attachments/assets/f9c31be2-aaa8-4def-9a20-807eda8c42ed',
      category: 'SQL',
      technologies: ['SQL'],
      link: 'https://github.com/aditya7042004/shopping_cart_data_store-and-simple-analysis'
    },
    {
      id: 3,
      title: 'Call-Centre-Analysis',
      description: 'analyze call center performance, customer interactions, and agent efficiency',
      image: 'https://github.com/user-attachments/assets/8be8fe6d-8873-43af-bae7-476243f6ff49',
      category: 'sql',
      technologies: ['SQL', 'Database Design'],
      link: 'https://github.com/aditya7042004/Call-Centre-Analysis'
    },
    {
      id: 4,
      title: 'SaleAnalysisExcel',
      description: 'analyzes sales data to extract valuable insights and visualize key trends using Excel Dashboards',
      image: 'https://github.com/user-attachments/assets/bc08d0e3-b1ce-4f57-98ae-d5c2caf6886c',
      category: 'Excel',
      technologies: ['Excel'],
      link: 'https://github.com/aditya7042004/SaleAnalysisExcel'
    },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'excel', name: 'Excel' },
    { id: 'power-bi', name: 'Power BI' },
    { id: 'sql', name: 'SQL' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-white">My</span>
          <span className="text-cyan-400"> Projects</span>
        </h2>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-neutral-700 text-gray-300 hover:bg-neutral-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 shadow-lg cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-700 text-cyan-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  View Project →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;