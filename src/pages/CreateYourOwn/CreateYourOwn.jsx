import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import './CreateYourOwn.css';
import { useNavigate } from 'react-router';
import { ShoppingCartContext } from '../../context/shoppingCart';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const CreateYourOwn = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(ShoppingCartContext);

  const [isError, setError] = useState(false)

  useEffect(() => {
    if (isError) {
      toast.error("Faltan campos por llenar", {
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
  }, [isError]);

  // Form Data
  const [bowl, setBowl] = useState('Poke Bowl');
  const [base, setBase] = useState('');
  const [protein, setProtein] = useState([]);
  const [mixIns, setMixIns] = useState([]);
  const [sauce, setSauce] = useState('');
  const [extraSauce, setExtraSauce] = useState('');
  const [toppings, setToppings] = useState([]);
  const [crunchies, setCrunchies] = useState([]);
  const [extraProteins, setExtraProteins] = useState([]);
  const [extraMixIns, setExtraMixIns] = useState([]);
  const [extraToppings, setExtraToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleCheckboxChange = (setter, limit) => (event) => {
    const value = event.target.value;
    setter((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return prev.length < limit ? [...prev, value] : prev;
      }
    });
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleSubmit = () => {
    // Envío del formulario
    try {
      if (!base || !protein.length || !mixIns.length || !sauce || !toppings.length || !crunchies.length) {
        throw new Error('Faltan campos por llenar')
      }

      const item = {
        id: nanoid(),
        plate: {
          type: 'Build it yourself',
          name: 'Build it yourself',
          price: 16
        },
        quantity: quantity,
        specifications: {
          base,
          protein,
          mixIns,
          sauce,
          extraSauce,
          toppings,
          crunchies,
          extraProteins,
          extraMixIns,
          extraToppings,
        },
      };

      dispatch({ type: 'ADD_ITEM', payload: item });
      navigate('/menu');
    } catch (error) {
      setError(true)
      console.error(error);
    }
  };

  return (
    <div className="create-your-own">
      <h2>CONSTRUYE TU PROPIO BOWL O BURRITO</h2>
      <Box className="create-your-own-content">
        <Box className="create-your-own-images">
          <img src={bowl === 'Poke Bowl' ? "https://poke-house.com/wp-content/uploads/2022/10/SUNNY-SALMON-RGB-_500KB.jpg" : "https://pokeworks.com/wp-content/uploads/2022/01/PYW-Poke-Burrito-Reg-V2-005-cropped-960x960.jpg"} alt="Bowl" />
        </Box>
        <Box className="create-your-own-text">
          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Tipo de Plato</FormLabel>
            <RadioGroup row value={bowl} onChange={(e) => setBowl(e.target.value)}>
              <FormControlLabel value="Poke Bowl" control={<Radio />} label="Bowl" />
              <FormControlLabel value="Poke Burrito" control={<Radio />} label="Burrito" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Base (Escoger 1)</FormLabel>
            <RadioGroup row value={base} onChange={(e) => setBase(e.target.value)}>
              <FormControlLabel value="arroz" control={<Radio />} label="Arroz" />
              <FormControlLabel value="quinoa" control={<Radio />} label="Quinoa (+1$)" />
              <FormControlLabel value="lechuga" control={<Radio />} label="Lechuga Miz" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Proteína (Escoger 2)</FormLabel>
            <Box className="checkbox-group">
              {['Atún', 'Salmón', 'Camarón', 'Atún Spicy', 'Camarón Acevichado'].map((item) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox checked={protein.includes(item)} onChange={handleCheckboxChange(setProtein, 2)} value={item} />}
                  label={item}
                />
              ))}
            </Box>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Mix-ins (Escoger 4)</FormLabel>
            <Box className="checkbox-group">
              {['Piña', 'Maíz', 'Pepino', 'Mango', 'Rábano', 'Cebollín', 'Edamame', 'Zanahoria', 'Melocotón', 'Tomate Cherry', 'Cebolla Morada', 'Repollo Morado'].map((item) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox checked={mixIns.includes(item)} onChange={handleCheckboxChange(setMixIns, 4)} value={item} />}
                  label={item}
                />
              ))}
            </Box>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Salsa para Resolver (Escoger 1)</FormLabel>
            <RadioGroup row value={sauce} onChange={(e) => setSauce(e.target.value)}>
              <FormControlLabel value="soya" control={<Radio />} label="Soya" />
              <FormControlLabel value="ponzu" control={<Radio />} label="Ponzu" />
              <FormControlLabel value="molokai" control={<Radio />} label="Moloka'i (Recomendado)" />
              <FormControlLabel value="anguila" control={<Radio />} label="Anguila" />
              <FormControlLabel value="mayo_spicy" control={<Radio />} label="Mayo Spicy" />
              <FormControlLabel value="sin_salsa" control={<Radio />} label="Sin Salsa" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Salsa Aparte (Escoger 1)</FormLabel>
            <RadioGroup row value={extraSauce} onChange={(e) => setExtraSauce(e.target.value)}>
              <FormControlLabel value="soya" control={<Radio />} label="Soya" />
              <FormControlLabel value="ponzu" control={<Radio />} label="Ponzu" />
              <FormControlLabel value="anguila" control={<Radio />} label="Anguila" />
              <FormControlLabel value="mayo_spicy" control={<Radio />} label="Mayo Spicy" />
              <FormControlLabel value="sin_salsa" control={<Radio />} label="Sin Salsa" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Toppings (Escoger 1)</FormLabel>
            <Box className="checkbox-group">
              {['Masago', 'Wakame', 'Aguacate', 'Kani Dinamita'].map((item) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox checked={toppings.includes(item)} onChange={handleCheckboxChange(setToppings, 1)} value={item} />}
                  label={item}
                />
              ))}
            </Box>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Crunchies (Escoger 1)</FormLabel>
            <Box className="checkbox-group">
              {['Wasabi peas', 'Batata frita', 'Maíz Tostado', 'Cebolla Frita', 'Tostoncito', 'Ramen crunch', 'Almendra fileteada'].map((item) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox checked={crunchies.includes(item)} onChange={handleCheckboxChange(setCrunchies, 1)} value={item} />}
                  label={item}
                />
              ))}
            </Box>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Extra de Proteínas (Max 5) (+2$ por c/u)</FormLabel>
            <Box className="checkbox-group">
              {['Atún', 'Salmón', 'Camarón', 'Atún Spicy', 'Camarón Acevichado'].map((item) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox checked={extraProteins.includes(item)} onChange={handleCheckboxChange(setExtraProteins, 5)} value={item} />}
                  label={item}
                />
              ))}
            </Box>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Extra de Mix-ins (Max 12) (+1.5$ por c/u)</FormLabel>
            <Box className="checkbox-group">
              {['Piña', 'Maíz', 'Pepino', 'Mango', 'Rábano', 'Cebollín', 'Edamame', 'Zanahoria', 'Melocotón', 'Tomate Cherry', 'Cebolla Morada', 'Repollo Morado'].map((item) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox checked={extraMixIns.includes(item)} onChange={handleCheckboxChange(setExtraMixIns, 12)} value={item} />}
                  label={item}
                />
              ))}
            </Box>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Extra de Toppings (Max 4) (+1$ por c/u)</FormLabel>
            <Box className="checkbox-group">
              {['Masago', 'Wakame', 'Aguacate', 'Kani Dinamita'].map((item) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox checked={extraToppings.includes(item)} onChange={handleCheckboxChange(setExtraToppings, 4)} value={item} />}
                  label={item}
                />
              ))}
            </Box>
          </FormControl>

          <Box className="quantity-selector">
            <Button variant="outlined" onClick={() => handleQuantityChange(-1)}>-</Button>
            <Box className="quantity-display">{quantity}</Box>
            <Button variant="outlined" onClick={() => handleQuantityChange(1)}>+</Button>
          </Box>

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Añadir al Pedido
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </div>
  );
};

export default CreateYourOwn;
