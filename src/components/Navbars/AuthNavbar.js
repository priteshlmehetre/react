// Chakra imports
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  CreativeTimLogo,
  DocumentIcon,
  HomeIcon,
  PersonIcon,
  RocketIcon,
} from "components/Icons/Icons";
import SidebarResponsive from "components/Sidebar/SidebarResponsive";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";
export default function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const { logo, logoText, secondary, ...rest } = props;
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  // Chakra color mode
  let navbarIcon = useColorModeValue("gray.700", "gray.200");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarBg = useColorModeValue(
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  let navbarBorder = useColorModeValue(
    "1.5px solid #FFFFFF",
    "1.5px solid rgba(255, 255, 255, 0.31)"
  );
  let navbarShadow = useColorModeValue(
    "0px 7px 23px rgba(0, 0, 0, 0.05)",
    "none"
  );
  let navbarFilter = useColorModeValue(
    "none",
    "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
  );
  let navbarBackdrop = "blur(21px)";
  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  let navbarPosition = "fixed";
  let colorButton = "white";
  if (props.secondary === true) {
    navbarIcon = "white";
    navbarBg = "none";
    navbarBorder = "none";
    navbarShadow = "initial";
    navbarFilter = "initial";
    navbarBackdrop = "none";
    bgButton = "white";
    colorButton = "gray.700";
    mainText = "white";
    navbarPosition = "absolute";
  }
  
  
  return (
    <Flex
     
    >
      
    </Flex>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};