// import React from "react";
import React, {Component} from "react";
import {
    Flex,
    Grid,
    Image,
    SimpleGrid,
    Text,
    Icon,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Button
  } from "@chakra-ui/react";
  import {FaRegBell} from "react-icons/fa";
  import axios from "axios";
  import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    WalletIcon,
  } from "components/Icons/Icons.js";
  import MiniStatistics from "./components/MiniStatistics";
  import Enquiery from "./components/Enquiery";
  import Reedem from "./components/Reedem"
  import Rating from "./components/Rating";
  import Record from "./components/Record";
  import BankAsService from "./components/BankAsService";
  import notification from "assets/svg/notifications.svg";
  

class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      mobileNumber: '',
      agentid:10295,
      notificationdata:[],
      showModal: false
    }
  }
  // Chakra color mode
  
 
  onChangeMobileNumber = (e) => {
    this.setState({
      // mobileNumber: e.target.value,
    });
  };

  cameraChange = (e) => {  
    this.setState({  
        showModal: true,
    })  
    var formData = new FormData();
    formData.append("agent_id", this.state.agentid);
    axios
    .post(localStorage.getItem("URL")+"notifications/history",  formData,{headers: {"Authorization" : `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTYxMjg2OH0.wled2v6EVDWa8Ee2lqwSR5yZFSDkJwcCcnAXG-EXmLc`} })
    .then(response => {
    console.log(response);
        return response;
    })
    .then(json => {
        if (json.data.status == "true") {
        console.log(json.data.notifications.data);
        this.setState({
            notificationdata: json.data.notifications.data, 
        });
        }
    })
    .catch(error => {
        alert("An Error Occured!" + error);
        // console.log(`${formData} ${error}`);
    });
   

  }

  modalClose() {  
    this.setState({  
        showModal: false,
    })  
  }

  redirectToCases = (e) =>{
    window.location.href = 'purity-ui-dashboard#/auth/pickups';
  }
  
  redirectToDashboard = (e) => {
     
  };

    render() {
        // const iconBoxInside = useColorModeValue("white", "white");
        
      return (
        <Flex flexDirection='column' align='center' justify='center' mr="5%" ml="5%" mb="30px" pt={{ base: "10px", md: "75px" }}>
          
          <Icon onClick={(e) => this.cameraChange()} as={FaRegBell} color='gray.500' width="7%" height="7%" style={{position: "relative", right: "40%", paddingBottom: "0px", paddingTop: "10px"}}></Icon>
          {/* <img src={notification} width="8%" height="8%" style={{position: "relative", right: "40%", paddingBottom: "0px", paddingTop: "10px"}}  onClick={cameraChange} ></img> */}
          
      <Grid>
      <Text fontWeight='bold'  fontSize='lg'  style={{position: "relative", marginTop:"50px"}} onClick={(e) => {this.cameraChange()}}>Hello,Pritesh</Text>
      </Grid>
      <SimpleGrid columns={{ sm: 2, md: 2, xl: 4 }} spacing='24px' marginTop="10px">
      
        <MiniStatistics
          title={"Cases"}
          pl={{ base: "120px", md: "75px" }}
          icon={<WalletIcon h={"24px"} w={"24px"} color="red.400" />}
          onClick={this.redirectToCases}
        />
        <Enquiery
          title={"Enquiery Form"}
        //   amount={"APP98723"}
        //   percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color="red.400" />}
        />
        <Rating
          title={"Rating"}
        //   amount={"APUY56789098"}
        //   percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color="red.400" />}
        />
        <Reedem
          title={"Reedem"}
        //   amount={"APST345"}
        //   percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color="red.400"  />}
        />
         <Record
          title={"Records"}
        //   amount={"APST345"}
        //   percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color="red.400"  />}
        />
         <BankAsService
          title={"Bank As Service"}
        //   amount={"APST345"}
        //   percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color="red.400"  />}
        />
      </SimpleGrid>
      <Modal  isOpen={this.state.showModal}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Notification</ModalHeader>
          <ModalCloseButton onClick={() => this.modalClose()}/>
          <ModalBody>
          {this.state.notificationdata.map((data,index) =>
            <Text>{data.notification}</Text>
          )}
           {this.state.notificationdata.map((dataone,index) =>
          //  {dataone.image != null ?
            <img src={`https://collectkart.docboyz.in/${dataone.image}`} width="30%" height="30%" style={{position: "relative", right: "1%", paddingTop: "10px"}}></img>
          //  : ''}
           
          )}
          
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => this.modalClose()}>
              Close
            </Button >
          </ModalFooter>
        </ModalContent>
      </Modal>
     
    </Flex>
      );
  }
}

export default Homepage;
