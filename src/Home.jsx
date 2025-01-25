import React from 'react'
import { motion } from 'framer-motion'
import '../src/Styles/styles.css'
import { ServiceCard } from './Components/ServiceCard'

export const Home = () => {
    return (
        <div>
            {/* Custom Hero Section */}
            <motion.section
                className="hero is-large home-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
            >
                <div className="hero-body">
                    <div className="container">
                        <motion.h1
                            className="title has-text-centered   home-h2 "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            Bienvenido a Autolavado El Galán
                        </motion.h1>
                        <motion.h2
                            className="subtitle has-text-centered  home-h2"
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
                        >
                            Descubre nuestros increíbles servicios de lavado
                        </motion.h2>
                    </div>
                </div>
            </motion.section>

            {/* Service Card Section */}
            <motion.section
                className="section background"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <h2
                    className="title has-text-centered mt-6 mb-6 green is-size-3"
                >
                    Nuestros Servicios
                </h2>
                <ServiceCard />
            </motion.section>
        </div>
    )
}

