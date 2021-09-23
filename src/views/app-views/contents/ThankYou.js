import React from 'react';
import {CheckCircleTwoTone} from '@ant-design/icons'
import {Card,Row} from 'antd'
import Confetti from 'react-confetti';
import Footer_V2 from '../../../components/global-components/footer-v2';
import Header from '../../../components/global-components/Header';
import { useHistory } from 'react-router';
// import confetti from 'https://cdn.skypack.dev/canvas-confetti';
// confetti();
const StepFive = () => {
    let publicUrl = process.env.PUBLIC_URL+"/";
    const history=useHistory();
    return (<>
    <Header />
        <div className="animate__animated "style={{minHeight:"91vh",marginTop:"-15px",zIndex:"1"}}>
            
            <img className="animate__animated animate__zoomIn" src={publicUrl+ 'assets/bankImage/heroimage/9.png'} alt="heroImg"/>
           
            <Card  >
                {/* <Confetti
                width="500%"
                height="1000%"
                /> */}
                <Row justify="center" style={{margin:"10px 41%"}}>
                <CheckCircleTwoTone twoToneColor="#861f41" style={{fontSize:"3rem"}}/>
                
                </Row>
                <Row justify="center" style={{width:"100%",textAlign:"center"}}>
                    <label style={{color:"#861f41",fontSize:"2rem"}}>Thank You!</label>
                </Row>
                <Row style={{width:"100%",textAlign:"center"}}>
                <label style={{fontSize:"17px",color:"black"}}>We have recived your payment</label>
                </Row>
                <Row style={{width:"100%",textAlign:"center",margin:'20px 0 10px 0'}}>
                <label style={{fontSize:"15px"}}>Please Note: Your Credit Bureau Score will be updatedpost your final installment.</label>
                </Row>
                <Row style={{width:"100%",textAlign:"center",margin:"0 6px 10px 6px"}}>
                <label><span onClick={()=>history.push('/bureau')} style={{color:"#7979f1",cursor:"pointer"}}>Click here</span> to check your credit Bureau status</label>
                </Row>
            </Card>
        </div>
        <Footer_V2/>
        </>
    );
};

export default StepFive;