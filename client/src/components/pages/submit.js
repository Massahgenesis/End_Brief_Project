import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import images2 from "../images/femmes_enceinte/images2.jpg"

function SubmitPage() {

    // const [check, setCheck] = useState()

    // function handleCheck(e) {
    //     setCheck(`${e.target.value}`)
    //     console.log(e.target.value)
    // }

    // const [inputName, setInputName] = useState()

    // function handleName(e) {
    //     setInputName(`${e.target.value}`)
    //     console.log(inputName)
    // }
    // const [inputFirstName, setInputFirtName] = useState()

    // function handleFirstName(e) {
    //     setInputFirtName(`${e.target.value}`)
    //     console.log(inputFirstName)
    // }

    // const [inputAge, setInputAge] = useState()

    // function handleAge(e) {
    //     setInputAge(`${e.target.value}`)
    //     console.log(inputAge)
    // }

    // const [inputPhone, setInputPhone] = useState()

    // function handlePhone(e) {
    //     setInputPhone(`${e.target.value}`)
    //     console.log(inputPhone)
    // }

    // const [inputMail, setInputMail] = useState()

    // function handleMail(e) {
    //     setInputMail(`${e.target.value}`)
    //     console.log(inputMail)
    // }

    // const [inputAdress, setInputAdress] = useState()

    // function handleAdress(e) {
    //     setInputAdress(`${e.target.value}`)
    //     console.log(inputAdress)
    // }

    // const [inputJob, setInputJob] = useState()

    // function handleJob(e) {
    //     setInputJob(`${e.target.value}`)
    //     console.log(inputJob)
    // }

    // const [inputMessage, setInputMessage] = useState()

    // function handleMessage(e) {
    //     setInputMessage(`${e.target.value}`)
    //     console.log(inputMessage)
    // }

    // const [select, setSelect] = useState()

    // function handleSelect(e) {
    //     setSelect(`${e.target.value}`)
    //     console.log(e.target.value)
    // }
    const [input, setInput] = useState({

        name: '',
        firstName: '',
        age: '',
        phone: '',
        mail: '',
        password: '',
        adress: '',
        job: '',
        situation: '',
        region: '',
        town: '',
        message: ''
    })

    
    const [err, setErr] = useState({

        nameErr: '',
        firstNameErr: '',
        ageErr: '',
        phoneErr: '',
        mailErr: '',
        passwordErr: '',
        adressErr: '',
        jobErr: '',
        situationErr: '',
        regionErr: '',
        townErr: '',
        messageErr: ''
    })
    const inputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const submitButton = async () => {
        if (validForm()) {
            let url = ''
            let options = {
                method: 'POST',
                url: url,
                Headers: {

                },
                data: input
            }
            try {
                let response = await axios(options)
                if (response.status == 200) {

                    toast.success("Envoyé avec Succès !");
                }

            } catch (e) {
                toast.error("Il y'a une erreur !")
            }


        } else {
            toast.error("Formulaire invalide")
        }
    }

    const validForm = () => {
        let formIsValid = true;
        const validEmail = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        setErr({
            nameErr: '',
            firstNameErr: '',
            ageErr: '',
            phoneErr: '',
            mailErr: '',
            passwordErr: '',
            adressErr: '',
            jobErr: '',
            situationErr: '',
            regionErr: '',
            townErr: '',
            messageErr: ''
        })

        if (input.name == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, nameErr: 'Veuillez entrez votre nom'
            }))
        }

        if (input.firstName == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, firstNameErr: 'Veuillez entrez votre prénom'
            }))
        }

        if (input.age == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, ageErr: 'Veuillez entrez votre âge'
            }))
        }

        if (input.phone == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, phoneErr: 'Veuillez entrez votre numéro'
            }))
        }

        if (input.mail == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, mailErr: 'Veuillez entrez votre e-mail'
            }))
        }

        if (input.mail !== '' && validEmail.test(input.mail)) {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, mailErr: 'Veuillez entrez un e-mail valide'
            }))
        }


        if (input.password == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, passwordErr: 'Veuillez entrez votre mot de passe'
            }))
        }

        if (input.adress == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, adressErr: 'Veuillez entrez votre adresse'
            }))
        }

        if (input.job == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, jobErr: 'Veuillez entrez votre profession'
            }))
        }

        if (input.situation == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, situationErr: 'Veuillez choisir'
            }))
        }

        if (input.region == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, regionErr: 'Veuillez choisir'
            }))
        }

        if (input.town == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, townErr: 'Veuillez choisir'
            }))
        }

        if (input.message == '') {
            formIsValid = false;
            setErr(prevState => ({
                ...prevState, messageErr: 'Veuillez dire en quelques mots votre situation actuelle'
            }))
        }

        return formIsValid
    }


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
                <p className="col-md-12 text-center mb-5" style={{ fontSize: "22px", fontFamily: "poppins" }}>
                    Avant de remplir le formulaire sous dessous, nous vous demandons de lire les règlements et
                    dispositions de la fondation, afin d'éviter tout malentendu ou d 'éventuels conflits. Veuillez remplir ce fomrmulaire
                    de façon précise et honnête. Dès réception de formulaire, nous vous recontacterons dans les brefs délais
                </p>
            </section>
            <section className="h-100 mb-3 pl-5 pr-5" style={{ background: "#0072BE", fontSize: "20px", fontFamily: "poppins" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src={images2} className="img-fluid h-100" alt="..." />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Formulaire de démande d'assistance</h3>
                                            <ToastContainer />
                                            <form action="" method="post">
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="name">Nom</label>
                                                            <input type="text" name="name" className="form-control form-control-lg"
                                                                value={input.name} onChange={inputHandler} />
                                                            {
                                                                err.nameErr.length > 0 && <span className="error">{err.nameErr}</span>
                                                            }

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="firstName">Prénoms</label>
                                                            <input type="text" name="firstName" className="form-control form-control-lg"
                                                                value={input.firstName} onChange={inputHandler} />
                                                            {
                                                                err.firstNameErr.length > 0 && <span className="error">{err.firstNameErr}</span>
                                                            }

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="age">Age</label>
                                                            <input type="text" name="age" className="form-control form-control-lg"
                                                                value={input.age} onChange={inputHandler} />
                                                            {
                                                                err.ageErr.length > 0 && <span className="error">{err.ageErr}</span>
                                                            }

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="phone">Numéro de téléphone</label>
                                                            <input type="text" name="phone" className="form-control form-control-lg"
                                                                value={input.phone} onChange={inputHandler} />
                                                            {
                                                                err.phoneErr.length > 0 && <span className="error">{err.phoneErr}</span>
                                                            }

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="mail">Email</label>
                                                    <input type="text" name="mail" className="form-control form-control-lg"
                                                        value={input.mail} onChange={inputHandler} />
                                                    {
                                                        err.mailErr.length > 0 && <span className="error">{err.mailErr}</span>
                                                    }

                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="password">Mot de passe</label>
                                                    <input type="text" name="password" className="form-control form-control-lg"
                                                        value={input.password} onChange={inputHandler} />
                                                    {
                                                        err.passwordErr.length > 0 && <span className="error">{err.passwordErr}</span>
                                                    }

                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="adress">Adresse</label>
                                                    <input type="text" name="adress" className="form-control form-control-lg"
                                                        value={input.adress} onChange={inputHandler} />
                                                    {
                                                        err.adressErr.length > 0 && <span className="error">{err.adressErr}</span>
                                                    }

                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="job">Profession</label>
                                                    <input type="text" name="job" className="form-control form-control-lg"
                                                        value={input.job} onChange={inputHandler} />
                                                    {
                                                        err.jobErr.length > 0 && <span className="error">{err.jobErr}</span>
                                                    }

                                                </div>

                                                <div className=" mb-4 ">

                                                    <label className="form-label" htmlFor="situation">Quels est votre état actuelle?(Cliquez pour choisir)</label>

                                                    <select className="form-control form-control-lg" value={input.situation} onChange={inputHandler} name="situation"  >


                                                        <option value="Enceinte et seule">Enceinte et seule</option>
                                                        <option value="Enceinte, seule et dépressive">Enceinte, seule et dépressive</option>
                                                        <option value="Enceinte, marié mais dépressive">Enceinte, marié mais dépressive</option>
                                                        <option value="Mère célibataire">Mère célibataire</option>
                                                        <option value="Mère célibataire et dépressive">Mère célibataire et dépressive</option>
                                                    </select>
                                                    {
                                                        err.situationErr.length > 0 && <span className="error">{err.situationErr}</span>
                                                    }

                                                </div>

                                                <div className="row">

                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label" htmlFor="region" >Région (Choisissez)</label>
                                                        <select className="form-control form-control-lg" value={input.region} onChange={inputHandler} name="region" >

                                                            <option value="Maritime">Maritime</option>
                                                            <option value="Plateaux">Plateaux</option>
                                                            <option value="Centrale">Centrale</option>
                                                            <option value="Kara">Kara</option>
                                                            <option value="Savanes">Savanes</option>
                                                        </select>
                                                        {
                                                            err.regionErr.length > 0 && <span className="error">{err.regionErr}</span>
                                                        }

                                                    </div>
                                                    <div className="col-md-6 mb-4">

                                                        <label className="form-label" htmlFor="town">Ville (Choisissez)</label>
                                                        <select className="form-control form-control-lg" name="town" value={input.town} onChange={inputHandler}>

                                                            <option value="Lomé">Lomé</option>
                                                            <option value="kara">Kara</option>
                                                            <option value="tsevié">tsevié</option>
                                                        </select>
                                                        {
                                                            err.townErr.length > 0 && <span className="error">{err.townErr}</span>
                                                        }
                                                    </div>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="message" value="">Message</label>
                                                    <textarea className="form-control" name="message" rows="10" value={input.message} onChange={inputHandler}></textarea>
                                                    {
                                                        err.messageErr.length > 0 && <span className="error">{err.messageErr}</span>
                                                    }

                                                </div>

                                                <div className=" pt-3">
                                                    <button type="button" className="btn btn btn-lg ms-2" onClick={submitButton} style={{ background: "#F46A21", color: "white" }}>Envoyez</button>
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