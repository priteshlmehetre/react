// Chakra imports
import {
    Flex,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/Card/Card.js";
  import CardBody from "components/Card/CardBody.js";
  import IconBox from "components/Icons/IconBox";
  import React from "react";
  
  const Reedem = ({ title, amount, percentage, icon }) => {
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const textColor = useColorModeValue("white", "white");
  
    return (
      <Card minH='83px' background="#55fd40ed" w='100%' >
        <CardBody>
          <Flex flexDirection='row' align='center' justify='center' w='100%'>
            <Stat me='auto'>
              <StatLabel
                fontSize='sm'
                color='White'
                fontWeight='bold'
                pb='.1rem'>
                {title}
              </StatLabel>
              <Flex>
                {/* <StatNumber fontSize='lg' color={textColor}>
                  {amount}
                </StatNumber> */}
                {/* <StatHelpText
                  alignSelf='flex-end'
                  justifySelf='flex-end'
                  m='0px'
                  color={percentage > 0 ? "green.400" : "red.400"}
                  fontWeight='bold'
                  ps='3px'
                  fontSize='md'>
                  {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
                </StatHelpText> */}
              </Flex>
            </Stat>
            <IconBox as='box' h={"30px"} w={"30px"} bg={iconTeal}>
              {icon}
            </IconBox>
          </Flex>
        </CardBody>
      </Card>
    );
  };
  
  export default Reedem;
  