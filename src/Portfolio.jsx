import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    technical: [
      'Incident Detection & Response',
      'Vulnerability Assessment',
      'Digital Forensics',
      'Network Security',
      'Malware Analysis',
      'OSINT',
      'Kali Linux',
      'Python',
      'Java',
      'C++',
      'Web Development',
      'AI & ML'
    ],
    soft: [
      'Problem Solving',
      'Critical Thinking',
      'Research & Analysis',
      'Team Collaboration',
      'Leadership',
      'Communication',
      'Time Management',
      'Adaptability'
    ]
  };

  const projects = [
    {
      title: 'AI-Driven Malicious URL Detection',
      description: 'A Flask-based web application that detects malicious URLs in real time using lexical features and a Random Forest model. Offers probability-based and custom-weighted risk scoring, achieving over 98% accuracy.',
      date: 'Dec 2024',
      tags: ['Python', 'Flask', 'Machine Learning', 'Cybersecurity']
    },
    {
      title: 'Intelligent Clipboard Security Tool',
      description: 'A real-time Windows clipboard monitoring tool that detects sensitive data, malicious commands, phishing URLs, and leaked passwords. Uses external threat intelligence APIs with dark/light GUI themes.',
      date: 'May 2025',
      tags: ['Windows', 'Python', 'Security', 'Threat Intelligence']
    },
    {
      title: 'Personal Device Monitoring Tool (PMon)',
      description: 'Lightweight Windows security monitoring tool that tracks login attempts, USB insertions, and process creation. Features encrypted SQLite database with tamper-evidence and Flask-based dashboard for real-time visualization.',
      date: 'Dec 2025',
      tags: ['Python', 'Flask', 'Security Monitoring', 'SQLite']
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Aslah K
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-400 text-lg">Hello, I'm</p>
              <h2 className="text-5xl md:text-6xl font-bold">
                Muhammed<br />Aslah K
              </h2>
              <p className="text-xl text-gray-300">Cybersecurity Student & Enthusiast</p>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate cybersecurity student with a strong foundation in incident detection, vulnerability assessment, and ethical hacking. Completed coursework and projects in malicious URL detection, clipboard security, and threat intelligence. Skilled in developing secure solutions using Python, Java, C++, and industry-standard security tools.Eager to leverage analytical abilities to enhance digital security and achieve robust protection against cyber threats in a dynamic cybersecurity environment.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a href="https://github.com/ASLAH-K" target="_blank" rel="noopener noreferrer" 
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/aslahk" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:mhdaslah.k@gmail.com"
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition">
                  <Mail size={24} />
                </a>
              </div>
              <a href="/resume.pdf" download="Muhammed_Aslah_K_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-90 h-85 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Muhammed Aslah K" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Passionate about <span className="text-blue-400">securing digital environments</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
              <h4 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h4>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate B.Tech–M.Tech Integrated Cybersecurity student with hands-on experience in incident detection, vulnerability assessment, and digital forensics. I've successfully developed practical security solutions and worked on real-world cybercrime investigations.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Proficient in programming languages like Python, C++, and Java, I'm skilled in using Kali Linux for penetration testing and security analysis. Motivated by curiosity and a drive to protect digital environments, I excel in problem-solving, critical thinking, and adapting to evolving cybersecurity challenges.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
              <h4 className="text-2xl font-semibold mb-4 text-blue-400">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-xl font-semibold">B.Tech–M.Tech Integrated CSE</h5>
                  <p className="text-gray-400">Specialization in Cybersecurity</p>
                  <p className="text-blue-400">National Forensic Sciences University, Delhi</p>
                  <p className="text-gray-500">2021 - 2026</p>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <h5 className="text-lg font-semibold mb-2">Extra Curricular</h5>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-2xl">🏸</span>
                    <span>Badminton Champion - NFSU Delhi Campus (2024, 2025)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Industry exposure and <span className="text-blue-400">hands-on work</span>
          </h3>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-blue-400">{exp.role}</h4>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{exp.period}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            My technology stack and <span className="text-blue-400">expertise</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
              <h4 className="text-2xl font-semibold mb-6 text-blue-400">Technical Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-900/30 border border-blue-500/50 rounded-full text-sm hover:bg-blue-900/50 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
              <h4 className="text-2xl font-semibold mb-6 text-blue-400">Soft Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-cyan-900/30 border border-cyan-500/50 rounded-full text-sm hover:bg-cyan-900/50 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Professional development and <span className="text-blue-400">recognitions</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">{cert.name}</h4>
                <p className="text-gray-300">{cert.org}</p>
                <p className="text-gray-500 text-sm mt-2">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Some of my <span className="text-blue-400">recent work</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition hover:transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <p className="text-gray-500 text-xs mb-3">{project.date}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-2 py-1 bg-blue-900/20 text-blue-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">
            Let's <span className="text-blue-400">connect and collaborate</span>
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing cybersecurity projects, research opportunities, or potential collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:mhdaslah.k@gmail.com" 
               className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              <Mail size={20} />
              mhdaslah.k@gmail.com
            </a>
            <a href="tel:+918943044758"
               className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition">
              <Phone size={20} />
              +91 8943044758
            </a>
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg">
              <MapPin size={20} />
              Kozhikode, Kerala
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Muhammed Aslah K. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}