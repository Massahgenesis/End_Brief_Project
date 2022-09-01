import React from 'react';
import {Link} from 'react-router-dom'
// import equipe from "../images/femmes_enceinte/equipe.webp";
// import equipe2 from "../images/femmes_enceinte/equipe2.jpg";

function Parteners() {

    return (
        <div className='container'>
            <div className='card mt-4'>
                <div className='card-body'>
                    <h2>Devenir partenaire</h2>
                </div>
            </div>

            <div className="help">
                <div className="row">
                    <div class="col-sm-5 col-md-6 col-lg-12">
                        <img src="" className="d-block w-100 h-800" alt="..." />
                    </div>
                    <div className="soutenir">
                        <h1>REJOIGNEZ NOTRE EQUIPE <br /> EN DEVENANT BENEVOLE</h1>
                        <Link to="/parteners" style={{ background: "#F46A21", color: "white" }} className="btn btn shadow">Découvrir</Link>
                    </div>
                </div>
                <div className="row ms-3">
                    <div className="col-sm-5 col-md-6 col-lg-12">
                        <img src="" className="d-block w-100 h-400" alt="..." />
                    </div>
                    <div className="soutenir1 ">
                        <h1>SOUTENEZ NOTRE CAUSE <br />EN FAISANT UN DON</h1>
                        <Link to="/parteners" style={{ background: "#F46A21", color: "white" }} className="btn btn shadow">Découvrir</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Parteners;