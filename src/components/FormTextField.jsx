import { Box, TextField, Typography } from "@mui/material";

export default function FormTextField({ title }) {
  return (
    <Box>
      <Typography sx={{
        color: 'black',
        fontWeight: 'bold'
      }}>
        {title}
      </Typography>
      <TextField/>
    </Box>
  )
}