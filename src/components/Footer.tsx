import { Heart, Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
              Omar Ahmed
            </a>
            <p className="mt-4 text-gray-400 text-sm">
            I'm a passionate Frontend Developer with a strong eye for design and a deep love for creating intuitive
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm flex items-center"
                  >
                    <ExternalLink size={12} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=omarahmedt2460@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm flex items-center">
                  <Mail size={12} className="mr-2" />
                  omarahmedt2460@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm flex items-center">
                  <Phone size={12} className="mr-2" />
                  +20 01025891909
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm flex items-center">
                  <MapPin size={12} className="mr-2" />
                  Egypt, Cairo
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/omar-ahmed2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/omar-ahmed-888984353/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=omarahmedt2460@gmail.com"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © {currentYear} All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Three.js
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;