import React from 'react';
import {
  EconverseLogo,
  ShieldIcon,
  TruckIcon,
  CreditCardIcon,
  PackageIcon,
  HeartIcon,
  UserIcon,
  CartIcon,
  SearchIcon,
  CrownIcon,
} from '../common/Icons';
import './Header.scss';

const navLinks = [
  { label: 'TODAS CATEGORIAS', active: false },
  { label: 'SUPERMERCADO', active: false },
  { label: 'LIVROS', active: false },
  { label: 'MODA', active: false },
  { label: 'LANÇAMENTOS', active: false },
  { label: 'OFERTAS DO DIA', active: true },
  { label: 'ASSINATURA', active: false, hasCrown: true },
];

const Header: React.FC = () => {
  return (
    <header className="header" role="banner">
      {/* Top Guarantees Strip */}
      <div className="header__top-bar">
        <div className="container header__top-container">
          <div className="header__guarantee-item">
            <ShieldIcon />
            <span>
              Compra <strong>100% segura</strong>
            </span>
          </div>

          <div className="header__guarantee-divider" />

          <div className="header__guarantee-item">
            <TruckIcon />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </div>

          <div className="header__guarantee-divider" />

          <div className="header__guarantee-item">
            <CreditCardIcon />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header__main">
        <div className="container header__main-container">
          <a href="/" className="header__logo" aria-label="Econverse - Página Inicial">
            <EconverseLogo />
          </a>

          <div className="header__search" role="search">
            <label htmlFor="search-input" className="sr-only">
              O que você está procurando?
            </label>
            <input
              id="search-input"
              type="search"
              placeholder="O que você está buscando?"
              autoComplete="off"
            />
            <button type="submit" aria-label="Buscar" className="header__search-btn">
              <SearchIcon />
            </button>
          </div>

          <div className="header__actions" aria-label="Ações do usuário">
            <button className="header__icon-btn" aria-label="Meus Pedidos" title="Meus Pedidos">
              <PackageIcon />
            </button>

            <button className="header__icon-btn" aria-label="Favoritos" title="Favoritos">
              <HeartIcon />
            </button>

            <button className="header__icon-btn" aria-label="Minha Conta" title="Minha Conta">
              <UserIcon />
            </button>

            <button className="header__icon-btn header__icon-btn--cart" aria-label="Carrinho de Compras" title="Carrinho">
              <CartIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Categories */}
      <nav className="header__nav" aria-label="Categorias principais">
        <div className="container">
          <ul className="header__nav-list">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className={`header__nav-item ${item.active ? 'header__nav-item--active' : ''}`}
              >
                <a href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {item.hasCrown && <CrownIcon />}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
