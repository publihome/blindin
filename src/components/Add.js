
import React from 'react';
import '../css/Add.css'

function Add(props){

    return(
        <>
        {/* {console.log(props)} */}
        <div className={props.position ==="top" ? "add-target" 
                        : props.position ==="left" ? "add-target-left"
                        : props.position ==="right" ? "add-target-right" : "add-target-bottom"} >
            {/* <div className="container-img"> */}
                <img src ="https://somoslocales.mx/wp-content/uploads/2020/05/Recurso-36.png" alt="publicidad" className="img-add" id={props.position}/>
            {/* </div>                 */}
  
        </div>
        </>
    );
}


export default Add;

