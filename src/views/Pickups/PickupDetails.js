// import React from "react";
import React, {Component} from "react";
import {Collapse} from 'react-collapse';
import Card from "components/Card/Card.js";
import axios from "axios";
import { FaMicrophone,FaMailBulk,FaPhoneAlt,FaHome,FaPlaceOfWorship,FaArrowAltCircleDown} from "react-icons/fa";
import {
    Flex,
    Grid,
    Image,
    SimpleGrid,
    Text,
    Icon,
    Box,
    Button,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    Divider
   
    // Lorem 
  } from "@chakra-ui/react";
  // assets
  // Custom icons
  import personcircleauth from "assets/svg/person-circle-auth.svg";
  

class PickupDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      pickup_id: localStorage.getItem("loan_id"),
      agentid: localStorage.getItem("agent_id"),
      address: localStorage.getItem("address"),
      company_name: localStorage.getItem("company_name"),
      name:"",
      id:"",
      activitydetails:[],
      activityquetions:[],
    //   pincode:"",
    //   dob:"",
    //   city:"",
    //   state:"",
    //   mobile:"",
    indexStored: 0,
      showModal: false,
      closeModel: false,
      otpModal: false,
      activityModel: false
    }
  }
  // Chakra color mode

  onChangeMobileNumber = (e) => {
    this.setState({
      // mobileNumber: e.target.value,
    });
  };
  cameraChange() {  
    this.setState({  
        showModal: true,
    })  
  }
  modalClose(){
    this.setState({
        showModal: false,
    })
  } 
  otpModel(){
    this.setState({
        showModal: false,
        otpModal: true
    })
  } 
  quetionModel(){
    this.setState({
        otpModal: false,
        activityModel: true
    })
  } 
  activityquestion = (itemValue) => {
    var formData = new FormData();
    formData.append("activity_id", itemValue);
    console.log(itemValue);
    // formData.append("agent_id", this.state.agentid);
    axios
    .post(localStorage.getItem("URL")+"activity_quetion",  formData,{headers: {"Authorization" : `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTYxMjg2OH0.wled2v6EVDWa8Ee2lqwSR5yZFSDkJwcCcnAXG-EXmLc`} })
    .then(response => {
    console.log(response);
        return response;
    })
    .then(json => {
        if (json.data.status == "success") {
        console.log(json.data.data);
        this.setState({
          activityquetions: json.data.data, 
        });
        }
    })
    .catch(error => {
        alert("An Error Occured!" + error);
        // console.log(`${formData} ${error}`);

    });
}
  
    componentDidMount = () => {
        var formData = new FormData();
        formData.append("pickup_id", this.state.pickup_id);
        formData.append("agent_id", this.state.agentid);
        axios
        .post(localStorage.getItem("URL")+"agent_pickup_activity",  formData,{headers: {"Authorization" : `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTYxMjg2OH0.wled2v6EVDWa8Ee2lqwSR5yZFSDkJwcCcnAXG-EXmLc`} })
        .then(response => {
        console.log(response);
            return response;
        })
        .then(json => {
            if (json.data.success == "successful") {
            console.log(json.data.data);
            this.setState({
                activitydetails: json.data.data, 
            });
            }
        })
        .catch(error => {
            alert("An Error Occured!" + error);
            // console.log(`${formData} ${error}`);
        });
        localStorage.setItem("loan_id", "");
        localStorage.setItem("agent_id", "");
        localStorage.setItem("address", "");
        localStorage.setItem("company_name", "");
    }

    render() {
        // const iconBoxInside = useColorModeValue("white", "white");

      return (
    <Flex flexDirection='column' align='center' justify='center' pt={{ base: "10px", md: "75px" }}>

        <Grid>
            <Text fontWeight='bold'  fontSize='lg'  style={{position: "relative", right: "70%", marginTop:"50px"}}>Pritesh Mehetre</Text>
        </Grid>
        <Card background="#fffefe"  marginTop="10px" w="90%">
        <Flex align="end" justifyContent="end">
                    <Icon
                      as={FaMailBulk}
                      color='green.500'
                      fontSize='md'
                      style={{position:"relative", top:"12%"}}
                      onClick={(e)=>this.openReasonModal(data.loan_master_id)}
                      me='6px'></Icon>
                    <Icon
                      as={FaPhoneAlt}
                      color='red.500'
                      fontSize='md'
                      ml="3%"
                      style={{position:"relative", top:"12%"}}
                      me='6px'></Icon>
                    <Icon
                    as={FaMicrophone}
                    color='red.500'
                    fontSize='md'
                    ml="3%"
                    style={{position:"relative", top:"12%"}}
                    me='6px'></Icon>
        </Flex>
        <Text fontWeight='bold'  fontSize='lg'  style={{position: "relative", right: "10px", marginTop:"15px"}}>{this.state.company_name}</Text>
        <Flex align="left" justifyContent="left">
                    <Icon
                      as={FaHome}
                      color='gray.500'
                      fontSize='xl'
                      style={{position:"relative", top:"12%"}}
                      onClick={(e)=>this.openReasonModal(data.loan_master_id)}
                      me='6px'></Icon>
                      <Text>{this.state.address}</Text>
                    
        </Flex>
        <Flex align="left" justifyContent="left">
                    <Icon
                      as={FaPlaceOfWorship}
                      color='gray.500'
                      fontSize='xl'
                      style={{position:"relative", top:"12%"}}
                      onClick={(e)=>this.openReasonModal(data.loan_master_id)}
                      me='6px'></Icon>
                      <Text>Office NO - 105,Zapfin Teknology Private Limmited, 411006</Text>
                    
        </Flex>
        
        
        </Card>
        {this.state.activitydetails.map((data,index) =>
        <Card background="#fffefe"  marginTop="10px" h="100%" w="90%">
        <Flex align="left" justifyContent="left">
            <Text fontWeight='bold'>{data.name}</Text>
                    <Icon
                      as={FaArrowAltCircleDown}
                      color='gray.500'
                      fontSize='xl'
                      style={{position:"relative", top:"12%",left:"8%"}}
                      onClick={(e) => {this.cameraChange(); this.activityquestion(data.activity_id); this.setState({ indexStored: index }); }}
                      me='6px'></Icon>
                     
                    
        </Flex>
        {this.state.activityModel == true && this.state.indexStored === index ?
        
        <Card background="#fffefe"  marginTop="10px" h="100%" w="90%">
          <OrderedList>
          {this.state.activityquetions.map((questiondata,index) =>
              <ListItem>{questiondata.question}<Divider color='red.500' /></ListItem>
              
              )}
              </OrderedList>
        </Card>
        :<div></div>
        
        }
        </Card>
        
        )}
       
        <Modal  isOpen={this.state.showModal}>
        <ModalOverlay />
        <ModalContent w="80%">
          <ModalHeader>Location</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Please select the location</Text>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => this.modalClose()}>
              Close
            </Button >
            <Button variant='ghost' onClick={() => this.otpModel()}>Home</Button>
            <Button variant='ghost' onClick={() => this.otpModel()}>Office</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal width="60%" isOpen={this.state.otpModal}>
        <ModalOverlay />
        <ModalContent w="80%">
          <ModalHeader>OTP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder='Please Enter Otp'/>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' onClick={() => this.quetionModel()}>Verify Otp</Button>
            <Button variant='ghost'>Resend Otp</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    
        
    </Flex>
   
        
  
      );
  }
}

export default PickupDetails;
