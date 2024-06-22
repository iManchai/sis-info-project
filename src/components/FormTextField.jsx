import { Box, TextField, Typography } from "@mui/material";

export default function FormTextField({ title, type }) {
  return (
    <Box>
      <Typography sx={{
        color: 'black',
        fontWeight: 'bold'
      }}>
        {title}
      </Typography>
      <TextField 
      sx={{
        width: '100%',
        marginBottom: '1rem'
      }}
      type={type}
      />
    </Box>
  )
}