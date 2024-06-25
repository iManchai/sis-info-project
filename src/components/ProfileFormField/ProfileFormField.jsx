import { Box, TextField, Typography } from "@mui/material";

export default function ProfileFormField({ label, type, multiline, maxRows}) {
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <Typography>
        {label}
      </Typography>
      <TextField type={type} multiline={multiline} maxRows={maxRows} variant="filled" />
    </Box>
  )
}