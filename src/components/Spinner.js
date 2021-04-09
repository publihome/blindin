import React from 'react';
import spin from '../icons/icon.svg'
import '../css/Spinner.css';

function Spinner(){
    return (
        <>
            <div className="content-spinner">
                <div className="img-spinner">
                    <img src={spin} alt="spinner" className="spinner"/>
                </div>

            </div>
        </>
    )
}

export default Spinner