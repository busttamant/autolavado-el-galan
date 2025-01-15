import React from 'react'
import '../Styles/styles.css'
import { motion } from 'framer-motion'

export const SobreNosotros = () => {
    return (

        <motion.section className="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}>
            <div className="container">
                <h2 className="title green">Sobre Nosotros</h2>
                <h3>
                    <strong className='has-text-white'>Bienvenidos a Autolavado El Galán</strong>
                </h3>
                <p className='has-text-white'>
                    Desde nuestra apertura en <strong className='green'>2014</strong>, Autolavado El Galán ha sido un tributo a Octaviano, mejor conocido como <strong className='green'>"El Galán"</strong>, quien soñó con este negocio antes de su partida. Ubicados en el corazón de Valencia zona Sur, nos especializamos en ofrecer un servicio de lavado de vehículos excepcional para <strong className='green'>camionetas, carros y motos</strong>.
                </p>
                <p className='has-text-white'>
                    Contamos con un equipo de <strong className='green'>cuatro expertos en detailing</strong>, comprometidos a brindar un servicio de alta calidad y a prestar atención a cada detalle. Creemos que un auto limpio no solo es estéticamente agradable, sino que también es una extensión de la identidad de su dueño.
                </p>
                <br />

                <h3 className="title is-5 green">¿Por qué elegirnos?</h3>
                <ul>
                    <li className='has-text-white'><strong className='green'>Experiencia:</strong> Con más de 9 años en el sector, sabemos cómo tratar cada tipo de vehículo y abordar cualquier tipo de suciedad o mancha.</li>
                    <li className='has-text-white'><strong className='green'>Compromiso con la Calidad:</strong> Nos esforzamos por superar las expectativas de nuestros clientes, ofreciendo un servicio personalizado y adaptado a sus necesidades.</li>
                    <li className='has-text-white'><strong className='green'>Atención al Detalle:</strong> Cada auto es tratado con el máximo cuidado, garantizando un acabado perfecto y un interior limpio y fresco.</li>
                    <li className='has-text-white'><strong className='green'>Apertura a la Crítica:</strong> Valoramos las opiniones de nuestros clientes y estamos siempre dispuestos a mejorar nuestros servicios basándonos en su retroalimentación.</li>
                </ul>
                <br />
                <h3 className="title is-5 green">Nuestra Misión</h3>
                <p className='has-text-white'>
                    Nuestra misión es proporcionar un servicio excepcional que no solo limpie, sino que también cuide y proteja tu vehículo. Nos alegra que consideres confiar en nosotros para mantener tu auto en las mejores condiciones. Tu satisfacción es nuestra prioridad.
                </p>
                <br />
                <h3 className="title is-5 green">Contáctanos</h3>
                <p className='has-text-white'>
                    Estamos aquí para ayudarte. No dudes en llamarnos o visitar nuestras instalaciones para conocer más sobre nuestros servicios. ¡Esperamos verte pronto!
                </p>
            </div>
        </motion.section>
    );
};



