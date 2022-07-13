// import React from "react";
import React, {Component} from "react";
import Card from "components/Card/Card.js";
import axios from "axios";
import docboyz from "assets/img/docboyz.jpeg";
import CardBody from "components/Card/CardBody.js";
import {
    Flex,
    Grid,
    Image,
    SimpleGrid,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  // assets
  // Custom icons
  import personcircleauth from "assets/svg/person-circle-auth.svg";
  

class Icard extends Component {
  constructor(props){
    super(props)
    this.state = {
      agentid: "",
      name:"",
      address:"",
      pincode:"",
      dob:"",
      city:"",
      state:"",
      mobile:"",
      profile_pic: ""
    }
  }
  // Chakra color mode

  onChangeMobileNumber = (e) => {
    this.setState({
      // mobileNumber: e.target.value,
    });
  };

  
        componentDidMount = () => {
            // var formData = new FormData();
            // formData.append("mobile", this.state.mobileNumber);
            axios
            .get(localStorage.getItem("URL")+"view-profile", { headers: {"Authorization" : `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTYxMjg2OH0.wled2v6EVDWa8Ee2lqwSR5yZFSDkJwcCcnAXG-EXmLc`} })
            .then(response => {
            console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.status == "success") {
                console.log(json.data.agent.address1);
                this.setState({
                    agentid: json.data.agent.id,
                    name: json.data.agent.name,
                    address: json.data.agent.address1,
                    pincode: json.data.agent.pincode,
                    dob: json.data.agent.dob,
                    mobile: json.data.agent.mobile,
                    city: json.data.agent.city,
                    state: json.data.agent.state,
                    profile_pic: json.data.agent.profile_pic
                });
                }
            })
            .catch(error => {
                alert("An Error Occured!" + error);
                // console.log(`${formData} ${error}`);

            });
        }

    render() {
        // const iconBoxInside = useColorModeValue("white", "white");

      return (
        <Flex align='center' justifySelf='center' mt="40px">
          <Card background="#d7d1cf" h="700px" mr="5%" ml="5%">
              <img src={personcircleauth} width="60%" height="60%" style={{position: "relative", left: "20%", paddingBottom: "10px"}}></img>
          <Text fontWeight='bold'  fontSize='xl'  style={{position: "relative", left: "10px", marginTop:"50px"}}>Agent Id: {this.state.agentid}</Text>
          <Text fontWeight='bold'  fontSize='lg'  style={{position: "relative", left: "10px", marginTop:"10px"}}>Agent Name: {this.state.name}</Text>
          <Text fontWeight='bold'  fontSize='lg'  style={{position: "relative", left: "10px", marginTop:"10px"}}>Address: {this.state.address}</Text>
          <Text fontWeight='bold'  fontSize='lg'  style={{position: "relative", left: "10px", marginTop:"10px"}}>Pincode: {this.state.pincode}</Text>
          <Text fontWeight='bold'  fontSize='lg'  style={{position: "relative", left: "10px", marginTop:"10px"}}>City: {this.state.city}</Text>
          <Text fontWeight='bold'  fontSize='lg'  style={{position: "relative", left: "10px", marginTop:"10px"}}>State: {this.state.state}</Text>
          <Text fontWeight='bold'  fontSize='lg'  style={{position: "relative", left: "10px", marginTop:"10px"}}>Date Of Birth: {this.state.dob}</Text>
          <Text fontWeight='bold'  fontSize='lg'  style={{position: "relative", left: "10px", marginTop:"10px"}}>Mobile: {this.state.mobile}</Text>
          </Card>
        </Flex>
      );
  }
}

export default Icard;
