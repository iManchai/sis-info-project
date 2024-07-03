import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import './CreateYourOwn.css';

const CreateYourOwn = () => {
  const [bowl, setBowl] = useState([]);
  const [base, setBase] = useState([]);
  const [protein, setProtein] = useState([]);
  const [mixIns, setMixIns] = useState([]);
  const [sauce, setSauce] = useState([]);
  const [extraSauce, setExtraSauce] = useState([]);
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

  const handleSingleCheckboxChange = (setter) => (event) => {
    const value = event.target.value;
    setter([value]);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const isValid = () => {
    return (
      bowl.length === 1 &&
      base.length === 1 &&
      protein.length === 2 &&
      mixIns.length === 4 &&
      sauce.length === 1 &&
      extraSauce.length === 1 &&
      toppings.length === 1 &&
      crunchies.length === 1
    );
  };

  const handleSubmit = () => {
    if (isValid()) {
      console.log({
        bowl,
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
        quantity,
      });
    } else {
      alert("Por favor, completa todas las selecciones necesarias.");
    }
  };

  return (
    <div className="create-your-own">
      <h2>CONSTRUYE TU PROPIO BOWL O BURRITO</h2>
      <Box className="create-your-own-content">
        <Box className="create-your-own-images">
          <img src="https://via.placeholder.com/300" alt="Bowl" />
        </Box>
        <Box className="create-your-own-text">
          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Tipo de Plato</FormLabel>
            <Box className="checkbox-group">
              <FormControlLabel
                control={<Checkbox checked={bowl.includes('bowl')} onChange={handleSingleCheckboxChange(setBowl)} value="bowl" />}
                label="Bowl"
              />
              <FormControlLabel
                control={<Checkbox checked={bowl.includes('burrito')} onChange={handleSingleCheckboxChange(setBowl)} value="burrito" />}
                label="Burrito"
              />
            </Box>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Base (Escoger 1)</FormLabel>
            <Box className="checkbox-group">
              <FormControlLabel
                control={<Checkbox checked={base.includes('arroz')} onChange={handleSingleCheckboxChange(setBase)} value="arroz" />}
                label="Arroz"
              />
              <FormControlLabel
                control={<Checkbox checked={base.includes('quinoa')} onChange={handleSingleCheckboxChange(setBase)} value="quinoa" />}
                label="Quinoa (+1$)"
              />
              <FormControlLabel
                control={<Checkbox checked={base.includes('lechuga')} onChange={handleSingleCheckboxChange(setBase)} value="lechuga" />}
                label="Lechuga Miz"
              />
            </Box>
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
            <Box className="checkbox-group">
              <FormControlLabel
                control={<Checkbox checked={sauce.includes('soya')} onChange={handleSingleCheckboxChange(setSauce)} value="soya" />}
                label="Soya"
              />
              <FormControlLabel
                control={<Checkbox checked={sauce.includes('ponzu')} onChange={handleSingleCheckboxChange(setSauce)} value="ponzu" />}
                label="Ponzu"
              />
              <FormControlLabel
                control={<Checkbox checked={sauce.includes('molokai')} onChange={handleSingleCheckboxChange(setSauce)} value="molokai" />}
                label="Moloka'i (Recomendado)"
              />
              <FormControlLabel
                control={<Checkbox checked={sauce.includes('anguila')} onChange={handleSingleCheckboxChange(setSauce)} value="anguila" />}
                label="Anguila"
              />
              <FormControlLabel
                control={<Checkbox checked={sauce.includes('mayo_spicy')} onChange={handleSingleCheckboxChange(setSauce)} value="mayo_spicy" />}
                label="Mayo Spicy"
              />
              <FormControlLabel
                control={<Checkbox checked={sauce.includes('sin_salsa')} onChange={handleSingleCheckboxChange(setSauce)} value="sin_salsa" />}
                label="Sin Salsa"
              />
            </Box>
          </FormControl>

          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Salsa Aparte (Escoger 1)</FormLabel>
            <Box className="checkbox-group">
              <FormControlLabel
                control={<Checkbox checked={extraSauce.includes('soya')} onChange={handleSingleCheckboxChange(setExtraSauce)} value="soya" />}
                label="Soya"
              />
              <FormControlLabel
                control={<Checkbox checked={extraSauce.includes('ponzu')} onChange={handleSingleCheckboxChange(setExtraSauce)} value="ponzu" />}
                label="Ponzu"
              />
              <FormControlLabel
                control={<Checkbox checked={extraSauce.includes('anguila')} onChange={handleSingleCheckboxChange(setExtraSauce)} value="anguila" />}
                label="Anguila"
              />
              <FormControlLabel
                control={<Checkbox checked={extraSauce.includes('mayo_spicy')} onChange={handleSingleCheckboxChange(setExtraSauce)} value="mayo_spicy" />}
                label="Mayo Spicy"
              />
              <FormControlLabel
                control={<Checkbox checked={extraSauce.includes('sin_salsa')} onChange={handleSingleCheckboxChange(setExtraSauce)} value="sin_salsa" />}
                label="Sin Salsa"
              />
            </Box>
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

          <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!isValid()}>
            Añadir al Pedido
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CreateYourOwn;
