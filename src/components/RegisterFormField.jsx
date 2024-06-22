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
        width: '100%'
      }}
      >
        Registrarse
      </Button>

      <Typography>
        Ya tienes cuenta?
        <Link href="/login">Haz click aqui para iniciar sesión</Link>
      </Typography>

    </Box>
  )
}