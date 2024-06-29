import './Paypage.css';
import Navbar from '../../components/Navbar/Navbar';
import { Box } from '@mui/material';
import Order_item from '../../components/Order/Order_item';
import Paybutton from '../../components/Paypalbutton';
import Footer from '../../components/Footer/Footer';

export default function Paypage({ navigate }) {
  return (
    <Box>
      <Navbar />

      <section>
        <div className="pedido">
            <h1 className='pedi'>PEDIDO</h1>
            <div className="divider" style={{paddingRight:'5rem'}}></div>

            <Order_item />
            <Order_item />

            

            




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
      <Footer></Footer>

    </Box>

  );
}
