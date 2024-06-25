import { Avatar, Box, Button, Typography } from "@mui/material";
import { useUser } from "../../context/user";
import { useTheme } from "@emotion/react";

export default function ProfileSection() {

  const user = useUser()
  const theme = useTheme()

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: 'center',

      [theme.breakpoints.up('md')]: {
        flexBasis: '30%',
      }
    }}>
        <Avatar sx={{
          height: '200px',
          width: '200px',
        }}/>
        <Typography fontSize={"1.25rem"}>Nombre</Typography>
        <Typography fontSize={"1.25rem"}>Apellido</Typography>
        <Typography fontSize={"1.25rem"}>Email</Typography>
        <Typography fontSize={"1.25rem"}>Telefono</Typography>
    </Box>
  );
}