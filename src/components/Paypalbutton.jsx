import {  Button } from '@mui/material';
import Mysv from "../assets/pay_paypal.svg";






export default function Paybutton(){

    return(

        <Button
        startIcon={<img src={Mysv}></img>}
        sx={{
          backgroundColor: '#ffbe15',
          color: 'white',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          height: '3rem',
          letterSpacing: '0.2rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          padding:"1rem 8rem ",
          marginBottom:'2rem',

          '&:hover': {
            backgroundColor: '#ffbe15',
          },
        }}
      />


    )
}