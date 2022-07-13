// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import OtpCheck from "views/Auth/OtpCheck.js";
import SignUp from "views/Auth/SignUp.js";
import SingnUpResidence from "views/Auth/SingnUpResidence.js";
import SignupBank from "views/Auth/SignupBank.js";
import Signupkyc from "views/Auth/Signupkyc.js";
import Pickups from "views/Pickups/Pickups";
import Homepage from "views/Auth/Homepage.js";
import Icard from "views/Auth/Icard.js";
import PickupDetails from "views/Pickups/PickupDetails.js";
import TermsAndCondition from "views/Auth/TermsAndCondition.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: <HomeIcon color="inherit" />,
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   rtlName: "لوحة القيادة",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Tables,
  //   layout: "/admin",
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   rtlName: "لوحة القيادة",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Billing,
  //   layout: "/admin",
  // },
  {
    path: "/homepage",
    name: "HomePage",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="red" />,
    secondaryNavbar: true,
    component: Homepage,
    layout: "/admin",
  },
  {
    path: "/icard",
    name: "ICard",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="red" />,
    secondaryNavbar: true,
    component: Icard,
    layout: "/admin",
  },
  {
    path: "/termsandcondition",
    name: "Terms&Condition",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="red" />,
    secondaryNavbar: true,
    component: TermsAndCondition,
    layout: "/admin",
  },
  {
    path: "/pickups",
    name: "Pickups",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="red" />,
    component: Pickups,
    layout: "/auth",
  },
  {
    path: "/pickupdetails",
    name: "Pickup Details",
    rtlName: "لوحة القيادة",
    icon: <RocketIcon color="red" />,
    secondaryNavbar: true,
    component: PickupDetails,
    layout: "/auth",
  },
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="red" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="red" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/otpcheck",
        name: "OTP Check",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="red" />,
        component: OtpCheck,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="red" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
      {
        path: "/signupresidence",
        name: "Sign Up Residence",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="red" />,
        secondaryNavbar: true,
        component: SingnUpResidence,
        layout: "/auth",
      },
      {
        path: "/signupbank",
        name: "Sign Up Bank",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="red" />,
        secondaryNavbar: true,
        component: SignupBank,
        layout: "/auth",
      },
      {
        path: "/signupkyc",
        name: "Sign Up Kyc",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="red" />,
        secondaryNavbar: true,
        component: Signupkyc,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
