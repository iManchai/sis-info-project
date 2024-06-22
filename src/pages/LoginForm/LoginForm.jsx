import "./LoginForm.css";
import Mysvg from "../../assets/Logo.svg";
import IconButton from "@mui/material/IconButton";
import Back from "../../assets/Vector.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginForm = () => {
  return (
    <div className="container">
      <aside className="Image">
        <img src={Mysvg} alt="" />
      </aside>

      <aside className="Form">
        <div className="Inicio_sesion">
          <IconButton>
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
            Iniciar sesion
          </Button>

          <a href="">Create An Account</a>

          <div className="divider"></div>
        </div>
      </aside>
    </div>
  );
};

export default LoginForm;
