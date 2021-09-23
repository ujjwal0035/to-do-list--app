import React, { useState } from 'react';
import Footer_V2 from '../../../components/global-components/footer-v2';
import Header from '../../../components/global-components/Header';
import { useHistory } from 'react-router';
import CloserOfferLetter from './CloserOfferLetter';
const CongratulationPage = () => {
  // var browserHistory = ReactRouter.browserHistory;
  const [OfferLetterVisible,setOfferLetterVisible]=useState(false);
    const history=useHistory();
    let publicUrl = process.env.PUBLIC_URL+"/";
    const BackbtnHandlar=()=>{
      history.push('/step_five')
    }
    const congbtnHandlar=(event)=>{
      history.push('/thankyou');
    }
    const offerModalBtn=()=>{
      setOfferLetterVisible(()=>true);
    }
    return (
        <>
          {
            OfferLetterVisible && <CloserOfferLetter setOfferLetterVisible={setOfferLetterVisible}/>
        }
        
        <Header />
        <div style={{minHeight:"91vh",marginTop:"-15px",zIndex:"1"}}>
            <img src={publicUrl+ 'assets/bankImage/heroimage/9.png'} alt="heroImg"/>
            <>
            <div id="sf2" className="settlement_breakup_table" style={{display: "block"}}>              
              <div className="row auto-margin" style={{textAlign: 'center',marginBottom: "0px"}}>
                <div className="col-md-12">                      
                  <h4 className="header-blue text-center">Congratulations!</h4>
                  <p className="font-smaller text-center mb-0"> <b>Your settlement request for Account <span id="credit_card">XXXXXXX4566</span> has been approved.</b></p>
                          
                  <p className="font-smaller text-center mb-0"><b>Approved Settlement Amount: <span style={{fontSize:"16px"}} id="settlement_amount" className="header-blue th-blue font-medium">Rs.44,000</span></b> </p>
                   {/* <h4 className="text-center" style={{marginTop:"30px"}}><span style={{border:'1px solid #333',paddingTop:'5px',paddingBottom:'5px',paddingLeft:"20px",paddingRight:'20px'}}>EMI Dates</span></h4>  */}
                </div>

                <div className="col-md-12" id="emi_dates" style={{minHeight: "87px"}}>
                  <table style={{width:'100%',padding:'0px',marginTop:'5px'}} className="mb-0">
                    <tbody>
                      <tr>
                        <th className="emi-col-head-1 ">Date </th>
                        <th className="emi-col-head-2">Amount Payable</th>
                      </tr> 
                      
                      <tr className="animate__animated animate__fadeInDown one">
                        <td className="grey-line-right " style={{padding: '0px 6px', width: '50%'}}> 
                        <p style={{marginBottom:"2px"}} style={{marginBottom:"2px"}} className="emi-col">8<sup>th</sup> September 2021</p>
                        </td>
                        <td style={{padding: '0px 6px'}}> <p style={{marginBottom:"2px"}} className="emi-col">₹ 11,000 </p>
                        </td>
                      </tr>
                      <tr className="animate__animated animate__fadeInDown two">
                        <td className="grey-line-right" style={{padding: '0px 6px', width: '50%'}}> 
                        <p style={{marginBottom:"2px"}} className="emi-col">8<sup>th</sup> October 2021</p>
                        </td>
                        <td style={{padding: "0px 6px"}}> 
                        <p style={{marginBottom:"2px"}} className="emi-col">₹ 11,000 </p>
                      </td>
                      </tr>
                      <tr className="animate__animated animate__fadeInDown three">
                        <td className="grey-line-right" style={{padding: '0px 6px', width: '50%'}}> 
                        <p style={{marginBottom:"2px"}} className="emi-col">8<sup>th</sup> November 2021</p>
                        </td>
                        <td style={{padding: "0px 6px"}}> <p style={{marginBottom:"2px"}} className="emi-col">₹ 11,000 </p>
                        </td>
                      </tr>
                      <tr className="animate__animated animate__fadeInDown ">
                        <td className="grey-line-right" style={{padding: "0px 6px",width: '50%'}}> <p style={{marginBottom:"2px"}} className="emi-col">8<sup>th</sup> December 2021</p>
                        </td>
                        <td style={{padding: '0px 6px'}}> <p style={{marginBottom:"2px"}} className="emi-col">₹ 11,000 </p>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                  
                <div className="form-group col-md-12" style={{marginTop:".7rem"}}>
                  <button type="button" className="btn-sm btn-colored btn-theme-colored3" onClick={BackbtnHandlar} style={{borderRadius:"6px"}} >Back</button> 
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <button type="button" className="btn-sm btn-colored btn-theme-colored3" id="final_step" onClick={congbtnHandlar} style={{borderRadius:"6px",marginBottom:"4px"}}>Proceed</button><br/>
                  <span style={{fontSize:"15px"}}> To check your offer letter <span onClick={offerModalBtn} style={{color:"blue"}} className="font-color" >click here</span> </span>                     
                </div>
              </div>
            </div>
            
            </>
        </div>
        <Footer_V2 />
        </>
    );
};

export default CongratulationPage;