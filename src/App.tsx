import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CategoryNav from './components/CategoryNav/CategoryNav';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import PromoBanner from './components/PromoBanner/PromoBanner';
import BrandShowcase from './components/BrandShowcase/BrandShowcase';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* 1. Hero Promo Banner */}
        <Banner />

        {/* 2. Category Icon Cards */}
        <CategoryNav />

        {/* 3. First Vitrine with Filter Tabs */}
        <ProductShowcase
          id="vitrine"
          title="Produtos relacionados"
          showTabs={true}
          showViewAll={false}
        />

        {/* 4. Dual Parceiros Banners */}
        <PromoBanner
          title="Parceiros"
          subtitle="Lorem ipsum dolor sit amet, consectetur"
          buttonText="CONFIRA"
        />

        {/* 5. Second Vitrine with "Ver todos" */}
        <ProductShowcase
          title="Produtos relacionados"
          showTabs={false}
          showViewAll={true}
        />

        {/* 6. Second Dual Parceiros Banners */}
        <PromoBanner
          title="Parceiros"
          subtitle="Lorem ipsum dolor sit amet, consectetur"
          buttonText="CONFIRA"
        />

        {/* 7. Navegue por marcas */}
        <BrandShowcase />

        {/* 8. Third Vitrine with "Ver todos" */}
        <ProductShowcase
          title="Produtos relacionados"
          showTabs={false}
          showViewAll={true}
        />

        {/* 9. Newsletter Section */}
        <Newsletter />
      </main>

      {/* 10. Footer */}
      <Footer />
    </>
  );
};

export default App;
