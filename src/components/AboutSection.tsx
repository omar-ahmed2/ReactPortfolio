import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Paintbrush, UserCircle } from 'lucide-react';

const tabs = [
  {
    id: 'personal',
    label: 'Personal',
    icon: <UserCircle className="mr-2" size={18} />,
    content: `I'm a passionate Frontend Developer with a strong eye for design and a deep love for creating 
    intuitive, responsive web experiences. When I'm not coding, you can find me exploring new hiking trails, 
    experimenting with photography, or reading science fiction novels. I believe in continuous learning and 
    challenging myself to grow both personally and professionally.`
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <Code className="mr-2" size={18} />,
    content: `With 2+ years of experience in frontend development, I specialize in building responsive, 
    accessible, and performant web applications. My expertise includes React, TypeScript, and modern CSS 
    frameworks. I'm passionate about creating pixel-perfect UIs and seamless user experiences that connect 
    people with technology in meaningful ways.`
  },
  {
    id: 'design',
    label: 'Design',
    icon: <Paintbrush className="mr-2" size={18} />,
    content: `I approach design with a user-centered mindset, focusing on creating interfaces that are not just 
    beautiful but also functional and accessible. I'm proficient in UI/UX principles, wireframing, prototyping, 
    and using design tools like Figma and Adobe XD. I particularly enjoy creating design systems that ensure 
    consistency across products.`
  },
  {
    id: 'technology',
    label: 'Technology',
    icon: <Laptop className="mr-2" size={18} />,
    content: `I stay on the cutting edge of web technologies, embracing modern frameworks and tools that enhance 
    development workflows. I'm experienced with React, Vue, Next.js, and various frontend tooling. I'm also 
    fascinated by 3D on the web, exploring Three.js and WebGL to create immersive interactive experiences.`
  }
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600/20 rounded-lg transform translate-x-3 translate-y-3"></div>
              <img 
                src="src/components/public/images/Omar.jpg" 
                alt="Profile" 
                className="rounded-lg w-full h-auto relative z-10 object-cover aspect-ratio-1/1 shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white py-2 px-4 rounded shadow-lg z-20">
                <span className="font-medium">2+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full flex items-center text-sm transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>

              <div className="content min-h-[150px]">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`transition-opacity duration-300 ${
                      activeTab === tab.id ? 'block opacity-100' : 'hidden opacity-0'
                    }`}
                  >
                    <p className="text-gray-300 leading-relaxed">{tab.content}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="bg-gray-800/80 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">20+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="bg-gray-800/80 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">3+</div>
                  <div className="text-gray-400 text-sm">Clients</div>
                </div>
                <div className="bg-gray-800/80 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">2+</div>
                  <div className="text-gray-400 text-sm">Years</div>
                </div>
                <div className="bg-gray-800/80 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">10+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;