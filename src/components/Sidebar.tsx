import { motion } from 'framer-motion';
import { Home, Calendar, Gift, BookOpen, CreditCard, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState('#');

  const navItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Calendar, label: 'Events', href: '#events' },
    { icon: Gift, label: 'Perks', href: '#perks' },
    { icon: BookOpen, label: 'Learn', href: '#learn' },
    { icon: CreditCard, label: 'Pricing', href: '#pricing' },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || '#');
    };

    // Set initial active section
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
  };

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className={`fixed left-0 top-0 h-full bg-sidebar z-50 flex flex-col border-r border-sidebar-border transition-all duration-300 ${
        isOpen ? 'w-[180px]' : 'w-[60px]'
      }`}
    >
      {/* Logo */}
      <div className="p-4 flex items-center justify-between">
        {isOpen && (
          <a href="#" className="flex items-center gap-2">
            <span className="font-serif text-xl text-foreground">
              Gods<span className="text-primary">X</span>
            </span>
          </a>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 rounded-md hover:bg-sidebar-accent transition-colors mx-auto"
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-1">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.href || 
              (activeSection === '' && item.href === '#');
            return (
              <li key={i}>
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-sidebar-accent text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50'
                  } ${!isOpen ? 'justify-center' : ''}`}
                  title={!isOpen ? item.label : undefined}
                >
                  <item.icon size={18} />
                  {isOpen && <span>{item.label}</span>}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Elevate section */}
        <div className="mt-6 px-3">
          <a
            href="#elevate"
            onClick={() => handleNavClick('#elevate')}
            className={`flex items-center gap-3 py-2.5 text-sm transition-colors ${
              activeSection === '#elevate' 
                ? 'text-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            } ${!isOpen ? 'justify-center' : ''}`}
            title={!isOpen ? 'Elevate' : undefined}
          >
            <Sparkles size={18} />
            {isOpen && <span className="tracking-widest text-xs uppercase">Elevate</span>}
          </a>
        </div>
      </nav>

      {/* Bottom CTAs */}
      <div className="p-3 space-y-2">
        {isOpen ? (
          <>
            <a
              href="#apply"
              className="block w-full py-2.5 text-center text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              Check Eligibility
            </a>
            <a
              href="#login"
              className="block w-full py-2.5 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Member login
            </a>
          </>
        ) : (
          <a
            href="#apply"
            className="flex items-center justify-center p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            title="Check Eligibility"
          >
            <Sparkles size={16} />
          </a>
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
