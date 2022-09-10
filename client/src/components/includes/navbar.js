import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg  bg-light ">
            <IconContext.Provider value={{ size: 40, color: '#0072BE' }}>
                <div className="top-bar smoothie hidden-xs">
                    <div className="container">
                        <div className="clearfix">
                            <ul className="list-inline social-links wow pull-right">
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-behance"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>

                            <div className="pull-right text-right">
                                <ul className="list-inline">
                                    <li>
                                        <div><i className="fa fa-envelope-o"></i> email@domain.com</div>
                                    </li>
                                    <li>
                                        <div className="meta-item"><i className="fa fa-mobile"></i> +44 8780 648 605</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Massah Fundation</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link to="/" className="nav-link active">La Fondation</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link active">Nos Missions</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/network" className="nav-link active">Notre Réseau</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/parteners" className="nav-link active"> Nous Rejoindre</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/novel" className="nav-link active">Actualité</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/space" className="nav-link active"><FaUserFriends /></Link>
                                <ul className="dropdown-menu">
                                    <Link to="/ founder" className="nav-link active">Vous êtes fondateur</Link>
                                    <li><hr className="dropdown-divider" /></li>
                                    <Link to="/donator" className="nav-link active">Vous êtes donateur</Link>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="/submitPage" className="nav-link active">Soumettez votre demande</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </IconContext.Provider>
        </nav>
    );

}

export default Navbar;