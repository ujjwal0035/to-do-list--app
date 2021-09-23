import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import TestimonialV2 from './section-components/testimonial-v2';
import Team from './section-components/team-page';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const TeamPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Team" />
        <Team />
        <TestimonialV2 />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default TeamPage

