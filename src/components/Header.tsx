import React, { useState, useEffect } from 'react';
import { ClipboardList, Menu, X} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const resources = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <Link
      to={to}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative group ${
        isActivePath(to)
          ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
          : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50"
      }`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left transition-transform duration-200 scale-x-0 group-hover:scale-x-100 ${
        isActivePath(to) ? 'scale-x-100' : ''
      }`} />
    </Link>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm' 
        : 'bg-white dark:bg-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Main Nav */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-90 transition-all group"
            >
              <div className="relative">
                <ClipboardList className="w-8 h-8 text-indigo-600 dark:text-indigo-400 transition-transform duration-200 group-hover:scale-110" />
                <div className="absolute inset-0 bg-indigo-400/20 dark:bg-indigo-400/10 rounded-lg blur group-hover:blur-md transition-all" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                TaskFlow
              </h1>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <NavLink to="/">Dashboard</NavLink>
              <NavLink to="/taskflow/about">About</NavLink>
              <NavLink to="/taskflow/contact">Contact</NavLink>
              
              {/* Resources Dropdown */}
              {/* <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesOpen && (
                  <div className="absolute top-full mt-1 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div> */}
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* <a
              href="https://github.com/yourusername/taskflow"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="hidden lg:inline">View on GitHub</span>
            </a> */}
            
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActivePath("/")
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50"
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/taskflow/about"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActivePath("/about")
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50"
                }`}
              >
                About
              </Link>
              <Link
                to="/taskflow/contact"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActivePath("/contact")
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50"
                }`}
              >
                Contact
              </Link>
              
              {/* Mobile Resources Section */}
              <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Resources
                </div>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-3 py-2 text-sm font-medium block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;