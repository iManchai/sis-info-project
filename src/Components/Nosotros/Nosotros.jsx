import "./Nosotros.css";
import foto1 from "../images/image14.png";
import foto2 from "../images/image15.png";
import foto3 from "../images/image16.png";

const Nosotros=()=>{
return(
    <div className="container">
        
        

        <div className="seccion1">
        
        <div><h1 className="TituloPrincipal">
            ACERCA DE NOSOTROS

        </h1>
        <style type="text/css">
        
        </style>
        </div>

        <section className="seccionMolokai">
        
        <div className="introduccionSeccion">
        
        <h2 className="introduccionHeading">
            Molokai: Nace la pasión por el Poke en Caracas
            </h2>
            <div  className="introduccionTexto">
            <p>En el corazón de Caracas, en el año 2020, nació Molokai, un restaurante con una misión simple: democratizar el poke y llevar su frescura y sabor a todos los rincones de la ciudad.</p>
            
            <p>Más que un restaurante, somos una comunidad de amantes del poke que busca compartir su pasión por este plato vibrante y versátil. En nuestro local, encontrarás un ambiente cálido y acogedor, donde podrás disfrutar de tu poke favorito mientras te relajas y conectas con amigos y familiares.</p>
            
            <p>Ofrecemos tanto bowls de Poke como Burritos de Poke, elaborados con ingredientes frescos, de la más alta calidad y provenientes de proveedores locales. Creemos que la comida sana y deliciosa no tiene que ser un lujo, por eso nos esforzamos por ofrecer precios justos y accesibles para que todos puedan disfrutar de la experiencia poke</p>
            
            </div>
            
        </div>
        <aside>
            <img src={foto1} alt="" className="Imagen1"></img>
        </aside>
        </section>
        
        

        </div>

        <div className="seccion2">
        <h2 className="dondeHeading">
            ¿DONDE NOS ENCONTRAMOS?
        </h2>
        <section className="seccionMolokai2">
        <div  className="imageContainer">
        <aside>
        <img src={foto2} className="Imagen2"></img>
        <img src={foto3} className="Imagen3"></img>
        </aside>
        </div>
            <div className="dondeTexto">
            <p>Desde nuestra inauguración en el año 2020, ya nos encontramos actualmente con la presencia de dos sucursales. Siendo las siguientes:</p>
            <p>1. C.C. San Luis, en el Cafetal, te espera un ambiente cálido y acogedor para que saborees tu poke favorito. ¡Abierto todos los días de 11:00 am a 10:00 pm!</p>
            <p>2. Universidad Metropolitana: ¿Estudias o trabajas en la Universidad Metropolitana? ¡No te pierdas nuestro stand en la feria! De lunes a viernes, de 10:00 am a 5:00 pm, tu dosis de poke perfecta te espera.</p>
            </div>
        </section>
        </div>


        


        
    </div>
);
};


export default Nosotros;

{/*SVG es el formato en que vamos a mostrar las imágenes.
    Necesito tener el svg de la flechita y su estilo con css
    además de sus elementos MUI asociados.
    También las letras deben ser iguales
    */}