import { Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.challenge, href: '#problem' },
    { label: t.nav.integration, href: '#how' },
    { label: t.nav.privacy, href: '#privacy' },
    { label: t.nav.solution, href: '#sdk' },
  ];

  return (
    <nav aria-label="Main Navigation" className="fixed top-0 left-0 right-0 z-50 py-7 bg-gradient-to-b from-bg/95 to-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-15 flex items-center justify-between">
        <Link to="/" aria-label="Auris Home" className="font-serif text-[22px] font-medium tracking-[0.18em] text-text-primary group shrink-0">
          AUR<span className="text-accent transition-colors duration-300">I</span>S
        </Link>

        <div className="hidden md:flex items-center gap-3 lg:gap-8">
          {navLinks.map((link) => {
            const isContact = link.href === '/contact';
            if (isContact) {
              return (
                <Link 
                  key={link.label}
                  to={link.href}
                  className="text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    e.preventDefault();
                    navigate('/');
                    setTimeout(() => {
                      const el = document.querySelector(link.href);
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                aria-label={`Navigate to ${link.label} section`}
                className="text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent transition-colors duration-300"
            aria-label="Toggle Language"
          >
            <span className={language === 'en' ? 'text-accent' : ''}>EN</span>
            <span className="opacity-50">/</span>
            <span className={language === 'de' ? 'text-accent' : ''}>DE</span>
          </button>
          <Link 
            to="/contact" 
            aria-label="Request a conversation"
            className="text-[11px] md:text-[12px] uppercase tracking-[0.12em] text-text-muted border border-border-hairline px-4 md:px-5 py-2 md:py-2.5 rounded-xs transition-all duration-300 hover:text-accent hover:border-accent shrink-0 hidden sm:block"
          >
            {t.nav.requestBtn}
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-4 text-text-muted hover:text-accent transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} strokeWidth={1.5} /> : <Sun size={16} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
