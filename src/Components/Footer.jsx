import React from 'react'
import '../Styles/styles.css'

export const Footer = () => {
    return (

        <footer className="footer has-background-dark has-text-white-ter">
            <div className="container">
                <div className="columns">

                    {/* Información de la empresa */}
                    <div className="column">
                        <h2 className="title is-4 has-text-white">Autolavado El Galán</h2>
                        <p className="has-text-grey-light">
                            Dirección:67 C. Jose Regino Peña, Valencia 2003, Carabobo, Venezuela
                        </p>
                        <p className="has-text-grey-light">
                            Teléfono: <a href="tel:+584127615361" className="has-text-link-light">+58 412 7615361</a>
                        </p>
                        <p className="has-text-grey-light">
                            WhatsApp: <a href="https://wa.me/+584127615361" className="has-text-link-light">Escríbenos</a>
                        </p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="column">
                        <h2 className="title is-4 has-text-white">Síguenos</h2>
                        <p className="has-text-grey-light">Estamos activos en nuestras redes sociales:</p>
                        <div className="buttons">

                            <a href="https://www.instagram.com/autolavado.elgalan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="button is-light is-small">
                                <span className="icon"><img src="https://img.icons8.com/color/48/instagram-new--v1.png"></img></span>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>

                    {/* Horarios */}
                    <div className="column">
                        <h2 className="title is-4 has-text-white">Horario de Atención</h2>
                        <p className="has-text-grey-light">Lunes a Sábado: 7:30 AM - 6:00 PM</p>
                        <p className="has-text-grey-light">Domingos: 7:30 AM - 3:00 PM</p>
                        <p className="has-text-grey-light">
                            <strong>Con cita previa extendemos nuestros horarios.</strong>
                        </p>
                    </div>

                </div>

                {/* Copyright */}
                <div className="has-text-centered">
                    <p className="has-text-grey">
                        © {new Date().getFullYear()} Autolavado El Galán. Todos los derechos reservados.
                    </p>
                    <p className="has-text-grey-light">
                        Siempre comprometidos con brindarte el mejor servicio.
                    </p>
                </div>
            </div>
        </footer>
    );
}
