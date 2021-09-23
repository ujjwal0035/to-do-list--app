import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import ShopGridPage from './shop-components/shop-grid-page';
import FooterV2 from './global-components/footer-v2';

const ShopGrid = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Shop Grid" />
        <ShopGridPage />
        <FooterV2 />
    </div>
}

export default ShopGrid

