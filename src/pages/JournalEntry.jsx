import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getJournalBySlug } from '../utils/content';
import SEO from '../components/SEO';

export default function JournalEntry() {
  const { slug } = useParams();
  const journal = getJournalBySlug(slug);

  if (!journal) return <div className="text-workspace-text-primary text-center py-20">Journal entry not found.</div>;

  const MDXContent = journal.default;

  return (
    <div className="workspace-container py-12 md:py-20">
      <SEO 
        title={journal.title} 
        description={journal.summary}
        type="article"
      />
      
      <Link to="/journal" className="workspace-link mb-8 inline-block font-medium">
        &larr; Back to Journal
      </Link>
      
      <div className="mb-12 pb-8 border-b border-workspace-border">
        <h1 className="text-4xl md:text-5xl font-bold text-workspace-text-primary mb-4 tracking-tight">{journal.title}</h1>
        
        <div className="flex items-center gap-4 text-workspace-text-muted mb-6">
          <span className="font-mono text-sm">{journal.date}</span>
          {journal.category && <span className="workspace-pill">{journal.category}</span>}
        </div>
        
        <p className="text-xl text-workspace-text-muted leading-relaxed">{journal.summary}</p>
      </div>

      {/* The Universal MDX Typography Primitive */}
      <article className="workspace-mdx">
        <MDXContent />
      </article>
    </div>
  );
}