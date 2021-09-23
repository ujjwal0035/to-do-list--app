import React from 'react';
import Navbar from './global-components/navbar';
import SliderV1 from './section-components/slider-v1';
import SoftBoxAbout from './section-components/soft-box-about';
import Services from './section-components/services';
import TalentedPeople from './section-components/talented-people';
import SoftBoxTab from './section-components/soft-box-tab';
import SoftBoxLeftsideImage from './section-components/soft-box-leftside-image';
import Video from './section-components/video';
import Testimonial from './section-components/testimonial';
import Subscribe from './section-components/subscribe';
import FooterV1 from './global-components/footer-v1';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <SliderV1 />
        <Services />
        <SoftBoxAbout />
        <TalentedPeople />
        <SoftBoxTab />
        <SoftBoxLeftsideImage />
        <Video />
        <Testimonial />
        <Subscribe />
        <FooterV1 />
    </div>
}

export default Home_V1

