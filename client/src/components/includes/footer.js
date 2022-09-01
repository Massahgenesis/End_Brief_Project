import React from "react";
import { Link } from 'react-router-dom';
import {FaMapMarkerAlt, FaTwitter, FaLinkedin, FaFacebookSquare, FaEnvelope, FaMobileAlt} from 'react-icons/fa';
import {IconContext} from 'react-icons';


function Footer() {
    return (
        
        <div>
            <IconContext.Provider value={{ size:25}}>
            <footer class="footer-10">
                <div class="container">
                    <div class="row mb-5 pb-3 no-gutters">
                        <div class="col-md-4 mb-md-0 mb-4 d-flex">
                            <div class="con con-1 w-100 py-5">
                                <div class="con-info w-100 text-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="ion-ios-call"><FaMobileAlt/></span>
                                    </div>
                                    <div class="text">
                                        <span>(+228) 97052081</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-md-0 mb-4 d-flex">
                            <div class="con con-2 w-100 py-5">
                                <div class="con-info w-100 text-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="ion-ios-mail"><FaEnvelope/></span>
                                    </div>
                                    <div class="text">
                                        <span>massyndjao@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-md-0 mb-4 d-flex">
                            <div class="con con-3 w-100 py-5">
                                <div class="con-info w-100 text-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span> <FaMapMarkerAlt/></span>
                                    </div>
                                    <div class="text">
                                        <span>Lomé - Togo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-4 mb-md-0 mb-4">
                                    <h2 class="footer-heading">Fondation</h2>
                                    <ul class="list-unstyled">
                                        <li><a href="#" class="d-block">Notre Histoire</a></li>
                                        <li><a href="#" class="d-block">Notre Equipe</a></li>
                                        <li><a href="#" class="d-block">Nos Mission</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-md-0 mb-4">
                                    <h2 class="footer-heading">Réseau</h2>
                                    <ul class="list-unstyled">
                                        <li><a href="#" class="d-block">La Maritime</a></li>
                                        <li><a href="#" class="d-block">Devenir partenaire</a></li>
                                        <li><a href="#" class="d-block">Faire un don</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-md-0 mb-4">
                                    <h2 class="footer-heading">Ressource</h2>
                                    <ul class="list-unstyled">
                                        <li><a href="#" class="d-block">Blog</a></li>
                                        <li><a href="#" class="d-block">Newsletter</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 mb-md-0 mb-4">
                            <h2 class="footer-heading">Souscrire</h2>
                            <form action="#" class="subscribe-form">
                                <div class="form-group d-flex">
                                    <input type="text" class="form-control rounded-left" placeholder="Entrez votre adress mail" />
                                    <button type="submit" class="form-control submit rounded-right">Souscrire</button>
                                </div>
                                <span class="subheading">S'abonner pour récevoir des nouvelles</span>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-5 pt-4 border-top">
                        <div class="col-md-6 col-lg-8 mb-md-0 mb-4">
                            <p class="copyright mb-0">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved. | Massah <i class="ion-ios-heart" aria-hidden="true"></i>
                            </p>
                        </div>
                        <div class="col-md-6 col-lg-4 text-md-right">
                            <ul class="ftco-footer-social p-0">
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span ><FaTwitter/></span></a></li>
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span><FaFacebookSquare/></span></a></li>
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Linkedin"><span><FaLinkedin/></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            </IconContext.Provider>
            {/* <script src="js/jquery.min.js"></script>
            <script src="js/popper.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/main.js"></script> */}

        </div>
        
    );
}

export default Footer;