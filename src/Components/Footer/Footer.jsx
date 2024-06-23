import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import Logo from '../assets/Logo.svg'; 
import facebook from '../assets/whitebook.svg'
import instagram from '../assets/whitetagram.svg'
import '../Footer/Footer.css'

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" fontSize='12px'>
        <Link color="inherit" href="https://mui.com/">
        Poke Moloka'I 
        {' ©'}
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Todos los derechos reservados.'}
    </Typography>
  );
}

export default function Footer() {
  return (
        <Box
          component="footer"
          sx={{  
            py: 2, 
            px: 3,  
            mt: 'auto', 
            backgroundColor: '#F2565B', 
          }}
        >
          <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'row' , justifyContent: 'space-between'}}>
                <Box component= 'div1' sx={{  display: 'flex', flexDirection: 'column'}} > 
                    <div class = 'container_footer_1'>
                    <img src={Logo} alt='' width='50' height='50' />
                    <p> MOLOKA'I </p>
                    </div>
                    <div class = 'container_footer_1'>
                        <div class = 'img-1'>
                            <img class='change-my-color' src={instagram} alt='' width='25' height='25'/>
                        </div>
                        <div class = 'img-2'>
                            <img class= 'change-my-color'src={facebook}  alt='' width='25' height='25'/>
                        </div>
                    </div>
                </Box>
                <Box component= 'div2' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <div class = 'container_footer_2'> 
                        <Button color="inherit" onClick={() => setSection('menu')} sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'Kulim Park' }}>Menú</Button>
                        <Button color="inherit" onClick={() => setSection('nosotros')} sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'Kulim Park' }}>Nosotros</Button>
                        <Button color="inherit" onClick={() => setSection('contacto')} sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'Kulim Park' }}>Contacto</Button>
                    </div>
                    <div class = 'container_footer_2'>
                        <Copyright />
                    </div>
                </Box> 
            </Container>
        </Box>
  );
}