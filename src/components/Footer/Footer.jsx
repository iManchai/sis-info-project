import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import Logo from '../../assets/Logo.svg'; 
import facebook from '../../assets/whitebook.svg'
import instagram from '../../assets/whitetagram.svg'
import './Footer.css'
import { useNavigate } from 'react-router-dom';

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


const Footer = () => {

    const navigate = useNavigate()

    return (
        <Box
        component="footer"
        sx={{   
            mt: 'auto', 
            backgroundColor: '#F2565B',
            width: '100vw',     
        }}
        >
        <Box 
            sx={{  
            padding: '1rem', 
            display: 'flex', 
            flexDirection: 'row' , 
            justifyContent: 'space-between', 
            }}>
                <Box sx={{  display: 'flex', flexDirection: 'column'}} > 
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
                <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start'
                    }}>
                    <div class = 'container_footer_2'> 
                        <Button color="inherit" onClick={() => navigate('/menu')} className="footer-button">Menú</Button>
                        <Button color="inherit" onClick={() => navigate('/about')} className="footer-button">Nosotros</Button>
                        <Button color="inherit" onClick={() => navigate('/contact')} className="footer-button">Contacto</Button>
                    </div>
                    <div class = 'container_footer_2'>
                        <Copyright />
                    </div>
                </Box> 
            </Box>
        </Box>
    );
};  

export default Footer; 