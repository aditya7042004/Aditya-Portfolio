import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'professional';
}

const Skills: React.FC = () => {
  const technicalSkills: Skill[] = [
    { name: 'Power BI', level: 80, category: 'technical' },
    { name: 'MS Excel', level: 80, category: 'technical' },
    { name: 'SQL', level: 80, category: 'technical' },
    { name: 'Python', level: 30, category: 'technical' },
  ];

  const professionalSkills: Skill[] = [
    { name: 'Communication', level: 90, category: 'professional' },
    { name: 'Problem Solving', level: 90, category: 'professional' },
    { name: 'Data Visualization', level: 80, category: 'professional' },
    { name: 'Team Collaboration', level: 80, category: 'professional' },
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
                      style={{ 
                        width: `${skill.level}%`,
                        transition: 'width 1s ease-in-out',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Professional Skills</h3>
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2.5 rounded-full"
                      style={{ 
                        width: `${skill.level}%`,
                        transition: 'width 1s ease-in-out',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;