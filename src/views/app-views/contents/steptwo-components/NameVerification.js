import React from 'react';
import { Row,Input} from 'antd';
const NameVerification = () => {
    return (
        <div className="addreshCard stepCard animate__animated animate__fadeInRight" style={{paddingBottom:"8px"}}>
                <p style={{fontSize:"1rem",color:"black",fontWeight:"500"}}>Kindly Select Your Name</p>
                <Row gutter={16}>
                    <Input className="otp_hovor"  value="Vikash Kumar" style={{width:'15rem',margin:"7px",textAlign:"center"}} disabled/>
                </Row>
                <Row gutter={16}>
                    <Input className="otp_hovor"  value="Alok kumar Gupta" style={{width:'15rem',margin:"7px",textAlign:"center"}} disabled/>
                </Row>
                <Row gutter={16}>
                    <Input className="otp_hovor"  value="Parteek kumar Okte" style={{width:'15rem',margin:"7px",textAlign:"center"}} disabled/>
                </Row>
                <Row gutter={16}>
                    <Input className="otp_hovor"  value="Ujjwal Gupta" style={{width:'15rem',margin:"7px",textAlign:"center"}} disabled/>
                </Row>
                
            
        </div>
    );
};

export default NameVerification;