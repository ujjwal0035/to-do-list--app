import React from 'react';
import Navbar from './global-components/navbar';
import Bannerv4 from './section-components/banner-v4';
import Client from './section-components/client-v3';
import Service from './section-components/services-v6';
import SoftwareStore from './section-components/software-store';
import Features from './section-components/features-v2';
import Paymentinfo from './section-components/payment-info';
import Softbox from './section-components/soft-box';
import SoftboxV2 from './section-components/soft-box-v2';
import Product from './section-components/product-v2';
import Testimonial from './section-components/testimonial-v2';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const Home_v6 = () => {
    return <div>
        <Navbar />
        <Bannerv4 />
        <Client />
        <Service />
        <SoftwareStore  />
        <Features />
        <Paymentinfo />
        <Softbox />
        <SoftboxV2 />
        <Product />
        <Testimonial />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default Home_v6

