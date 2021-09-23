import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Gallery from './section-components/gallery';
import FooterV2 from './global-components/footer-v2';

const GalleryPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Gallery" />
        <Gallery />
        <FooterV2 />
    </div>
}

export default GalleryPage

