
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
  Radio,
  RadioGroup
} from "@chakra-ui/react";
// Assets
import dateFormat from 'dateformat';
import docboyz from "assets/img/docboyz.jpeg";
import avatar1 from "assets/img/avatars/avatar1.png";
import DatePicker from 'react-datepicker';  
import "react-datepicker/dist/react-datepicker.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Camera, FACING_MODES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class SignUp extends Component {
  constructor (props) {  
    super(props)  
    this.state = {  
      startDate: new Date()  ,
      showModal: false,
      mobileNumber: localStorage.getItem("mobileNumber"),
      imageUrl: avatar1,
      name: ''
    };  
    this.handleChange = this.handleChange.bind(this); 
  }  

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
    localStorage.setItem("name", e.target.value);
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
    localStorage.setItem("email", e.target.value);
  }

  onChangeMobileNumber = (e) => {
    this.setState({
      mobileNumber: e.target.value
    });
    localStorage.setItem("mobileNumber", e.target.value);
  }

  onChangeGender = (e) => {
    this.setState({
      gender: e
    });
    localStorage.setItem("gender", e);
  }

  handleChange(date) {  
    this.setState({  
      startDate: date , 
    })  
    localStorage.setItem("dob", dateFormat(date, "yyyy-m-d"));
  }  
  cameraChange() {  
    this.setState({  
      showModal: true,
    })  
  } 

  onClickSignIn = (e) => {
    window.location.href = 'purity-ui-dashboard#/auth/signin';
  }
  
  redirectToNextPage = (e) => {
    window.location.href = 'purity-ui-dashboard#/auth/signupresidence'
  };

  onTakePhoto = (dataURI) => {
    this.setState({
      imageUrl: dataURI,
      showModal: false
    });
    localStorage.setItem("profilePhoto", dataURI);
  }

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
          fontSize='lg'
          color='red.500'
          fontWeight='bold'
          mt='10px'
          mb='10px'
          w={{ base: "90%", sm: "60%", lg: "10%", xl: "30%" }}>
          Registration
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
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold' style={{textAlign: "center"}}>
              User Information
            </FormLabel>
            <img src={this.state.imageUrl} width="40%" height="40%" style={{position: "relative", left: "30%", marginBottom: "10px", borderRadius: "75px"}}></img>
            {this.state.showModal == true ?
            <Camera
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isImageMirror={false}
              isFullScreen={true}
              idealResolution = {{width: 500, height: 500}}
              sizeFactor={1}
              onTakePhoto={(dataURI) => this.onTakePhoto(dataURI)}
            />:<Button colorScheme='red' borderColor='#ff0000' color='#ff0000' variant='outline' fontSize='xs' p='8px 32px'onClick={() => this.cameraChange()}>Upload a Photo</Button>
            }
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              Full Name
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your full name'
              mb='24px'
              size='lg'
              onChange={this.onChangeName}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              Email
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='email'
              placeholder='Your email address'
              mb='24px'
              size='lg'
              onChange={this.onChangeEmail}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              Mobile
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your mobile number'
              value={this.state.mobileNumber}
              mb='24px'
              size='lg'
              onChange={this.onChangeMobileNumber}
            />
            {/* <FormControl display='flex' alignItems='center' mb='24px'> */}
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              Enter DOB
            </FormLabel>
              {/* <div className="form-group">   */}
                <DatePicker 
                  padding-bottom= '12px'
                  fontSize='lm'
                  ms='4px'
                  borderRadius='15px' 
                  customInput={<Input mb='24px' style={{borderRadius: "15px", height: "3rem"}}/>}
                  selected={ this.state.startDate }  
                  onChange={ this.handleChange }  
                  name="startDate"  
                  dateFormat="MM/dd/yyyy"  
                />  
             {/* <button className="btn btn-primary">Show Date</button>  
            </div> */}
            {/* </FormControl> */}
            <RadioGroup mb='10px' onChange={this.onChangeGender}>
              <Radio value="Male" name="gender" mr='10px'>Male</Radio>
              <Radio value="Female" name="gender">Female</Radio>
            </RadioGroup>
            {/* <input type="radio" value="Other" name="gender" /> Other */}
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
              onClick={() => this.redirectToNextPage()}>
                
              Next
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
    </Flex>
  );
  }
}

export default SignUp;