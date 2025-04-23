import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import { Globe, PaintBucket, PenTool as Tool } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: <Globe size={24} />,
    color: 'bg-indigo-500',
    skills: [
      { name: 'HTML/CSS', percentage: 100, color: 'bg-indigo-500' },
      { name: 'JavaScript', percentage: 95, color: 'bg-indigo-500' },
      { name: 'React', percentage: 85, color: 'bg-indigo-500' },
      { name: 'TypeScript', percentage: 85, color: 'bg-indigo-500' },
    ]
  },
  {
    name: 'Design',
    icon: <PaintBucket size={24} />,
    color: 'bg-pink-500',
    skills: [
      { name: 'Figma', percentage: 88, color: 'bg-pink-500' },
      { name: 'UI/UX', percentage: 85, color: 'bg-pink-500' },
      { name: 'Responsive Design', percentage: 90, color: 'bg-pink-500' },
      { name: 'CSS Animation', percentage: 78, color: 'bg-pink-500' },
    ]
  },
  {
    name: 'Tools',
    icon: <Tool size={24} />,
    color: 'bg-blue-500',
    skills: [
      { name: 'Git/GitHub', percentage: 90, color: 'bg-blue-500' },
      { name: 'Webpack', percentage: 75, color: 'bg-blue-500' },
      { name: 'Jest/Testing', percentage: 78, color: 'bg-blue-500' },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-[100px] animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] animate-float" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">My Skills</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels across different domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${category.color.replace('bg-', 'bg-opacity-20 text-')}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                    delay={skillIndex * 100}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js', '3D Animation'].map((tech, index) => (
            <div 
              key={tech}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/40 rounded-lg p-4 hover:bg-gray-800/60 transition-colors duration-300"
            >
              <span className="text-gray-300 font-medium">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;