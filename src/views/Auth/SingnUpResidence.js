import React, {Component} from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Select,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import docboyz from "assets/img/docboyz.jpeg";
import DatePicker from 'react-datepicker';  
import "react-datepicker/dist/react-datepicker.css";  
import addDays from 'date-fns/addDays'  
import 'bootstrap/dist/css/bootstrap.min.css';  
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class SingnUpResidence extends Component {
  constructor (props) {  
    super(props)  
    this.state = {  
      startDate: new Date(),
      selectedState: '',
      selectedCity: '',
      states: [],
      cities: [],
      pincodes: [],
      address: '',
      pincode: ''
    };   
  }  

  onChangeAddress = (e) => {
    this.setState({  
      address: e.target.value  
    }) 
    localStorage.setItem("address", e.target.value);
  }
  
  redirectToNextPage = (e) => {
      window.location.href = 'purity-ui-dashboard#/auth/signupbank'
  };

  redirectToSignup = (e) => {
      window.location.href = 'purity-ui-dashboard#/auth/signup'
  };

  componentDidMount = (e) => {
    
    axios
    .get(localStorage.getItem("URL")+"getstates")
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.status == "success") {
        this.setState({
          states: json.data.agent
        });
      }
    })
    .catch(error => {
      alert("An Error Occured!" + error);
    });
  };

  onChangeState = (e) => {
    // console.log(e.target.value);
    this.setState({
      selectedState: e.target.value
    });
    localStorage.setItem("state", e.target.value);
    var formData = new FormData();
    formData.append("state", e.target.value);
    
    axios
    .post(localStorage.getItem("URL")+"getcities", formData)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.status == "success") {
        this.setState({
          cities: json.data.agent
        });
      }
    })
    .catch(error => {
      alert("An Error Occured!" + error);
    });
  }

  onChangeCity = (e) => {
    // console.log(e.target.value);
    this.setState({
      selectedCity: e.target.value
    });
    localStorage.setItem("city", e.target.value);
    var formData = new FormData();
    formData.append("city", e.target.value);
    formData.append("state", this.state.selectedState);
    
    axios
    .post(localStorage.getItem("URL")+"getpincodes", formData)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.status == "success") {
        this.setState({
          pincodes: json.data.agent
        });
      }
    })
    .catch(error => {
      alert("An Error Occured!" + error);
    });
  }

  onClickSignIn = (e) => {
    window.location.href = 'purity-ui-dashboard#/auth/signin';
  }

  onChangePincode = (e) => {
    this.setState({
      pincode: e.target.value
    });
    localStorage.setItem("pincode", e.target.value);
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
         Residence Details
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
              Address
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your Address'
              mb='24px'
              size='lg'
              onChange={this.onChangeAddress}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              State
            </FormLabel>
            <Select
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              mb='24px'
              size='lg'
              onChange={this.onChangeState}
            >
              {this.state.states.map((data, index) =>
                <option value={data.State}>{data.State}</option>
              )}
            </Select>
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
              City
            </FormLabel>
            <Select
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              mb='24px'
              size='lg'
              onChange={this.onChangeCity}
            >
              {this.state.cities.map((data, index) =>
                <option value={data.City}>{data.City}</option>
              )}
            </Select>
            {/* <FormControl display='flex' alignItems='center' mb='24px'> */}
            <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
             Pincode
            </FormLabel>
            <Select
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              mb='24px'
              size='lg'
              onChange={this.onChangePincode}
            >
              {this.state.pincodes.map((data, index) =>
                <option value={data.Pincode}>{data.Pincode}</option>
              )}
            </Select>
              
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
              onClick={() => this.redirectToSignup()}>
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

export default SingnUpResidence;