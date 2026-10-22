import React, { useState } from 'react';
import './CategoryNav.scss';

interface CategoryItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const categories: CategoryItem[] = [
  {
    id: 'tecnologia',
    label: 'Tecnologia',
    icon: (
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Monitor */}
        <rect x="8" y="10" width="38" height="28" rx="3" />
        <line x1="22" y1="38" x2="22" y2="48" />
        <line x1="14" y1="48" x2="30" y2="48" />
        {/* Overlapping Device (Phone / Tablet) */}
        <rect x="32" y="22" width="22" height="32" rx="3" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="43" cy="48" r="1.5" fill="currentColor" />
        <line x1="38" y1="26" x2="48" y2="26" />
      </svg>
    ),
  },
  {
    id: 'supermercado',
    label: 'Supermercado',
    icon: (
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Awning */}
        <path d="M10 24L14 12H50L54 24" />
        <path d="M10 24C10 27 13 29 16 29C19 29 22 27 22 24C22 27 25 29 28 29C31 29 34 27 34 24C34 27 37 29 40 29C43 29 46 27 46 24C46 27 49 29 52 29C55 29 54 27 54 24" />
        {/* Building frame */}
        <line x1="12" y1="28" x2="12" y2="52" />
        <line x1="52" y1="28" x2="52" y2="52" />
        <line x1="8" y1="52" x2="56" y2="52" />
        {/* Shopping cart inside */}
        <path d="M22 36H25L28 44H42L44 38H27" strokeWidth="2" />
        <circle cx="31" cy="48" r="1.5" fill="currentColor" />
        <circle cx="39" cy="48" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    icon: (
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Bottle */}
        <rect x="23" y="10" width="8" height="6" rx="1" />
        <line x1="27" y1="16" x2="27" y2="22" strokeWidth="4" />
        <path d="M22 22C20 25 18 28 18 32V52H36V32C36 28 34 25 32 22Z" />
        <rect x="22" y="36" width="10" height="8" rx="1" strokeWidth="1.8" />
        {/* Tumbler Glass */}
        <path d="M40 34L42 52H52L54 34Z" fill="#FFFFFF" />
        <rect x="44" y="40" width="4" height="4" rx="0.5" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'ferramentas',
    label: 'Ferramentas',
    icon: (
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Hammer */}
        <path d="M16 14L24 22L20 26L12 18Z" fill="currentColor" />
        <path d="M22 20L48 46A2 2 0 0 1 48 49L47 50A2 2 0 0 1 44 50L18 24" />
        {/* Wrench */}
        <path d="M48 14C46 12 43 12 40 14L37 17L44 24L47 21C49 19 49 16 48 14Z" />
        <line x1="39" y1="19" x2="16" y2="42" strokeWidth="3" />
        <circle cx="16" cy="45" r="3" />
      </svg>
    ),
  },
  {
    id: 'saude',
    label: 'Saúde',
    icon: (
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Floating Heart */}
        <path
          d="M32 24C32 24 24 16 26 12C28 8 32 10 32 13C32 10 36 8 38 12C40 16 32 24 32 24Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Cupped Hand */}
        <path d="M16 38C16 38 20 32 28 34L35 37C37 38 41 37 43 35L48 30C50 28 53 30 51 33L46 41C44 44 40 46 36 46H26L18 43" />
        <path d="M14 43L22 47H34C37 47 40 45 42 42" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'esportes',
    label: 'Esportes e Fitness',
    icon: (
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Treadmill base & console */}
        <line x1="12" y1="48" x2="52" y2="48" strokeWidth="3.5" />
        <line x1="16" y1="48" x2="22" y2="28" strokeWidth="2.5" />
        <line x1="18" y1="28" x2="26" y2="28" strokeWidth="3" />
        {/* Runner */}
        <circle cx="38" cy="18" r="3" fill="currentColor" />
        <path d="M36 23L31 32L37 35L33 46" strokeWidth="2.5" />
        <path d="M31 32L26 38" strokeWidth="2" />
        <path d="M33 27L42 29L45 36" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'moda',
    label: 'Moda',
    icon: (
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Dress */}
        <path d="M20 18L24 24H32L36 18L33 14H23L20 18Z" />
        <path d="M24 24L18 46H38L32 24" />
        {/* Diamond */}
        <path d="M42 16L45 12H51L54 16L48 22Z" strokeWidth="1.8" />
        {/* High Heel */}
        <path d="M38 46C41 46 45 44 48 41L52 46H55V44L51 36L48 40" strokeWidth="2" />
      </svg>
    ),
  },
];

const CategoryNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('tecnologia');

  return (
    <section className="category-nav" aria-label="Navegue por categorias">
      <div className="container">
        <ul className="category-nav__list">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <li key={cat.id} className="category-nav__item">
                <button
                  type="button"
                  className={`category-nav__card ${isActive ? 'category-nav__card--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={isActive}
                >
                  <div className="category-nav__icon-wrapper">
                    {cat.icon}
                  </div>
                </button>
                <span className={`category-nav__label ${isActive ? 'category-nav__label--active' : ''}`}>
                  {cat.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CategoryNav;
