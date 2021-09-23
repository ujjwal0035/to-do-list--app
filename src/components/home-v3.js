import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import WhatWeDo from './section-components/what-we-do';
import Team from './section-components/team';
import VideoV3 from './section-components/video-v3';
import Skill from './section-components/skill';
import Offer from './section-components/offer';
import Client from './section-components/client';
import Testimonialv3 from './section-components/testimonial-v3';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const Home_V3 = () => {
    return <div>
        <Navbar />
        <Banner />
        <WhatWeDo />
        <VideoV3 />
        <Skill />
        <Offer />
        <Team />
        <Client />
        <Testimonialv3 />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default Home_V3

