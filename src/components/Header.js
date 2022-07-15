import React from 'react';

import { Link } from 'react-router-dom';

import Buscador from './Buscador';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand mb-0 h1" to='/'>CineFlix</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className="nav-link text-warning fw-semibold" to='/listado'>Listado</Link>
                        </div>
                    </div>
                    <Buscador />
                </div>
            </nav>
        </header>
    )
    
}

export default Header;