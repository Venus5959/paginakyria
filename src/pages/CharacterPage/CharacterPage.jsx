import React from 'react'
import "./CharacterPage.css"
import { Navbar } from '../../components/Navbar/Navbar';
import Card from 'react-bootstrap/Card';
import Alejandro from '../../assets/alejandro.png'
import Darío from "../../assets/dario.png"
import Filipo from "../../assets/filipo.png"
import Olimpia from "../../assets/olimpia.png"
import logo from '../../assets/logo-pequeño.png'


export const CharacterPage = () => {
  return (
    <>
      <Navbar />
      
    <div className='card4'>
      <div className='cards2'>
        <div> 
    <Card className='cartas bg-dark' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Alejandro} />
      <Card.Body>
        <Card.Title>Alejandro Magno</Card.Title>
        <Card.Text>
        Alejandro III de Macedonia, más conocido como Alejandro Magno o Alejandro el Grande, fue rey de Macedonia, hegemón de Grecia, faraón de Egipto y Gran rey de Media y Persia, hasta la fecha de su muerte.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
        <div> 
    <Card className='cartas bg-dark' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Darío} />
      <Card.Body>
        <Card.Title>Darío</Card.Title>
        <Card.Text>
      

Darío III fue el último rey del Imperio Aqueménida en Persia y se enfrentó a Alejandro Magno, pero fue derrotado y huyó en ambas ocasiones. Fue asesinado por sus propios soldados después de su derrota en la Batalla de Gaugamela.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
      </div>
      <div className='cards2'>
        <div> 
    <Card className='cartas bg-dark' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Filipo} />
      <Card.Body>
        <Card.Title>Filipo</Card.Title>
        <Card.Text>
        Filipo II fue rey de Macedonia desde 359 a. C., si bien no desposeyó a su sobrino Amintas IV, legítimo rey, hasta el 355 a. C., hasta su muerte. Fue el padre de Alejandro Magno, y es posible que también de Ptolomeo I Sóter.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
        <div> 
    <Card className='cartas bg-dark' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Olimpia} />
      <Card.Body>
        <Card.Title>Olimpia</Card.Title>
        <Card.Text>
        Olimpia fue la esposa principal del rey Filipo II de Macedonia y madre de Alejandro Magno. Era hija de Neoptólemo I de Epiro, rey de Molosia, en la región de Epiro al noroeste de la actual Grecia. No se conserva mucho sobre Olimpia.
            
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
      </div>


    </div>

<div className='logo'>
  <img src={logo} alt="" />
</div>



    </>
  )
}
