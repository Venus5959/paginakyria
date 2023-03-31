import React from 'react'
import './AboutPage.css'
import { Navbar } from '../../components/Navbar/Navbar'
import foto from '../../assets/foto.jpeg'
import logo from '../../assets/logo-pequeño.png'



export const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className='mifoto'>
          <img className='yo' src={foto} alt="" />
      </div>

      <div className='texto'>
        <div><h2 className='letra'>Nicol Andrea Rios Obando</h2></div>
        <div> <p className='letra'>Soy Nicol, tengo 20 años y estudio la tecnología de Producción de Multimedia. En este proyecto trabajo como diseñadora, guionista, animadora y programadora.</p></div>
      </div>
      <div className='texto'>
        <div> <p className='letra'>Mi número es: 3243201553</p>
        <p className='letra'>Mi correo: narios54@misena.edu.co</p>
        <p className='letra'>En Facebook: Nicol Obando</p>
        </div>
      </div>

    <div className='logo'>
      <img src={logo} alt="" />
    </div>

    </>
  )
}
