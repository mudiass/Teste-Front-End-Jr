import React, { useState } from 'react';
import type { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal from '../ProductModal/ProductModal';
import { useProducts } from '../../hooks/useProducts';
import { ChevronLeftIcon, ChevronRightIcon } from '../common/Icons';
import './ProductShowcase.scss';

interface ProductShowcaseProps {
  id?: string;
  title?: string;
  showTabs?: boolean;
  showViewAll?: boolean;
}

const filterTabs = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  id,
  title = 'Produtos relacionados',
  showTabs = true,
  showViewAll = false,
}) => {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<string>('CELULAR');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const visibleCards = 4;
  const maxIndex = Math.max(0, products.length - visibleCards);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id={id} className="product-showcase" aria-label={title}>
      <div className="container">
        {/* Section Header with Dividers */}
        <div className="product-showcase__header">
          <div className="product-showcase__title-divider" />
          <h2 className="product-showcase__title">{title}</h2>
          <div className="product-showcase__title-divider" />
        </div>

        {/* Category Tabs (First showcase) */}
        {showTabs && (
          <nav className="product-showcase__tabs-nav" aria-label="Filtro de categorias">
            <ul className="product-showcase__tabs">
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <li key={tab} className="product-showcase__tab-item">
                    <button
                      type="button"
                      className={`product-showcase__tab-btn ${
                        isActive ? 'product-showcase__tab-btn--active' : ''
                      }`}
                      onClick={() => setActiveTab(tab)}
                      aria-pressed={isActive}
                    >
                      {tab}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        {/* "Ver todos" link (Second & third showcases) */}
        {showViewAll && (
          <div className="product-showcase__view-all-wrapper">
            <a href="#vitrine" className="product-showcase__view-all-link">
              Ver todos
            </a>
          </div>
        )}

        {/* Loading & Error States */}
        {loading && (
          <div className="product-showcase__loading">
            <p>Carregando produtos...</p>
          </div>
        )}

        {error && (
          <div className="product-showcase__error">
            <p>Erro ao carregar produtos: {error}</p>
          </div>
        )}

        {/* Carousel Showcase */}
        {!loading && !error && products.length > 0 && (
          <div className="product-showcase__carousel-container">
            <button
              type="button"
              className="product-showcase__arrow product-showcase__arrow--prev"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Produto anterior"
            >
              <ChevronLeftIcon size={20} color="#3F3F40" />
            </button>

            <div className="product-showcase__slider-wrapper">
              <div
                className="product-showcase__slider-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                }}
              >
                {products.map((product, index) => (
                  <div
                    key={`${product.productName}-${index}`}
                    className="product-showcase__slide"
                  >
                    <ProductCard
                      product={product}
                      onSelect={setSelectedProduct}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="product-showcase__arrow product-showcase__arrow--next"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Próximo produto"
            >
              <ChevronRightIcon size={20} color="#3F3F40" />
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductShowcase;
