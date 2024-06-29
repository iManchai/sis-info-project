import IMG from '../../assets/Imagen.png';
import './Order.css';
import Button from '@mui/material/Button';
import Amount from './Amount';


export default function order_item() {
  return (
    <div className="FoodItem">
      <img src={IMG} alt="" />
      <div className="content">
        <p className='name_food'>Molove</p>
        <p className='description'>POKE BURRITO</p>
        <Button variant="contained"
            sx={{

                backgroundColor: '#2F699F',
                color: 'white',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '25px',
                height: '4rem',
                padding: '0.7rem',
                letterSpacing: '0.3rem',
                fontSize: '1.2rem',
                fontWeight: '800',
            }
            }
        >Eliminar</Button>
      </div>

      <div className='price'>
        <p>Precio</p>
        <div>15$</div>


      </div>

      <div className="price">
        <p>cantidad</p>
        <Amount />
      </div>

      <div className="price">
        <p>total</p>
        <div>15$</div>
      </div>
    </div>
  );
}
