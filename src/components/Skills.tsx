import React from 'react';
import { motion } from 'framer-motion';
interface Skill {
  name: string;
  icon: string;
  level: number;
  expertise?: string;
}
const Skills = () => {
const skills: Skill[] = [
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
    level: 60,
    expertise: 'Basic OOP'
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
    level: 90,
    expertise: 'Responsive components, Theming, Grid layouts'
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    level: 80,
    expertise: 'UI/UX Design, Prototyping, Wireframing'
  },
  {
    name: 'XAMPP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
    level: 85,
    expertise: 'Local server setup, Database management, PHP testing'
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 95,
    expertise: 'Semantic markup, Accessibility, SEO-friendly structure'
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 95,
    expertise: 'Responsive design, Animations, Flexbox & Grid'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    level: 95,
    expertise: 'Database design, Query optimization, CRUD operations'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 80,
    expertise: 'Frontend logic'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    level: 80,
    expertise: 'Utility-first CSS, Responsive layouts, Custom components'
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    level: 75,
    expertise: 'Server-side rendering, Routing, API integration'
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    level: 75,
    expertise: 'Version control, Collaboration, Repository management'
  },
  {
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg',
    level: 80,
    expertise: 'OOP, Windows Forms, Backend development, Application logic'
  }
];

  return <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Advanced technologies and methodologies I leverage to create
            sophisticated, scalable solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => <motion.div key={skill.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: index * 0.1
        }} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="flex justify-center mb-4">
                <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-3">
                <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" style={{
              width: `${skill.level}%`
            }}></div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Proficiency
                </span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {skill.level}%
                </span>
              </div>
              {skill.expertise && <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 italic">
                  {skill.expertise}
                </p>}
            </motion.div>)}
        </div>
      </div>
    </section>;
};


export default Skills;