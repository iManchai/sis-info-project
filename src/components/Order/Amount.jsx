import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './Order.css';

export default function Amount() {
  

  return (
    <div className="amount_counter">
      <Button
        variant="contained"
        sx={{ borderRadius: '500px', marginRight: '5px', padding: '0', maxHeight: '30px', minWidth: '30px' }}
      >
        -
      </Button>
      <TextField id="outlined-basic" label="" variant="outlined" sx={{maxWidth:"3rem"}}/>
      <Button
        variant="contained"
        sx={{ borderRadius: '500px', marginLeft: '5px', padding: '0', maxHeight: '30px', minWidth: '30px' }}
      >
        +
      </Button>
    </div>
  );
}
