
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
  RadioGroup,
  Radio,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import docboyz from "assets/img/docboyz.jpeg";
import "react-datepicker/dist/react-datepicker.css";  
import 'bootstrap/dist/css/bootstrap.min.css'; 

class SignupBank extends Component {
  constructor (props) {  
    super(props)  
    this.state = {  
      startDate: new Date() ,
      bankName: '',
      accNumber: '',
      ifsc: '',
      panNumber: '',
      accType: ''
    }; 
  }  

  handleChange(date) {  
    this.setState({  
      startDate: date  
    })  
  }  
  
  onChangeBankName = (e) => {
    this.setState({  
      bankName: e.target.value  
    }) 
    localStorage.setItem("bankName", e.target.value);
  }
  
  onChangeIfsc = (e) => {
    this.setState({  
      ifsc: e.target.value  
    }) 
    localStorage.setItem("ifsc", e.target.value);
  }
  
  onChangeAccNumber = (e) => {
    this.setState({  
      accNumber: e.target.value  
    }) 
    localStorage.setItem("accNumber", e.target.value);
  }
  
  onChangePanNumber = (e) => {
    this.setState({  
      panNumber: e.target.value  
    }) 
    localStorage.setItem("panNumber", e.target.value);
  }
  
  onChangeAccType = (e) => {
    this.setState({  
      accType: e  
    }) 
    localStorage.setItem("accType", e);
  }

  redirectToKyc = (e) => {
      window.location.href = 'purity-ui-dashboard#/auth/signupkyc'
  };

  redirectToSecound = (e) => {
    window.location.href = 'purity-ui-dashboard#/auth/signupresidence'
  };

  onClickSignIn = (e) => {
    window.location.href = 'purity-ui-dashboard#/auth/signin';
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
          fontSize='md'
          color='red.500'
          fontWeight='bold'
          mt='10px'
          mb='10px'
          w={{ base: "90%", sm: "60%", lg: "10%", xl: "30%" }}>
         Bank Details
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
            Bank Name
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your Bank Name'
              mb='24px'
              size='lg'
              onChange={this.onChangeBankName}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
            Account Number
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your Account Number'
              mb='24px'
              size='lg'
              onChange={this.onChangeAccNumber}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
             IFSC Code
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Bank IFSC Code'
              mb='24px'
              size='lg'
              onChange={this.onChangeIfsc}
            />
            <RadioGroup mb='10px' onChange={this.onChangeAccType}>
              <Radio value="current" name="accountType" mr='10px'>Current</Radio>
              <Radio value="saving" name="accountType">Saving</Radio>
            </RadioGroup>
            {/* <FormControl display='flex' alignItems='center' mb='24px'> */}
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
             PAN Card Number
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your PAN Card Number'
              mb='24px'
              size='lg'
              onChange={this.onChangePanNumber}
            />
              
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
              onClick={() => this.redirectToKyc()}>
              Next
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
              onClick={() => this.redirectToSecound()}>
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
    </Flex>
  );
  }
}

export default SignupBank;