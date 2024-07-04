import { Box, Typography } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: '#F5F5F5'
    }}>
      <Typography variant='h2'>
        Pagina no encontrada!
      </Typography>
    </Box>
  );
}