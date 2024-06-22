import { Box, Divider, IconButton, Typography, Container } from '@mui/material';
import RegisterFormField from '../../components/RegisterFormField';
import Logo from '../../assets/Logo.svg';
import BackIcon from '../../assets/Vector.svg';
import { useTheme } from '@emotion/react';

export default function RegisterPage() {

  const theme = useTheme()

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        flexBasis: '50%',
      }}>
        <img src={Logo} alt />
      </Box>
      <Box sx={{
        padding: '3rem',
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <IconButton>
            <img src={BackIcon} alt="" />
          </IconButton>
          <Typography sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
          }}
          variant="h2"
          >
            Registrarse
          </Typography>
        </Box>
        <RegisterFormField />
        <Divider />
      </Box>
    </Box>
  );
}