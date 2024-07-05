import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, MenuItem, TextField, Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useTheme } from "@emotion/react";
import { DataGrid } from "@mui/x-data-grid";
import { createPlate, deletePlate, getPlates, updatePlate } from "../../controllers/plates";
import { useEffect, useState } from "react";
import { uploadImage } from "../../controllers/files";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function AdminPage() {

  const theme = useTheme()
  const [plates, setPlates] = useState([])

  const plateTypes = [
    {
      value: 'Poke Bowl',
      label: 'Poke Bowl'
    },
    {
      value: 'Poke Burrito',
      label: 'Poke Burrito'
    },
    {
      value: 'Entrada',
      label: 'Entrada'
    }
  ]

  async function fetchPlates() {
    const plates = await getPlates()
    setPlates(plates)
  }

  useEffect(() => {
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
  const [isError, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (selectedPlate) {
      setName(selectedPlate.name)
      setType(selectedPlate.type)
      setPrice(selectedPlate.price)
      setDescription(selectedPlate.description)
      setImage(selectedPlate.image)
    } else {
      setName('')
      setType('')
      setPrice(0)
      setDescription('')
      setImage(null)
    }
  }, [selectedPlate])

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => setError(false)
      });
    }
  }, [isError, errorMessage]);

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

function validateInputs({ price, name, type, image, description }) {
  if (price === 0) {
    throw new Error('El precio no puede ser 0');
  }
  if (!name.trim()) {
    throw new Error('El nombre no puede estar vacío');
  }
  if (!type) {
    throw new Error('Debe seleccionar un tipo');
  }
  if (!image) {
    throw new Error('Debe seleccionar una imagen');
  }
  if (!description.trim()) {
    throw new Error('La descripción no puede estar vacía');
  }
}

// Submit
async function handleSubmit() {
  setIsLoading(true);
  try {
    validateInputs({ price, name, type, image, description })

    if (selectedPlate !== undefined) {
      let result;
      if (image.name) {
        result = await uploadImage(image);
        await updatePlate(selectedPlate.id, {
          name: name,
          type: type,
          description: description,
          price: price,
          image: result
        });
      } else {
        await updatePlate(selectedPlate.id, {
          name: name,
          type: type,
          description: description,
          price: price,
          image: selectedPlate.image
        });
      }
    } else {
      const result = await uploadImage(image);
      await createPlate({
        name: name,
        type: type,
        description: description,
        price: price,
        image: result
      });
    }
  } catch (error) {
    // Handle error (e.g., show an error message)
    setErrorMessage(error.message);
    setError(true);
    console.error("An error occurred:", error);
  } finally {
    setIsLoading(false); // Stop loading regardless of outcome
    setOpen(false);
    await fetchPlates()
  }
}

async function handleDelete() {
  setIsLoading(true); // Start loading
  try {
    await deletePlate(selectedPlate.id);
    // Handle success (e.g., show a success message or update the UI)
  } catch (error) {
    // Handle error (e.g., show an error message)
    setErrorMessage(error.message);
    setError(true)
    console.error("An error occurred:", error);
  } finally {
    setIsLoading(false); // Stop loading regardless of outcome
    setOpen(false);
    await fetchPlates()
  }
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
      <Dialog open={open} 
      onClose={() => {
        setOpen(false); 
        setSelectedPlate(undefined); 
      }} 
      aria-labelledby="form-dialog-title" 
      sx={{
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
            value={name}
            sx={{
              flexBasis: '100%',
              [theme.breakpoints.up('lg')]: {
                flexBasis: 'calc(50% - 0.5rem)'
              }
            }}
          />
          <TextField required id="description-textfield" label="Precio" type="number" fullWidth
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            sx={{
              flexBasis: '100%',
              [theme.breakpoints.up('lg')]: {
                flexBasis: 'calc(50% - 0.5rem)'
              }
            }}
          />
          <TextField required id="description-textfield" label="Tipo" select fullWidth
            onChange={(e) => setType(e.target.value)}
            value={type}
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
            value={description}
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
            {image ? (image.name || image) : 'No se ha seleccionado una imagen'}
          </Typography>
        </DialogContent>
        <DialogActions>
          {isLoading ? <Button disabled>Agregando...</Button> : <Button onClick={handleSubmit}>{selectedPlate ? "Modificar Plato" : "Agregar plato"}</Button>}
          {selectedPlate ? 
          (isLoading ?  <Button disabled>Borrando...</Button>:  <Button onClick={handleDelete}>Borrar plato</Button> )
          : null}
        </DialogActions>
      </Dialog>

      <ToastContainer />
  </Box>
  )
}
