import React, { useState } from 'react';
import {Card,Button,Row} from "antd"
import OtpVerification from './steptwo-components/OtpVerification';
import NameVerification from './steptwo-components/NameVerification';
import AddreshVerification from './steptwo-components/AddreshVerification';
import {Step,StepButton,Stepper,Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../../components/global-components/Header';
import Footer_V2 from '../../../components/global-components/footer-v2';
import { useHistory } from 'react-router';
// let {Step} =Steps;

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: 'inline-block',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  function getSteps() {
    return ['OTP', 'Name', 'Address'];
  }

const StepTwo = () => {
    let [verificationPage,setVerificationPage]=useState(0);
    let publicUrl = process.env.PUBLIC_URL+"/";

    const history=useHistory();
    // 
    const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isStepOptional = (step) => {
    return step === 3;
  };

  const NextButtonHandlar=()=>{
      setActiveStep((prev)=>{
          return prev<2 ? prev+1 : prev
      });
      setVerificationPage((prev)=>prev+1)
      activeStep===2 && history.push("/step_Three") 
  }
  
  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleStep = (step) => () => {
    setActiveStep((prev)=>{
        return prev>step ? step : prev
    });
    setVerificationPage((prev)=>{
        return prev>step ? step : prev
    });
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

    // 
    return (
      <>
      <Header />
        <div>
            <Card style={{textAlign:"center",minHeight:"91vh",marginTop:"-15px"}}>
            <img src={publicUrl+ 'assets/bankImage/heroimage/2.png'} alt="heroImg"/>
            {/* Steps from material ui */}
            <Stepper className="animate__animated animate__fadeInDown" alternativeLabel nonLinear activeStep={activeStep}style={{padding:"6px",backgroundColor:"#ececec"}}>
                {steps.map((label, index) => {
                const stepProps = {};
                const buttonProps = {};
                if (isStepOptional(index)) {
                    buttonProps.optional = <Typography variant="caption">Optional</Typography>;
                }
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step key={label} {...stepProps} style={{marginBottom:'-7px'}}>
                    <StepButton
                        // onClick={handleStep(index)}
                        completed={isStepComplete(index)}
                        {...buttonProps}
                    >
                        {label}
                    </StepButton>
                    </Step>
                );
                })}
            </Stepper>
            {
                verificationPage === 0 ? <OtpVerification /> : verificationPage === 1? <NameVerification /> : <AddreshVerification />
            }
            <Row justify="center" align="bottom">
                <Button type="submit" onClick={NextButtonHandlar}  style={{width:"6rem",margin:"4px"}}>Confirm</Button>
            </Row>
            
            </Card>
            
        </div>
        <Footer_V2/>
       </> 
    );
};

export default StepTwo;