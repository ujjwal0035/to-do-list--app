import React from 'react';
import Navbar from './global-components/navbar-v3';
import BannervDomain from './section-components/banner-domain';
import Hosting from './section-components/hosting';
import HostingPlan from './section-components/hosting-plan';
import Benifit from './section-components/benifit';
import ServiceV7 from './section-components/services-v7';
import Faqv3 from './section-components/faq-v3';
import LatestPostV2 from './section-components/latest-post-v2';
import Testimonial from './section-components/testimonial-v2';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const Home_v6 = () => {
    return <div>
        <Navbar />
        <BannervDomain />
        <Hosting />
        <HostingPlan />
        <Benifit  />
        <ServiceV7 />
        <Testimonial />
        <Faqv3 />
        <LatestPostV2 />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default Home_v6

