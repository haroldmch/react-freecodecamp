import '../styles/Testimony.css';
import React from "react";

function Testimony() {
  return(
    <div className="testimony-container">
      <img
        className="testimony-image"
        src={require('../images/ana.jpg')}
        alt="Foto Ana" />
      <div className="testimony-container-info">
        <p className="testimony-name">Ana</p>
        <p className="testimony-rank">Ing</p>
        <p className="testimony-text">Bien</p>
      </div>
    </div>
  );
}

export default Testimony;