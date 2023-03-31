import React from 'react'
import "./HomePage.css"
/* rafc para crear página */
import { Navbar } from '../../components/Navbar/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../assets/slider_1.png"
import slider2 from "../../assets/slider_2.png"
import slider3 from "../../assets/slider_3.png"
import alejandro from "../../assets/alejandro.png"
import bucefalo from "../../assets/dario.png"
import filipo from "../../assets/filipo.png"
import olimpia from "../../assets/olimpia.png"
import Card from 'react-bootstrap/Card';
import logo from '../../assets/logo-pequeño.png'
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const route = useNavigate();
  return (
    <div>
        <Navbar />

        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>EL NOMBRE DE SU PODEROSO CORCEL ERA BUCÉFALO.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>ERA DE LINAJE REAL POR AMBOS LADOS DE SU FAMILIA. </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SU LIBRO FAVORITO ERA LA ILÍADA.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        

         <div className='textoinicial'>
          <div><h2>Sobre el cómic</h2></div>
          <div><p>En este proyecto nos dedicamos a explorar un poco sobre la vida de Alejandro Magno a nivel familiar y sus logros militares, como El Grande.</p></div>
          <div><p>Nuestro estilo gráfico es el Chibi, con el cuál te mostraremos esta historia de una manera interactiva y entretenida.</p></div>
        
         </div>

         <div>
          <h3 className='titulo'>PERSONAJES</h3>
         </div>

    <div className='personajes'>
      <div>
        <img className='img_personajes' src={alejandro} alt="" />
        <img className='img_personajes' src={bucefalo} alt="" />
      </div>
     <div>
      <img className='img_personajes' src={filipo} alt="" />
      <img className='img_personajes' src={olimpia} alt="" />
     </div>

    </div>

    <div className='vermas' >
      <button className='botonvermas' onClick={() => route("/personajes")}>
        Ver más
      </button>
    </div>

  <div className='cards'>
    <div className='cardind'>
     <Card className='cardquienes bg-dark'> 
      <Card.Body>
        <Card.Title>Quiénes somos</Card.Title>
        <Card.Text>
          Obtendrás información sobre el equipo de trabajo. Roles y su vida personal.
        </Card.Text>
        <button className='botonvermas' onClick={() => route("/quienes-somos")}>
        Ver más
      </button>
      </Card.Body>
     </Card>
    </div>
    <div className='cardind'>
     <Card className='cardreferentes bg-dark'>
      <Card.Body>
        <Card.Title>Cómic</Card.Title>
        <Card.Text>
          ¡Aquí podrás encontrar la historia de Alejandro Magno de una manera muy entretenida!
        </Card.Text>
        <button className='botonvermas' onClick={() => route("")} >
        Ver más
      </button>
      </Card.Body>
     </Card>
    </div>
  </div>
    
    <br />

    <div className='logo'>
      <img className='logito' src={logo} alt="" />
    </div>






    </div>
  )
}
