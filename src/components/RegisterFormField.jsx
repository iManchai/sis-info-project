import { Box, Button, Link, Typography } from "@mui/material"
import FormTextField from "./FormTextField"

export default function RegisterFormField() {
  return (
    <Box>
      <FormTextField title="Nombre" type="text"/>
      <FormTextField title="Correo" type="text"/>
      <FormTextField title="Contraseña" type="password"/>

      <Button 
      variant="contained" 
      sx={{
        marginTop: '16px',
        marginBottom: '0.5rem',
        width: '100%',
        fontSize: '1.25rem',
        letterSpacing: '0.2rem',
        fontWeight: 'bold',
        height: '4rem',
        borderRadius: '12px',
      }}
      >
        Registrarse
      </Button>

      <Typography>
        {"Ya tienes cuenta?" + " "}
        <Link href="/login">Haz click aqui para iniciar sesión</Link>
      </Typography>

    </Box>
  )
}