import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Recipes Book</Link>
                    <div className="offcanvas offcanvas-start text-bg-light" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cooking">Cooking Recipes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cocktail">Cocktail Recipes</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar