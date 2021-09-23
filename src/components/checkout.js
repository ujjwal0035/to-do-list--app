import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import CheckoutPage from './shop-components/checkout';
import FooterV2 from './global-components/footer-v2';

const ShopGrid = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Checkout" />
        <CheckoutPage />
        <FooterV2 />
    </div>
}

export default ShopGrid

