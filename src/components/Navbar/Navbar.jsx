import React from 'react'
import './Navbar.css'
import Logo from "../../assets/logo-pequeño.png"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-dark navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="" width="50px" height="50px" />
              </a>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active" to={`/`}>Inicio</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={`/`}>Comic</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={`/personajes`}>Personajes</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to={`/quienes-somos`}>Quiénes somos</Link>
                </li>
              </ul>
            </div>
        </nav>
    </>
  )
}
