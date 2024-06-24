import React from 'react';
import { Button, TextField, Avatar, Typography, Box, Divider } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { useTheme } from '@emotion/react';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import Footer from '../../components/Footer/Footer';

const Perfil = () => {

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
          margin: 0
        }}>
          Perfil
        </Typography>
        <Divider />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginTop: '2rem',
          
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
          }
        }}>
          <ProfileSection />
          <ProfileForm />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Perfil;

