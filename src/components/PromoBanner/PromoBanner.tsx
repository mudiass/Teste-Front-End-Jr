import React from 'react';
import './PromoBanner.scss';

interface PromoBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const AppleLogo: React.FC = () => (
  <svg width="28" height="34" viewBox="0 0 170 170" fill="#FFFFFF" opacity="0.9">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.7-7.93-12.04-14.57-6.5-10.02-11.66-21.71-15.48-35.08-3.82-13.37-5.73-25.9-5.73-37.59 0-14.88 3.83-27.42 11.5-37.64 7.67-10.22 17.47-15.45 29.4-15.69 4.35 0 9.4 1.17 15.15 3.51 5.76 2.34 9.68 3.56 11.77 3.67 1.84 0 5.86-1.28 12.06-3.83 6.2-2.55 11.58-3.72 16.14-3.51 11.96.65 21.64 5.37 29.04 14.17-10.45 6.31-15.57 15.12-15.35 26.43.22 8.71 3.53 16.03 9.94 21.96 6.41 5.92 14.07 9.42 22.98 10.5-2.18 6.53-4.8 13.06-7.85 19.59zM119.22 31.84c0-7.29 2.65-14.09 7.95-20.4 5.3-6.31 11.83-10.47 19.58-12.48.22 1.09.33 2.18.33 3.27 0 7.07-2.73 13.88-8.18 20.44-5.45 6.56-11.96 10.37-19.54 11.44-.07-.76-.14-1.52-.14-2.27z" />
  </svg>
);

const PromoBanner: React.FC<PromoBannerProps> = ({
  title = 'Parceiros',
  subtitle = 'Lorem ipsum dolor sit amet, consectetur',
  buttonText = 'CONFIRA',
}) => {
  return (
    <section className="promo-banner" aria-label={title}>
      <div className="container">
        <div className="promo-banner__grid">
          {/* Card 1 */}
          <article className="promo-banner__card">
            <div className="promo-banner__top-logo" aria-hidden="true">
              <AppleLogo />
            </div>
            <div className="promo-banner__overlay" />
            <div className="promo-banner__content">
              <h3 className="promo-banner__title">{title}</h3>
              <p className="promo-banner__subtitle">{subtitle}</p>
              <a href="#vitrine" className="promo-banner__btn">
                {buttonText}
              </a>
            </div>
          </article>

          {/* Card 2 */}
          <article className="promo-banner__card">
            <div className="promo-banner__top-logo" aria-hidden="true">
              <AppleLogo />
            </div>
            <div className="promo-banner__overlay" />
            <div className="promo-banner__content">
              <h3 className="promo-banner__title">{title}</h3>
              <p className="promo-banner__subtitle">{subtitle}</p>
              <a href="#vitrine" className="promo-banner__btn">
                {buttonText}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
