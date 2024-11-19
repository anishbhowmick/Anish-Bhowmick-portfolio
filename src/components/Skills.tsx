import React from 'react';
import { Code } from 'lucide-react';

const skills = [
  {
    category: "Languages & Fundamentals",
    skills: ["Python", "Data Structures", "Algorithms"],
    color: "from-blue-500 to-cyan-500"
  },
  { 
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "MongoDB"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Tools",
    skills: ["Git", "Matlab"],
    color: "from-orange-500 to-red-500"
  }
];

export default function Skills() {
  return (
    <section className="py-32 bg-gray-900" id="skills">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div 
              key={group.category} 
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                   style={{ background: `linear-gradient(to right, ${group.color})` }}></div>
              <div className="relative bg-gray-800 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-700">
                <h3 className={`text-2xl font-semibold mb-6 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <Code size={18} className="text-gray-400" />
                      <span className="text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}