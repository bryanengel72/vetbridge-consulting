import React from 'react';

const links = [
  { name: 'Services', id: 'services' },
  { name: 'Client work', id: 'work' },
  { name: 'Who we are', id: 'about' },
  { name: 'How we work', id: 'how' },
  { name: 'Estimator', id: 'estimator' },
  { name: 'Contact', id: 'contact' },
];

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="foot-grid">
          <div>
            <a className="wordmark" href="#top" style={{ marginBottom: 'var(--s3)' }}>
              <b>Vetbridge</b>
              <span>Consulting</span>
            </a>
            <p style={{ color: 'var(--fg-2)', maxWidth: '34ch' }}>
              We connect the systems veterinary practices already run, so the numbers arrive on
              their own.
            </p>
          </div>

          <div>
            <p className="label" style={{ marginBottom: 'var(--s3)' }}>On this page</p>
            <ul>
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label" style={{ marginBottom: 'var(--s3)' }}>Get in touch</p>
            <ul className="mono">
              <li><a href="tel:+18163948980">(816) 394-8980</a></li>
              <li><a href="mailto:info@vetbridgeconsulting.com">info@vetbridgeconsulting.com</a></li>
              <li style={{ color: 'var(--fg-2)', fontSize: '0.9375rem' }}>Kansas City, Missouri</li>
            </ul>
          </div>
        </div>

        <div className="colophon">
          <p className="meta">© {new Date().getFullYear()} VetBridge Consulting</p>
          <p className="meta">No reseller agreements. No vendor commissions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
