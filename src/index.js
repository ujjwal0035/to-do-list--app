import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";

import index from './views/app-views/index'
// import StepOne from './views/app-views/StepOne';
import StepOne from './views/app-views/contents/StepOne';
import StepTwo from './views/app-views/contents/StepTwo';
import StepThree from './views/app-views/contents/StepThree';
import StepFour from './views/app-views/contents/StepFour';
import ThankYou from './views/app-views/contents/ThankYou';
import CloserModal from './views/app-views/contents/CloserModal';
import CongratulationPage from './views/app-views/contents/CongratulationPage';
import StepFive from './views/app-views/contents/StepFive';
import Bureau from './views/app-views/contents/Bureau'
import TermsandCondition from './views/app-views/contents/TermsandCondition';

// import "antd/dist/antd.css";

class Root extends Component {
    render() {
        return(
            <div style={{minHeight:"600px"}}>
                
                <Router>
                <HashRouter >
                <Switch>
                    <Route exact path="/" component={StepOne} /> 
                    {/* <Route path="/step_one" component={StepOne} />  */}
                    <Route path="/step_two" component={StepTwo} />
                    <Route path="/step_Three" component={StepThree} /> 
                    <Route path="/step_four" component={StepFour} />
                    <Route path="/step_five" component={StepFive} />
                    <Route path="/cong_page" component={CongratulationPage} />
                    <Route path="/thankyou" component={ThankYou} />
                    <Route path="/bureau" component={Bureau} />
                    <Route path="/term" component={TermsandCondition} />
                </Switch>
                </HashRouter>
            </Router>
            </div>
            
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('settlement'));
