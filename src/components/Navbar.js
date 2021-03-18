import React, { useState } from "react";
import '../css/Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import Menuicon from '../icons/menu.svg'
import Menuiconx from '../icons/menux.svg'
import logo from '../blindin_logo.png';
import covidImage from '../icons/covid-image.png' 

function Navbar(props){
    const [menuIsVisible, setMenuVisible] = useState(false);
    const [regionActive, setRegionActive ] = useState("oaxaca")

    return (
        <>
        <nav className="navbar-head">
            <div className="container">
                <NavLink to="/">
                    <img src={logo} alt="logo" className="logo" />
                </NavLink>          
                <div className="btns-region">
                    <ul className="ul-top">
                        <button className="navbar-li-region" className={regionActive == "oaxaca" ? "btn-active-region" : "navbar-li-region"} id="Oaxaca" onClick={()=>{props.changeRegion("oaxaca"); setRegionActive("oaxaca")}} >
                            Oaxaca
                        </button>
                        <button className="navbar-li-region"  className={regionActive == "mexico" ? "btn-active-region" : "navbar-li-region"} id="nacional" onClick={()=>{props.changeRegion("nacional"); setRegionActive("mexico")}} >
                            México
                        </button>
                    </ul>
                </div>
            </div>

        </nav>

        <nav className="navbar">
            <div className="container">
                <div className="button-menu ">
                    <img src={menuIsVisible ? Menuiconx : Menuicon} alt="" class="menu-ico" onClick={() => {setMenuVisible(!menuIsVisible)}}/>
                </div>
                    <ul className="navbar-ul">
                <div className={window.innerWidth > 960 ? 'drop-menu' : menuIsVisible ? 'd-block' : 'd-none' }>
                        <li className="navbar-li" id="recientes">
                            <NavLink to="/"exact activeClassName="active-link-recientes" className="navLink" onClick={() =>{ props.removeValuesState(); setMenuVisible(false)}} className="navbar-li">
                                <p> <i class="far fa-clock"></i>Recientes</p>
                            </NavLink>
                        </li>

                        <li className="navbar-li" id="salud">
                            <NavLink to="/salud" activeClassName="active-link-salud" className="navLink" onClick={() =>{ props.removeValuesState(); setMenuVisible(false)}} className="navbar-li">
                                <p>
                                <i class="fas fa-stethoscope"> </i>
                                     Salud
                                </p>
                            </NavLink>
                        </li>

                        <li className="navbar-li" id="economia">
                            <NavLink to="/Economia" activeClassName="active-link-economia" className="navLink" onClick={() =>{ props.removeValuesState(); setMenuVisible(false)}} className="navbar-li">
                                <p>
                                    <i class="fas fa-dollar-sign"> </i>
                                    Economia
                                </p>
                            </NavLink>
                        </li>

                        <li className="navbar-li" id="deportes">
                            <NavLink to="/Deportes" activeClassName="active-link-deportes" className="navLink" onClick={() =>{ props.removeValuesState(); setMenuVisible(false)}} className="navbar-li">
                                <p>
                                <i class="fas fa-basketball-ball"> </i>
                                    Deportes
                                </p>
                            </NavLink>
                        </li>

                        <li className="navbar-li" id="covid">
                            <NavLink to="/Covid" activeClassName="active-link-covid" className="navLink" onClick={() =>{ props.removeValuesState(); setMenuVisible(false)}} className="navbar-li">
                                
                                <p> 
                                    <i class="fas fa-virus"></i>
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