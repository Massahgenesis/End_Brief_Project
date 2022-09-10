import React,{useState} from "react";
import images2 from "../images/femmes_enceinte/images2.jpg"

function SubmitPage() {

    const [check, setCheck] = useState()

    function handleCheck(e) {
        setCheck(`${e.target.value}`)
        console.log(e.target.value)
    }

    const [inputName, setInputName] = useState()

    function handleName(e) {
        setInputName(`${e.target.value}`)
        console.log(inputName)
    }
    const [inputFirstName, setInputFirtName] = useState()

    function handleFirstName(e) {
        setInputFirtName(`${e.target.value}`)
        console.log(inputFirstName)
    }

    const [inputAge, setInputAge] = useState()

    function handleAge(e) {
        setInputAge(`${e.target.value}`)
        console.log(inputAge)
    }

    const [inputPhone, setInputPhone] = useState()

    function handlePhone(e) {
        setInputPhone(`${e.target.value}`)
        console.log(inputPhone)
    }

    const [inputMail, setInputMail] = useState()

    function handleMail(e) {
        setInputMail(`${e.target.value}`)
        console.log(inputMail)
    }

    const [inputAdress, setInputAdress] = useState()

    function handleAdress(e) {
        setInputAdress(`${e.target.value}`)
        console.log(inputAdress)
    }

    const [inputJob, setInputJob] = useState()

    function handleJob(e) {
        setInputJob(`${e.target.value}`)
        console.log(inputJob)
    }

    const [inputMessage, setInputMessage] = useState()

    function handleMessage(e) {
        setInputMessage(`${e.target.value}`)
        console.log(inputMessage)
    }

    const [select, setSelect] = useState()

    function handleSelect(e) {
        setSelect(`${e.target.value}`)
        console.log(e.target.value)
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

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" name="name" className="form-control form-control-lg"
                                                        value={inputName} onChange={handleName} />
                                                        <label className="form-label" htmlFor="name">Nom</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" name="firstName" className="form-control form-control-lg"
                                                        value={inputFirstName} onChange={handleFirstName} />
                                                        <label className="form-label" htmlFor="firstName">Prénoms</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" name="age" className="form-control form-control-lg"
                                                        value={inputAge} onChange={handleAge}/>
                                                        <label className="form-label" htmlFor="age">Age</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" name="phone" className="form-control form-control-lg"
                                                        value={inputPhone} onChange={handlePhone} />
                                                        <label className="form-label" htmlFor="phone">Numéro de téléphone</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" name="mail" className="form-control form-control-lg"
                                                value={inputMail} onChange={handleMail}/>
                                                <label className="form-label" htmlFor="mail">Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" name="adress" className="form-control form-control-lg"
                                                value={inputAdress} onChange={handleAdress} />
                                                <label className="form-label" htmlFor="adress">Adresse</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" name="job" className="form-control form-control-lg"
                                                value={inputJob} onChange={handleJob} />
                                                <label className="form-label" htmlFor="job">Profession</label>
                                            </div>

                                            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                                <h6 className="mb-0 me-4" >Situation actuelle: </h6>

                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input className="form-check-input" type="radio" name="situation"
                                                        value="Enceinte" onClick={handleCheck} />
                                                    <label className="form-check-label" htmlFor="etat">Enceinte</label>
                                                </div>

                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input className="form-check-input" type="radio" name="situation"
                                                       value="Mère célibataire" onClick={handleCheck} />
                                                    <label className="form-check-label" htmlFor="gender">Mère célibataire</label>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <select className="form-control form-control-lg" value={select} name="region" onChange={handleSelect} >
                                                        <option value="1">Veuillez choisir s'il vous plaît</option>
                                                        <option value="Maritime">Maritime</option>
                                                        <option value="Plateaux">Plateaux</option>
                                                        <option value="Centrale">Centrale</option>
                                                        <option value="Kara">Kara</option>
                                                        <option value="Savanes">Savanes</option>
                                                    </select>
                                                    <label className="form-label" htmlFor="region" >Région</label>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <select className="form-control form-control-lg" value={select} name="town" onChange={handleSelect}>
                                                        <option value="1">Veuillez choisir s'il vous plaît</option>
                                                        <option value="Lomé">Lomé</option>
                                                        <option value="kara">Kara</option>
                                                        <option value="tsevié">tsevié</option>
                                                    </select>
                                                    <label className="form-label" htmlFor="town">Ville</label>

                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <textarea className="form-control" name="message" rows="10"value={inputMessage} onChange={handleMessage}></textarea>
                                                <label className="form-label" htmlFor="message" value="">Message</label>
                                            </div>

                                            <div className=" pt-3">
                                                <button type="button" className="btn btn btn-lg ms-2" style={{ background: "#F46A21", color: "white" }}>Envoyez</button>
                                            </div>
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