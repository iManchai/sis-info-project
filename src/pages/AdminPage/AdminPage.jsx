import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField, Typography } from "@mui/material";
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

  // Modal for adding/modifying a new plate'
  const [open, setOpen] = useState(false)


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
          }}
          onClick={() => setOpen(true)}>Agregar Plato
          </Button>
      </Box>
      <Footer />

      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h4" sx={{
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            margin: 0,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
            Agregar Plato
          </Typography>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          flexWrap: 'wrap',

          [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
          }
        }}>
          <TextField required id="name-textfield" label="Nombre" type="text" fullWidth
            sx={{
              flexBasis: '100%',
              [theme.breakpoints.up('lg')]: {
                flexBasis: 'calc(50% - 0.5rem)'
              }
            }}
          />
          <TextField required id="description-textfield" label="Precio" type="number" fullWidth
            sx={{
              flexBasis: '100%',
              [theme.breakpoints.up('lg')]: {
                flexBasis: 'calc(50% - 0.5rem)'
              }
            }}
          />
          <TextField required id="description-textfield" label="Descripción" type="text" fullWidth
            sx={{
              flexBasis: '100%',
            }}
          />
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
          <Button variant="raised" component="span" sx={{ 
            backgroundColor: theme.palette.primary.main,
            flexBasis: '100%',
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: 'bold',

            '&:hover': {
              backgroundColor: '#f2565b'
            }
          }}
          >
            Subir foto
          </Button>
          </label> 
        </DialogContent>
        <DialogActions>
          <Button>Agregar nuevo plato</Button>
          <Button>Borrar plato</Button>
        </DialogActions>
      </Dialog>
  </Box>
  )
}