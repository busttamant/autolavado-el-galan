import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/favicon.png";

export const NavBar = () => {
    // Estado para manejar si el menú está activo o no
    const [isActive, setIsActive] = useState(false);

    // Función para alternar el estado de la hamburguesa
    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="hero-head">
            <nav className="navbar has-background-black-ter">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img width="60" height="80" src={img} alt="Logo" />
                        </Link>
                        <p
                            className="title has-text-centered has-text-white"
                            style={{
                                marginBottom: "0",
                                lineHeight: "inherit",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            Autolavado El Galan
                        </p>

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
                    <div id="navbarMenuHeroB" className={`navbar-menu has-background-black-ter ${isActive ? "is-active" : ""}`}>
                        <div className="navbar-end">
                            <Link to="/" className="navbar-item has-text-white">Inicio</Link>
                            <Link to="/servicios" className="navbar-item has-text-white">Servicios</Link>
                            <Link to="/contacto" className="navbar-item has-text-white">Contacto</Link>
                            <Link to="/sobreNosotros" className="navbar-item has-text-white">Sobre nosotros</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
