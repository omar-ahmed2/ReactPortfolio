import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Info } from 'lucide-react';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
};

const ProjectCard = ({ title, description, image, techStack, demoLink, githubLink }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700/50 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 transition-opacity duration-300`} />
        
        <div className="absolute top-4 right-4 flex gap-2">
          {techStack.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-900/80 text-xs text-gray-300 px-2 py-1 rounded-full backdrop-blur-sm border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 3 && (
            <span className="bg-gray-900/80 text-xs text-gray-300 px-2 py-1 rounded-full backdrop-blur-sm border border-gray-700/50 flex items-center">
              <Info size={12} className="mr-1" /> +{techStack.length - 3}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-6 line-clamp-3">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={`View GitHub repository for ${title}`}
            >
              <Github size={20} />
            </a>
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={`View live demo for ${title}`}
            >
              <ExternalLink size={20} />
            </a>
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
            className="h-0.5 bg-indigo-500 absolute bottom-0 left-0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;