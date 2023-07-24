import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="imgArea">
          <img src="https://kebanet.restapp.com/uploads/36384/theme/afce588475aa79c843e1ed6ba337c794.jpg"></img>
          <img src="https://kebanet.restapp.com/assets/img/by_r01.jpg"></img>
        </div>
        <div className="searchStore">
          <div className="searchArea">
            <h2>ŞUBE ARA</h2>
            <p>SİZE EN YAKIN ŞUBEYİ SEÇİNİZ</p>
            <div className="input">
              <input />
              <button>Ara</button>
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <Link className="boxLink" to="/helal-sertifikamız">
              <img src="https://kebanet.restapp.com/uploads/36384/theme/71c940765eda1599eb88a7ccd6113abf.jpg"></img>
              <h1 className="mg">HELAL SERTİFİKAMIZ</h1>
            </Link>
          </div>
          <div className="box">
            <Link className="boxLink" to="/about">
              <img src="https://kebanet.restapp.com/uploads/36384/theme/ef959a9db3c9359f01572f631df4f3a2.jpg"></img>
              <h1>HAKKIMIZDA</h1>
            </Link>
          </div>
          <div className="box">
            <Link className="boxLink" to="/order/branch">
              <img src="https://kebanet.restapp.com/uploads/36384/theme/f297c5a12e643e6fc95198dd01f83961.jpg"></img>
              <h1>ŞUBELER</h1>
            </Link>
          </div>
          <div className="box">
            <Link className="boxLink" to="/contact">
              <img src="https://www.burgeryiyelim.com/templates/website/tema-1/assets/images/rest02.jpg"></img>
              <h1>İLETİŞİM</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
