import React from 'react';
import Add from './Add'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
// var Carousel = require('react-responsive-carousel').Carousel;

function Adds(props) {
    const url = 'http://api.blindin.mx/api/adds/clicked'

    const setClick = async (id) => {
        console.log(id)
        // const response = await axios.post(`${url}/${id}`)
        // console.log(response)
    }


    return (
        <>
            {
                props.position == "top" ?
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        interval={3000}
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                    >
                        {props.adds.map(add => (
                            <a onClick={()=>setClick(add.id)} target="_blank" href={add.url ? add.url : "https://somoslocales.mx/"} key={add.id}>
                                <div className={add.position === "top" ? "add-target"
                                    : add.position === "center" ? "add-target-center"
                                        : add.position === "down" ? "add-target-bottom" : ""} >
                                    <img src={add.image ? add.image : "https://somoslocales.mx/wp-content/uploads/2020/05/Recurso-36.png"} alt="publicidad" className="img-add" id={add.position} />
                                </div>
                            </a>
                        ))
                        }
                    </Carousel>
                    : props.position == "down" ?
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            interval={3000}
                            showArrows={false}
                            showStatus={false}
                            showIndicators={false}
                            stopOnHover={false}
                        >
                            {props.adds.map(add => (
                                <a onClick={()=>setClick(add.id)} target="_blank" href={add.url ? add.url : "https://somoslocales.mx/"} key={add.id}>
                                    <div className={add.position === "top" ? "add-target"
                                        : add.position === "center" ? "add-target-center"
                                            : add.position === "down" ? "add-target-bottom" : ""} >
                                        <img src={add.image ? add.image : "https://somoslocales.mx/wp-content/uploads/2020/05/Recurso-36.png"} alt="publicidad" className="img-add" id={add.position} />
                                    </div>
                                </a>
                            ))
                            }
                        </Carousel>
                        : ""
            }


        </>
    )

}

export default Adds