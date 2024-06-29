import { Box, Divider, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useTheme } from "@emotion/react";

export default function AdminPage() {

  const theme = useTheme()

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
    }}>
      <Navbar />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem',
        marginTop: '64px',
        flexGrow: 1,
      
      }}>
        <Typography variant="h2" sx={{
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            margin: 0,
            textTransform: 'uppercase',
            textAlign: 'center',

            [theme.breakpoints.up('lg')]: {
              textAlign: 'left'
            }
          }}>
            Panel de Administrador
          </Typography>
          <Divider />
      </Box>
      <Footer />
  </Box>
  )
}