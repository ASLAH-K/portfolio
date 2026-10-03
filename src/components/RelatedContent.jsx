import React from 'react';
import { Link } from 'react-router-dom';
import { getJournalBySlug, getScriptBySlug } from '../utils/content';

export default function RelatedContent({ journals = [], scripts = [] }) {
  // Future-proof architecture: easily add new content types here
  if (!journals?.length && !scripts?.length) return null;
  
  const contentMap = [
    { slugs: journals, fetcher: getJournalBySlug, label: 'Journal Entry', basePath: 'journal' },
    { slugs: scripts, fetcher: getScriptBySlug, label: 'Utility Script', basePath: 'scripts' }
    // { slugs: technologies, fetcher: getTechBySlug, label: 'Technology', basePath: 'tech' }
  ];

  // Resolve all items dynamically into a single flattened array
  const relatedItems = contentMap.flatMap(config => 
    (config.slugs || []).map(slug => {
      const item = config.fetcher(slug);
      return item ? { ...item, _label: config.label, _basePath: config.basePath } : null;
    }).filter(Boolean)
  );

  // If no related items exist across any category, hide the section
  if (relatedItems.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-gray-800">
      <h3 className="text-2xl font-bold text-white mb-6">Related Resources</h3>
      <div className="grid md:grid-cols-2 gap-6">
        
        {relatedItems.map(item => (
          <Link 
            key={`${item._basePath}-${item.slug}`} 
            to={`/${item._basePath}/${item.slug}`} 
            className="block p-5 bg-[#0a0f18] border border-gray-800 rounded-lg hover:border-blue-500/50 transition-colors"
          >
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2 block">
              {item._label}
            </span>
            <h4 className="font-semibold text-white mb-2">{item.title}</h4>
            <p className="text-sm text-gray-400 line-clamp-2">{item.summary}</p>
          </Link>
        ))}
        
      </div>
    </div>
  );
}