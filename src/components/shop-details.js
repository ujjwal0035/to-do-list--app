import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import ShopDetialsPage from './shop-components/shop-details';
import FooterV2 from './global-components/footer-v2';

const ShopDetials = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Shop Details" />
        <ShopDetialsPage />
        <FooterV2 />
    </div>
}

export default ShopDetials

