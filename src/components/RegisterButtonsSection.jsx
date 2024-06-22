import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Button } from '@mui/material';

export default function RegisterButtonsSection() {

  return (
    <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}
    >
      <Button 
      startIcon={<GoogleIcon/>}
      sx={{
        backgroundColor: '#ea4335',
        color: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        height: '3rem',
        letterSpacing: '0.2rem',
        fontSize: '1rem',
        fontWeight: 'bold',

        '&:hover': {
          backgroundColor: '#d33f2f'
        }
      }}
      >
        Registrarse con Google
      </Button>
      <Button 
      startIcon={<FacebookIcon/>}
      sx={{
        backgroundColor: '#3664A2',
        color: 'white',
        border: '1px solid',
        height: '3rem',
        letterSpacing: '0.2rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        
        
        '&:hover': {
          backgroundColor: '#2F6A9F'
        }
      }}
      >
        Registrarse con Facebook
      </Button>
    </Box>
  );
};