import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Terminal, MapPin, Phone } from 'lucide-react';
import { getLatestActivity, getAllProjects } from './utils/content';
import { currentlyExploring } from './data/exploring';

export default function Portfolio() {
  // Fetch unified dynamic content
  const recentActivity = getLatestActivity(3);

  // Categorized Skills
  const skills = {
    "Cybersecurity": [
      "Incident Detection & Response", "Vulnerability Assessment", 
      "Digital Forensics", "Network Security", "Malware Analysis", "OSINT"
    ],
    "Programming": [
      "Python", "Java", "C++", "Web Development"
    ],
    "Tools & Technologies": [
      "Kali Linux", "Flask", "SQLite", "AI & ML"
    ],
    "Core Competencies": [
      "Problem Solving", "Critical Thinking", "Research & Analysis", "Adaptability"
    ]
  };

  // Only display projects explicitly marked as featured in their MDX frontmatter
  const projects = getAllProjects().filter(project => project.featured);

  const experience = [
    {
      role: 'Intern',
      company: 'Kerala Police (Cyber Crime Police Station)',
      location: 'Thiruvananthapuram, Kerala',
      period: 'May 2025 - Jun 2025',
      description: 'Assisted in cybercrime investigations, report writing, and information gathering using OSINT tools while gaining practical understanding of Cyber Crime Police Station operations.'
    },
    {
      role: 'Media Head',
      company: 'GDG On Campus, NFSU Delhi',
      location: 'Delhi, India',
      period: 'Oct 2024 - Aug 2025',
      description: 'Created engaging content including reels, photos, and videos to promote GDG On Campus events; edited multimedia content and managed social media postings.'
    }
  ];

  const certifications = [
    { name: 'Cisco Ethical Hacker', org: 'Cisco Networking Academy', date: 'Dec 2025' },
    { name: 'IBM Python 101 for Data Science', org: 'IBM', date: 'Mar 2025' }
  ];

  return (
    <div className="text-gray-200">
      
      {/* 1. Hero Section */}
      <section id="hero" className="min-h-[90vh] flex items-center justify-center px-6 pt-10 relative">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-400 font-mono text-lg flex items-center gap-2">
                <Terminal size={20} /> Hello, I'm
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                Muhammed<br />Aslah K
              </h2>
              <p className="text-xl text-gray-400 font-medium mt-2">Cybersecurity Student & Enthusiast</p>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Passionate cybersecurity student with a strong foundation in incident detection, vulnerability assessment, and ethical hacking. 
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/ASLAH-K" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/80 hover:bg-blue-600/20 hover:text-blue-400 border border-gray-700 hover:border-blue-500/50 rounded-lg transition-all">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/aslahk" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/80 hover:bg-blue-600/20 hover:text-blue-400 border border-gray-700 hover:border-blue-500/50 rounded-lg transition-all">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl relative group">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/profile.jpg" alt="Muhammed Aslah K" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. About / Philosophy */}
      <section id="about" className="py-20 px-6 border-t border-gray-800/50 bg-[#0a0f18]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-bold text-white">Engineering Philosophy</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a B.Tech–M.Tech Integrated Cybersecurity student focused on securing digital environments. 
            This workspace serves as my living engineering notebook—a place to document my iterative process, 
            analyze anomalies, build detection scripts, and share my continuous growth in the field.
          </p>
        </div>
      </section>

      {/* 3. Featured Projects */}
      <section id="projects" className="py-24 px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white">Featured Systems</h3>
            <p className="text-gray-400 mt-2">Major engineering projects and architectures.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors flex flex-col h-full">
                <Link to={`/projects/${project.slug}`} className="text-xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors">{project.title}</Link>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-2 py-1 bg-gray-900 border border-gray-700 text-gray-300 rounded text-xs font-mono">
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
      <section className="py-24 px-6 border-t border-gray-800/50 bg-[#0a0f18]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white">Latest Activity</h3>
            <p className="text-gray-400 mt-2">Recent updates across my journal, scripts, and research.</p>
          </div>
          <div className="space-y-4">
            {recentActivity.map(activity => (
              <Link key={activity.slug} to={`/${activity.type}/${activity.slug}`} className="block p-6 bg-gray-800/30 border border-gray-700/50 rounded-lg hover:border-blue-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-xl text-blue-400">{activity.title}</h4>
                  <span className="text-xs font-mono px-2 py-1 bg-gray-800 rounded border border-gray-700 capitalize">
                    {activity.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-3">{activity.summary}</p>
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
      <section className="py-20 px-6 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto bg-blue-900/10 border border-blue-900/30 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Currently Exploring</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            My active areas of research and learning. These topics frequently appear in my latest journal entries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {currentlyExploring.topics.map(topic => (
              <span key={topic} className="px-4 py-2 bg-gray-800/80 border border-gray-700 text-gray-300 rounded-full text-sm font-medium">
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
      <section id="credentials" className="py-24 px-6 border-t border-gray-800/50 bg-[#0a0f18]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Experience & Education</h3>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l border-gray-700">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5"></div>
                  <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                  <p className="text-blue-400 text-sm font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-xs font-mono mb-3">{exp.period} • {exp.location}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
              
              <div className="relative pl-6 border-l border-gray-700">
                <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6.5px] top-1.5"></div>
                <h4 className="text-lg font-semibold text-white">B.Tech–M.Tech Integrated CSE (Cybersecurity)</h4>
                <p className="text-blue-400 text-sm font-medium mb-1">National Forensic Sciences University, Delhi</p>
                <p className="text-gray-500 text-xs font-mono mb-3">2021 - 2026</p>
              </div>
            </div>
          </div>

          {/* Categorized Skills & Certs */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Capabilities</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-mono text-gray-400 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded text-sm">
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
                  <div key={idx} className="p-4 bg-gray-800/30 border border-gray-700/50 rounded-lg">
                    <h4 className="font-semibold text-white">{cert.name}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm text-gray-400">{cert.org}</p>
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
      <section id="contact" className="py-24 px-6 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-bold text-white">Let's Connect</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for entry-level cybersecurity opportunities. 
            Whether you want to discuss a project, share threat intelligence, or review a detection rule, my inbox is open.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="mailto:mhdaslah.k@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              <Mail size={18} /> Email Me
            </a>
            <a href="/resume.pdf" download="Muhammed_Aslah_K_Resume.pdf" className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-medium rounded-lg transition-colors">
              Download Resume
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}