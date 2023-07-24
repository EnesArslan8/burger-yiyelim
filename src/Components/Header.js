import React from "react";
import { Link } from "react-router-dom";
import { BsFillSignpost2Fill, BsInfoLg } from "react-icons/bs";
import { PiForkKnifeFill } from "react-icons/pi";
import { BiSolidMap } from "react-icons/bi";

function Header() {
  return (
    <nav className="navBar">
      <div className="nav">
        <div>
          <Link to="/">
            <img src="https://kebanet.restapp.com/uploads/36384/theme/a35554ea00f9f65bf7c6ef6051d4e98e.PNG"></img>
          </Link>
        </div>
        <div className="link">
          <Link to="/order/branch">
            <label className="labelLink">
              <BsFillSignpost2Fill className="icon" />
              <span className="iconText">Şubelerimiz</span>
            </label>
          </Link>

          <Link to="/about">
            <label className="labelLink">
              <BsInfoLg className="icon " />
              <span className="iconText">Hakkımızda</span>
            </label>
          </Link>
          <Link to="/products" className="labelLink">
            <PiForkKnifeFill className="icon" />
            <span className="iconText">Ürünler</span>
          </Link>
          <Link to="/contact" className="labelLink">
            <BiSolidMap className="icon" />
            <span className="iconText">İletişim</span>
          </Link>
        </div>
        <div className="btn">
          <button>
            <Link to="/order">ONLİNE SİPARİŞ</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
