import { Box, Divider, IconButton, Typography } from '@mui/material';
import RegisterFormField from '../../Components/RegisterFormField';
import Logo from '../../assets/Logo.svg';
import BackIcon from '../../assets/Vector.svg';
import { useTheme } from '@emotion/react';
import RegisterButtonsSection from '../../Components/RegisterButtonsSection';

export default function RegisterPage({ navigate }) {

  const theme = useTheme()

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',

      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        minHeight: '100vh',
        width: '100%',
        flexBasis: '50%'
      }
    }}>
      {/* Left Section */}
      <Box sx={{
        display: 'none',

        [theme.breakpoints.up('md')]: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.primary.main,
          flexBasis: '50%',
        }
      }}>
        <img src={Logo} alt />
      </Box>

      {/* Right Section */}
      <Box sx={{
        padding: '2rem',
        flexBasis: '50%',
      
        [theme.breakpoints.up('md')]: {
          padding: '3rem',
        },
      }}>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <IconButton onClick={() => navigate('/')}>
            <img src={BackIcon} alt="" />
          </IconButton>
          <Typography sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            fontSize: '3rem',
          }}
          variant="h2"
          >
            Registrarse
          </Typography>
        </Box>

        <RegisterFormField />
        <Divider 
        sx={{
          margin: '2rem 0 2rem 0',
        }}/>
        
        <RegisterButtonsSection/>
      </Box>
    </Box>
  );
}
