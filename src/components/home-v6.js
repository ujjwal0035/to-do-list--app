import React from 'react';
import Navbar from './global-components/navbar-v3';
import SliderV3 from './section-components/slider-v3';
import ServiceV4 from './section-components/services-v4';
import About from './section-components/about';
import Helpv2 from './section-components/help-v2';
import Marketing from './section-components/marketing';
import MarketingV2 from './section-components/marketing-v2';
import Testimonialv4 from './section-components/testimonial-v4';
import Product from './section-components/product';
import Testimonial from './section-components/testimonial-v2';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const Home_v6 = () => {
    return <div>
        <Navbar />
        <SliderV3 />
        <ServiceV4 />
        <About />
        <Helpv2 />
        <Marketing customclass="pd-top-120"/>
        <MarketingV2 />
        <Product />
        <Testimonial />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default Home_v6

