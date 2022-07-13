// import React from "react";
import React, {Component} from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';

import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import docboyz from "assets/img/docboyz.jpeg";

// const titleColor = useColorModeValue("teal.300", "teal.200");
// const textColor = useColorModeValue("gray.400", "white");

class OtpCheck extends Component {
  constructor(props){
    super(props)
    this.state = {
      otp: '',
      mobileNumber: localStorage.getItem("mobileNumber"),
      error: ''
    }
  }
  // Chakra color mode

  onChangeOTP = (e) => {
    this.setState({
      otp: e.target.value,
    });
  };

  resendCode = (value) => {
    var formData = new FormData();
      formData.append("mobile", value);
      
      axios
      .post(localStorage.getItem("URL")+"send-otp", formData)
      .then(response => {
        window.location.reload();
      })
      .then(json => {
        // if (json.data.success) {
          
        //   // console.log(json.data);
        // }
      })
      .catch(error => {
        alert("An Error Occured!" + error);
      });
  }

  redirectToDashboard = (e) => {
      // e.preventDefault();
      var formData = new FormData();
      formData.append("otp", this.state.otp);
      formData.append("mobile", this.state.mobileNumber);
      
      axios
      .post(localStorage.getItem("URL")+"otp-check-login", formData)
      .then(response => {
        return response;
      })
      .then(json => {
        if(json.data.status == 'success'){
          toast.success(json.data.message)
          setTimeout(() => {
            window.location.href = 'purity-ui-dashboard#/auth/homepage';
          }, 2000);
        }else if(json.data.status == 'true'){
          toast.warning(json.data.message)
          setTimeout(() => {
            window.location.href = 'purity-ui-dashboard#/auth/signup';
          }, 6000);
        }else{
          this.setState({
            error: json.data.message
          });
          toast.error(json.data.message);
        }
      })
      .catch(error => {
        alert("An Error Occured!" + error);
      });
  };

    render() {
      
      return (
        <Flex position='relative' mb='40px'>
          <Flex
            h={{ sm: "initial", md: "75vh", lg: "85vh" }}
            w='100%'
            maxW='1044px'
            mx='auto'
            justifyContent='space-between'
            mb='30px'
            pt={{ sm: "50px", md: "0px" }}>
            <Flex
              alignItems='center'
              justifyContent='start'
              style={{ userSelect: "none" }}
              w={{ base: "100%", md: "50%", lg: "42%" }}>
              <Flex
                direction='column'
                w='100%'
                background='transparent'
                p='48px'
                mt={{ md: "150px", lg: "80px" }}>
            
        
                {/* <Box
                  display={{ base: "none", md: "block" }}
                  overflowX='hidden'
                  h='100%'
                  w='40vw'
                  position='absolute'
                  center='0px'>
                  <Box
                    bgImage={DocBoyz}
                    w='9%'
                    h='10%'
                    bgSize='cover'
                    bgPosition='50%'
                    position='absolute'
                    borderBottomLeftRadius='20px'></Box>
                </Box>
                */}
                <img src={docboyz} width="40%" height="40%" style={{position: "relative", left: "30%", paddingBottom: "10px"}}></img>
                {/* <Heading color="red.500" textAlign='center' alignSelf='center' fontSize='36px' mb='10px'>
                  DocBoyz
                </Heading> */}
                <Text
                  mb='36px'
                  ms='4px'
                  color="red.500"
                  textAlign='center'
                  alignSelf='center'
                  fontWeight='bold'
                  fontSize='14px'>
                  Enter OTP sent to your mobile number.
                </Text>
                <FormControl>
                  <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                      OTP
                  </FormLabel>
                  <Input
                    borderRadius='15px'
                    mb='24px'
                    fontSize='sm'
                    type='text'
                    placeholder='Your OTP'
                    size='lg'
                    value={this.state.otp}
                    onChange={this.onChangeOTP}
                  />
                  {/* <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                    Password
                  </FormLabel>
                  <Input
                    borderRadius='15px'
                    mb='36px'
                    fontSize='sm'
                    type='password'
                    placeholder='Your password'
                    size='lg'
                  /> */}
                  {/* <FormControl display='flex' alignItems='center'>
                    <Switch id='remember-login' colorScheme='teal' me='10px' />
                    <FormLabel
                      htmlFor='remember-login'
                      mb='0'
                      ms='1'
                      fontWeight='normal'>
                      Remember me
                    </FormLabel>
                  </FormControl> */}
                  <Button
                    fontSize='18px'
                    type='submit'
                    bg='red.500'
                    w='100%'
                    h='45'
                    mb='20px'
                    color='white'
                    mt='20px'
                    _hover={{
                      bg: "red.500",
                    }}
                    _active={{
                      bg: "red.500",
                    }}
                    onClick={() => this.redirectToDashboard()}>
                    Submit
                  </Button>
                </FormControl>
                <Flex
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                  maxW='100%'
                  mt='0px'>
                  <Text fontWeight='medium'>
                    Didnt receive a code?
                    <Link as='span' ms='5px' fontWeight='bold' onClick={() => resendCode(this.state.mobileNumber)}>
                      Resend Code
                    </Link>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Box
              display={{ base: "none", md: "block" }}
              overflowX='hidden'
              h='100%'
              w='40vw'
              position='absolute'
              right='0px'>
              <Box
                bgImage={signInImage}
                w='100%'
                h='100%'
                bgSize='cover'
                bgPosition='50%'
                position='absolute'
                borderBottomLeftRadius='20px'></Box>
            </Box>
          </Flex>
          <ToastContainer />
        </Flex>
      );
  }
}

export default OtpCheck;
