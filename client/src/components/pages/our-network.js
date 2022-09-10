import React from "react";
import maritime2 from "../images/femmes_enceinte/maritime2.jpg";
import { Link } from "react-router-dom"

function Network() {

    return (
        <div >
            <section className="py-" style={{ background: "#0072BE", color: "white" }}>

                <div className="container">
                    <div className="row p-3">
                        <div className="col-md-4 my-auto">
                            <h4>Notre Réseau</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end" style={{ fontFamily: "poppins" }}>
                                La Fondation / Notre Réseau
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-c-light mt-5">
                <div className="container">
                    <h4 className="main-heading">Notre Réseau</h4>
                    <div className="underline "></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <p className="mb-5" style={{ fontFamily: "poppins", fontSize: "20px" }}>
                                Des études menées par certains journaux et magazine montre que de nos jours les familles monoparentales
                                est plus que jamais une réalités et dont le taux ne cesse d'augmenter pour plusieurs raisons. Alors notre réseau va de lomé à cinkassé.
                                Autrement dit, notre missions va couvrir les cinq régions du Togo : <b>La région des savanes, la région de la kara, la région de la
                                    centrale, la région des plateaux et la région maritime.</b> <br /> Mais dans un premier temps au vu du nombres sans cesses croissant
                                des jeunes mères célibataires dans la capitale togolaise, c'est-à-dire à lomé, nos activités vont se centrer dans la capitale et ses environs
                                et par la suite s'étendre sur toute l'étendue du térritoire nationale.

                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row shadow">
                            <div className="col-md-6 mb-5">
                                <img src={maritime2} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-6 aligned flex item mt-5">
                                <h2 className="" style={{ color: "#0072BE", fontFamily: "roboto slab", fontSize: "px" }}> Région maritime</h2>
                                <p style={{ fontFamily: "poppins", fontSize: "20px" }}> Zone primaire de nos activités; Elle concerne plus précisement la ville de lomé, aneho, vogan,
                                    tsévié, kévé et les autres villes environnantes.</p>
                            </div>
                        </div>
                        <div className="underline w-100 " style={{ background: "#0072BE", height: "20px" }}></div>
                        <div className="row mb-3 me-2 ">
                            <div className="col-md-6 region1 shadow">
                                <h2 className="plat"> La région des plateaux</h2>
                            </div>
                            <div className="col-md-6 aligned flex item region2 shadow">
                                <h2 className="plat">La région centrale</h2>
                            </div>

                        </div>
                        <div className="row mb-3 me-2 ">
                            <div className="col-md-6 region3 shadow">
                                <h2 className="plat w-100 align-items-end"> La région de la kara</h2>
                            </div>
                            <div className="col-md-6 aligned flex item region4 shadow">
                                <h2 className="plat w-100">La région des savanes</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="give">
                <div className="region  text-center mb-3" >
                    <p>
                        <h3 className="maritime">Avez- besoin d'être écouté ?</h3>
                    </p>
                    <Link to="/submitPage" style={{ color: "#F46A21" }} className="btn bg-light shadow">Contactez nous</Link>
                </div>
            </section>
        </div>
    );

}

export default Network;