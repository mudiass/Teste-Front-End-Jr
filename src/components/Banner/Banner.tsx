import React from 'react';
import './Banner.scss';

const Banner: React.FC = () => {
  return (
    <section className="banner" aria-label="Promoção de Destaque">
      <div className="banner__overlay" />

      <div className="container banner__container">
        <div className="banner__content">
          <h1 className="banner__title">
            Venha conhecer nossas
            <br />
            <strong>promoções</strong>
          </h1>

          <p className="banner__discount">
            <strong>50% Off</strong> nos produtos
          </p>

          <a href="#vitrine" className="banner__btn">
            Ver produto
          </a>
        </div>

        <div className="banner__graphic" aria-hidden="true">
          <div className="banner__neon-box">
            <span className="banner__neon-text banner__neon-text--black">BLACK</span>
            <span className="banner__neon-text banner__neon-text--friday">FRIDAY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
