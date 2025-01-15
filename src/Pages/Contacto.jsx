import React from 'react'
import { motion } from 'framer-motion'
import '../Styles/styles.css'

export const Contacto = () => {
    return (
        <motion.section className="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
        >
            <div className="container has-text-centered"
            >
                <h1 className="title green">¡Nos alegra que quieras contactarnos!</h1>
                <p className="subtitle has-text-white">
                    Puedes llamarnos o escribirnos por WhatsApp para agendar tu cita. Siempre estamos listos para ofrecerte el mejor servicio.
                </p>

                <div className="box">
                    <p><strong>Teléfono:</strong> <a href="tel:+584127615361">+58 412 7615361</a></p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/message/HSPYVPG2ODSPK1">Enviar mensaje por WhatsApp</a></p>
                    <p><strong>Dirección:</strong> 67 C. Jose Regino Peña, Valencia 2003, Carabobo, Venezuela</p>
                    <p><strong>Horario:</strong> Lunes a Sábado de 7:30 AM a 6:00 PM.</p>
                    <p>Los domingos trabajamos de 7:30 AM a 3:00 PM.</p>
                    <p><strong>Con cita previa, extendemos nuestros horarios para tu conveniencia.</strong></p>



                </div>
                {/* Botón de Google Maps */}
                <div className="buttons is-centered">
                    <a
                        href="https://www.google.com/maps/place/67+C.+Jose+Regino+Pe%C3%B1a,+Valencia+2003,+Carabobo,+Venezuela/@10.1669845,-67.9780306,204m/data=!3m2!1e3!4b1!4m5!3m4!1s0x8e8067b86e687dab:0xb61cde678e23f45!8m2!3d10.1669832!4d-67.9773869?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                        className="button is-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver en Google Maps
                    </a>
                </div>

                {/* Mapa de Google Maps embebido */}
                <div className="box" style={{ width: '100%', height: '400px' }}>
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.4706571075752!2d-67.97803063048464!3d10.166984519418165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8067b86e687dab%3A0xb61cde678e23f45!2s67%20C.%20Jose%20Regino%20Pe%C3%B1a%2C%20Valencia%202003%2C%20Carabobo%2C%20Venezuela!5e1!3m2!1ses-419!2sde!4v1727950770573!5m2!1ses-419!2sde"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>



            </div>
        </motion.section >
    )
}
