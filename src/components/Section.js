import React from 'react';
import '../css/News.css'

function Section(props){
    return(
        <>
            <h5>
                {props.name}
            </h5>
            <hr id={props.name}/>

        </>
    );
}

export default Section