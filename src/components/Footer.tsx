import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/taskflow/privacy-policy' },
    { name: 'Terms of Service', href: '/taskflow/terms-of-service' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Kelmcclain' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/Kelmcclain' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/mcclain-kelvin-9894a81ba/' },
    { name: 'Email', icon: Mail, href: 'mailto:mcclainkel@gmail.com' }
  ];

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50/70 backdrop-blur-lg transition-colors dark:border-gray-800 dark:bg-gray-900/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-900 dark:text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white">TF</div>
              <span className="text-xl font-semibold">TaskFlow</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Streamline your workflow with our intuitive task management platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-gray-700 dark:text-gray-400 dark:hover:border-indigo-500"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <span className="h-1 w-1 rounded-full bg-green-600 dark:bg-green-400"></span>
              System Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}