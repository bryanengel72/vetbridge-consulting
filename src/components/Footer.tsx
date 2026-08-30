import React from 'react';

const links = [
  { name: 'Services', id: 'services' },
  { name: 'Client work', id: 'work' },
  { name: 'Who we are', id: 'about' },
  { name: 'How we work', id: 'how' },
  { name: 'Estimator', id: 'estimator' },
  { name: 'Contact', id: 'contact' },
];

const Footer: React.FC<{
  phone: string;
  phoneHref: string;
  crossLink: { name: string; href: string };
}> = ({ phone, phoneHref, crossLink }) => {
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
              Systems integration for veterinary practices.
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
              <li>
                <a href={crossLink.href}>{crossLink.name} &#8594;</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label" style={{ marginBottom: 'var(--s3)' }}>Get in touch</p>
            <ul className="mono">
              <li><a href={phoneHref}>{phone}</a></li>
              <li><a href="mailto:info@vetbridgeconsulting.com">info@vetbridgeconsulting.com</a></li>
              <li style={{ color: 'var(--fg-2)', fontSize: '0.9375rem' }}>Kansas City, MO · San Diego, CA</li>
            </ul>
          </div>
        </div>

        <div className="colophon">
          <p className="meta">© {new Date().getFullYear()} VetBridge Consulting</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
