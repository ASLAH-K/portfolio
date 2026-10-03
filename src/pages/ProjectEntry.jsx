import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { Copy, CheckCircle2 } from 'lucide-react';
import { getProjectBySlug } from '../utils/content';
import RelatedContent from '../components/RelatedContent';
import SEO from '../components/SEO';

// Custom Pre block with Copy functionality
const CodeBlock = (props) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    // Extract raw text from the nested code element
    const text = props.children?.props?.children || "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group">
      <pre {...props} />
      <button 
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute top-3 right-3 p-1.5 rounded-md bg-workspace-surface border border-workspace-border text-workspace-text-muted opacity-0 group-hover:opacity-100 transition-opacity hover:text-workspace-accent focus:opacity-100"
      >
        {copied ? <CheckCircle2 size={16} className="text-workspace-glow" /> : <Copy size={16} />}
      </button>
    </div>
  );
};

export default function ProjectEntry() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <div className="text-workspace-text-primary text-center py-20">Project not found.</div>;

  const MDXContent = project.default;

  return (
    <div className="workspace-container py-12 md:py-20">
      <SEO 
        title={project.title} 
        description={project.summary}
        type="article"
      />
      <Link to="/projects" className="workspace-link mb-8 inline-block font-medium">
        &larr; Back to Projects
      </Link>
      
      <div className="mb-12 pb-8 border-b border-workspace-border">
        <h1 className="text-4xl md:text-5xl font-bold text-workspace-text-primary mb-4 tracking-tight">{project.title}</h1>
        <p className="text-xl text-workspace-text-muted mb-6 leading-relaxed">{project.summary}</p>
        
        <div className="flex flex-wrap gap-4 items-center">
          {project.status && (
            <span className="workspace-pill uppercase tracking-wider">
              Status: {project.status}
            </span>
          )}
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm px-4 py-2">
              View Repository
            </a>
          )}
          {project.demo_url && (
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-4 py-2">
              Live Demo
            </a>
          )}
        </div>
      </div>

      <article className="workspace-mdx">
        <MDXProvider components={{ pre: CodeBlock }}>
          <MDXContent />
        </MDXProvider>
      </article>

      <RelatedContent 
        journals={project.related_journals} 
        scripts={project.related_scripts} 
      />
    </div>
  );
}