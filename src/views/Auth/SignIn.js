// import React from "react";
import React, {Component} from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

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


class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      mobileNumber: '',
    }
  }
  // Chakra color mode

  onChangeMobileNumber = (e) => {
    this.setState({
      mobileNumber: e.target.value,
    });
    localStorage.setItem("mobileNumber", e.target.value);
  };

  onClickSignUp = (e) => {
    window.location.href = 'purity-ui-dashboard#/auth/signup';
  }

  
  redirectToDashboard = (e) => {
      // e.preventDefault();
      var formData = new FormData();
      formData.append("mobile", this.state.mobileNumber);
      
      axios
      .post(localStorage.getItem("URL")+"send-otp", formData)
      .then(response => {
        window.location.href = 'purity-ui-dashboard#/auth/otpcheck';
      })
      .then(json => {
        // if (json.data.success) {
          
        //   // console.log(json.data);
        // }
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
            
                <img src={docboyz} width="40%" height="40%" style={{position: "relative", left: "30%", paddingBottom: "10px"}}></img>
                
                <Text
                  mb='36px'
                  ms='4px'
                  color="grey"
                  textAlign='center'
                  alignSelf='center'
                  fontWeight='bold'
                  fontSize='14px'>
                  Enter your Mobile Number to sign in
                </Text>
                <FormControl>
                  <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                    Mobile Number
                  </FormLabel>
                  <Input
                    borderRadius='15px'
                    mb='24px'
                    fontSize='sm'
                    type='text'
                    placeholder='Your mobile number'
                    size='lg'
                    value={this.state.mobileNumber}
                    onChange={this.onChangeMobileNumber}
                  />
                  
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
                    Sign In
                  </Button>
                </FormControl>
                <Flex
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                  maxW='100%'
                  mt='0px'>
                  <Text fontWeight='medium'>
                    Don't have an account?
                    <Link onClick={()=>this.onClickSignUp()} as='span' ms='5px' fontWeight='bold'>
                      Sign Up
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
        </Flex>
      );
  }
}

export default SignIn;
