import React, { useState } from 'react';
import "animate.css"
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import Header from '../../components/global-components/Header';
import Footer_V2 from '../../components/global-components/footer-v2';
import StepOne from './contents/StepOne';
import StepTwo from './contents/StepTwo';
import StepThree from './contents/StepThree';
import StepFour from './contents/StepFour';
import StepFive from './contents/ThankYou';
// import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
const Index = () => {
    const [page,setPage]=useState(0);
    return (
        
        <div >
         
        </div>
    );
};

export default Index;