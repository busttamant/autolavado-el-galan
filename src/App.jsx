import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Servicios } from './Pages/Servicios';
import { Contacto } from "./Pages/Contacto";
import { NavBar } from './Components/NavBar';
import { SobreNosotros } from './Pages/SobreNosotros';
import { Footer } from './Components/Footer';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path='/sobreNosotros' element={<SobreNosotros />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
