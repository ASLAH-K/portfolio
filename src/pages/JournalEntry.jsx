import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getJournalBySlug } from '../utils/content';

export default function JournalEntry() {
  const { slug } = useParams();
  const journal = getJournalBySlug(slug);

  if (!journal) {
    return <div className="text-white text-center py-20">Journal entry not found.</div>;
  }

  // This is the parsed MDX content converted into a React component
  const MDXContent = journal.default;

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <Link to="/journal" className="text-blue-400 hover:underline mb-8 inline-block">
        &larr; Back to Journal
      </Link>

      {/* The prose classes activate the Tailwind Typography plugin */}
      <article className="prose prose-invert prose-blue max-w-none">
        <MDXContent />
      </article>
    </div>
  );
}