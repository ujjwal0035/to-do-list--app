import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Job_details_page from './section-components/job-details';
import FooterV2 from './global-components/footer-v2';

const Job_details = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Riyaqas Jobs" />
        <Job_details_page customclass="pd-top-112" />
        <FooterV2 />
    </div>
}

export default Job_details

