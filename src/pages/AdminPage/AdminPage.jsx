import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, MenuItem, TextField, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useTheme } from "@emotion/react";
import { DataGrid } from "@mui/x-data-grid";
import { createPlate, deletePlate, getPlates, updatePlate } from "../../controllers/plates";
import { useEffect, useState } from "react";
import { uploadImage } from "../../controllers/files";

export default function AdminPage() {

  const theme = useTheme()
  const [plates, setPlates] = useState([])

  const plateTypes = [
    {
      value: 'bowl',
      label: 'Poke Bowl'
    },
    {
      value: 'burrito',
      label: 'Poke Burrito'
    },
    {
      value: 'entrada',
      label: 'Entrada'
    }
  ]

  useEffect(() => {
    const fetchPlates = async () => {
      const plates = await getPlates()
      setPlates(plates)
    }
    fetchPlates()
  }, [])

  // Modal for adding/modifying a new plate'
  const [open, setOpen] = useState(false)
  const [selectedPlate, setSelectedPlate] = useState(undefined)

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

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
      id: plate.id || '-',
      name: plate.name || '-',
      type: plate.type || '-',
      price: plate.price || '-',
      description: plate.description || '-',
    }
  }
)

// Submit
const handleSubmit = async () => {
  if (selectedPlate !== undefined) {
    if (image) {
      const result = await uploadImage(image)
      console.log(result)
      await updatePlate(selectedPlate.id, {
        name,
        type,
        price,
        description,
        image: result
      })
    } else {
      await updatePlate(selectedPlate.id, {
        name,
        type,
        price,
        description,
        image: selectedPlate.image
      })
    }
  } else {
    const result = await uploadImage(image)
    console.log(result)
    await createPlate({
      name,
      type,
      price,
      description,
      image: result
    })
  }
  setOpen(false)
  window.location.reload()
}

const handleDelete = async () => {
  await deletePlate(selectedPlate.id)
  setOpen(false)
  window.location.reload()
}

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
          <DataGrid rows={rows} columns={columns} pageSize={5} 
          sx={{
            marginTop: '2rem'
          }} 
          onRowClick={(row) => {
            const plateId = row.id
            const plate = plates.find(({ id }) => id === plateId)
            setSelectedPlate(plate)
            setOpen(true)
          }}
          />
          <Button variant="contained" color="primary" sx={{
            marginTop: '2rem',
            width: '200px',
            alignSelf: 'center'
          }}
          onClick={() => setOpen(true)}>Agregar Plato
          </Button>
      </Box>
      <Footer />

      {/* Form to create, modify or delete plate */}
      <Dialog open={open} onClose={() => {setOpen(false); setSelectedPlate(undefined)}} aria-labelledby="form-dialog-title" sx={{
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
            onChange={(e) => setName(e.target.value)}
            value={selectedPlate ? selectedPlate.name : name}
            sx={{
              flexBasis: '100%',
              [theme.breakpoints.up('lg')]: {
                flexBasis: 'calc(50% - 0.5rem)'
              }
            }}
          />
          <TextField required id="description-textfield" label="Precio" type="number" fullWidth
            onChange={(e) => setPrice(e.target.value)}
            value={selectedPlate ? selectedPlate.price : price}
            sx={{
              flexBasis: '100%',
              [theme.breakpoints.up('lg')]: {
                flexBasis: 'calc(50% - 0.5rem)'
              }
            }}
          />
          <TextField required id="description-textfield" label="Tipo" select fullWidth
            onChange={(e) => setType(e.target.value)}
            value={selectedPlate ? selectedPlate.type : type}
            sx={{
              flexBasis: '100%',
            }}
          >
            {plateTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField required id="description-textfield" label="Descripción" type="text" fullWidth
            onChange={(e) => setDescription(e.target.value)}
            value={selectedPlate ? selectedPlate.description : description}
            multiline
            rows={4}
            sx={{
              flexBasis: '100%',
            }}
          />
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <label htmlFor="raised-button-file" style={{ width: '100%'}}>
          <Button variant="raised" component="span" sx={{ 
            backgroundColor: theme.palette.primary.main,
            width: '100%',
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
          <Typography>
            {image ? image.name : 'No se ha seleccionado una imagen'}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>{selectedPlate ? "Modificar Plato" : "Agregar plato"}</Button>
          {selectedPlate ? <Button onClick={handleDelete}>Borrar plato</Button> : null}
        </DialogActions>
      </Dialog>
  </Box>
  )
}