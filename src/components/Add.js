
import React from 'react';
import '../css/Add.css'

function Add(props){

    return(
        <>
        {/* {console.log(props)} */}
        <a target="_blank" href={props.url ? props.url : "https://somoslocales.mx/"}>
        <div className={props.position ==="top" ? "add-target" 
                        : props.position ==="left" ? "add-target-left"
                        : props.position ==="center" ? "add-target-center"
                        : props.position ==="right" ? "add-target-right" : "add-target-bottom"} > 
                
                <img src={ props.img ? props.img : "https://somoslocales.mx/wp-content/uploads/2020/05/Recurso-36.png"} alt="publicidad" className="img-add" id={props.position}/>
  
        </div>
        </a>
        </>
    );
}


export default Add;

