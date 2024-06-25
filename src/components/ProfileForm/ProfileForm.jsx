import { Box, Button } from "@mui/material";
import ProfileFormField from "../ProfileFormField/ProfileFormField";
import { useTheme } from "@emotion/react";

export default function ProfileForm() {

  const theme = useTheme()

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',  
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      <Box sx={{
        flexBasis: '100%',
        [theme.breakpoints.up('md')]: {
          flexBasis: 'calc(50% - 0.5rem)'
        }
      }}>
      <ProfileFormField label="Nombre" type="text"/>
      </Box>
      <Box sx={{
        flexBasis: '100%',
        [theme.breakpoints.up('md')]: {
          flexBasis: 'calc(50% - 0.5rem)'
        }
      }}>
      <ProfileFormField label="Apellido" type="text"/>
      </Box>
      <Box sx={{
        flexBasis: '100%',
        [theme.breakpoints.up('md')]: {
          flexBasis: 'calc(50% - 0.5rem)'
        }
      }}>
      <ProfileFormField label="Correo electronico" type="email"/>
      </Box>
      <Box sx={{
        flexBasis: '100%',
        [theme.breakpoints.up('md')]: {
          flexBasis: 'calc(50% - 0.5rem)'
        }
      }}>
      <ProfileFormField label="Telefono" type="text"/>
      </Box>
      <Box sx={{
        flexBasis: '100%',
      }}>
      <ProfileFormField label="Ubicacion" type="text"/>
      </Box>
      <Box sx={{
        flexBasis: '100%',
      }}>
      <ProfileFormField label="Gustos personales" type="text" multiline={true} maxRows={4}/>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',

        [theme.breakpoints.up('md')]: {
          justifyContent: 'flex-end',
        
        }
      }}>
      <Button sx={{
        alignItems: 'center',
        padding: '0.8rem 5rem',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#30AF4C',

        '&:hover': {
          backgroundColor: '#30AF4C',
        }
      }}>
        Guardar
      </Button>
      </Box>
    </Box>
  );
}