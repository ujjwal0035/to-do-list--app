import React from 'react';
import { Row,Input,Col,Button,Card } from 'antd';
const OtpVerification = () => {
    return (
        <div className="animate__animated animate__fadeInRight" >
            
            <Card className="stepCard otpCard" style={{textAlign:"center"}}>
                <p   style={{marginTop:"13px",fontSize:"1rem",color:"black",fontWeight:"500"}}>Kindly Select the OTP sent on 9XXXXXXX76</p>
                <Row gutter={8} >
                    <Col xs={24} xl={12} style={{margin:"20px"}}>
                        <Input className="otp_hovor"  value="3904" style={{width:'8rem',marginRight:"20px",textAlign:"center"}} disabled/>
                        <Input className="otp_hovor" value="6536" style={{width:"8rem",marginRight:"20px",textAlign:"center"}} disabled/>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Input className="otp_hovor" value="1389" style={{width:"8rem",marginRight:"20px",textAlign:"center"}}disabled/>
                        <Input className="otp_hovor" value="3850" style={{width:"8rem",marginRight:"20px",textAlign:"center"}} disabled/>
                    </Col>
                </Row>
            </Card >    
        </div>
    );
};

export default OtpVerification;