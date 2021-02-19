import React, { useState } from "react";
import '../css/Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import Menuicon from '../icons/menu.svg'
import Menuiconx from '../icons/menux.svg'

function Navbar(){
    const [menuIsVisible, setMenuVisible] = useState(false);

    return (


        <nav className="navbar">
            <div className="container">
                <ul className="navbar-ul-rigth">
                    <Link to="/">
                        <li className="navbar-li">
                            logo
                        </li>
                    </Link>
                </ul>
                <div className="button-menu ">
                    <img src={menuIsVisible ? Menuiconx : Menuicon} alt="" class="menu-ico" onClick={() => {setMenuVisible(!menuIsVisible)}}/>
                </div>
                    <ul className="navbar-ul">
                <div className={window.innerWidth > 960 ? 'd-flex' : menuIsVisible ? 'd-block' : 'd-none' }>
                        <li className="navbar-li" id="recientes">
                            <NavLink to="/"exact activeClassName="active-link" className="navbar-li">
                                Recientes
                            </NavLink>
                        </li>

                        <li className="navbar-li" id="salud">
                            <NavLink to="/salud" activeClassName="active-link" className="navbar-li">
                                Salud
                            </NavLink>
                        </li>

                        <li className="navbar-li" id="economia">
                            <NavLink to="/Economia" activeClassName="active-link" className="navbar-li">
                                Economia
                            </NavLink>
                        </li>

                        <li className="navbar-li" id="deportes">
                            <NavLink to="/Deportes" activeClassName="active-link" className="navbar-li">
                                Deportes
                            </NavLink>
                        </li>
                </div>
                    </ul>
            </div>
        </nav>
    );
}


export default Navbar;