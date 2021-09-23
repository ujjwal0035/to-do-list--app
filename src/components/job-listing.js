import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Job_Listing from './section-components/job-listing';
import FooterV2 from './global-components/footer-v2';

const Job_listing = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Riyaqas Jobs" />
        <Job_Listing customclass="pd-top-120 bg-none" />
        <FooterV2 />
    </div>
}

export default Job_listing

