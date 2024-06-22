import { Box, Divider, IconButton, Typography, Container } from '@mui/material'; // Ensure Container is imported
import RegisterFormField from '../../components/RegisterFormField';

export default function RegisterPage() {
  return (
    // <Box>
    //   <Box sx={{
    //     color: 'black'
    //   }}>
    //     <p>Hello World</p>
    //   </Box>
    //   <Box>
    //     <Container>

    //       <Typography>Registrarse</Typography>
    //     </Container>
        
    //     <RegisterFormField />
    //     <Divider />
    //   </Box>
    // </Box>
    <Box>
      <Box>
        <p>Hello World</p>
      </Box>
      <Box>
        <Container>
          <Typography>Registrarse</Typography>
        </Container>
        <Divider />
        <RegisterFormField />
      </Box>
    </Box>
  );
}