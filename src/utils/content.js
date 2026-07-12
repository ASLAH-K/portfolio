export function getAllJournals() {
  const modules = import.meta.glob('../../content/journal/*.mdx', { eager: true });
  
  const journals = Object.entries(modules).map(([path, module]) => {
    const slug = path.split('/').pop().replace('.mdx', '');
    return {
      slug,
      type: 'journal', // Injected for the unified activity feed
      ...module.frontmatter,
      default: module.default
    };
  });
  
  return journals.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getJournalBySlug(slug) {
  const journals = getAllJournals();
  return journals.find(journal => journal.slug === slug);
}

export function getAllScripts() {
  const modules = import.meta.glob('../../content/scripts/*.mdx', { eager: true });
  
  const scripts = Object.entries(modules).map(([path, module]) => {
    const slug = path.split('/').pop().replace('.mdx', '');
    return {
      slug,
      type: 'scripts', // Injected for the unified activity feed
      ...module.frontmatter,
      default: module.default
    };
  });
  
  return scripts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getScriptBySlug(slug) {
  const scripts = getAllScripts();
  return scripts.find(script => script.slug === slug);
}

// Unifies all workspace content and returns the most recent items
export function getLatestActivity(limit = 3) {
  // Future content fetchers can simply be dropped into this array
  const sources = [
    getAllJournals(),
    getAllScripts()
    // getAllTechnologies(),
    // getAllOpenSource()
  ];
  
  const allActivity = sources.flat();
  
  return allActivity
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}