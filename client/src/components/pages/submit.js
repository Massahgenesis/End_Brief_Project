import React, { useState } from "react";
import axios from 'axios';
import seules from "../images/femmes_enceinte/seules.jpg"

let SubmitPage =() => {


    let [state ,setState] = useState ( {
        loading : false,
        user : {
            name:"",
            firstName: "",
            age: "",
            phone: "",
            mail:"",
            adress:"",
            job:"",
            situation:"",
            region:"",
            town:"",
            message:"",
                 
         },

    });

    let updateInput = (e) =>{
        setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name] : e.target.value
            }
        });
    };


    let submitForm = async(e)=>{

        e.preventDefault();
        console.log(state);
        await axios.post('http://localhost:8000/api/form/member',state)
        .then((res)=> {
            console.log(res)
            setState({
                user : {
                    name:"",
                    firstName: "",
                    age: "",
                    phone: "",
                    mail:"",
                    adress:"",
                    job:"",
                    situation:"",
                    region:"",
                    town:"",
                    message:"",
                         
                 }
            })
        })
        .catch((err)=> console.log(err));

        window.location = "/"
    };

    let { user} = state;

   
    return (

        
        <div className="container">
            <section className="py-" style={{ background: "#0072BE", color: "white" }}>
                <div className="container">
                    <div className="row p-3">
                        <div className="col-md-4 my-auto">
                            <h4>Soumettre une demande</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end" style={{ fontFamily: "Poppins" }}>
                                La Fondation / Soumettre une demande
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light mt-5">
                <div className="container">
                    <h4 className="main-heading">Remplir le formulaire</h4>
                    <div className="underline "></div>
                </div>
                <p className="col-md-12 text-center mb-5" style={{ fontSize: "20px", fontFamily: "poppins" }}>
                    Avant de remplir le formulaire sous dessous, nous vous demandons de lire les r??glements et
                    dispositions de la fondation, afin d'??viter tout malentendu ou d '??ventuels conflits. Veuillez remplir ce fomrmulaire
                    de fa??on pr??cise et honn??te. D??s r??ception de formulaire, nous vous recontacterons dans les brefs d??lais
                </p>
            </section>
            <section className="h-100 mb-3 pl-5 pr-5" style={{ background: "#0072BE", fontSize: "18px", fontFamily: "poppins" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src={seules} className="img-fluid h-100" alt="..." />
                                        
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Formulaire de d??mande d'assistance</h3>
                                            
                                            <form action="" method="post" onSubmit={submitForm}>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="name">Nom</label>
                                                            <input type="text" 
                                                            name="name" 
                                                            className="form-control form-control-lg"
                                                            value={user.name}
                                                            onChange = {updateInput}
                                                            required = {true} 
                                                                />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="firstName">Pr??noms</label>
                                                            <input 
                                                            type="text" 
                                                            name="firstName" 
                                                            className="form-control form-control-lg" 
                                                            value={user.firstName}
                                                            onChange = {updateInput}
                                                            required =  {true} 
                                                                />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="age">Age</label>
                                                            <input 
                                                            type="text" 
                                                            name="age" 
                                                            className="form-control form-control-lg"
                                                            value={user.age}
                                                            onChange = {updateInput}
                                                            required = {true}  
                                                            />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="phone">Num??ro de t??l??phone</label>
                                                            <input 
                                                            type="text" 
                                                            name="phone" 
                                                            className="form-control form-control-lg"
                                                            value={user.phone}
                                                            onChange = {updateInput}
                                                            required = {true}  
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="mail">Email</label>
                                                    <input 
                                                    type="text" 
                                                    name="mail" 
                                                    className="form-control form-control-lg"
                                                    value={user.mail}
                                                    onChange = {updateInput}
                                                   
                                                    />

                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="adress">Adresse</label>
                                                    <input 
                                                    type="text" 
                                                    name="adress" 
                                                    className="form-control form-control-lg"
                                                    value={user.adress}           
                                                    onChange = {updateInput}      
                                                    required =  {true}  />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="job">Profession</label>
                                                    <input 
                                                    type="text" 
                                                    name="job" 
                                                    className="form-control form-control-lg"
                                                    value={user.job}
                                                    onChange = {updateInput}
                                                    required =  {true}  />
                                                </div>

                                                <div className=" mb-4 ">

                                                    <label className="form-label" htmlFor="situation">Quels est votre ??tat actuelle?(Cliquez pour choisir)</label>

                                                    <select 
                                                    className="form-control form-control-lg" 
                                                    name="situation" 
                                                    value={user.situation}
                                                    onChange = {updateInput}
                                                    required =  {true}  
                                                    style={{ fontSize:"14px" }}>

                                                        <option >veuillez choisir s'il vous pla??t</option>
                                                        <option value="Enceinte et seule">Enceinte et seule</option>
                                                        <option value="Enceinte, seule et d??pressive">Enceinte, seule et d??pressive</option>
                                                        <option value="Enceinte, mari?? mais d??pressive">Enceinte, mari?? mais d??pressive</option>
                                                        <option value="M??re c??libataire">M??re c??libataire</option>
                                                        <option value="M??re c??libataire et d??pressive">M??re c??libataire et d??pressive</option>
                                                    </select>
                                                    

                                                </div>

                                                <div className="row">

                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label" htmlFor="region" >R??gion </label>
                                                        <select 
                                                        className="form-control form-control-lg"  
                                                        name="region"
                                                        value={user.region}
                                                        onChange = {updateInput}
                                                        required =  {true} 
                                                        style={{ fontSize:"14px" }}>

                                                            <option >veuillez choisir s'il vous pla??t</option>
                                                            <option value="Maritime">Maritime</option>
                                                            <option value="Plateaux">Plateaux</option>
                                                            <option value="Centrale">Centrale</option>
                                                            <option value="Kara">Kara</option>
                                                            <option value="Savanes">Savanes</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-md-6 mb-4">

                                                        <label className="form-label" htmlFor="town">Ville </label>
                                                        <select 
                                                        className="form-control form-control-lg" 
                                                        name="town" 
                                                        value={user.town}
                                                        onChange = {updateInput}
                                                        required =  {true} 
                                                        style={{ fontSize:"14px" }}>

                                                            <option >veuillez choisir s'il vous pla??t</option>
                                                            <option value="Lom??">Lom??</option>
                                                            <option value="Sokod??">Sokod??</option>
                                                            <option value="kara">kara</option>
                                                            <option value="Kpalim??">Kpalim??</option>
                                                            <option value="Atakpam??">Atakpam??</option>
                                                            <option value="Bassar">Bassar</option>
                                                            <option value="Ts??vi??">Ts??vi??</option>
                                                            <option value="An??ho">An??ho</option>
                                                            <option value="Mango">Mango</option>
                                                            <option value="Dapaong">Dapaong</option>
                                                            <option value="Tchamba">Tchamba</option>
                                                            <option value="Niamtougou">Niamtougou</option>
                                                            <option value="Bafilo">Bafilo</option>
                                                            <option value="Nots??">Nots??</option>
                                                            <option value="Sotouboua">Sotouboua</option>
                                                            <option value="Vogan">Vogan</option>
                                                            <option value="Badou">Badou</option>
                                                            <option value="Biankouri">Biankouri</option>
                                                            <option value="Tabligbo">Tabligbo</option>
                                                            <option value="Kand??">Kand??</option>
                                                            <option value="Amlam??">Amlam??</option>
                                                            <option value="Galangachi">Galangachi</option>
                                                            <option value="Kpagouda">Kpagouda</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="message" >Message</label>
                                                    <textarea 
                                                    className="form-control" 
                                                    name="message" 
                                                    rows="10" 
                                                    value={user.message}
                                                    onChange = {updateInput}
                                                    required =  {true} ></textarea>
                                                </div>

                                                <div className=" pt-3">
                                                    <button type="submit" className="btn btn btn-lg ms-2"   style={{ background: "#F46A21", color: "white" }}>Envoyez</button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SubmitPage;