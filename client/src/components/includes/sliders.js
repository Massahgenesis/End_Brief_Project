import React from 'react';
import woman1 from '../images/femmes_enceinte/woman1.jpg';
import black from '../images/femmes_enceinte/black.jpg';
import grosse from '../images/femmes_enceinte/grosse.webp';
import {Link} from 'react-router-dom'

function Sliders() {
  return (
    <div id="carouselExampleDark" class="carousel carousel-light slide" data-bs-ride="carousel">
     
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={woman1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-caption d-none d-md-block pb-3 pt-5">
           <h1>SOUTENIR LA JEUNE FILLE<br/> ENCEINTE ET CELIBATAIRE</h1>
           <h5>Oeuvrer pour un monde meilleur !!!</h5>
           <Link to="/network" style={{ color: "#F46A21" }} className="btn bg-light shadow">Découvrir</Link>
          </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={black} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block pb-3 pt-5">
          <h1>PARTICIPER AU BIEN-ETRE MENTALED'UNE FEMME <br/>ENCEINTE ET EMOTIONNELLEMENT INSTABLE</h1>
           <h5>Redonner goût a la vie!!!</h5>
           <Link to="/network" style={{ color: "#F46A21" }} className="btn bg-light shadow">Découvrir</Link>
          </div>
        </div>
        <div class="carousel-item">
          <img src={grosse} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block pb-3 pt-5">
          <h1>OFFRIR UN AVENIR MEILLEUR AUX FUTURS ENFANTS<br/>A TRAVERS LE SOUTIEN APPORTE AU MERE</h1>
           <h5> Contribuer à une vie pleine d'espérance!!!</h5>
           <Link to="/network" style={{ color: "#F46A21" }} className="btn bg-light shadow">Découvrir</Link>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Sliders; 