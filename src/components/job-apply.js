import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import JobApplyForm from './section-components/apply-form';
import FooterV2 from './global-components/footer-v2';

const JobApply = () => {
    return <div>
        <Navbar />
        <JobApplyForm customclass="pd-top-190" />
        <FooterV2 />
    </div>
}

export default JobApply

