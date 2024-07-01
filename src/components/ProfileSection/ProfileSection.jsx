import { Avatar, Box, Button, Typography } from "@mui/material";
import { useUser } from "../../context/user";
import { useTheme } from "@emotion/react";

export default function ProfileSection() {

  const user = useUser()
  const theme = useTheme()
  const nameLine=<Typography fontSize={"1.25rem"}>{user ? user.displayName:String}</Typography>
  const displayName=nameLine.props.children;
  const fullName=displayName.split(' ');
  const name1=fullName[0];
  const surname=fullName[1];

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

        



        <Typography fontSize={"1.25rem"}>{name1}</Typography> 
        <Typography fontSize={"1.25rem"}>{surname}</Typography>
        <Typography fontSize={"1.25rem"}>{user ? user.email:String}</Typography> 
        <Typography fontSize={"1.25rem"}>{user ? user.phoneNumber:String}</Typography>
    </Box>
  );
}