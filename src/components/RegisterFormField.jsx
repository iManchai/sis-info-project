import { Box, Button, Link, Typography } from "@mui/material"
import FormTextField from "./FormTextField"

export default function RegisterFormField() {
  return (
    <Box>
      <FormTextField title="Nombre"/>
      <FormTextField title="Correo"/>
      <FormTextField title="Contraseña"/>

      <Button className="Button" variant="contained">

      </Button>

      <Typography>
        Ya tienes cuenta?
        <Link to="/login">Haz click aqui para iniciar sesión</Link>
      </Typography>

    </Box>
  )
}