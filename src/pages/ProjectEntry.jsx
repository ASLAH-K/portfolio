import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '../utils/content';
import RelatedContent from '../components/RelatedContent';

export default function ProjectEntry() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <div className="text-white text-center py-20">Project not found.</div>;

  const MDXContent = project.default;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link to="/projects" className="text-blue-400 hover:underline mb-8 inline-block">
        &larr; Back to Projects
      </Link>
      
      <div className="mb-12 pb-8 border-b border-gray-800">
        <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-6">{project.summary}</p>
        
        <div className="flex flex-wrap gap-4 items-center">
          {project.status && (
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs font-mono uppercase tracking-wider">
              Status: {project.status}
            </span>
          )}
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-900 bg-white px-4 py-2 rounded hover:bg-gray-200 transition-colors">
              View Repository
            </a>
          )}
          {project.demo_url && (
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-400 border border-blue-400 px-4 py-2 rounded hover:bg-blue-900/30 transition-colors">
              Live Demo
            </a>
          )}
        </div>
      </div>

      <article className="prose prose-invert prose-blue max-w-none">
        <MDXContent />
      </article>

      {/* Cross-linking Ecosystem */}
      <RelatedContent 
        journals={project.related_journals} 
        scripts={project.related_scripts} 
      />
    </div>
  );
}