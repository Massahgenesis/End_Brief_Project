import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        
        <nav class="navbar navbar-expand-lg fixed-top bg-light">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand">Massah Fundation</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <Link to="/" class="nav-link active">La Fondation</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/projects" class="nav-link active">Nos Projets</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/network" class="nav-link active">Notre Réseau</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/parteners" class="nav-link active"> Nous Rejoindre</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/novel" class="nav-link active">Actualité</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/space" class="nav-link active">FOND</Link>
                            <ul class="dropdown-menu">
                                <Link to="/ founder" class="nav-link active">Vous êtes fondateur</Link>
                                <li><hr class="dropdown-divider" /></li>
                                <Link to="/donator" class="nav-link active">Vous êtes donateur</Link>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button type="button" class="btn btn-danger">Faire un don</button>
                </div>
            </div>
        </nav>
    );

}

export default Navbar;