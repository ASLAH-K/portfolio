export function getAllJournals() {
  const modules = import.meta.glob('../../content/journal/*.mdx', { eager: true });
  
  const journals = Object.entries(modules).map(([path, module]) => {
    const slug = path.split('/').pop().replace('.mdx', '');
    return {
      slug,
      type: 'journal',
      ...module.frontmatter,
      default: module.default
    };
  });

  // Sort: Pinned items first, then by date (newest first)
  return journals.sort((a, b) => {
    // 1. Handle Pinned Status
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    
    // 2. Handle Date (Newest first)
    return new Date(b.date) - new Date(a.date);
  });
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
    getAllScripts(),
    getAllProjects()
    // getAllTechnologies(),
    // getAllOpenSource()
  ];
  
  const allActivity = sources.flat();
  
  return allActivity
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export function getAllProjects() {
  const modules = import.meta.glob('../../content/projects/*.mdx', { eager: true });

  const projects = Object.entries(modules).map(([path, module]) => {
    const slug = path.split('/').pop().replace('.mdx', '');
    return {
      slug,
      type: 'projects',
      ...module.frontmatter,
      default: module.default
    };
  });

  return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getProjectBySlug(slug) {
  const projects = getAllProjects();
  return projects.find(project => project.slug === slug);
}