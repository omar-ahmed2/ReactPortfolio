import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A responsive admin dashboard for an e-commerce platform with real-time sales data, inventory management, and customer analytics. Features include dark mode, responsive tables, and interactive charts.',
    image: 'src/components/public/images/Dashboard.jpg',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Redux'],
    demoLink: 'https://adminpro-omar.netlify.app/',
    githubLink: 'https://github.com/omar-ahmed2/AdminPro'
  },
  {
    title: 'Headphone Landing Page',
    description: 'A sleek and modern landing page for a headphone product. Features include a responsive design, smooth scrolling animations, and a clean layout that highlights product features and specifications.',
    image: 'src/components/public/images/LandingPage.jpg',
    techStack: ['HTML & CSS', 'JavaScript', 'Three.js', 'Spline', 'GSAP', 'AOS'],  
    demoLink: 'https://omar-ahmed2.github.io/Landing-Page/',
    githubLink: 'https://github.com/omar-ahmed2/Landing-Page'
  },
  {
    title: 'gaming streaming platform',
    description: 'A gaming streaming platform that allows users to watch and stream live games. Features include user authentication, chat functionality, and a responsive design for mobile and desktop users.',
    image: 'src/components/public/images/StreamArena.jpg',
    techStack: ['HTML & CSS', 'Java Script', 'Tailwind', 'Three.js', 'Spline'],
    demoLink: 'https://omar-ahmed2.github.io/StreamArena/',
    githubLink: 'https://github.com/omar-ahmed2/StreamArena'
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application that allows users to send and receive messages instantly. Features include user authentication, message history, and a responsive design for mobile and desktop users.',
    image: 'src/components/public/images/ChatApp.jpg',
    techStack: ['HTML & CSS', 'Java Script', 'Tailwind', 'Anime.js','Three.js', 'GSAP'],
    demoLink: 'https://omar-ahmed2.github.io/Chat-App/',
    githubLink: 'https://github.com/omar-ahmed2/Chat-App'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work that showcases my skills and expertise in web development.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/omar-ahmed2?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors duration-300 border border-gray-700"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;