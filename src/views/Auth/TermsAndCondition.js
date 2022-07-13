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
  

class TermsAndCondition extends Component {
  constructor(props){
    super(props)
    this.state = {
     termsandconition:[],
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
            .get(localStorage.getItem("URL")+"terms-conditions", { headers: {"Authorization" : `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTYxMjg2OH0.wled2v6EVDWa8Ee2lqwSR5yZFSDkJwcCcnAXG-EXmLc`} })
            .then(response => {
            console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.status == "success") {
                console.log(json.data.terms_and_conditions);
                this.setState({
                    termsandconition:json.data.terms_and_conditions
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
          <Card background="white" >
           
          <Text fontWeight='bold'  color='red.500' fontSize='xl'  style={{position: "relative", left: "10px", marginTop:"10px"}}>Terms & Condition</Text>
          
          {this.state.termsandconition.map((data,index) =>
           <Text fontWeight='normal'  fontSize='sm'  style={{position: "relative", left: "10px", marginTop:"10px"}}>{data.term_or_condition}</Text>
           
          )}
         
         
          </Card>
        </Flex>
      );
  }
}

export default TermsAndCondition;
