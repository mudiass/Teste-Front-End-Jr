import React from 'react';
import type { Product } from '../../types/product';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  // Values matching Figma Layout
  const formattedPrice = 'R$ 28,90';
  const oldPrice = 'R$ 30,90';
  const installments = 'ou 2x de R$ 48,95 sem juros';

  return (
    <article
      className="product-card"
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(product);
        }
      }}
      aria-label={`Ver produto: ${product.productName}`}
    >
      <div className="product-card__image-wrapper">
        <img
          src={product.photo}
          alt={product.productName}
          className="product-card__image"
          loading="lazy"
        />
      </div>

      <div className="product-card__content">
        <p className="product-card__description" title={product.productName}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p className="product-card__price-old">{oldPrice}</p>

        <p className="product-card__price-current">{formattedPrice}</p>

        <p className="product-card__installments">{installments}</p>

        <p className="product-card__shipping">Frete grátis</p>

        <button
          type="button"
          className="product-card__btn"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          aria-label={`Comprar ${product.productName}`}
        >
          COMPRAR
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
