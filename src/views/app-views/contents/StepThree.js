import React, { useState } from 'react';
import {Card,Row} from "antd"
import CloserModal from './CloserModal';
import Header from '../../../components/global-components/Header';
import Footer_V2 from '../../../components/global-components/footer-v2';
import { useHistory } from 'react-router';
const StepThree = () => {
    let publicUrl = process.env.PUBLIC_URL+"/";
    const [visibleCloserModal,setVisibleCloserModal]=useState(false);
 
    const history=useHistory();
    const SettlementHandlar=()=>{
        history.push('/step_four')
    }
    
    return (
        <>
        <Header />
        <div style={{marginTop:"-15px"}}>
            <img className="" src={publicUrl+ 'assets/bankImage/heroimage/5.png'} alt="heroImg"/>
            <Card  style={{width:"100%",textAlign:"center",paddingTop:"4px",minHeight:"260px",borderBlockColor:"#861f41"}}>
            <p style={{color:"black",fontWeight:"480",marginBottom:"-5px",marginTop:"4px"}}>Thank you for your verification</p>
            <p style={{color:"black",fontWeight:"480",marginBottom:"0px"}}>Please find your account details below</p>
            <table className="tbl-settlement ">
                <tbody>
                <tr className="animate__animated animate__fadeInDown">
                    <th colSpan={2} className="text-center text-white"> Account Details</th>
                </tr>
                <tr className="animate__animated animate__fadeInDown">
                    <td className="tbl-br"> Name</td>
                    <td className="text-right"> Ujjwal Kumar </td>
                </tr>
                <tr className="animate__animated animate__fadeInDown">
                    <td className="tbl-br"> Mobile No</td>
                    <td className="text-right"> +919876543290 </td>
                </tr>
                <tr className="animate__animated animate__fadeInDown">
                    <td className="tbl-br">Product Type </td> 
                    <td className="text-right"> Credit Card</td>
                </tr>
                <tr className="animate__animated animate__fadeInDown">
                    <td className="tbl-br">Account No.</td>
                    <td className="text-right"> XXXXXX9043</td>
                </tr>
                <tr className="animate__animated animate__fadeInDown">
                    <th colSpan={2} className="text-center text-white"> Outstanding Details</th>
                </tr>
                <tr className="animate__animated animate__fadeInDown">
                    <td className="tbl-br">POS </td>
                    <td className="text-right"> ₹ 50,000.00 INR </td>
                </tr>
                <tr className="animate__animated animate__fadeInDown">
                    <td className="tbl-br">Interest + Charges</td>
                    <td className="text-right">₹ 0.00 INR</td>
                </tr>
                <tr className="animate__animated animate__fadeInDown">
                    <td className="tbl-br">TOS</td> 
                    <td className="text-right">₹ 50,000.00 INR</td>
                </tr>
                </tbody>
            </table>
            <Row style={{fontSize: '16px',marginTop: '11px',fontWeight: '420',color: '#524f4f'}}>What would you like opt for ?</Row>
            <Row  justify="space-between" style={{width:"86%",display:"flex",justifyContent:"space-between",margin:"4px auto"}}>
                <button className="animate__animated animate__fadeInLeft rowbtn" onClick={()=>setVisibleCloserModal(()=>true)} >Closure</button>
                <label style={{marginTop: "10px"}}>OR</label>
                <button className="animate__animated animate__fadeInRight rowbtn" onClick={SettlementHandlar} >settlement</button>
                
            </Row>
            {
                visibleCloserModal && <CloserModal setVisibleCloserModal={setVisibleCloserModal}/>
            }
            </Card>
        </div>
        <Footer_V2/>
        </>
    );
};

export default StepThree;