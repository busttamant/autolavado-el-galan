import React from 'react'

export const Servicios = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="title">Nuestros Servicios:</h2>
                <h2 className="subtitle">
                    Todos nuestros servicios de limpieza y cuidado automotriz tienen precios ajustados según el tamaño del vehículo y el nivel de suciedad.
                </h2>
                <div className="columns is-multiline">

                    <div className="column is-one-third">
                        <div className="card" style={{ height: "500px" }}>
                            <div className="card-image">
                                <figure className="image">
                                    <img src="/src/assets/lavado carroceria.jpg" style={{ objectFit: "cover", height: "300px" }} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="title">Lavado de Carrocería</p>
                                <p className="content">
                                    Utilizamos espuma autobrillante para limpiar la carrocería, seguida de una ducha marina que deja un acabado impecable y protección adicional contra el polvo y suciedad.
                                </p>



                            </div>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="card" style={{ height: "500px" }}>
                            <div className="card-image">
                                <figure className="image">
                                    <img src="/src/assets/lavado-interior.jpg" style={{ objectFit: "cover", height: "300px" }} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="title">Lavado Interior</p>
                                <p className="content">
                                    Aspirado de alfombras y asientos, limpieza de plásticos, y aplicación de abrillantador para dejar el interior de tu auto como nuevo.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="column is-one-third">
                        <div className="card" style={{ height: "500px" }}>
                            <div className="card-image">
                                <figure className="image">
                                    <img src="/src/assets/lavado-motor.jpg" style={{ objectFit: "cover", height: "300px" }} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="title">Lavado de Motor</p>
                                <p className="content">
                                    Limpieza profesional del motor utilizando productos específicos que eliminan grasa y suciedad, cuidando los componentes eléctricos del vehículo.
                                </p>

                            </div>
                        </div>
                    </div>



                    {/* utilize este div para centrar las dos ultimas cartas */}
                    <div className="columns is-centered">
                        <div className="column is-one-third">

                            <div className="card" style={{ height: "500px" }}>
                                <div className="card-image">
                                    <figure className="image">
                                        <img src="/src/assets/lavado-tapiceria.jpg" style={{ objectFit: "cover", height: "300px" }} />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <p className="title">Limpieza de Tapicerías</p>
                                    <p className="content">
                                        Eliminación de manchas difíciles en tapicerías de tela y cuero. Utilizamos productos especializados que no dañan las superficies.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="column is-one-third">
                            <div className="card" style={{ height: "500px" }}>
                                <div className="card-image">
                                    <figure className="image">
                                        <img src="/src/assets/lavado-completo.jpg" style={{ objectFit: "cover", height: "300px" }} />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <p className="title">Lavado Completo</p>
                                    <p className="content">
                                        Incluye lavado exterior con espuma autobrillante, lavado de rines, interior con aspirado y abrillantado, y limpieza profunda de tapicerías. ¡El servicio más completo!
                                    </p>

                                </div>
                            </div>
                        </div>


                    </div>

                    <section class="hero is-small has-background-black-ter	 has-text-white">
                        <div class="hero-body">
                            <div className="content ">
                                <h3 className='has-text-white'>Nuestros precios pueden variar dependiendo del tamaño del automóvil, la cantidad de trabajo requerido, y el tipo de limpieza o tratamiento.</h3>
                                <p>
                                    Por favor, contáctanos para una cotización específica. Nos aseguramos de que tu auto quede impecable, utilizando productos y técnicas adecuadas para cada superficie.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>



                {/* Sección de Productos */}
                <h2 className="title" style={{ marginTop: '2rem' }}>Productos</h2>
                <div className="columns is-multiline">
                    <div className="column is-one-third">
                        <div className="card" style={{ height: "500px" }}>
                            <div className="card-image">
                                <figure className="image">
                                    <img src="https://manobeto.com/wp-content/uploads/2022/10/BETO-low-4.jpg" style={{ objectFit: "cover", height: "300px" }} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="title">Cerveza Polar</p>
                                <p className="content">
                                    Refresca tu espera con una cerveza bien fría. Disfruta mientras esperas tu auto.
                                </p>
                                <p><strong>Precio:</strong> 1,5$ </p>
                            </div>
                        </div>
                    </div>

                    <div className="column is-one-third">
                        <div className="card" style={{ height: "500px" }}>
                            <div className="card-image">
                                <figure className="image">
                                    <img src="https://proexpansion.com/uploads/article/image/864/larger_coca.jpg" style={{ objectFit: "cover", height: "300px" }} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="title">Refrescos </p>
                                <p className="content">
                                    Tenemos refrescos disponibles para que disfrutes durante la espera.
                                </p>
                                <p><strong>Precio:</strong> 1,5$</p>
                            </div>
                        </div>
                    </div>

                    <div className="column is-one-third">
                        <div className="card" style={{ height: "500px" }}>
                            <div className="card-image">
                                <figure className="image">
                                    <img src="https://down-br.img.susercontent.com/file/f18d14acf14ac3470c1395ff9ef1557c" style={{ objectFit: "cover", height: "300px" }} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="title">Ambientadores</p>
                                <p className="content">
                                    Elige entre una variedad de ambientadores para dejar tu auto con un aroma fresco.
                                </p>
                                <p><strong>Precio:</strong> 2$</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
