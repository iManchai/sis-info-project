import "./LoginForm.css";
import Mysvg from "../../assets/Logo.svg";
import IconButton from "@mui/material/IconButton";
import Back from "../../assets/Vector.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link, Typography } from "@mui/material"
import LogginButtons from "../../components/LoginButtons";

export default function LoginForm({ navigate }) {


  return (
    <div className="container">
      <aside className="Image">
        <img src={Mysvg} alt="" />
      </aside>

      <aside className="Form">
        <div className="Inicio_sesion">
          <IconButton onClick={() => navigate('/')}>
            <img src={Back} alt="" />
          </IconButton>
          <h1>Iniciar sesion</h1>
        </div>

        <div className="Inputs">
          <TextField
            className="extendedField"
            id="outlined-email"
            label="Email"
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            className="extendedField"
          />

          <Button className="Button" variant="contained">
            <h2>Iniciar sesión</h2>
          </Button>

          <Typography>
          {"Aun no tienes cuenta?" + " "}
          <Link href="/register">Haz click aqui para registrase</Link>
          </Typography>
         
        

          <div className="divider"></div>

          
          <LogginButtons></LogginButtons>

      

        </div>


        
      </aside>
      
    </div>
  );
};


