import React, { useState } from 'react';
import { EconverseLogo, ChevronRightIcon, ChevronLeftIcon } from '../common/Icons';
import './BrandShowcase.scss';

const BrandShowcase: React.FC = () => {
  const brands = [1, 2, 3, 4, 5, 6, 7];
  const [startIndex, setStartIndex] = useState<number>(0);

  const visibleBrands = 5;
  const maxIndex = Math.max(0, brands.length - visibleBrands);

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="brand-showcase" aria-label="Navegue por marcas">
      <div className="container">
        <h2 className="brand-showcase__title">Navegue por marcas</h2>

        <div className="brand-showcase__carousel">
          {startIndex > 0 && (
            <button
              type="button"
              className="brand-showcase__arrow brand-showcase__arrow--prev"
              onClick={handlePrev}
              aria-label="Marcas anteriores"
            >
              <ChevronLeftIcon size={20} color="#3F3F40" />
            </button>
          )}

          <div className="brand-showcase__track-wrapper">
            <ul
              className="brand-showcase__list"
              style={{
                transform: `translateX(-${startIndex * 20}%)`,
              }}
            >
              {brands.map((_item, idx) => (
                <li key={idx} className="brand-showcase__item">
                  <div className="brand-showcase__circle">
                    <EconverseLogo width={120} height={30} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="brand-showcase__arrow brand-showcase__arrow--next"
            onClick={handleNext}
            aria-label="Mais marcas"
          >
            <ChevronRightIcon size={20} color="#3F3F40" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
