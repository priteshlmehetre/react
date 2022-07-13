import React, {Component} from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; 
import docboyz from "assets/img/docboyz.jpeg";
import avatar1 from "assets/img/avatars/avatar1.png";
import "react-datepicker/dist/react-datepicker.css";  
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Camera, FACING_MODES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class Signupkyc extends Component {
  constructor (props) {  
    super(props)  
    this.state = {  
      startDate: new Date()  ,
      showAdharModal: false,
      showPanModal: false,
      showChequeModal: false,
      showPoliceModal: false,
      showPassbookModal: false,
      aadharPhoto: avatar1,
      aadharBackPhoto: avatar1,
      panPhoto:avatar1,
      chequePhoto:avatar1,
      policePhoto:avatar1,
      passbookPhoto:avatar1,
      aadharFront: null,
      aadharFile: '',
      aadharBackFile:'',
      panFile:'',
      policeFile:'',
      chequeFile:'',
      passbookFile:'',
      profileFile: ''
    };  
    this.handleChange = this.handleChange.bind(this);  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  }  

  handleChange(date) {  
    this.setState({  
      startDate: date , 
    })  
  }  
  cameraAdharChange() {  
    this.setState({  
      showAdharModal: true,
    })  
  } 
  
  cameraAdharBackChange() {  
    this.setState({  
      showAdharBackModal: true,
    })  
  } 
  cameraPanChange() {  
    this.setState({  
        showPanModal: true,
    })  
  } 
  cameraChequeChange() {  
    this.setState({  
        showChequeModal: true,
    })  
  } 
  cameraPoliceChange() {  
    this.setState({  
        showPoliceModal: true,
    })  
  } 
  cameraPassbookChange() {  
    this.setState({  
        showPassbookModal: true,
    })  
  } 

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
  
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
  
    return new File([u8arr], filename, { type: mime });
  }
  
  onTakeAadharPhoto = (dataURI) => {
    this.setState({
      aadharPhoto: dataURI,
      showAdharModal: false,
      aadharFile: this.dataURLtoFile(dataURI, `${Math.random(10)}.jpg`),
      profileFile: this.dataURLtoFile(localStorage.getItem("profilePhoto"), `${Math.random(10)}.jpg`)
    });

    // var aadhar = {
    //   name: "aadharFront.png",
    //   type: "image/png",
    //   uri: dataURI,
    // }
    // this.setState({
    //   aadharFront: aadhar
    // });
  }
  
  onTakeAadharBackPhoto = (dataURI) => {
    this.setState({
      aadharBackPhoto: dataURI,
      showAdharBackModal: false,
      aadharBackFile: this.dataURLtoFile(dataURI, `${Math.random(10)}.jpg`)
    });
  }

  onTakePanPhoto = (dataURI) => {
    this.setState({
      panPhoto: dataURI,
      showPanModal: false,
      panFile: this.dataURLtoFile(dataURI, `${Math.random(10)}.jpg`)
    });
  }

  onTakeChequePhoto = (dataURI) => {
    this.setState({
      chequePhoto: dataURI,
      showChequeModal: false,
      chequeFile: this.dataURLtoFile(dataURI, `${Math.random(10)}.jpg`)
    });
  }

  onTakePolicePhoto = (dataURI) => {
    this.setState({
      policePhoto: dataURI,
      showPoliceModal: false,
      policeFile: this.dataURLtoFile(dataURI, `${Math.random(10)}.jpg`)
    });
  }

  onTakePassbookPhoto = (dataURI) => {
    this.setState({
      passbookPhoto: dataURI,
      showPassbookModal: false,
      passbookFile: this.dataURLtoFile(dataURI, `${Math.random(10)}.jpg`)
    });
  }
  
  onFormSubmit(e) {  
    e.preventDefault();  
    console.log(this.state.startDate)  
  }  
  redirectToBank = (e) => {
      window.location.href = 'purity-ui-dashboard#/auth/signupbank'
  };

  onClickSignIn = (e) => {
    window.location.href = 'purity-ui-dashboard#/auth/signin';
  }

  redirectToDashboard = (e) => {
    // e.preventDefault();
        
    var formData = new FormData();
    formData.append("name", localStorage.getItem("name"));
    formData.append("email", localStorage.getItem("email"));
    formData.append("password", "docBoyz@123");
    formData.append("confirmed_password", "docBoyz@123");
    formData.append("profile_pic", this.state.profileFile);
    formData.append("mobile", localStorage.getItem("mobileNumber"));
    formData.append("dob", localStorage.getItem("dob"));
    formData.append("gender", localStorage.getItem("gender"));
    formData.append("address1", localStorage.getItem("address"));
    formData.append("state", localStorage.getItem("state"));
    formData.append("city", localStorage.getItem("city"));
    formData.append("agent_city", localStorage.getItem("city"));
    formData.append("type", "d");
    formData.append("pincode", localStorage.getItem("pincode"));
    formData.append("degree", "BSC");
    formData.append("college", "BSC");
    formData.append("year", "BSC");
    formData.append("bank_name", localStorage.getItem("bankName"));
    formData.append("account_number", localStorage.getItem("accNumber"));
    formData.append("pan_number", localStorage.getItem("panNumber"));
    formData.append("ifsc_code", localStorage.getItem("ifsc"));
    formData.append("account_type", localStorage.getItem("accType"));
    formData.append("adhar_card_front", this.state.aadharFile);
    formData.append("adhar_card_back", this.state.aadharBackFile);
    formData.append("pan_card", this.state.panFile);
    formData.append("cheque_or_passbook", this.state.passbookFile);
    formData.append("police_verification", this.state.policeFile);

    axios
    .post(localStorage.getItem("URL")+"register", formData, {headers: { 'Content-Type': 'multipart/form-data'}})
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.status == 'created') {
        toast.success(json.data.message);
        setTimeout(() => {
          window.location.href = 'purity-ui-dashboard#/auth/homepage';
        }, 1000);
      }else{
        toast.warning(json.data.message);
      }
    })
    .catch(error => {
      alert("An Error Occured!" + error);
    });
  };

  render() {
    
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='1.5rem'
        mb='30px'>
        <img src={docboyz} width="12%" height="12%" style={{position: "relative", right: "1%", paddingBottom: "10px"}}></img>
        <Text
          fontSize='md'
          color='red.500'
          fontWeight='bold'
          mt='10px'
          mb='10px'
          w={{ base: "90%", sm: "60%", lg: "10%", xl: "30%" }}>
          KYC Documents
        </Text>
      {/* </Flex> */}
      <Flex alignItems='center' justifyContent='center' mb='20px' mt='20px'>
        <Flex
          direction='column'
          w='445px'
          background='transparent'
          borderRadius='15px'
          p='0px 40px 40px 40px'
          mx={{ base: "100px" }}
          // bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
            <FormControl>
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              Adhar Card 
            </FormLabel>
            <img src={this.state.aadharPhoto} width="20%" height="20%" border-radius="50%" style={{borderradius: "50%",position: "relative", left: "40%", paddingBottom: "10px" }}></img>
            {this.state.showAdharModal == true ?
            <Camera
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isImageMirror={false}
              isFullScreen={true}
              idealResolution = {{width: 500, height: 500}}
              sizeFactor={1}
              onTakePhoto={(dataURI) => this.onTakeAadharPhoto(dataURI)}
            />:<button onClick={() => this.cameraAdharChange()}>Add Adhar Photo</button>
            }
            <img src={this.state.aadharBackPhoto} width="20%" height="20%" border-radius="50%" style={{borderradius: "50%",position: "relative", left: "40%", paddingBottom: "10px" }}></img>
            {this.state.showAdharBackModal == true ?
            <Camera
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isImageMirror={false}
              isFullScreen={true}
              idealResolution = {{width: 500, height: 500}}
              sizeFactor={1}
              onTakePhoto={(dataURI) => this.onTakeAadharBackPhoto(dataURI)}
            />:<button onClick={() => this.cameraAdharBackChange()}>Add Adhar Back Photo</button>
            }
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              Pan Card 
            </FormLabel>
            <img src={this.state.panPhoto} width="20%" height="20%" border-radius="50%" style={{borderradius: "50%",position: "relative", left: "40%", paddingBottom: "10px" }}></img>
            {this.state.showPanModal == true ?
            <Camera
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isImageMirror={false}
              isFullScreen={true}
              idealResolution = {{width: 500, height: 500}}
              sizeFactor={1}
              onTakePhoto={(dataURI) => this.onTakePanPhoto(dataURI)}
            />:<button onClick={() => this.cameraPanChange()}>Add Pan Photo</button>
            }
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              Cheque 
            </FormLabel>
            <img src={this.state.chequePhoto} width="20%" height="20%" border-radius="50%" style={{borderradius: "50%",position: "relative", left: "40%", paddingBottom: "10px" }}></img>
            {this.state.showChequeModal == true ?
            <Camera
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isImageMirror={false}
              isFullScreen={true}
              idealResolution = {{width: 500, height: 500}}
              sizeFactor={1}
              onTakePhoto={(dataURI) => this.onTakeChequePhoto(dataURI)}
            />:<button onClick={() => this.cameraChequeChange()}>Add Cheque Photo</button>
            }
             <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              Police Verification 
            </FormLabel>
            <img src={this.state.policePhoto} width="20%" height="20%" border-radius="50%" style={{borderradius: "50%",position: "relative", left: "40%", paddingBottom: "10px" }}></img>
            {this.state.showPoliceModal == true ?
            <Camera
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isImageMirror={false}
              isFullScreen={true}
              idealResolution = {{width: 500, height: 500}}
              sizeFactor={1}
              onTakePhoto={(dataURI) => this.onTakePolicePhoto(dataURI)}
            />:<button onClick={() => this.cameraPoliceChange()}>Add Police Photo</button>
            }
             <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              Passbook Verification 
            </FormLabel>
            <img src={this.state.passbookPhoto} width="20%" height="20%" border-radius="50%" style={{borderradius: "50%",position: "relative", left: "40%", paddingBottom: "10px" }}></img>
            {this.state.showPassbookModal == true ?
            <Camera
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isImageMirror={false}
              isFullScreen={true}
              idealResolution = {{width: 500, height: 500}}
              sizeFactor={1}
              onTakePhoto={(dataURI) => this.onTakePassbookPhoto(dataURI)}
            />:<button onClick={() => this.cameraPassbookChange()}>Add Passbook Photo</button>
            }

            <Button
              type='submit'
              bg='red.500'
              fontSize='16px'
              color='white'
              fontWeight='normal'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "red.300",
              }}
              _active={{
                bg: "red.300",
              }}
              onClick={() => this.redirectToDashboard()}>
                
              Submit
            </Button>
            <Button
              type='submit'
              bg='green.500'
              fontSize='16px'
              color='white'
              fontWeight='normal'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "green.300",
              }}
              _active={{
                bg: "green.300",
              }}
              onClick={() => this.redirectToBank()}>
              Back
            </Button>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='0px'>
            <Text color='red.500' fontWeight='medium'>
              Already have an account?
              <Link
                onClick={()=>this.onClickSignIn()}
                color='red.500'
                as='span'
                ms='5px'
                href='#'
                fontWeight='bold'>
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <ToastContainer />
    </Flex>
  );
  }
}

export default Signupkyc;