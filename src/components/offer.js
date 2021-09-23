import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import VideoV3 from './section-components/video-v3';
import Offer from './section-components/offer';
import WhatWeOffer from './section-components/what-we-offer';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const OfferPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Offer" />
        <WhatWeOffer customclass="pd-top-112"/>
        <VideoV3 />
        <Offer />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default OfferPage

