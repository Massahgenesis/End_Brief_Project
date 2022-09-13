import React from "react";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaTwitter, FaLinkedin, FaFacebookSquare, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';


function Footer() {
    return (

        <div>
            <IconContext.Provider value={{ size: 25 }}>
                <footer className="footer-10">
                    <div className="container">
                        <div className="row mb-5 pb-3 no-gutters">
                            <div className="col-md-4 mb-md-0 mb-4 d-flex">
                                <div className="con con-1 w-100 py-5">
                                    <div className="con-info w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="ion-ios-call"><FaMobileAlt /></span>
                                        </div>
                                        <div className="text">
                                            <span>(+228) 97052081</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-md-0 mb-4 d-flex">
                                <div className="con con-2 w-100 py-5">
                                    <div className="con-info w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="ion-ios-mail"><FaEnvelope /></span>
                                        </div>
                                        <div className="text">
                                            <span>massyndjao@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-md-0 mb-4 d-flex">
                                <div className="con con-3 w-100 py-5">
                                    <div className="con-info w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span> <FaMapMarkerAlt /></span>
                                        </div>
                                        <div className="text">
                                            <span>Lomé - Togo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-4 mb-md-0 mb-4">
                                        <h2 className="footer-heading">Fondation</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="#" className="d-block">Notre Histoire</a></li>
                                            <li><a href="#" className="d-block">Notre Equipe</a></li>
                                            <li><a href="#" className="d-block">Nos Mission</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 mb-md-0 mb-4">
                                        <h2 className="footer-heading">Réseau</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="#" className="d-block">La Maritime</a></li>
                                            <li><a href="#" className="d-block">Devenir partenaire</a></li>
                                            <li><a href="#" className="d-block">Faire un don</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 mb-md-0 mb-4">
                                        <h2 className="footer-heading">Ressource</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="#" className="d-block">Blog</a></li>
                                            <li><a href="#" className="d-block">Newsletter</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 mb-md-0 mb-4">
                                <h2 className="footer-heading">Souscrire</h2>
                                <form action="#" className="subscribe-form">
                                    <div className="form-group d-flex">
                                        <input type="text" className="form-control rounded-left" placeholder="Entrez votre adress mail" />
                                        <button type="submit" className="form-control submit rounded-right">Souscrire</button>
                                    </div>
                                    <span className="subheading">S'abonner pour récevoir des nouvelles</span>
                                </form>
                            </div>
                        </div>
                        <div className="row mt-5 pt-4 border-top">
                            <div className="col-md-6 col-lg-8 mb-md-0 mb-4">
                                <p className="copyright mb-0">
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved. | Massah <i className="ion-ios-heart" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-4 text-md-right">
                                <ul className="ftco-footer-social p-0">
                                    <li className="ftco-animate"><a target="_blank" href="https://twitter.com/home" rel="noreferrer" value="link" data-toggle="tooltip" data-placement="top" title="Facebook"><span><FaTwitter /></span></a></li>
                                    <li className="ftco-animate"><a target="_blank" href="https://web.facebook.com/" rel="noreferrer" value="link" data-toggle="tooltip" data-placement="top" title="Facebook"><span><FaFacebookSquare /></span></a></li>
                                    <li className="ftco-animate"><a target="_blank" href="https://www.linkedin.com/feed/" rel="noreferrer" value="link" data-toggle="tooltip" data-placement="top" title="Linkedin"><span><FaLinkedin /></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </IconContext.Provider>
            
        </div>

    );
}

export default Footer;