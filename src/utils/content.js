export function getAllJournals() {
  // Vite's import.meta.glob fetches all matching files at build time
  const modules = import.meta.glob('../../content/journal/*.mdx', { eager: true });

  const journals = Object.entries(modules).map(([path, module]) => {
    // Extract the filename without the .mdx extension to use as the URL slug
    const slug = path.split('/').pop().replace('.mdx', '');
    return {
      slug,
      ...module.frontmatter,
      default: module.default // The actual React component containing your markdown
    };
  });

  // Sort entries from newest to oldest
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