import React, {useState, useEffect} from 'react';

function Navbar2(props){
    

    return(
        <>
        <nav className="navbar-info">
            <div className="container-lg container-md">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <ul>
                        <div className="search-container">
                            <input type="text" placeholder="Buscar" className="input-search" onChange={(e) => { props.setWordSearch(e.target.value) }}/>
                            <button className="btn-search" onClick={() => {props.searchNew()}}><i class="fas fa-search"></i></button>
                        </div>
                    </ul>
                </div>
            </div>
            
        </nav>
        </>
    )
}


export default Navbar2;