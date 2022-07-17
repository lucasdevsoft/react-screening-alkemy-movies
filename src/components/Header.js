import React from 'react';

import { Link } from 'react-router-dom';

import Buscador from './Buscador';

function Header({ favorites }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold mb-0 h1 text-warning" to='/'>CineFlix</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link text-warning fw-semibold " to='/listado'>Listado</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link text-warning fw-semibold " to='/favoritos'>Favoritos</Link>
                            </li>
                            <li className="nav-link text-warning fw-semibold"><span to={'/favoritos'}>
                                Mis Pelis: 
                                {favorites.length > 0 && <> {favorites.length}</>}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <Buscador />
                </div>
            </nav>
        </header>
    )
    
}

export default Header;