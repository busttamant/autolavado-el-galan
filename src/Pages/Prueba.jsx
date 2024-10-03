import React from 'react';

const Servicios = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Nuestros Servicios</h2>

        {/* Sección de Servicios */}
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <p className="title">Lavado de Carrocería</p>
                <p className="content">
                  Utilizamos espuma autobrillante y ducha marina para un acabado perfecto.
                </p>
                <p><strong>Precio:</strong> $250 MXN</p>
              </div>
            </div>
          </div>

          <div className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <p className="title">Lavado de Rines</p>
                <p className="content">
                  Limpieza profunda de rines, eliminando grasa y polvo de frenos.
                </p>
                <p><strong>Precio:</strong> $100 MXN</p>
              </div>
            </div>
          </div>

          <div className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <p className="title">Lavado de Motor</p>
                <p className="content">
                  Limpieza profesional del motor con productos específicos.
                </p>
                <p><strong>Precio:</strong> $300 MXN</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Productos */}
        <h2 className="title" style={{ marginTop: '2rem' }}>Productos</h2>
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <p className="title">Cerveza Polar</p>
                <p className="content">
                  Refresca tu espera con una cerveza bien fría. Disfruta mientras esperas tu auto.
                </p>
                <p><strong>Precio:</strong> $50 MXN</p>
              </div>
            </div>
          </div>

          <div className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <p className="title">Refrescos Pepsi Cola</p>
                <p className="content">
                  Tenemos refrescos disponibles para que disfrutes durante la espera.
                </p>
                <p><strong>Precio:</strong> $25 MXN</p>
              </div>
            </div>
          </div>

          <div className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <p className="title">Ambientadores en Forma de Pino</p>
                <p className="content">
                  Elige entre una variedad de ambientadores para dejar tu auto con un aroma fresco.
                </p>
                <p><strong>Precio:</strong> $30 MXN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
