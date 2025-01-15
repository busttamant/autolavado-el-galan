import React from "react";
import { motion } from "framer-motion";
import { Car, ShieldCheck, Sofa } from "lucide-react"; // Importa los íconos desde Lucide
import { Link } from "react-router-dom";
import '../Styles/styles.css'


const Card = ({ Icon, title }) => (
    <motion.div
        className="card is-rounded"
        style={{ height: "320px", width: "250px" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        whileDrag={{ scale: 0.9, rotate: 10 }}
        drag

    >
        <div
            className="card-image is-flex is-justify-content-center is-align-items-center image is-1by1 "
            style={{ backgroundColor: "#004aad" }}
        >
            <Icon size={80} color="#b0e05e" /> {/* Renderiza el ícono */}
        </div>
        <div className="card-content">
            <p className="title is-size-4 has-text-centered">{title}</p>

        </div>
    </motion.div>
);

export const ServiceCard = () => {
    return (
        <div className="container ">
            <div className="columns is-multiline is-centered mb-5">
                <Link to="/servicios" className="column is-one-quarter  ">
                    <Card Icon={Car} title="Carrocería" />
                </Link>
                <Link to="/servicios" className="column is-one-quarter">
                    <Card Icon={ShieldCheck} title="Motor" />
                </Link>
                <Link to="/servicios" className="column is-one-quarter">
                    <Card Icon={Sofa} title="Tapicería" />
                </Link>
            </div>
            <div className="columns is-centered">
                <div className="column is-one-quarter">
                    <Link
                        to="/contacto"
                        className="button is-large is-rounded is-outlined green has-text-weight-bold is-centered"
                    >
                        Contáctanos
                    </Link>
                </div>
            </div>
        </div>
    )
}


