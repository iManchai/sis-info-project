import { Box, TextField } from "@mui/material";

export default function FormTextField({ title, type, required, value, setValue, helperText, isValid, setIsValid }) {
  return (
    <Box>
      <TextField 
      label={title}
      sx={{
        width: '100%',
        marginBottom: '1rem'
      }}
      type={type}
      required={required}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        setIsValid(true)
      }}
      error={!isValid}
      helperText={isValid? null : helperText}
      />
    </Box>
  )
}