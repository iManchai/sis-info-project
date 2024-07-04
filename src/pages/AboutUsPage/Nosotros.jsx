import foto1 from "../../images/image14.png";
import foto2 from "../../images/image15.png";
import foto3 from "../../images/image16.png";
import { useTheme } from "@emotion/react";
import Footer from "../../Components/Footer/Footer.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { Box, Divider, Typography } from "@mui/material";

const Nosotros=()=>{

const theme = useTheme()

return(
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
          Acerca de Nosotros
        </Typography>
        <Divider />

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          marginTop: '2rem',
        
        }}>
          {/* First Section */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '2500px',
            [theme.breakpoints.up('lg')]: {
              flexDirection: 'row',
            }
          
          }}>
            <Box sx={{
              flexBasis: '50%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: '1rem',

              [theme.breakpoints.up('lg')]: {
                textAlign: 'left'
              }
            }}>
              <Typography sx={{
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                fontSize: '2rem',
              }}>Moloka'i: Nace la pasión por el Poke en Caracas</Typography>
              <Typography sx={{
                color: theme.palette.secondary.main,
              }}>En el corazón de Caracas, en el año 2020, nació Molokai, 
                un restaurante con una misión simple: democratizar el poke y llevar su frescura y sabor a todos los rincones de la ciudad.
              </Typography>
              <Typography sx={{
                color: theme.palette.secondary.main,
              }}>Más que un restaurante, somos una comunidad de amantes del poke que busca compartir su pasión por este plato vibrante y versátil. En nuestro local
                , encontrarás un ambiente cálido y acogedor, donde podrás disfrutar de tu poke favorito mientras te relajas y conectas con amigos y familiares.
              </Typography>
              <Typography sx={{
                color: theme.palette.secondary.main,
              }}>
              Ofrecemos tanto bowls de Poke como Burritos de Poke, elaborados con ingredientes frescos, de la más alta calidad y 
              provenientes de proveedores locales. Creemos que la comida sana y deliciosa no tiene 
              que ser un lujo, por eso nos esforzamos por ofrecer precios justos y accesibles para que todos puedan disfrutar de la experiencia poke
              </Typography>
            </Box>
            <Box sx={{
              flexBasis: '50%',
              display: 'flex',
              justifyContent: 'center',
              [theme.breakpoints.up('lg')]: {
                justifyContent: 'flex-end'
              },
            }}>
              <img src={foto1} style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '10px'
              }} alt="Moloka'i"
              />
            </Box>
          </Box>

          {/* Section 2 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',

            [theme.breakpoints.up('lg')]: {
              flexDirection: 'row',
            }
          }}>
            <Box sx={{
              display: 'flex',
              gap: '2rem',
              flexBasis: '50%',
              justifyContent: 'center',
              [theme.breakpoints.up('lg')]: {
                justifyContent: 'flex-start'
              }
            }}>
              <img src={foto2} style={{
                height: 'auto',
                borderRadius: '10px'
              }} alt="Moloka'i"
              />
              <img src={foto3} style={{
                height: 'auto',
                borderRadius: '10px'
              }} alt="Moloka'i"
              />
            </Box>
            <Box sx={{
              flexBasis: '50%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              textAlign: 'center',

              [theme.breakpoints.up('lg')]: {
                textAlign: 'right'
              }
            }}>
              <Typography sx={{
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                fontSize: '2rem',
              }}>¿Dónde nos encontramos?</Typography>
              <Typography sx={{
                color: theme.palette.secondary.main,
              }}>
              En Moloka'i, nos esforzamos por llevar la experiencia poke a todos los rincones de Caracas. 
              Por eso, contamos con dos sucursales en la ciudad, donde podrás disfrutar de tu bowl de poke favorito 
              en un ambiente cálido y acogedor.
              </Typography>
              <Typography sx={{
                color: theme.palette.secondary.main,
              }}>
              Desde nuestra inauguración en el año 2020, ya nos encontramos actualmente con la 
              presencia de dos sucursales. Siendo las siguientes:
              </Typography>
              <Typography sx={{
                color: theme.palette.secondary.main,
              }}>
              1. C.C. San Luis, en el Cafetal, te espera un ambiente cálido y acogedor para que saborees tu poke favorito. 
              ¡Abierto todos los días de 11:00 am a 10:00 pm!
              </Typography>
              <Typography sx={{
                color: theme.palette.secondary.main,
              }}>
              2. Universidad Metropolitana: ¿Estudias o trabajas en la Universidad Metropolitana? 
              ¡No te pierdas nuestro stand en la feria! De lunes a viernes, de 10:00 am a 5:00 pm, tu dosis de poke perfecta te espera.
              </Typography>
            </Box>
          </Box>
        </Box>
        </Box>
        <Footer />
    </Box>



);
};


export default Nosotros;

{/*SVG es el formato en que vamos a mostrar las imágenes.
    Necesito tener el svg de la flechita y su estilo con css
    además de sus elementos MUI asociados.
    También las letras deben ser iguales
    */}
