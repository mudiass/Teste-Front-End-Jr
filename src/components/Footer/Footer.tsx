import React from 'react';
import { EconverseLogo } from '../common/Icons';
import './Footer.scss';

const footerColumns = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
];

const InstagramIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__container">
        {/* Brand Column */}
        <div className="footer__brand-col">
          <EconverseLogo width={140} height={36} />
          <p className="footer__brand-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="footer__socials" aria-label="Redes sociais">
            <a href="#instagram" aria-label="Instagram" className="footer__social-btn">
              <InstagramIcon />
            </a>
            <a href="#facebook" aria-label="Facebook" className="footer__social-btn">
              <FacebookIcon />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="footer__social-btn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Links Columns */}
        <div className="footer__links-grid">
          {footerColumns.map((col) => (
            <div key={col.title} className="footer__col">
              <h3 className="footer__col-title">{col.title}</h3>
              <ul className="footer__col-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
