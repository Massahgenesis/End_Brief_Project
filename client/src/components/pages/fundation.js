import React from "react";
import Sliders from "../includes/sliders";
import { Link } from "react-router-dom";
import psy from "../images/femmes_enceinte/psy.webp";
import mereenfant from "../images/femmes_enceinte/mereenfant.jpg";
import rencontre2 from "../images/femmes_enceinte/rencontre2.jpg";
import maritime2 from "../images/femmes_enceinte/maritime2.jpg";
import Actu from "./includes/events";
import "../../App.css";




function Founder() {

    return (
        <div>

            <Sliders />



            <section className="our-mission border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading ">
                                Nos Missions
                            </h3>
                            <div className="underline mx-auto"></div>
                            <p className="pb-20 mb-5"> Quand bien même la santé mentale jeune future mère
                                est une priorité pour nous, celle des mères célibataires n'en est pas moindre pour nous même si nous ne mettons pas l'accent dessus. En effet nous prévoyons un programme de
                                soutien également aux mères célibataires. Mis à part le soutien psychologique nous avons à coeur d'accompagnez ces femmes professionnellement parlant pour un meilleur
                                épanouissement et pour se faire nous sommes contitués d'une équipe restreinte mais déterminée et éfficace.
                            </p>
                            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <img src={psy} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 classNames="card-title">Soutien psychologique</h5>
                                            <p className="card-text">
                                                La future mère au vu de son état et confrontée aux réalités, a besoin d'un soutien ...
                                            </p>
                                            <Link to="/projects" className="btn btn-link">Lire plus</Link>
                                        </div>
                                    </div>
                                    <div className="color"></div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <img src={mereenfant} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Bien-être mental et suivi</h5>
                                            <p className="card-text">
                                                Aussi bien pendant la grossesse,qu'apres la jeune fille a toujours besoin d'être soutenu ...
                                            </p>
                                            <Link to="/projects" className="btn btn-link">Lire plus</Link>
                                        </div>
                                        <div className="color"></div>
                                    </div>
                                </div>
                                <div classNames="col-md-4">
                                    <div className="card shadow">
                                        <img src={rencontre2} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Rencontre et sensibilisation</h5>
                                            <p className="card-text">
                                                Mise à part la jeune fille mère,notre programme prends en compte la mère célibataire...
                                            </p>
                                            <Link to="/projects" className="btn btn-link">Lire plus</Link>
                                        </div>
                                        <div className="color"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-network mb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading ">
                                Notre réseau
                            </h3>
                            <div className="underline mx-auto font-family:poppins"></div>
                            <p className="reseau">
                                Selon des récherches récents fait par le ministère de l'action socialen.,khk,knr,,krijtueijjrthijtrejhnjhbbbbbbjjjjjjnjj
                                rjthehutrhrfujfnruiisutjhtiu(tk(jhutrhrrhrjrhjhuooiiljiojuhtjjiijihtjytyjyhyhijjbnkjnkjnjgfikghnkh
                                jhjkhiytthjjkygkhkkjhgkgjhkkgkkggjhkjkkkk))fhfffjfjfkrkfkgn,gf,ytroitngo^protjrtjgfsfdfvhgdhjgdhjiurtjhbrfbrdeuhuhbrthb
                                fhjtrugbnjvbhjjnknfgkngfggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
                            </p>
                        </div>
                        <div>
                            <img src={maritime2} className="rounded mx-auto d-block h-300 w-75 mb-5 mt-5" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="region  text-center">
                    <p>
                        <h3 className="maritime">La région maritime, zone primaire de nos activités</h3>
                    </p>
                    <Link to="/network" style={{ color: "#F46A21" }} className="btn bg-light shadow">Découvrir</Link>
                </div>
            </section>
            <section className="join-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center  mt-30">
                            <h3 className="main-heading ">
                                Nous Réjoindre
                            </h3>
                            <div className="underline mx-auto font-family:poppins"></div>
                        </div>
                        <p className="col-md-12 text-center">
                            Tous autant que nous sommes, nous avons toujours quelques choses à offrir. quelques soit vos compétences votre rang social,
                            vous pouvez si vous le voulez de redonner vie à ces femmes par un mot,un geste, un sourire etc... Réjoignez nous en vue d'oeuvrer ensemble pour un monde meilleur
                        </p>
                        <div className="help mt-5">
                            <div className="equipe1">

                                <div className="soutenir">
                                    <h1>REJOIGNEZ NOTRE EQUIPE <br /> EN DEVENANT BENEVOLE</h1>
                                    <Link to="/parteners" style={{ background: "#F46A21", color: "white" }} className="btn btn shadow">Découvrir</Link>
                                </div>
                            </div>
                            <div className="equipe2">
                                <div className="soutenir ">
                                    <h1>SOUTENEZ NOTRE CAUSE <br />EN FAISANT UN DON</h1>
                                    <Link to="/parteners" style={{ background: "#F46A21", color: "white" }} className="btn btn shadow">Découvrir</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            < Actu />

            <section className="give">
                <div className="region  text-center mb-3" >
                    <p>
                        <h3 className="maritime">Agissez avec nous !!!</h3>
                    </p>
                    <Link to="/submitPage" style={{ color: "#F46A21" }} className="btn bg-light shadow">FAITES UN DON</Link>
                </div>
            </section>

        </div>
    );
}

export default Founder;