import React from 'react'
import { } from "module";

export const Home = () => {
    return (
        <section className="hero is-info is-large custom-hero" >

            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title">¡Bienvenido a tu Autolavado Express!</p>
                    <p className="subtitle">Tu auto limpio, mientras disfrutas de una bebida fría
                    </p>
                </div>
            </div>

            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                            <li className="is-active">
                                <a>Overview</a>
                            </li>
                            <li>
                                <a>Modifiers</a>
                            </li>
                            <li>
                                <a>Grid</a>
                            </li>
                            <li>
                                <a>Elements</a>
                            </li>
                            <li>
                                <a>Components</a>
                            </li>
                            <li>
                                <a>Layout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}

