import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getScriptBySlug } from '../utils/content';
import SEO from '../components/SEO';

export default function ScriptEntry() {
  const { slug } = useParams();
  const script = getScriptBySlug(slug);

  if (!script) return <div className="text-workspace-text-primary text-center py-20">Script not found.</div>;

  const MDXContent = script.default;

  return (
    <div className="workspace-container py-12 md:py-20">
      <SEO 
        title={script.title} 
        description={script.summary}
        type="article"
      />
      
      <Link to="/scripts" className="workspace-link mb-8 inline-block font-medium">
        &larr; Back to Scripts
      </Link>
      
      <div className="mb-12 pb-8 border-b border-workspace-border">
        <h1 className="text-4xl md:text-5xl font-bold text-workspace-text-primary mb-4 tracking-tight">{script.title}</h1>
        <p className="text-xl text-workspace-text-muted mb-6 leading-relaxed">{script.summary}</p>
        
        {script.github_url && (
          <div className="mt-4">
            <a href={script.github_url} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm px-4 py-2">
              View Script Repository
            </a>
          </div>
        )}
      </div>

      {/* The Universal MDX Typography Primitive */}
      <article className="workspace-mdx">
        <MDXContent />
      </article>
    </div>
  );
}