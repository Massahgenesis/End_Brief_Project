import React from 'react';

// import equipe from "../images/femmes_enceinte/equipe.webp";

function Parteners() {

    return (
        <div>
            <section className="py-" style={{ background: "#0072BE", color: "white" }}>
                <div className="container">
                    <div className="row p-3">
                        <div className="col-md-4 my-auto">
                            <h4>Nous réjoindre</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end" style={{ fontFamily: "poppins" }}>
                                La Fondation / Nous réjoindre
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-c-light mt-5">
                <div className="container">
                    <h4 className="main-heading">Devenir parténaire</h4>
                    <div className="underline "></div>
                </div>
                <div className='container'>
                    <div className='row membre '>
                        {/* <div className='col-md-4  '>
                            <img src={equipe} className="img-fluid" alt="..." />
                        </div>  */}
                        <div className='col-md-12 text-center '>
                            <p className='  ' style={{ fontFamily: "poppins", marginTop: "5px", fontSize: "22px" }}>
                                IL est certes vrai que nous avons opter pour ce chemin qui est celui de redonner le goût de vivre
                                à toutes ces jeunes mères célibataires, sinon à toutes les mères célibataires qui font une depression du fait
                                compte tenu des réalités qu'elle vivent aux quotidiens; Conséquences certaines perdent la vie avant d'arriver à terme de leur grossesses , et d'autres ce sont des troubles
                                psychologiques. Aussi il est évident que cette situation impacte aussi sur l'avenir des enfants que ces dames portes
                                car non seulement ils viennent déjà dans une famille monoparentale, avec l'instabilité mentale de la mère, l'éducation que cet enfant réçoit de cette
                                dernière n'est pas souvent de bonne qualité; Il y aura un manque à combler chez l'enfant. De même sur le plan scolaire, bon nombre de ces enfants
                                n'évoluent pas comme il le faut. Egalement , il est rélévé que certains de ces enfants finissent par, sans aucun suivi
                                réelle, abandonner l'école et même la maison, élisant ainsi domicile dans la rue. Mais nous avons bésoin de vous
                                , de avons bésoin de votre soutien, de votre savoir être et savoir faire, ces femmes dépressives qui traversent une période
                                sombre de leurs vies ont besoin de vous. Ensemble nous pouvons écrire une nouvelle histoire dans la vie de ces femmes et enfants. <br />
                                Afin de mieux servir ces mères célibataires, nous avons besoin de ressources humaines et aussi des dons en nature et numéraires, vous pouvez postulez en remplissant les formulaire
                                ci-dessous.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-100  shadow mb-3 bg-c-light"  >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}> Infomation Générale</h3>

                                                <div className="mb-4 pb-2">
                                                    <select type="text" id="form3Examplev3" className="form-control form-control-lg select">
                                                        <option value="1">veuillez choisir s'il vous plaît</option>
                                                        <option value="2">Bénévolat</option>
                                                        <option value="3">Don</option>
                                                        <option value="4">Partenariat</option>
                                                    </select>
                                                    <label className="form-label" for="form3Examplev2">Vous postulez pour quelle catégorie?</label>
                                                </div>

                                                <div className="mb-4 pb-2">
                                                    <select type="text" id="form3Examplev3" className="form-control form-control-lg select">
                                                        <option value="1">veuillez choisir s'il vous plaît</option>
                                                        <option value="2">Particulier</option>
                                                        <option value="3">Association</option>
                                                        <option value="4">ONG</option>
                                                    </select>
                                                    <label className="form-label" for="form3Examplev2">Votre identité juridique</label>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Examplev2" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form3Examplev2">Nom</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Examplev3" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form3Examplev3">Prénom</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row'>

                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Examplev4" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form3Examplev4">Nationalité</label>
                                                        </div>
                                                    </div>
                                                    <div className=" col-md-6 mb-4 pb-2 ">
                                                        <select className=" form-control form-control-lg">
                                                            <option value="1">veuillez choisir s'il vous plaît</option>
                                                            <option value="2">Féminin</option>
                                                            <option value="2">Masculin</option>
                                                        </select>
                                                        <label className="form-label" for="form3Examplev4">Genre</label>
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Examplev2" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form3Examplev2">Domaine</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Examplev3" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form3Examplev3">Titre</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <select className="form-control form-control-lg">
                                                            <option value="1">veuillez choisir s'il vous plaît</option>
                                                            <option value="2">Employé(e) à temps plein</option>
                                                            <option value="3">Employé(e) à temps partiel</option>
                                                            <option value="4">Indépendant(e) </option>
                                                            <option value="5">Entrepreneur(e) </option>
                                                            <option value="6">Etudiant(e) </option>
                                                        </select>
                                                        <label className="form-label" for="form3Examplev5">Quel est votre situation professionnelle actuelle?</label>
                                                    </div>
                                                    <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Examplev5" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form3Examplev5">Nombre d'années d'expérience professionnelle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-6  text-white" style={{ background: "#0072BE", fontSize: "20px", fontFamily: "poppins", }}>
                                            <div className="p-5">
                                                <h3 className="fw-normal mb-5">Détails de contact</h3>

                                                <div className="mb-4 pb-2">
                                                    <div className="form-outline form-white">
                                                        <input type="text" id="form3Examplea6" className="form-control form-control-lg" />
                                                        <label className="form-label" for="form3Examplea6">Pays de résidence actuelle</label>
                                                    </div>
                                                </div>

                                                <div className="mb-4 pb-2">
                                                    <div className="form-outline form-white">
                                                        <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                        <label className="form-label" for="form3Examplea2">Ville</label>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-5 mb-4 pb-2">

                                                        <div className="form-outline form-white">
                                                            <input type="text" id="form3Examplea7" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form3Examplea7">Code +</label>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-7 mb-4 pb-2">

                                                        <div className="form-outline form-white">
                                                            <input type="text" id="form3Examplea8" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form3Examplea8">Numéro de téléphone</label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <div className="form-outline form-white">
                                                        <input type="text" id="form3Examplea9" className="form-control form-control-lg" />
                                                        <label className="form-label" for="form3Examplea9">Votre Email</label>
                                                    </div>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                                                    <label className="form-label" for="form4Example3">Dites nous vos motivations à vouloir agir avec nous !</label>
                                                </div>

                                                <div className="form-check d-flex justify-content-start mb-4 pb-3">
                                                    <input className="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label text-white" for="form2Example3">
                                                        I do accept the <a href="#!" className="text-white"><u>Terms and Conditions</u></a> of your
                                                        site.
                                                    </label>
                                                </div>

                                                <button type="button" className="btn  btn-lg ms-2"style={{ background: "#F46A21", color: "white" }}
                                                    data-mdb-ripple-color="dark">Envoyez</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div >
    );

}

export default Parteners;