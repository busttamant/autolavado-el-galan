import React from "react";
import { motion } from "framer-motion";
import { Car, ShieldCheck, Sofa } from "lucide-react"; // Importa los íconos desde Lucide
import { useWindowScroll } from "@uidotdev/usehooks";

import '../Styles/styles.css'



const Card = ({ Icon, title }) => (

    <motion.div
        className="card is-rounded prueba "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        whileDrag={{ scale: 0.9, rotate: 10 }} >
        <div
            className="card-image is-flex is-justify-content-center is-align-items-center image is-5by4 "
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

    const [{ x, y }, scrollTo] = useWindowScroll();

    return (

        <div className="container ">
            <div className="columns is-multiline mb-5 is-centered ">

                <a className="column is-one-quarter " href="/servicios">
                    <Card Icon={Car}
                        title="Carrocería"
                        onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })} />
                </a>

                <a className="column is-one-quarter" href="/servicios" >
                    <Card Icon={ShieldCheck}
                        title="Motor"
                        href="/servicios"
                        onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })} />
                </a>

                <a className="column is-one-quarter" href="/servicios">
                    <Card Icon={Sofa}
                        title="Tapicería"
                        href="/servicios"
                        onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
                    />
                </a>
            </div>

            <div className="buttons is-centered">
                <motion.a
                    href="/contacto"
                    className="button is-medium "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    whileDrag={{ scale: 0.9, rotate: 10 }}
                    onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
                >
                    Contáctanos
                </motion.a>
            </div>
        </div >
    )
}


