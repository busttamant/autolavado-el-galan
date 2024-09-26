import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className="hero-head  ">
            <nav className="navbar ">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img width="40" height="100" src="https://img.icons8.com/external-filled-outline-mangsaabguru-/64/external-car-housework-and-hobby-filled-filled-outline-mangsaabguru-.png" alt="external-car-housework-and-hobby-filled-filled-outline-mangsaabguru-" />
                        </Link>
                        <p className="title" style={{ marginBottom: "0", lineHeight: "inherit" }}>Autolavado El Galan</p>

                        <span className="navbar-burger" data-target="navbarMenuHeroB">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroB" className="navbar-menu">
                        <div className="navbar-end">
                            <Link to="/" className="navbar-item">Inicio</Link>
                            <Link to="/servicios" className="navbar-item">Servicios</Link>
                            <Link to="/contacto" className="navbar-item">Contacto</Link>
                            <Link to="/sobreNosotros" className="navbar-item">Sobre nosotros</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
