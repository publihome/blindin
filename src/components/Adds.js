import React from 'react';
import Add from './Add'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// var Carousel = require('react-responsive-carousel').Carousel;

function Adds(props){
    return(
        <>
            {/* {
            console.log(props.adds)
            }
            { 
            props.adds 
            ?
                props.adds.map(add => (
                        <Add
                            id={add.id}
                            position={add.position}
                            img={add.image}
                            url={add.url}
                        />
                ))
            :
            ""
            
            } */}

            {
                props.adds.map(add => (
                    <a target="_blank" href={add.url ? add.url : "https://somoslocales.mx/"}>
                    <div className={add.position ==="top" ? "add-target" 
                                    : add.position ==="center" ? "add-target-center"
                                    : add.position ==="down" ? "add-target-bottom" : ""} > 
                            <img src={ add.image ? add.image : "https://somoslocales.mx/wp-content/uploads/2020/05/Recurso-36.png"} alt="publicidad" className="img-add" id={add.position}/> 
                    </div>
                    </a>
                ))
            }
        </>
    )

}

export default Adds