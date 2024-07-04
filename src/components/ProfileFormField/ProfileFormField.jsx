import { Box, TextField, Typography } from "@mui/material";

export default function ProfileFormField({label, type, multiline, maxRows, required, value, setValue, helperText, isValid, setIsValidProf}) {
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
      <TextField 
      multiline={multiline} 
      maxRows={maxRows}
      variant="filled"
      type={type} 
      required={required}
      value={value}
      onChange={(e)=>{
        setValue(e.target.value)
        setIsValidProf(true)
      }}
      error={!isValid}
      helperText={isValid? null: helperText}
       />
    </Box>
  )
}//puedo hacer que todos los texfields sean opcionales, y que SOLO sean validados si tienen letras. No solo aquello, sino que debo validar en el menor de los casos SOLO nombre, apellido y correo; verifica rprimero que esten y luego que esten correctos, para luego proceder con el resto de las cosas.