import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import WorkProcessing from './section-components/work-processing';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const WorkProcessingPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Work Processing" />
        <WorkProcessing customclass="pd-top-120" />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default WorkProcessingPage

