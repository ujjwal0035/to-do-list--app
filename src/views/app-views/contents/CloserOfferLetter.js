import React,{useState,useEffect} from 'react';
import {Modal,Button,Card,Row} from 'antd'

const CloserOfferLetter = ({setOfferLetterVisible}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const date=new Date();
    useEffect(() => {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }, [])
    const cancelbtnHandlar=()=>{
        setOfferLetterVisible(()=>false);
    }
    return (
        <div>
        <Card className="modal_theme modal-content offer animate__animated animate__fadeInUpBig" style={{textAlign:"justify",zIndex:"4",overflow:"scroll"}}>
            <Row>
            <label className="modalHeaderHeading" style={{margin:"3px 0 0 6px"}}>Offer Letter</label>
            <label className="modalCrox" onClick={cancelbtnHandlar} style={{float:"right",margin:"10px 13px 0 0",fontSize:"15px"}}>X</label>
            <hr style={{margin:"2px"}}/>
            </Row>
            <Card style={{padding:"15px"}}>
                <label>{`Date: ${date.getDate()}/ ${date.getMonth()}/${date.getFullYear()}`}</label><br/>
                <label>Ref No.: CC/COLL/2020-2021/2678</label><br/>
                <p>Mr. Ujjwal Gupta</p>
                <p>Dear Customer, With reference to your Axis Bank credit card 4514570008434972 We confirm that - we are ready to accept <b><span class="offer_amount">Rs.11062 ( Rs. Eleven Thousand and Sixty Two )</span></b> in <span class="emi_installment">One</span> Installments to be paid as defined in the summary below:
            <br/><div id="emi_dates_summary"></div></p>
            <p>Post receipt of this payment, your credit card will be closed and a Nil balance letter will be issued within Fifteen working days.
            <br/>Please note that the CIBIL record for this account will be updated as NORMAL.</p>
            <p>This confirmation has been issued at your request.
            <br/>We trust this meets your requirements and assure you of our best services.</p>
            <br />
            <p><b>Yours Sincerely,</b>
                <br/>authorized Signatory.
                <span id="bank_address"> Axis Bank Ltd. Apsara Multiplex, Gr, Flr Lamington Road Branch, Grant Road (East) REGISTERED OFFICE: "Trishul"- 3rd Floor Opp. Samartheswar Temple, Near Law Garden, Ellisbridge, Ahmedabad - 380006.</span>
                <b>REGISTERED OFFICE:</b>
                 "Trishul"- 3rd Floor Opp. Samartheswar Temple, Near Law Garden, Ellisbridge, Ahmedabad - 380006. </p>
            <br />
            <p>*** This is an electronic copy thus does not require any signature. ***</p>

            </Card>
            <hr style={{margin:'2px'}}/>
            <Row style={{marginBottom:"2px"}}>
            <Button onClick={cancelbtnHandlar} style={{float:"right",margin:"0 10px 10px 0"}}>Close</Button></Row>
        </Card>
        
        </div>
    )

}
export default CloserOfferLetter;