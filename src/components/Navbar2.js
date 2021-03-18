import React, {useState, useEffect} from 'react';

function Navbar2(props){
    

    return(
        <>
        <nav className="navbar-info">
            <div className="container-lg">
                <ul>
                    <div className="search-container">
                        <input type="text" placeholder="Buscar" className="input-search" onChange={(e) => { props.setWordSearch(e.target.value) }}/>
                        <button className="btn-search" onClick={() => {props.searchNew()}}><i class="fas fa-search"></i></button>
                    </div>
                </ul>
            </div>
            
        </nav>
        </>
    )
}


export default Navbar2;