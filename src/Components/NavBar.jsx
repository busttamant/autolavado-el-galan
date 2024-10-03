import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/favicon.png"
export const NavBar = () => {
    return (
        <div className="hero-head ">
            <nav className="navbar has-background-black-ter">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img width="60" height="80" src={img} />
                        </Link>
                        <p className="title has-text-centered  has-text-white" style={{ marginBottom: "0", lineHeight: "inherit", display: "flex", flexDirection: "column", justifyContent: "center" }}>Autolavado El Galan</p>

                        <span className="navbar-burger" data-target="navbarMenuHeroB">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroB" className="navbar-menu">
                        <div className="navbar-end ">
                            <Link to="/" className="navbar-item has-text-white">Inicio</Link>
                            <Link to="/servicios" className="navbar-item has-text-white">Servicios</Link>
                            <Link to="/contacto" className="navbar-item has-text-white">Contacto</Link>
                            <Link to="/sobreNosotros" className="navbar-item has-text-white">Sobre nosotros</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
