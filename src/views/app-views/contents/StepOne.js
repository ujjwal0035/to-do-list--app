import React, { useEffect,useState } from 'react';
import {Card,Input,Checkbox,Button,Row} from 'antd';
import Header from '../../../components/global-components/Header';
import Footer_V2 from '../../../components/global-components/footer-v2';
import { useHistory } from "react-router-dom";
import TermsandCondition from './TermsandCondition';
// import axios from 'axios';
const StepOne = () => {
    const [termAndCondition,setTermAndCondition]=useState(false);
    const history=useHistory();
    let publicUrl = process.env.PUBLIC_URL+"/";
    const routeChange=()=>{
        history.push("/step_two");
    }
    const termAndConditionHandlar=()=>{
        console.log("term and condition")
        setTermAndCondition(()=>true)
        // console.log(term)
    }
    return (
        <>
        <Header />
        {termAndCondition===true && <TermsandCondition setTermAndCondition={setTermAndCondition}/>}
        <div style={{minHeight:"91vh",marginTop:"-15px"}}>
           <img   src={publicUrl+ 'assets/bankImage/heroimage/1.png'} alt="heroImg"/>
           <Card className="stepCard " >
               <h6  level={5}>Kindly Fill In Your Mobile No.</h6>
               <br/>
               <Input className="animate__animated animate__fadeInDown" value="+91" disabled style={{width:"14%",marginRight:"15px"}}></Input>
               
               <Input className="animate__animated animate__fadeInDown" placeholder="Enter 10 digit Mobile No."></Input>
               <br/>
               <br />
               <div className="animate__animated animate__fadeInDown"><Checkbox /><span style={{marginLeft:"4px"}}>I accept all <span onClick={termAndConditionHandlar} style={{marginLeft:"6px",cursor:"pointer"}} className="term_condition" >terms and conditions</span></span>
               </div>
               <Row gutter={16} style={{marginTop:"24px",marginBottom:"10px"}}>
               <Button className="animate__animated animate__fadeInUp" type="submit" onClick={routeChange} style={{width:"7rem",marginBottom:"24px",borderRadius:"4px",padding:"13px 10px"}}>Submit</Button>
                </Row>
               
           </Card>
        </div>
        <Footer_V2/>
        </>
    );
};

export default StepOne;