import React, { Fragment } from 'react';
import video from '../videoPrueba.mp4'

function Video(){
    return(
        <Fragment>
            <video className="video" src={{video}}>

            </video>
        </Fragment>

    );

}


export default Video;