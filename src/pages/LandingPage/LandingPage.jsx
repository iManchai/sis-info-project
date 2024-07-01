import { Box } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section2/Section2";
import Section3 from "../../Components/Section3/Section3"; 
import Footer from "../../Components/Footer/Footer"; 

export default function LandingPage({navigate}) {

  return (
    <Box>
      <Navbar/>
      <Section1 />
      <Section2 navigate={navigate}/>
      <Section3 navigate={navigate}/> 
      <Footer />
    </Box>
  );
}