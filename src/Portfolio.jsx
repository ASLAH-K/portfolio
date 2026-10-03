import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Terminal, MapPin, Phone, FileText, CheckCircle2 } from 'lucide-react';
import { getLatestActivity, getAllProjects } from './utils/content';
import { currentlyExploring } from './data/exploring';
import SEO from './components/SEO';

const skills = {
  "Cybersecurity": [
    "Detection Engineering",
    "Threat Hunting",
    "Digital Forensics",
    "OSINT",
    "Windows Security",
    "Vulnerability Assessment"
  ],

  "Programming Languages": [
    "Python",
    "PowerShell",
    "Java",
    "C++"
  ],

  "Tools & Technologies": [
    "Windows",
    "Kali Linux",
    "Flask",
    "SQLite",
    "Git"
  ]
};

const experience = [
  {
    role: "Intern",
    company: "Kerala Police (Cyber Crime Police Station)",
    location: "Thiruvananthapuram, Kerala",
    period: "May 2025 - Jun 2025",
    description:
      "Worked alongside investigators on cybercrime cases, assisting with OSINT-based information gathering, report preparation, and day-to-day investigative tasks. This internship gave me my first practical exposure to how cybercrime investigations are carried out."
  },
  {
    role: "Media Head",
    company: "GDG On Campus, NFSU Delhi",
    location: "Delhi, India",
    period: "Oct 2024 - Aug 2025",
    description:
      "Helped document and promote community events by creating photos, videos, and social media content. It was a great opportunity to improve communication, teamwork, and creative storytelling while supporting a student tech community."
  }
];

const certifications = [
  { name: "CEH-v13", org: "EC Council", date: "On Going" },
  { name: "Cisco Ethical Hacker", org: "Cisco Networking Academy", date: "Dec 2025" },
  { name: "IBM Python 101 for Data Science", org: "IBM", date: "Mar 2025" }
];

export default function Portfolio() {
  // Fetch unified dynamic content
  const recentActivity = getLatestActivity(3);

  // Only display projects explicitly marked as featured in their MDX frontmatter
  const projects = getAllProjects().filter(project => project.featured);
// State for email copy feedback
const [emailCopied, setEmailCopied] = useState(false);

// Bulletproof copy-to-clipboard fallback
const handleEmailClick = async (e) => {
  e.preventDefault(); // Stop the default mailto failure
  try {
    await navigator.clipboard.writeText("mhdaslah.k@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
  } catch (err) {
    console.error("Failed to copy email: ", err);
  }
  // Still attempt to open the mail client for users who have it configured
  window.location.href = "mailto:mhdaslah.k@gmail.com";
};
  return (
    <div className="text-workspace-text-primary animate-fade-in">
      <SEO 
        title="Home" 
        description="Digital Engineering Workspace of Muhammed Aslah K, Cybersecurity Graduate."
      />
      
      {/* 1. Hero Section */}
      <section id="hero" className="min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-12 lg:pt-0 lg:pb-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Typography & Actions */}
          <div className="space-y-8 z-10 lg:pr-4">
            <div className="space-y-4">
              <p className="text-workspace-accent font-mono text-lg flex items-center gap-2">
                <Terminal size={20} /> Hello, I'm
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
                Muhammed<br />Aslah K
              </h2>
              <p className="text-xl lg:text-2xl text-workspace-text-muted font-medium mt-4">
                Cybersecurity Graduate & Enthusiast
              </p>
            </div>
            
            <p className="text-workspace-text-muted text-lg lg:text-xl leading-relaxed max-w-lg">
              I'm a recent cybersecurity graduate who enjoys understanding how systems work, why attacks succeed, and how they can be detected or prevented. This workspace is where I document what I build, what I'm learning, and the questions that keep me curious along the way. 
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/ASLAH-K" target="_blank" rel="noopener noreferrer" aria-label="View my GitHub Profile" className="p-3.5 bg-workspace-surface border border-workspace-border hover:border-workspace-accent/50 text-workspace-text-muted hover:text-workspace-accent rounded-xl transition-all duration-workspace-base hover:shadow-glow hover:-translate-y-1">
                <Github size={24} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/muhammed-aslah-k-86783836a/" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn" className="p-3.5 bg-workspace-surface border border-workspace-border hover:border-workspace-accent/50 text-workspace-text-muted hover:text-workspace-accent rounded-xl transition-all duration-workspace-base hover:shadow-glow hover:-translate-y-1">
                <Linkedin size={24} aria-hidden="true" />
              </a>
              <a href="mailto:mhdaslah.k@gmail.com" onClick={handleEmailClick} aria-label="Email Me" className="p-3.5 bg-workspace-surface border border-workspace-border hover:border-workspace-accent/50 text-workspace-text-muted hover:text-workspace-accent rounded-xl transition-all duration-workspace-base hover:shadow-glow hover:-translate-y-1">
                {emailCopied ? (
                  <CheckCircle2 size={24} className="text-workspace-glow" aria-hidden="true" />
                ) : (
                  <Mail size={24} aria-hidden="true" />
                )}
              </a>
            </div>
          </div>

          {/* Right Column: Original Ellipse Silhouette */}
          <div className="flex justify-center lg:justify-end items-center relative h-full">
            <div
              className="
                w-[20rem] h-[22rem]
                md:w-[25rem] md:h-[27rem]
                lg:w-[31rem] lg:h-[33rem]
                rounded-full
                overflow-hidden
                border-4
                border-workspace-accent/30
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                relative
                group
                shrink-0 "
            >
              <img
                src="/profile.jpg"
                alt="Muhammed Aslah K"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager" 
                fetchpriority="high"
              />
              {/* Inner shadow overlay to integrate the photo into the dark design system */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(7,11,20,0.6)] pointer-events-none transition-opacity duration-700 group-hover:opacity-50"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. About / Philosophy */}
      <section id="about" className="workspace-section bg-workspace-surface/30">
        <div className="workspace-container max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-bold text-white">Engineering Philosophy</h3>
          <p className="text-workspace-text-muted text-lg leading-relaxed">
            This workspace is where I document my journey into cybersecurity—one project, one experiment, and one question at a time. I built it as a place to think out loud, keep track of what I'm learning, and share the ideas, successes, mistakes, and lessons that shape how I approach engineering. As I continue to grow, this workspace will grow with me, becoming a record of both where I started and where the journey takes me next.
          </p>
        </div>
      </section>

      {/* 3. Featured Projects */}
      <section id="projects" className="workspace-section">
        <div className="workspace-container">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white">Featured Systems</h3>
            <p className="text-workspace-text-muted mt-2">Major engineering projects and architectures.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="workspace-card flex flex-col h-full group">
                <Link to={`/projects/${project.slug}`} className="text-xl font-semibold mb-3 text-white group-hover:text-workspace-accent transition-colors duration-workspace-fast">
                  {project.title}
                </Link>
                {/* Dynamically fallback to project.summary to support our new schema */}
                <p className="text-workspace-text-muted text-sm mb-6 leading-relaxed flex-grow">{project.summary || project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {(project.tech_stack || project.tags || []).map((tag, tagIdx) => (
                    <span key={tagIdx} className="workspace-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Latest Activity */}
      <section className="workspace-section bg-workspace-surface/30">
        <div className="workspace-container max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white">Latest Activity</h3>
            <p className="text-workspace-text-muted mt-2">What I've been working on lately</p>
          </div>
          <div className="space-y-4">
            {recentActivity.map(activity => (
              <Link key={activity.slug} to={`/${activity.type}/${activity.slug}`} className="workspace-card block group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-xl text-workspace-accent group-hover:text-workspace-glow transition-colors duration-workspace-fast">{activity.title}</h4>
                  <span className="workspace-pill capitalize">
                    {activity.type}
                  </span>
                </div>
                <p className="text-workspace-text-muted mb-3">{activity.summary}</p>
                <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                  <span>{activity.date}</span>
                  {activity.category && <span>• {activity.category}</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Currently Exploring */}
      <section className="workspace-section">
        <div className="workspace-container max-w-4xl mx-auto bg-workspace-surface/50 border border-workspace-accent/20 rounded-xl p-8 md:p-12 text-center shadow-glow">
          <h3 className="text-2xl font-bold text-white mb-4">Currently Exploring</h3>
          <p className="text-workspace-text-muted mb-8 max-w-2xl mx-auto">
            These are the topics I'm currently spending the most time learning, experimenting with, and writing about. As my interests evolve, this list will evolve too.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {currentlyExploring.topics.map(topic => (
              <span key={topic} className="workspace-pill border-workspace-accent/30 bg-workspace-accent/5 text-sm px-4 py-2">
                {topic}
              </span>
            ))}
          </div>
          <div className="mt-8 text-xs font-mono text-gray-500">
            Last Updated: {currentlyExploring.lastUpdated}
          </div>
        </div>
      </section>

      {/* 6. Credentials (Experience, Categorized Skills, Certs) */}
      <section id="credentials" className="workspace-section bg-workspace-surface/30">
        <div className="workspace-container grid lg:grid-cols-2 gap-16">
          
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Experience & Education</h3>
            {/* ACCESSIBILITY FIX: Converted to semantic list (<ul> and <li>) */}
            <ul className="space-y-8">
              {experience.map((exp, idx) => (
                <li key={idx} className="relative pl-6 border-l border-workspace-border">
                  <div className="absolute w-3 h-3 bg-workspace-accent rounded-full -left-[6.5px] top-1.5 shadow-glow"></div>
                  <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                  <p className="text-workspace-accent text-sm font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-xs font-mono mb-3">{exp.period} • {exp.location}</p>
                  <p className="text-workspace-text-muted text-sm leading-relaxed">{exp.description}</p>
                </li>
              ))}
              
              <li className="relative pl-6 border-l border-workspace-border">
                <div className="absolute w-3 h-3 bg-workspace-border rounded-full -left-[6.5px] top-1.5"></div>
                <h4 className="text-lg font-semibold text-white">B.Tech–M.Tech Integrated CSE (Cybersecurity)</h4>
                <p className="text-workspace-text-muted text-sm font-medium mb-1">National Forensic Sciences University, Delhi</p>
                <p className="text-gray-500 text-xs font-mono mb-3">2021 - 2026</p>
              </li>
            </ul>
          </div>

          {/* Categorized Skills & Certs */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Capabilities</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-mono text-gray-500 mb-3 uppercase tracking-wider">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map(skill => (
                        <span key={skill} className="workspace-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="workspace-card p-4 hover:-translate-y-0.5 hover:shadow-none">
                    <h4 className="font-semibold text-white">{cert.name}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm text-workspace-text-muted">{cert.org}</p>
                      <p className="text-xs font-mono text-gray-500">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Contact & Resume */}
      <section id="contact" className="workspace-section">
        <div className="workspace-container max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-bold text-white">Let's Connect</h3>
          <p className="text-workspace-text-muted text-lg max-w-2xl mx-auto">
           This workspace is always evolving, and so am I. I'm currently looking for my first full-time cybersecurity role while continuing to build projects and document everything I learn. If something here caught your attention—or you'd like to talk about cybersecurity, one of my projects, or a potential opportunity—I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a href="mailto:mhdaslah.k@gmail.com" onClick={handleEmailClick} className="btn-primary w-40">
              {emailCopied ? (
                <><CheckCircle2 size={18} /> Copied!</>
              ) : (
                <><Mail size={18} /> Email Me</>
              )}
            </a>
            <a href="/resume.pdf" download="Muhammed_Aslah_K_Resume.pdf" className="btn-secondary">
              <FileText size={18} /> Download Resume
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}