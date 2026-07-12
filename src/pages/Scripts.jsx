import React from 'react';
import { Link } from 'react-router-dom';
import { getAllScripts } from '../utils/content';

export default function Scripts() {
  const scripts = getAllScripts();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Automation Scripts & Utilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scripts.map((script) => (
          <div key={script.slug} className="p-6 border border-gray-800 rounded-lg bg-gray-900 flex flex-col h-full">
            <Link to={`/scripts/${script.slug}`} className="text-xl font-semibold text-blue-400 hover:underline">
              {script.title}
            </Link>
            <p className="text-gray-300 mt-4 flex-grow">{script.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {script.tech_stack?.map(tech => (
                <span key={tech} className="text-xs font-mono bg-blue-900/30 text-blue-400 border border-blue-800 px-2 py-1 rounded">
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