import React from 'react';
import { Link } from 'react-router-dom';
import { getAllJournals } from '../utils/content';

export default function Journal() {
  const journals = getAllJournals();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Learning Journal</h1>
      <div className="space-y-6">
        {journals.map((journal) => (
          <div key={journal.slug} className="p-6 border border-gray-800 rounded-lg bg-gray-900">
            <Link to={`/journal/${journal.slug}`} className="text-xl font-semibold text-blue-400 hover:underline">
              {journal.title}
            </Link>
            <p className="text-sm text-gray-400 mt-2">{journal.date} • {journal.category}</p>
            <p className="text-gray-300 mt-4">{journal.summary}</p>

            {/* Render tag badges */}
            <div className="mt-4 flex gap-2">
              {journal.tags?.map(tag => (
                <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}