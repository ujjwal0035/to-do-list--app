import React,{useState} from 'react';
import {Modal,Button,Card,Row} from 'antd'
import CloserOfferLetter from './CloserOfferLetter'

const CloserModal=({setVisibleCloserModal})=>{
    const [OfferLetterVisible,setOfferLetterVisible]=useState(false);
    const closeHandlar=()=>{
        setVisibleCloserModal(()=>false)
    }
    const clickHereClickHandlar=()=>{
        setOfferLetterVisible(()=>true)
    }
    // Closer Modal
    
    
    
    return (
        <div>
            {
                OfferLetterVisible && <CloserOfferLetter setOfferLetterVisible={setOfferLetterVisible}/>
            }
             <Card className="modal_theme modal-content col-xl-6 offset-xl-4 animate__animated animate__flipInY" style={{zIndex:"2"}}>
            <Row className="modalHeader" justify="center">
                <label className="modalHeaderHeading">Closure</label>
                <label className="modalCrox" onClick={closeHandlar}>X</label>
            </Row>
            <Row justify="center">
                <label style={{fontSize:"20px",fontWeight:"500",marginTop:"15px"}}>Offer Amount</label>
                <br/>
                <div className="" style={{textAlign:"center",marginTop:"8px"}} ><label style={{border:"1px solid #c71c55",borderRadius:"4px",fontSize:"18px",marginBottom:"25px",width:"50%",padding:"8px 1px"}}>₹ 50,000.00</label></div>
            </Row>
            <Row justify="center">
                <Button style={{width:"12rem",borderRadius:"4px",padding:"13px 0"}}>Pay</Button>
            </Row>
            <Row justify="center">
                <label style={{margin:"10px 10px 20px"}}>To check for your offer letter <span onClick={clickHereClickHandlar} style={{cursor:"pointer",color:"blue"}}>click here</span></label>
            </Row>
        </Card>
        </div>
    )

}
export default CloserModal;