import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Section1 from "../../components/Section1/Section1";
import Section2 from "../../components/Section2/Section2";

export default function LandingPage({navigate}) {

  return (
    <Box>
      <Navbar navigate={navigate}/>
      <Section1 />
      <Section2 navigate={navigate}/>
    </Box>
  );
}