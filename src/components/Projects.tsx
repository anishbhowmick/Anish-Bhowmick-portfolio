import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import sorting_visualizer from '../assets/images/sorting_visualizer_website_photo.png';
// import ai_image_generator from '../assets/ai_image_generator.png';

const projects = [
  {
    title: "Sorting Visualizer",
    description: "A React application that provides real-time visualization of various sorting algorithms.",
    image: sorting_visualizer,
    // image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React"],
    github: "https://github.com/anishbhowmick/sorting-visualizer",
    live: "https://sorting-visualizer-pink-omega.vercel.app/"
  },
  {
    title: "AI Image Generator",
    description: "Developed an AI-powered image generation tool using Python and OpenAI API",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    tech: ["Python", "OpenAI", "Flask"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-blue-900" id="projects">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}