import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebookSquare, FaPhoneAlt, FaSistrix } from 'react-icons/fa';
import { } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Navbar() {

    return (

        <div>
            <div className="border-bottom  bg-c-light"   >
                <div className="container">
                    
                        <div className=" d-flex ">
                            <div className="p-2 flex-grow-1">
                                <p className="mt-3">
                                    <FaPhoneAlt size="25px" color="#0072BE"/> Contact : (+228) 97052081
                                </p>
                            </div>
                            <div className=' p-2 mt-3'>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn" type="submit" ><FaSistrix size="20px" color="#0072BE" /></button>
                                </form>
                            </div>
                            <div className="p-2 mt-4" >
                                <a target="_blank" className='' href="https://web.facebook.com/" rel="noreferrer" value="link" data-toggle="tooltip" data-placement="top" title="Facebook"><span><FaFacebookSquare size="27px" color="#0072BE" /></span></a>
                                <a target="_blank" className='ms-3' href="https://www.linkedin.com/feed/" rel="noreferrer" value="link" data-toggle="tooltip" data-placement="top" title="Linkedin"><span><FaLinkedin size="27px" color="#0072BE"/></span></a>
                                <a target="_blank" className='ms-3' href="https://twitter.com/home" rel="noreferrer" value="link" data-toggle="tooltip" data-placement="top" title="Facebook"><span><FaTwitter size="27px" color="#0072BE" /></span></a>
                                <div id="google_translate_element"></div>

                            </div>
                        </div>
                    
                </div>
            </div>

            <nav className="navbar navbar-expand-lg  bg-c-light " style={{ color: "#0072BE" }}>
                <IconContext.Provider value={{ size: 40, color: '#0072BE' }}>

                    <div className="container" >
                        <Link to="/" className="navbar-brand " >Massah Fundation</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link to="/" className="nav-link " style={{ color: "#0072BE", fontSize: "19px" }}>La Fondation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projects" className="nav-link " style={{ color: "#0072BE", fontSize: "19px" }}>Nos Missions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/network" className="nav-link " style={{ color: "#0072BE", fontSize: "19px" }}>Notre Réseau</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/parteners" className="nav-link " style={{ color: "#0072BE", fontSize: "19px" }}> Nous Rejoindre</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/novel" className="nav-link " style={{ color: "#0072BE", fontSize: "19px" }}>Actualité</Link>
                                </li>
                            </ul>
                            <Link to="/submitPage" style={{ background: "#F46A21", color: "white", fontSize: "20px", marginLeft: "90px" }} className="btn btn shadow me-auto" >Soumettez votre demande</Link>

                        </div>
                    </div>
                </IconContext.Provider>
            </nav>
        </div>
    );

}

export default Navbar;