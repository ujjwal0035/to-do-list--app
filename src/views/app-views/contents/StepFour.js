import React, { useState } from 'react';
import {Card,Row,Button} from 'antd'
// import { Header } from 'antd/lib/layout/layout';
import Footer_V2 from '../../../components/global-components/footer-v2';
import Header from '../../../components/global-components/Header';
import CloserModal from './CloserModal';
import { useHistory } from "react-router-dom";
const StepFour = () => {
    const history=useHistory();
    let [animate,setAnimate]=useState('');
    let publicUrl = process.env.PUBLIC_URL+"/";
    const [visibleCloserModal,setVisibleCloserModal]=useState(false);
    const CloserClickHandlar=()=>{
        setVisibleCloserModal(()=>true)
    }
    const settlementClickHandlar=()=>{
        setAnimate(()=>'animate__backOutLeft')
        setTimeout(()=>{
            history.push('./step_five');
        },0)
    }
    return (
        <>
        <Header />
        <div className={`animate__animated ${animate}`} style={{marginTop:"-15px",zIndex:"1",minHeight:"91vh"}}>
            <img src={publicUrl+ 'assets/bankImage/heroimage/5.png'} alt="heroImg"/>
            <Card  style={{textAlign:"center",display:'flex',alignItems:"space-between",minHeight: "314px"}}>
                <Row style={{margin:"30px 10px 0px 10px"}}>
                <label className="animate__animated animate__zoomIn" style={{color:"black", fontSize:'18px',fontWeight:"800"}}>Closure of loan is Recomanded over Settlement</label>
                </Row>
                <Row className="animate__animated animate__fadeInDown stepFourP" style={{margin:"-3px 22px"}}>
                <p style={{fontWeight:"500"}}>A 'Settled' remark will appear in your credit report, lowering your credit score for the next seven years</p>
                </Row>
                <Row style={{margin:"58px 8px 9px 7px"}}>
                <label style={{color:"black", fontSize:'18px',fontWeight:"650"}}>What would you like to opt for</label>
                </Row>
                <Row  justify="space-between" style={{width:"86%",display:"flex",justifyContent:"space-between",margin:"5px auto"}}>
                <Button className="animate__animated animate__fadeInLeft" style={{padding:"8px 15px"}} onClick={CloserClickHandlar}>Closure</Button>
                <label style={{marginTop: "10px"}}>OR</label>
                <Button className="animate__animated animate__fadeInRight rowbtn" onClick={settlementClickHandlar} style={{padding:"7px 6px"}}>Settlement</Button> 
            </Row>
            {visibleCloserModal && <CloserModal setVisibleCloserModal={setVisibleCloserModal}/>}
            </Card>
        </div>
        <Footer_V2 />
        </>
    );
};

export default StepFour;