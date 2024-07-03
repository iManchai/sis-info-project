import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Section1 from "../../components/Section1/Section1";
import Section2 from "../../components/Section2/Section2";
import Section3 from "../../components/Section3/Section3"; 
import Footer from "../../components/Footer/Footer"; 

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
