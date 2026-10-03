import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, FileText, Contact, CheckCircle2 } from 'lucide-react';

export default function EngineeringDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const dockRef = useRef(null);

  const myEmail = "mhdaslah.k@gmail.com";

  const dockItems = [
    { label: "Email Me", icon: <Mail className="w-5 h-5" />, href: `mailto:${myEmail}`, isEmail: true },
    { label: "Connect on LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/muhammed-aslah-k-86783836a/", isExternal: true },
    { label: "View GitHub", icon: <Github className="w-5 h-5" />, href: "https://github.com/ASLAH-K", isExternal: true },
    { label: "Download Resume", icon: <FileText className="w-5 h-5" />, href: "/resume.pdf", download: "Muhammed_Aslah_K_Resume.pdf" }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dockRef.current && !dockRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = async (e, item) => {
    if (item.isEmail) {
      e.preventDefault();
      
      // 1. Silently copy to clipboard
      try {
        await navigator.clipboard.writeText(myEmail);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (err) {
        console.error("Failed to copy email: ", err);
      }

      // 2. Trigger the OS mail client
      window.location.href = item.href;
    }
    
    // Delay menu close slightly for fluid interaction
    setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <>
      {/* Fallback Toast Notification */}
      <div role="status" aria-live="polite" className={`fixed bottom-24 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-workspace-surface/95 backdrop-blur-md border border-workspace-border text-workspace-text-primary text-sm font-medium rounded-lg shadow-glow transition-all duration-300 pointer-events-none ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <CheckCircle2 className="w-4 h-4 text-workspace-accent" />
        Email copied to clipboard
      </div>

      <div 
        ref={dockRef}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Expanded Menu Actions */}
        <div className="flex flex-col items-end mb-4 pointer-events-none">
          {dockItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              download={item.download || undefined}
              aria-label={item.label}
              onClick={(e) => handleItemClick(e, item)}
              style={{
                transitionDelay: isOpen ? `${(dockItems.length - 1 - idx) * 40}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(15px)',
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'auto' : 'none'
              }}
              className="flex items-center gap-3 px-4 py-2.5 mt-2 bg-workspace-surface/90 backdrop-blur-md border border-workspace-border rounded-xl text-workspace-text-muted hover:text-workspace-text-primary hover:border-workspace-accent/50 hover:bg-workspace-border/30 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-workspace-accent"
            >
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              {item.icon}
            </a>
          ))}
        </div>

        {/* Main Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-label="Toggle contact menu"
          className="flex items-center gap-2 px-6 py-3.5 bg-workspace-accent hover:bg-blue-500 text-white rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-workspace-bg z-10 relative"
        >
          <Contact className="w-5 h-5" />
          <span className="font-semibold text-sm">Let's Connect</span>
        </button>
      </div>
    </>
  );
}