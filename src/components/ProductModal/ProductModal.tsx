import React, { useState, useEffect, useCallback } from 'react';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../services/api';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (product) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setQuantity(1);
      setAddedToast(false);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, handleKeyDown]);

  if (!product) return null;

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleBuy = () => {
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1500);
  };

  const productTitle = product.productName
    ? product.productName.toUpperCase()
    : 'LOREM IPSUM DOLOR SIT AMET';

  const productPrice = product.price ? formatCurrency(product.price) : 'R$ 1.499,90';

  const productDescription =
    product.descriptionShort && product.descriptionShort !== product.productName
      ? product.descriptionShort
      : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.";

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal__body">
          <div className="modal__image-wrapper">
            <img
              src={product.photo}
              alt={product.productName}
              className="modal__image"
            />
          </div>

          <div className="modal__info">
            <h2 id="modal-title" className="modal__title">
              {productTitle}
            </h2>

            <p className="modal__price">{productPrice}</p>

            <p className="modal__description">{productDescription}</p>

            <a href="#detalhes" className="modal__details-link" onClick={(e) => e.preventDefault()}>
              Veja mais detalhes do produto &gt;
            </a>

            <div className="modal__action-row">
              <div className="modal__quantity-control" aria-label="Quantidade">
                <button
                  type="button"
                  className="modal__qty-btn"
                  onClick={handleDecrement}
                  aria-label="Diminuir quantidade"
                >
                  −
                </button>
                <span className="modal__qty-value">{quantity.toString().padStart(2, '0')}</span>
                <button
                  type="button"
                  className="modal__qty-btn"
                  onClick={handleIncrement}
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="modal__buy-btn"
                onClick={handleBuy}
              >
                COMPRAR
              </button>
            </div>

            {addedToast && (
              <div className="modal__toast" role="status">
                Item adicionado ao carrinho!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
