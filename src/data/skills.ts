export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'professional';
}

export const skillsData: Skill[] = [
  // Technical Skills
  { name: 'Power BI', level: 85, category: 'technical' },
  { name: 'Advanced MS Excel', level: 90, category: 'technical' },
  { name: 'SQL', level: 80, category: 'technical' },
  { name: 'Python', level: 70, category: 'technical' },
  { name: 'HTML5 & CSS', level: 75, category: 'technical' },
  { name: 'Git & GitHub', level: 80, category: 'technical' },
  
  // Professional Skills
  { name: 'Communication', level: 85, category: 'professional' },
  { name: 'Problem Solving', level: 90, category: 'professional' },
  { name: 'Data Visualization', level: 80, category: 'professional' },
  { name: 'Team Collaboration', level: 85, category: 'professional' },
  { name: 'Critical Thinking', level: 75, category: 'professional' },
];

export default skillsData;