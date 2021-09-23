import React from 'react';
import Navbar from './global-components/navbar';
import SliderV4 from './section-components/slider-v4';
import Client from './section-components/client-v2';
import Service from './section-components/services-v5';
import Helpv2 from './section-components/help-v2';
import Marketing from './section-components/marketing';
import Help from './section-components/help-v3';
import Time from './section-components/business-time';
import CaseStudies from './section-components/case-studies';
import Testimonial from './section-components/testimonial-v2';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const Home_v6 = () => {
    return <div>
        <Navbar />
        <SliderV4 />
        <Client />
        <Service />
        <Marketing  />
        <Help />
        <Time />
        <CaseStudies />
        <Testimonial />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default Home_v6

