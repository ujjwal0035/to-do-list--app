import {Row,Card,message, Button, Input,Col} from 'antd';
import React, { useState,useEffect } from 'react';
import Footer_V2 from '../../../components/global-components/footer-v2';
import Header from '../../../components/global-components/Header'
import { useHistory } from 'react-router';
import GaugeChart from 'react-gauge-chart'
import ReactTooltip from 'react-tooltip';
import {QuestionCircleOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';



function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
 const dates={"1":"st","2":"nd","3":"rd","4":"th","5":"th","6":"th","7":"th","8":"th","9":"th","10":"th","11":"th","12":"th","13":"th","14":"th","15":"th","16":"th","17":"th","18":"th","19":"th","20":"th","21":"st","22":"nd","23":"rd","24":"th","25":"th","26":"th","27":"th","28":"th","29":"th","30":"th","31":"st"}
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  
  const UjjuSlider = withStyles({
    root: {
      color: '#861f41',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
  
  const dynamicChangeMessage=[
      {
          message:"You can do better!! Move Right!!",
          color:"#be1f24"
      },{
          message:"Slight improvement required! Keep Right!!",
          color:"#ff9935"
      },
      {
          message:'Now you are talking! Still some way to go!',
          color:"#f3d510"
      },
      {
          message:"Approval Chances High! Great job! Keep Going!",
          color: '#8cc43d'
      },{
        message:"Green is Great! Don’t Stop, Move Right!",
        color: '#01a14b' 
      }
  ]
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const StepFive = () => {
    var date=new Date();
    const [percentage,setPercentage]=useState(37398/50000);
    const [value,setValue]=useState(37398);
    const [noOfEMI,setNoOfEMI]=useState(0)
    const [day,setDay]=useState(0);
    const [currentDay,setCurrentDay]=useState(date.getDate());
    const [Message,setMessage]=useState('');
    const [dynamicColor,setDynamicColor]=useState('');
    // const [btnDisabled,setbtnDisabled]=useState(false);

    const [show, setShow] = useState(false);
    const classes = useStyles();
    const history=useHistory();
    const proceedbtnHandlar=()=>{
      percentage >= .8 ? history.push('cong_page') : setShow(()=>true)
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setShow(false);
    };
    // useEffect(() => {
    //   if(percentage>=.8){
    //     setbtnDisabled(()=>false)}
    //   else{
    //     setbtnDisabled(()=>true);
    //   }
    // }, [value])
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPercentage(newValue/50000);
        // console.log(newValue)
        if(percentage<=.20){
            setMessage(()=>dynamicChangeMessage[0].message);
            setDynamicColor(()=>dynamicChangeMessage[0].color);
        }
        else if(percentage>.20 && percentage<=.40){
          setMessage(()=>dynamicChangeMessage[1].message);
          setDynamicColor(()=>dynamicChangeMessage[1].color);
          
      }
      else if(percentage>.40 && percentage<=.60){
          setMessage(()=>dynamicChangeMessage[2].message);
          setDynamicColor(()=>dynamicChangeMessage[2].color);
          
      }
      else if(percentage>.60 && percentage<.80){
          setMessage(()=>dynamicChangeMessage[3].message);
          setDynamicColor(()=>dynamicChangeMessage[3].color);
          
      }
      else {
          
          setMessage(()=>dynamicChangeMessage[4].message);
          setDynamicColor(()=>dynamicChangeMessage[4].color);
      }
      };
    const EMIHandlar=(event, newValue)=>{
        
        setPercentage((prev)=>{
          if(noOfEMI<newValue){
            return (prev-((newValue-noOfEMI)*.005));
          }
          else if(noOfEMI>newValue){
            return (prev+((noOfEMI-newValue)*.005));
          }
          else{
            return prev;
          }
        })
        setNoOfEMI(()=>newValue);
      }
      const handleDate=(event, newValue)=>{
        setPercentage((prev)=>{
          if(currentDay<newValue){
            return (prev-((newValue-currentDay)*.0007));
          }
          else if(currentDay>newValue){
            return (prev+((noOfEMI-newValue)*.0007));
          }
          else{
            return prev;
          }
        })
          setDay(()=>newValue)

      }
     
    return (
        <>
        <Header />
        <div className={"animate__animated animate__fadeInRightBig"+classes.root}>
        <Snackbar open={show} onClose={handleClose} autoHideDuration={2000} style={{top:"-340px"}}>
          <Alert onClose={handleClose}  severity="warning">
            Oops! You can't settle for this Amount.
          </Alert>
      </Snackbar>
        </div>
          
        <div className="animate__animated animate__fadeInRightBig">
        <Row  style={{textAlign:"center"}}>
                
                <h6 data-tip="this is demo tool tips" style={{marginTop:"10px"}}>OFFER SCORE <QuestionCircleOutlined style={{fontSize: '17px',paddingBottom: '3px'}}/> </h6>
                <ReactTooltip />
          
            </Row>
        <GaugeChart id="gauge-chart6" 
            nrOfLevels={20} 
            percent={percentage} 
            colors={["#ff0000","#00ff00"]} 
            cornerRadius={2} 
            textColor="black"
            // hideText={true}
        />
        <Row style={{textAlign:"center",marginBottom:"30px",marginTop:"-17px"}}>
            <label style={{color:dynamicColor}}>{Message}</label>
        </Row>
        <Card  justify="center">
            
            <Card>

                <Row  style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
                    <p style={{float:"left"}}>Settlement Amount</p>
                    <Input value={`₹ ${value}`} style={{float:"right",width:"24%",lineHeight:"0px",textAlign:"center"}} disabled={true}></Input>
                
                </Row>
                
                <Row style={{textAlign:"center",width:"90%",marginLeft:"auto",marginRight:"auto"}}>
                    <UjjuSlider onChange={handleChange} 
                    valueLabelDisplay="ValueLabelComponent" 
                    aria-label="pretto slider" 
                    defaultValue={value}
                    min={0}
                    max={50000}/>
                    </Row>
                    
                <Row style={{margin:"0 15px 2rem 15px",fontSize:"10px"}}>
                    <p style={{float:"left"}}>{`₹ ${0}`}</p>
                    <p style={{float:"right"}}>{`₹ ${50476}`}</p>
                </Row>
            </Card>
            <Card>
            <Row  style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
                    <p style={{float:"left"}}>No of EMI</p>
                    <Input value={noOfEMI} style={{float:"right",width:"24%",lineHeight:"0px",textAlign:"center"}} disabled={true}></Input>
                
                </Row>
                <Row style={{textAlign:"center",width:"90%",marginLeft:"auto",marginRight:"auto"}}>
                    <UjjuSlider 
                    step={1000}
                    onChange={EMIHandlar} 
                    valueLabelDisplay="ValueLabelComponent" 
                    aria-label="pretto slider" 
                    defaultValue={noOfEMI} 
                    // marks={marks}
                    step={1}
                    min={1}
                    max={4}/>
                    </Row>
                <Row style={{margin:"0 15px 1rem 15px",fontSize:"10px",display:'flex',justifyContent:"space-between"}}>
                    {/* <label style={{float:"left"}}>{` ${0}`}</label> */}
                    <label style={{}}>{`${1}`}</label>
                    <label style={{}}>{`${2}`}</label>
                    <label style={{}}>{`${3}`}</label>
                    <label style={{float:"right"}}>{`${4}`}</label>
                </Row>
            </Card>
            <Card>
            <Row  style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
                    <p style={{float:"left"}}>{`Date Of payment -(${currentDay+day}/${date.getMonth()}/${date.getFullYear()})`}</p>
                    <Input value={`${currentDay+day} ${dates[`${currentDay+day}`]}`} style={{float:"right",width:"28%",lineHeight:"0px",textAlign:"center"}} disabled={true}></Input>
                </Row>
                <Row style={{textAlign:"center",width:"90%",marginLeft:"auto",marginRight:"auto"}}>
                    <UjjuSlider 
                    onChange={handleDate} 
                    valueLabelDisplay="ValueLabelComponent" 
                    aria-label="pretto slider" 
                    defaultValue={day} 
                    // marks={marks}
                    // step={1}
                    min={0}
                    max={6}/>
                    </Row>
                <Row style={{margin:"0 15px 1rem 15px",fontSize:"10px",display:'flex',justifyContent:"space-between"}}>
                    <label style={{}}>{` ${currentDay}`}</label>
                    <label style={{}}>{`${currentDay+1}`}</label>
                    <label style={{}}>{`${currentDay+2}`}</label>
                    <label style={{}}>{`${currentDay+3}`}</label>
                    <label style={{}}>{`${currentDay+4}`}</label>
                    <label style={{}}>{`${currentDay+5}`}</label>
                    <label style={{}}>{`${currentDay+6}`}</label>
                </Row>
            </Card>
            <Row style={{width:"100%",textAlign:"center",marginLeft:"auto",marginRight:"auto"}}>
                    <button style={{marginBottom:"10px"}} onClick={proceedbtnHandlar} >Proceed</button>
            </Row>
        </Card>
        <Footer_V2/>
        </div>
        </>
    );
};

export default StepFive;