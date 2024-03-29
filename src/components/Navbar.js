import React, { useState } from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../blindin_logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

function Navbar(props) {
  const [menuIsVisible, setMenuVisible] = useState(false);
  const [regionActive, setRegionActive] = useState("oaxaca");

  return (
    <>
      {console.log(props)}
      <nav className="navbar-head">
        <div className="container">
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
          <div
            className="button-menu "
            onClick={() => {
              setMenuVisible(!menuIsVisible);
            }}
          >
            <IconContext.Provider value={{ size: "2em" }}>
              {menuIsVisible ? <AiOutlineClose /> : <AiOutlineMenu />}
            </IconContext.Provider>
          </div>

          <div className="btns-region">
            <ul className="ul-top">
              <button
                className="navbar-li-region"
                className={
                  regionActive === "oaxaca"
                    ? "btn-active-region"
                    : "navbar-li-region"
                }
                id="Oaxaca"
                onClick={() => {
                  props.changeRegion("oaxaca");
                  setRegionActive("oaxaca");
                }}
              >
                Oaxaca
              </button>
              <button
                className="navbar-li-region"
                className={
                  regionActive === "mexico"
                    ? "btn-active-region"
                    : "navbar-li-region"
                }
                id="nacional"
                onClick={() => {
                  props.changeRegion("nacional");
                  setRegionActive("mexico");
                }}
              >
                México
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar">
        <div className="container">
          <ul className="navbar-ul">
            <div
              className={
                window.innerWidth > 960
                  ? "drop-menu"
                  : menuIsVisible
                  ? "d-block"
                  : "d-none "
              }
            >
              <li className="navbar-li" id="recientes">
                <NavLink
                  to="/"
                  exact
                  activeClassName="active-link-recientes"
                  onClick={() => {
                    props.removeValuesState();
                    setMenuVisible(false);
                  }}
                  className="navbar-li"
                >
                  <p>
                    {" "}
                    <i className="far fa-clock"></i>Recientes
                  </p>
                </NavLink>
              </li>
              <li className="navbar-li" id="salud">
                <NavLink
                  to="/salud"
                  activeClassName="active-link-salud"
                  onClick={() => {
                    props.removeValuesState();
                    setMenuVisible(false);
                  }}
                  className="navbar-li"
                >
                  <p>
                    <i className="fas fa-stethoscope"> </i>
                    Salud
                  </p>
                </NavLink>
              </li>
              <li className="navbar-li" id="economia">
                <NavLink
                  to="/Economia"
                  activeClassName="active-link-economia"
                  onClick={() => {
                    props.removeValuesState();
                    setMenuVisible(false);
                  }}
                  className="navbar-li"
                >
                  <p>
                    <i class="fas fa-dollar-sign"> </i>
                    Economia
                  </p>
                </NavLink>
              </li>
              <li className="navbar-li" id="deportes">
                <NavLink
                  to="/Deportes"
                  activeClassName="active-link-deportes"
                  onClick={() => {
                    props.removeValuesState();
                    setMenuVisible(false);
                  }}
                  className="navbar-li"
                >
                  <p>
                    <i className="fas fa-basketball-ball"> </i>
                    Deportes
                  </p>
                </NavLink>
              </li>
              <li className="navbar-li" id="covid">
                <NavLink
                  to="/Covid"
                  activeClassName="active-link-covid"
                  onClick={() => {
                    props.removeValuesState();
                    setMenuVisible(false);
                  }}
                  className="navbar-li"
                >
                  <p>
                    <i className="fas fa-virus"></i>
                    Covid
                  </p>
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
