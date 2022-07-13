// import React from "react";
import React, {Component} from "react";
import axios from "axios";
import {
  Flex,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  List,
  ListIcon,
  ListItem,
  Tag,
  Icon,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify'; 
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { BsArrowLeft } from "react-icons/bs";
import DatePicker from 'react-datepicker';  
import "react-datepicker/dist/react-datepicker.css";  
import { MdMessage, MdAddIcCall, MdAddCircle } from "react-icons/md";
import { FaUserAlt, FaHome, FaAddressBook, FaBuilding } from "react-icons/fa";
import {Camera, FACING_MODES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import TimePicker from 'react-time-picker';
import dateFormat from 'dateformat';

class Pickups extends Component {
  constructor(props){
    super(props)
    this.state = {
      pickups: [],
      acceptedPickups: [],
      isOpen: false,
      isOpenAccept: false,
      isOpenReason: false,
      declineActivities: [],
      acceptActivities: [],
      selectedAcceptActivities: '',
      acceptedActivityId: '',
      declinedActivityId: '',
      selectedDeclineActivities: '',
      isReasonOpen: false,
      reasonCategory: '',
      showCamera: false,
      imageUrl: '',
      startDate: new Date(),
      time: "10:00",
      heading: '',
      reasonFile: '',
      chatText: '',
      loan_id: '',
      company_id: '',
      chatList: []
    }
  }

  onChangeChat = (e) => {
    this.setState({  
      chatText: e.target.value , 
    })
  }

  handleChange = (date) => {  
    this.setState({  
      startDate: date 
    })  
  }

  cameraChange = (e) => {
    this.setState({
      showCamera: true
    });
  }

  submitReason = (category, heading) => {
    this.setState({
      isReasonOpen: true,
      isOpenReason: false,
      reasonCategory: category,
      heading: heading
    });

    var formData = new FormData();
    formData.append("loan_id", this.state.loan_id);
    
    axios
    .post(localStorage.getItem("URL")+"chat/list", formData, { headers: {"Authorization" : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTU5MzEyNn0.NfVRkB31G2ON3hfqRqjRLW96DfCdqvPTjHVmW5BVUEo'} })
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.status == "success") {
        console.log(json.data.chats);
        this.setState({
          chatList: json.data.chats
        });
      }else{
        toast.warning("An error occurred");
      }
    })
    .catch(error => {
      alert("An Error Occured!" + error);
    });
  }

  openModal = (id) => { 
    this.setState({ 
      isOpen: true,
      declinedActivityId: id
    });
    var formData = new FormData();
    formData.append("agent_id", 11175);
    formData.append("pickup_id", id);
    
    axios
    .post(localStorage.getItem("URL")+"agent_pickup_activity", formData, { headers: {"Authorization" : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTU5MzEyNn0.NfVRkB31G2ON3hfqRqjRLW96DfCdqvPTjHVmW5BVUEo'} })
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success == "successful") {
        this.setState({
          declineActivities: json.data.data
        });
      }
    })
    .catch(error => {
      alert("An Error Occured!" + error);
    });
  }

  openAcceptModal = (id) => { 
    this.setState({ 
      isOpenAccept: true,
      acceptedActivityId: id
    });
    var formData = new FormData();
    // formData.append("agent_id", 11175);
    formData.append("pickup_id", id);
      
    axios
    .post(localStorage.getItem("URL")+"activity_assignPickupactivity", formData, { headers: {"Authorization" : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTU5MzEyNn0.NfVRkB31G2ON3hfqRqjRLW96DfCdqvPTjHVmW5BVUEo'} })
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data) {
        this.setState({
          acceptActivities: json.data
        });
      }
    })
    .catch(error => {
      alert("An Error Occured!" + error);
    });
  }

  acceptedActivity = (activity_id) => {
    if(this.state.selectedAcceptActivities == ''){
      this.setState({
        selectedAcceptActivities: activity_id
      });
    }else{
      this.setState({
        selectedAcceptActivities: this.state.selectedAcceptActivities+','+activity_id
      });
    }
  }
  
  declinedActivity = (activity_id) => {
    if(this.state.selectedDeclineActivities == ''){
      this.setState({
        selectedDeclineActivities: activity_id
      });
    }else{
      this.setState({
        selectedDeclineActivities: this.state.selectedDeclineActivities+','+activity_id
      });
    }
  }

  acceptModal = (e) => {
    var formData = new FormData();
    formData.append("agent_id", 11175);
    formData.append("pickup_id", this.state.acceptedActivityId);
    formData.append("activity_id", this.state.selectedAcceptActivities);
      
    axios
    .post(localStorage.getItem("URL")+"activity_add", formData, { headers: {"Authorization" : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTU5MzEyNn0.NfVRkB31G2ON3hfqRqjRLW96DfCdqvPTjHVmW5BVUEo'} })
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success == "successful") {
        toast.success("Activity Added Successfully");
      }else{
        toast.warning("An Error Occurred");
      }
    })
    .catch(error => {
      toast.warning("An Error Occurred");
    });
    this.setState({ 
      isOpenAccept: false,
      selectedAcceptActivities: '',
      acceptedActivityId: '' 
    });
  }

  declineModal = (e) => {
    var formData = new FormData();
    formData.append("agent_id", 11175);
    formData.append("pickup_id", this.state.declinedActivityId);
    formData.append("activity_id", this.state.selectedDeclineActivities);
      
    axios
    .post(localStorage.getItem("URL")+"pickups/decline", formData, { headers: {"Authorization" : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTU5MzEyNn0.NfVRkB31G2ON3hfqRqjRLW96DfCdqvPTjHVmW5BVUEo'} })
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.status == "success") {
        toast.success(json.data.message);
      }else{
        toast.warning("An Error Occurred");
      }
    })
    .catch(error => {
      toast.warning("An Error Occurred");
    });
    this.setState({ 
      isOpen: false,
      selectedDeclineActivities: '',
      declinedActivityId: '' 
    });
  }

  openReasonModal = (loan_id, company_id) => {
    this.setState({ 
      isOpenReason: true,
      loan_id: loan_id,
      company_id: company_id
    });
  }
  closeModal = () => this.setState({ isOpen: false });
  closeReason = () => {
    this.setState({ 
      isReasonOpen: false,
      reasonCategory: '' ,
      showCamera: false,
      imageUrl: '',
      chatText: ''
    });
  }
  closeAcceptModal = () => {
    this.setState({ 
      isOpenAccept: false,
      acceptedActivityId: ''
    });
  }
  closeReasonModal = () => this.setState({ isOpenReason: false });

  getUnique = (arr, index) => {

    const unique = arr
         .map(e => e[index])
  
         // store the keys of the unique objects
         .map((e, i, final) => final.indexOf(e) === i && i)
    
         // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);      
  
     return unique;
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

  onTakePhoto = (dataURI) => {
    this.setState({
      imageUrl: dataURI,
      showModal: false,
      showCamera: false,
      reasonFile: this.dataURLtoFile(dataURI, `${Math.random(10)}.jpg`),
    });
  }

  onTimeChange = (e) => {
    this.setState({
      time: e
    });
  }
    
  componentDidMount = (e) => {
      // e.preventDefault();
      var formData = new FormData();
      formData.append("agent_id", 11175);
      
      axios
      .post(localStorage.getItem("URL")+"avaiable_pickups", formData)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.status == "success") {
          this.setState({
            pickups: this.getUnique(json.data.available_pickups[0],'loan_master_id'),
            acceptedPickups: this.getUnique(json.data.accepted_pickups,'loan_master_id')
          });
        }
      })
      .catch(error => {
        alert("An Error Occured!" + error);
      });
  };

  sendReason = (category) => {
    var formData = new FormData();
    if(category == 'chat'){
      formData.append("loan_id", this.state.loan_id);
      formData.append("company_id", this.state.company_id);
      formData.append("message", this.state.chatText);
    }else if(category == 'camera'){
      formData.append('loan_id', this.state.loan_id);
      formData.append('company_id', this.state.company_id);
      formData.append('message', 'hii');
      formData.append('is_image', this.state.reasonFile);
    }else if(category == 'date'){
      formData.append('loan_id', this.state.loan_id);
      formData.append('company_id', this.state.company_id);
      formData.append('message', 'Check date time');
      formData.append('is_ptp_date', dateFormat(this.state.startDate, "yyyy-m-d"));
      formData.append('is_ptp_time', this.state.time);
    }
      axios
      .post(localStorage.getItem("URL")+"chat/store", formData, { headers: {"Authorization" : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZ2VudF91dWlkIjoiWW1oaFozbGhjMmh5YVdoMVltRnNaVUJuYldGcGJDNWpiMjA9IiwiZXhwaXJlc19pbiI6MTY1OTU5MzEyNn0.NfVRkB31G2ON3hfqRqjRLW96DfCdqvPTjHVmW5BVUEo'} })
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.status == "success") {
          toast.success(json.data.message);
        }else{
          toast.warning("An error occurred");
        }
      })
      .catch(error => {
        alert("An Error Occured!" + error);
      });
      this.setState({isReasonOpen: false, imageUrl: '', chatText: ''});
  }

  redirectToDetails = (loan_id, agent_id, address, company_name) => {
    window.location.href = 'purity-ui-dashboard#/auth/pickupdetails';
    localStorage.setItem("loan_id", loan_id);
    localStorage.setItem("agent_id", agent_id);
    localStorage.setItem("address", address);
    localStorage.setItem("company_name", company_name);
  }

  redirectToHomePage = () => {
    window.location.href = 'purity-ui-dashboard#/auth/homepage';
  }

  render() {

    return (
      <Flex
      direction='column'
      align='center'
      justifySelf='center'
      overflow='hidden'>
      <Flex style={{position:"relative", right:"28%"}}>
        <Button
          p='0px'
          variant='no-hover'
          bg='transparent'
          onClick={this.redirectToHomePage}
          my={{ sm: "1.5rem", lg: "0px" }}>
            <Icon
              as={BsArrowLeft}
              w='20px'
              h='20px'
              fontSize='2xl'
              transition='all .5s ease'
              mx='.3rem'
              cursor='pointer'
              _hover={{ transform: "translateX(20%)" }}
            />
          <Text
            fontSize='md'
            color="black"
            fontWeight='bold'
            cursor='pointer'
            transition='all .5s ease'
            my={{ sm: "1.5rem", lg: "0px" }}
            _hover={{ me: "4px" }}>
            Pickups
          </Text>
        </Button>
      </Flex>

      <Modal isOpen={this.state.isOpen} onClose={this.closeModal}>
        <ModalOverlay />
        <ModalContent w="80%">
          <ModalHeader>Select Activity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              {this.state.declineActivities.map((data, index) =>
                <Text key={index} as="span">
                    <Checkbox size='md' colorScheme='green' onChange={(e) => this.declinedActivity(data.activity_id)}>
                      {data.name}
                    </Checkbox>
                    <br/>
                </Text>
              )}
          </ModalBody>
          <ModalFooter align="center" justifyContent="center">
          <Button colorScheme='red' mr={3} onClick={this.declineModal}>
            Confirm
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={this.state.isOpenAccept} onClose={this.closeAcceptModal}>
        <ModalOverlay />
        <ModalContent w="80%">
          <ModalHeader>Select Activity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              {this.state.acceptActivities.map((data, index) =>
                <Text key={index} as="span">
                  <Checkbox size='md' colorScheme='green' onChange={(e) => this.acceptedActivity(data.activity_id)}>
                    {data.name}
                  </Checkbox>
                  <br/>
                </Text>
              )}
          </ModalBody>
          <ModalFooter align="center" justifyContent="center">
          <Button colorScheme='red' mr={3} onClick={this.acceptModal}>
            Confirm
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={this.state.isReasonOpen} onClose={this.closeReason}>
        <ModalOverlay />
        <ModalContent w="80%">
          <ModalHeader>{this.state.heading}</ModalHeader>
          <ModalCloseButton />
          {this.state.imageUrl != '' ?
            <img src={this.state.imageUrl} width="40%" height="40%" style={{borderradius: "50%",position: "relative", left: "30%", paddingBottom: "10px" }}></img>
          : ''}
          {this.state.reasonCategory == 'camera' ? 
            <ModalBody align="center" justifyContent="center">
              {this.state.showCamera == true ?
                <Camera
                  idealFacingMode={FACING_MODES.ENVIRONMENT}
                  isImageMirror={false}
                  isFullScreen={true}
                  idealResolution = {{width: 500, height: 500}}
                  sizeFactor={1}
                  onTakePhoto={(dataURI) => this.onTakePhoto(dataURI)}
                />:<Button colorScheme='red' borderColor='#ff0000' color='#ff0000' variant='outline' fontSize='xs' p='8px 32px'onClick={() => this.cameraChange()}>Upload a Photo</Button>
              }
            </ModalBody> :
            ''
          }
          {this.state.reasonCategory == 'chat' ? 
            <ModalBody>
              {this.state.chatList.map((data, index) =>
              <List mb="5px" key={index} spacing={3}>
                <ListItem bg="#ffcad3" style={{padding:"7px", borderRadius: "10px", cursor:"pointer"}}>
                  <ListIcon as={MdMessage} color='green.500' />
                  {data.message}
                </ListItem>
              </List>
              )}
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type='text'
                  placeholder='Enter text'
                  onChange={this.onChangeChat}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={(e) => this.sendReason(this.state.reasonCategory)}>
                    Send
                  </Button>
                </InputRightElement>
              </InputGroup>
            </ModalBody> :
            ''
          }

          {this.state.reasonCategory == 'date' ? 
            <ModalBody>
              <Text fontSize='md' fontWeight='bold'>
                Date:
              </Text>
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
              <Text fontSize='md' fontWeight='bold'>
                Time:
              </Text>
              <TimePicker
                onChange={(e)=>this.onTimeChange(e)}
                value={this.state.time}
              />
            </ModalBody> :
            ''
          }

          <ModalFooter align="center" justifyContent="center">
          {this.state.reasonCategory == 'date' || this.state.reasonCategory == 'camera' ?
          <Button colorScheme='red' mr={3} w="40%" onClick={(e) => this.sendReason(this.state.reasonCategory)}>
            Send
          </Button>
          : '' }
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={this.state.isOpenReason} onClose={this.closeReasonModal}>
        <ModalOverlay />
        <ModalContent w="80%">
          <ModalHeader align="center" justifyContent="center">Select Reason</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              <ListItem bg="#ffcad3" style={{padding:"7px", borderRadius: "10px", cursor:"pointer"}} onClick={(e) => this.submitReason("camera", "Reason 1")}>
                <ListIcon as={MdAddCircle} color='green.500' />
                Reason 1
              </ListItem>
              <ListItem bg="#ffcad3" style={{padding:"7px", borderRadius: "10px", cursor:"pointer"}} onClick={(e) => this.submitReason("chat", "Chat")}>
                <ListIcon as={MdAddCircle} color='green.500' />
                Reason 2
              </ListItem>
              <ListItem bg="#ffcad3" style={{padding:"7px", borderRadius: "10px", cursor:"pointer"}} onClick={(e) => this.submitReason("camera", "Reason 3")}>
                <ListIcon as={MdAddCircle} color='green.500' />
                Reason 3
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem bg="#ffcad3" style={{padding:"7px", borderRadius: "10px", cursor:"pointer"}} onClick={(e) => this.submitReason("chat", "Chat")}>
                <ListIcon as={MdAddCircle} color='green.500' />
                Reason 4
              </ListItem>
              <ListItem bg="#ffcad3" style={{padding:"7px", borderRadius: "10px", cursor:"pointer"}} onClick={(e) => this.submitReason("date", "Reschedule")}>
                <ListIcon as={MdAddCircle} color='green.500' />
                Reschedule
              </ListItem>
              <ListItem bg="#ffcad3" style={{padding:"7px", borderRadius: "10px", cursor:"pointer"}} onClick={(e) => this.submitReason("date", "PTP(Promise To Pay)")}>
                <ListIcon as={MdAddCircle} color='green.500' />
                PTP
              </ListItem>
              <ListItem bg="#ffcad3" mb="10px" style={{padding:"7px", borderRadius: "10px", cursor:"pointer"}} onClick={(e) => this.submitReason("chat", "Chat")}>
                <ListIcon as={MdAddCircle} color='green.500' />
                Other
              </ListItem>
            </List>
          </ModalBody>
          {/* <ModalFooter>
          <Button colorScheme='red' mr={3} onClick={this.closeReasonModal}>
            Confirm
          </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
        
        {this.state.acceptedPickups.map((data, index) =>
          <Card key={index} my={{ lg: "24px" }} me={{ lg: "24px" }} w="80%" mb="20px" style={{background: "linear-gradient(356deg,#ffffff,#ff5a5a)", boxShadow: "rgb(0 0 0 / 24%) 7px 10px 14px"}}>
              <Flex direction='column'>
                <Flex align="end" justifyContent="end">
                  <Icon
                    as={MdMessage}
                    color='gray.500'
                    fontSize='md'
                    style={{position:"relative", top:"12%"}}
                    onClick={(e)=>this.openReasonModal(data.loan_master_id, data.company_id)}
                    me='6px'></Icon>
                  <Icon
                    as={MdAddIcCall}
                    color='gray.500'
                    fontSize='md'
                    ml="3%"
                    style={{position:"relative", top:"12%"}}
                    me='6px'></Icon>
                </Flex>
                <CardHeader py='12px'>
                  <Text color="white" fontSize='lg' fontWeight='bold'>
                    {data.loan_id}
                  </Text>
                </CardHeader>
                <CardBody>
                  <Flex direction='column' w='100%'>
                  {data.company ? 
                    <Text color="white" fontSize="sm" fontWeight="semibold">
                      <Icon
                        as={FaBuilding}
                        color='gray.500'
                        fontSize='md'
                        style={{position:"relative", top:"12%"}}
                        me='6px'></Icon>
                      <Text as="span" color="white">
                        {data.company.name}
                      </Text>
                    </Text>
                    : ''}
                    {data.customer.applicant_name ?
                    <Text color="white" fontSize="sm" fontWeight="semibold">
                      <Icon
                        as={FaUserAlt}
                        color='gray.500'
                        fontSize='md'
                        style={{position:"relative", top:"12%"}}
                        me='6px'></Icon>
                      <Text as="span" color="white">
                        {data.customer.applicant_name}
                      </Text>
                    </Text>
                    : ''}
                    {data.customer_address.applicant_pincode ?
                    <Text color="white" fontSize="sm" fontWeight="semibold">
                      <Icon
                        as={FaHome}
                        color='gray.500'
                        fontSize='md'
                        style={{position:"relative", top:"12%"}}
                        me='6px'></Icon>
                      <Text as="span" color="white">
                        {data.customer_address.applicant_pincode}
                      </Text>
                    </Text>
                    : ''}
                    {data.customer_address.applicant_address_text ?
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                      <Icon
                        as={FaAddressBook}
                        color='gray.500'
                        fontSize='md'
                        style={{position:"relative", top:"6%"}}
                        me='6px'></Icon>
                      <Text as="span" color="white">
                        {data.customer_address.applicant_address_text}
                      </Text>
                    </Text>
                    : ''}
                    <Flex align="center">
                      <Button colorScheme='green'
                        borderColor='green'
                        color='green'
                        variant='outline'
                        fontSize='xs'
                        w="43%"
                        style={{position:"realtive", left:"5%"}}
                        onClick={(e)=>this.redirectToDetails(data.loan_master_id, data.agent_id, data.customer_address.applicant_address_text, data.company.name)}
                        p='8px 32px' mt="10px" mb="10px">
                        Pickup
                      </Button>
                      <Button colorScheme='red'
                        borderColor='#ff0000'
                        color='#ff0000'
                        variant='outline'
                        fontSize='xs'
                        w="43%"
                        style={{position:"realtive", top:"8%", left:"12%"}}
                        onClick={(e) => this.openModal(data.loan_master_id)}
                        p='8px 32px' mb="10px">
                        Decline
                      </Button>
                    </Flex>
                      
                  </Flex>
                </CardBody>
              </Flex>
          </Card>
        )}
        {this.state.pickups.map((data, index) =>
          <Card key={index} my={{ lg: "24px" }} me={{ lg: "24px" }} w="80%" mb="20px" style={{background: "linear-gradient(356deg,#ffffff,#ff5a5a)", boxShadow: "rgb(0 0 0 / 24%) 7px 10px 14px"}}>
              <Flex direction='column'>
                <Flex align="end" justifyContent="end">
                  <Icon
                    as={MdMessage}
                    color='gray.500'
                    fontSize='md'
                    style={{position:"relative", top:"12%"}}
                    onClick={(e)=>this.openReasonModal(data.loan_master_id, data.company_id)}
                    me='6px'></Icon>
                  <Icon
                    as={MdAddIcCall}
                    color='gray.500'
                    fontSize='md'
                    ml="3%"
                    style={{position:"relative", top:"12%"}}
                    me='6px'></Icon>
                </Flex>
                <CardHeader py='12px'>
                  <Text color="white" fontSize='lg' fontWeight='bold'>
                    {data.loan_id}
                  </Text>
                </CardHeader>
                <CardBody>
                  <Flex direction='column' w='100%'>
                  {data.company ?
                    <Text color="white" fontSize="sm" fontWeight="semibold">
                      <Icon
                        as={FaBuilding}
                        color='gray.500'
                        fontSize='md'
                        style={{position:"relative", top:"12%"}}
                        me='6px'></Icon>
                      <Text as="span" color="white">
                        {data.company.name}
                      </Text>
                    </Text>
                    : ''}
                    <Text color="white" fontSize="sm" fontWeight="semibold">
                      <Icon
                        as={FaUserAlt}
                        color='gray.500'
                        fontSize='md'
                        style={{position:"relative", top:"12%"}}
                        me='6px'></Icon>
                      <Text as="span" color="white">
                        {data.customer.applicant_name}
                      </Text>
                    </Text>
                    {data.applicant_pincode ?
                    <Text color="white" fontSize="sm" fontWeight="semibold">
                      <Icon
                        as={FaHome}
                        color='gray.500'
                        fontSize='md'
                        style={{position:"relative", top:"12%"}}
                        me='6px'></Icon>
                      <Text as="span" color="white">
                        {data.applicant_pincode}
                      </Text>
                    </Text>
                    : '' }
                    {data.applicant_address_text ?
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                      <Icon
                        as={FaAddressBook}
                        color='gray.500'
                        fontSize='md'
                        style={{position:"relative", top:"12%"}}
                        me='6px'></Icon>
                      <Text as="span" color="white">
                        {data.applicant_address_text}
                      </Text>
                    </Text>
                    : ''}
                    <Button colorScheme='green'
                      borderColor='green'
                      color='green'
                      variant='outline'
                      fontSize='xs'
                      onClick={(e)=>this.openAcceptModal(data.loan_master_id)}
                      p='8px 32px' mt="10px" mb="10px">
                      Accept
                    </Button>
                  </Flex>
                </CardBody>
              </Flex>
          </Card>
        )}
        <ToastContainer />
      </Flex>
    );
  }
}

export default Pickups;
