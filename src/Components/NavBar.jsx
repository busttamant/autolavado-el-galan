import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/AUTOLAVADO .png";
import '../Styles/font.css'; // Import the CSS file
import '../Styles/styles.css'

export const NavBar = () => {
    // Estado para manejar si el menú está activo o no
    const [isActive, setIsActive] = useState(false);

    // Función para alternar el estado de la hamburguesa
    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="hero-head">
            <nav className="navbar background">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img width="60" src={img} alt="Logo" />

                        </Link>
                        <span className="ml-2 is-size-3 has-text-weight-bold navbar-item font-league-gothic green navbar-texto ">AUTOLAVADO EL GALAN</span>


                        {/* Menú de hamburguesa para pantallas pequeñas */}
                        <span
                            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                            data-target="navbarMenuHeroB"
                            onClick={toggleNavbar}  // Alterna el estado del menú cuando se hace clic
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>

                    {/* Menú que se mostrará u ocultará en pantallas pequeñas */}
                    <div id="navbarMenuHeroB" className={`navbar-menu  background ${isActive ? "is-active" : ""}`}>
                        <div className="navbar-end">
                            <Link to="/" className="navbar-item has-text-white">Inicio</Link>
                            <Link to="/servicios" className="navbar-item has-text-white">Servicios</Link>
                            <Link to="/contacto" className="navbar-item has-text-white">Contacto</Link>
                            <Link to="/sobreNosotros" className="navbar-item has-text-white">Sobre nosotros</Link>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};
