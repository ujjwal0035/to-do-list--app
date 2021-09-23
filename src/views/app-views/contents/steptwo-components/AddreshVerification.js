import React from 'react';
import { Row} from 'antd';
const AddreshVerification = () => {
    return (
        <div className="addreshCard stepCard animate__animated animate__fadeInRight" style={{paddingBottom:"8px"}}>
            <p style={{marginTop:"0",color:"black",fontSize:"20px",fontWeight:"500"}}>Kindly Select Your Addresh</p>
                <Row className="otp_hovor" gutter={16} justify="center"style={{marginLeft:"42px",marginRight:"37px",padding:"4px",marginBottom:"4px",borderRadius:"10px",border:"1px solid #c2c7cc"}}>
                    <div>Pragati Building, Goregaon(East), Mumbai, Maharashtra 400063</div>
                </Row>
                <Row className="otp_hovor" gutter={16} justify="center"style={{marginLeft:"42px",marginRight:"37px",padding:"4px",marginBottom:"4px",borderRadius:"10px",border:"1px solid #c2c7cc"}}>
                    <div>MIDC, Andheri(East), Mumbai, Maharashtra 400047</div>
                </Row>
                <Row className="otp_hovor" gutter={16} justify="center"style={{marginLeft:"42px",marginRight:"37px",padding:"4px",marginBottom:"4px",borderRadius:"10px",border:"1px solid #c2c7cc"}}>
                    <div >Sakinaka, Andheri(East), Mumbai, Maharashtra 400053</div>
                </Row>
                <Row className="otp_hovor" gutter={16} justify="center"style={{marginLeft:"42px",marginRight:"37px",padding:"4px",borderRadius:"10px",border:"1px solid #c2c7cc"}}>
                    <div>BKC, G / N, Bandra (E),Mumbai, Maharashtra 400051</div>
                </Row>
        </div>
    );
};

export default AddreshVerification;