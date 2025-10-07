import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/divleen-lota/',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dklota',
      icon: '📁'
    },
    {
      name: 'Email',
      url: 'mailto:divleen2@gmail.com',
      icon: '📧'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold gradient-text mb-6">Divleen Lota</h3>
              <p className="text-text-secondary leading-relaxed max-w-lg text-lg">
                Computer Science student passionate about AI/ML, full-stack development, 
                and creating innovative solutions that make a real impact.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-text-primary mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-accent transition-colors duration-300 text-left text-lg"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold text-text-primary mb-8">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-4 text-text-secondary hover:text-accent transition-colors duration-300 group text-lg"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-muted text-lg">
              © {currentYear} Divleen Lota. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-8 text-text-muted text-lg">
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-3 text-text-muted hover:text-accent transition-colors duration-300 group text-lg"
          >
            <span className="group-hover:-translate-y-1 transition-transform text-2xl">↑</span>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
