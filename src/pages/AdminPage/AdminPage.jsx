import { Box, Button, Divider, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useTheme } from "@emotion/react";
import { DataGrid } from "@mui/x-data-grid";
import { getPlates } from "../../controllers/plates";
import { useEffect, useState } from "react";

export default function AdminPage() {

  const theme = useTheme()
  const [plates, setPlates] = useState([])

  useEffect(() => {
    const fetchPlates = async () => {
      const plates = await getPlates()
      setPlates(plates)
    }
    fetchPlates()
  }, [])


  // Datagrid
  const columns = [
    {
      field: 'name',
      headerName: 'Nombre',
      flex: 1,
    },
    {
      field: 'type',
      headerName: 'Tipo',
      flex: 1,
    },
    {
      field: 'price',
      headerName: 'Precio',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Descripción',
      flex: 1,
    },
  ];

  const rows = plates.map(plate => {
    return {
      id: plate.id,
      name: plate.name,
      type: plate.type,
      price: plate.price,
      description: plate.description
    }
  }
)

console.log(plates)
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
    }}>
      <Navbar />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem',
        marginTop: '64px',
        flexGrow: 1,
      
      }}>
        <Typography variant="h2" sx={{
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            margin: 0,
            textTransform: 'uppercase',
            textAlign: 'center',

            [theme.breakpoints.up('lg')]: {
              textAlign: 'left'
            }
          }}>
            Panel de Administrador
          </Typography>
          <Divider />
          <DataGrid rows={rows} columns={columns} pageSize={5} sx={{
            marginTop: '2rem'
          }} />
          <Button variant="contained" color="primary" sx={{
            marginTop: '2rem',
            width: '200px',
            alignSelf: 'center'
          }}>Agregar Plato
          </Button>
      </Box>
      <Footer />
  </Box>
  )
}