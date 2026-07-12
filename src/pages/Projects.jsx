import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../utils/content';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Engineering Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.slug} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors flex flex-col h-full">
            <Link to={`/projects/${project.slug}`} className="text-xl font-semibold mb-3 text-blue-400 hover:underline">
              {project.title}
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{project.summary}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech_stack?.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-900 border border-gray-700 text-gray-300 rounded text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}