import './Paypage.css';
import Navbar from '../../components/Navbar/Navbar';
import { Box } from '@mui/material';
import Resume from '../../components/Resume/Resume';
import Paybutton from '../../components/Paypalbutton';

export default function Paypage({ navigate }) {
  return (
    <Box>
      <Navbar />

      <section>
        <div className="pedido">
            <h1>PEDIDO</h1>
            <div className="divider"></div>


            <Resume></Resume>





        </div>
        <div className="resume">
            <div className='square'>
                <h2>RESUMEN DE PEDIDO</h2>


                <div className='total'>
                    <p>SUBTOTAL:</p>  <div>$50</div>
                </div>

                <div className='total'>
                    <p>DELIVERY:</p>  <div>$50</div>
                </div>

                <div className="divider"></div>

                <div className='total'>
                    <p>TOTAL:</p>  <div>$50</div>
                </div>

                <Paybutton />


                





            </div>

        </div>
      </section>
    </Box>
  );
}
