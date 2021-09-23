import React,{useState} from 'react';
import { Steps,Card,Row,Col } from 'antd';
import Footer_V2 from '../../../components/global-components/footer-v2';
import Header from '../../../components/global-components/Header'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


// const { Step } = Steps;

// function getSteps() {
//     return ['Payment Recieved. Account send to bank for Bureau update.', 'Bank sent to Bureau for update', 'Bureau has received the account details','Bureau has update the account'];
//   }
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));
const Bureau = () => {
  
    let publicUrl = process.env.PUBLIC_URL+"/";
    const [current,setCurrent]=useState(0);
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(1);
    const steps = ['Payment Recieved. Account send to bank for Bureau update.', 'Bank sent to Bureau for update', 'Bureau has received the account details','Bureau has update the account']; //getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        
        <div>
            <Header />
            <img   src={publicUrl+ 'assets/bankImage/heroimage/1.png'} alt="heroImg"/>
            <Card style={{textAlign:"center" , margin:"10px 0 0 0"}}>
              <h5>Bureau Updation Tracker</h5>
            <Stepper   activeStep={activeStep} orientation="vertical">
                
                {steps.map((label, index) => (
                <Step className={`animate__animated animate__fadeInDown three`} key={label} >
                    <StepLabel>{label}</StepLabel>
                    
                </Step>
                ))}
            </Stepper>
            </Card>
            <Footer_V2/>
        </div>
    );
};

export default Bureau;




