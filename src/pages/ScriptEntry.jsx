import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getScriptBySlug } from '../utils/content';

export default function ScriptEntry() {
  const { slug } = useParams();
  const script = getScriptBySlug(slug);

  if (!script) {
    return <div className="text-white text-center py-20">Script not found.</div>;
  }

  const MDXContent = script.default;

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <Link to="/scripts" className="text-blue-400 hover:underline mb-8 inline-block">
        &larr; Back to Scripts
      </Link>

      <div className="mb-8 pb-8 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-4">{script.title}</h1>
        <div className="flex gap-4 items-center">
          {script.github_url && (
            <a href={script.github_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-900 bg-white px-4 py-2 rounded hover:bg-gray-200 transition-colors">
              View on GitHub
            </a>
          )}
        </div>
      </div>

      <article className="prose prose-invert prose-blue max-w-none">
        <MDXContent />
      </article>
    </div>
  );
}