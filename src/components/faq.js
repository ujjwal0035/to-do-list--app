import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Faq from './section-components/faq';
import GetInTouch from './section-components/get-in-touch';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const FaqPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="FAQ" />
        <Faq customclass="pd-top-120 " />
        <GetInTouch />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default FaqPage

