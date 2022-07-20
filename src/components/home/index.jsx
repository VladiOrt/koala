import react, {useState} from "react";
import './index.scss'
import emailjs from 'emailjs-com';


import LogoFooter from '../img/Kwala.svg'

import LogoHeader from '../img/kwala-web.svg'


import CarruselOne from "./carrusel";

const Home = () => {



    const frmContact = { reply_to:'koalaservices3@gmail.com', 
    from_name:'',
    userEmail:'', 
    concernCategory:'',     
    emailTitle:'', 
    emailDetails:'' ,



    name:'',
    lastname:'',
    email:''
};
const [contact,setContact] = useState(frmContact);
const [showMessage, setShowMessage] = useState(false);

const [branding, setBrandign] = useState('')
const [graphic, setGraphic] = useState('')
const [web, setWeb] = useState('')


const handleChange = e => { 
const {name,value} = e.target;
setContact({...contact,[name]:value}); 
};
const handleSubmit = e =>{
e.preventDefault();

emailjs.send('default_service','template_ammjr2i', contact,'akEUA8UHaQ1B4AlAf')
.then((response) => {
console.log('SUCCESS!', response.status, response.text);
setContact(frmContact);
setShowMessage(true);

setTimeout(function(){
    window.location.reload()
}, 1000);

}, (err) => {
console.log('FAILED...', err);
});
}



    return(
        <div className="containerFormGeneral">

            <div className="sectionDesktop">
                <div className="ImagenUnoDesktop"></div>
                <div className="ImagenDosDesktop"></div>
                <div className="ImagenTresDesktop"></div>
                <div className="ImagenCuatroDesktop"></div>
                <div className="ImagenCincoDesktop"></div>
                <CarruselOne></CarruselOne>
            </div>
            <div className="sectionMobile">
            <div className="filtro"></div>
            <div className="imgHeader">
                <img src={LogoHeader}></img>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="filtroFormulario">

                </div>
                <div className="nombre">
                    <label>Nombre</label>
                    <input type="text"></input>                   
                </div>
                <div>
                    <label>Correo</label>
                    <input type="text"></input>                   
                </div>
                <div>
                    <label>Ciudad</label>
                    <input type="text"></input>                   
                </div>
                <div>
                    <label>Fecha de nacimiento</label>
                    <input type="date" className="fecha"></input>                   
                </div>
                <div>
                    <label>Producto adquirido</label>
                    <input type="text"></input>                   
                </div>
                <div className="Acuerdos">
                    <div className="checkAcuerdos"></div>
                    <label>Aceptar términos y condiciones</label>
                                 
                </div>

                <button>Enviar</button>

                <div className="LogoFooter">
                    <img src={LogoFooter}></img>
                </div>
            </form>
            <section className="animaciones">
                <section className="animacionUno">
                    <div className="animacionUnoContent">

                    </div>
                </section>
                <section className="animacionDos">
                    <div className="animacionDosContent">

                    </div>
                </section>
            </section>

            </div>
           
        </div>
    )
}


export default Home;