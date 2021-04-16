import React, { useState } from 'react';
import '../../css/News.css'
import noImagen from '../../icons/SIN-IMAGEN.jpg'
import Modal from './../Modal'


function TargetCovid(props) {

    const {id, titulo, img, url,fecha, categoria, resumen} = props
    const [page, setPage] = useState(1);
    const [modal, setModal] = useState(false);
    const [urlPage, setUrlPage] = useState("");


    const togleModal = () => {
        setModal(!modal)
        setUrlPage("")
    }

    return (
        <>
            <div className="target" key={id}>
            {modal ? <Modal modal={modal} url={urlPage} toggle={togleModal} /> : ""}

                <a href="#!" onClick={() => { setModal(true); setUrlPage(url) }} >
                    <div className="frame">
                        <img src={img === "without image" ? noImagen : img} alt={titulo} className="image-new" />
                    </div>
                    <p className="metadata date">{fecha}</p>
                    <p className="metadata category">{categoria}</p>
                    <div className="content">
                        <div className="title-principal title-covid">
                            <h3>{titulo}</h3>
                        </div>
                        <p>{resumen}</p>
                        <button onClick={() => { setModal(true); setUrlPage(url) }} className="btn-more-principal" >Leer más...</button>
                    </div>
                </a>
            </div>

        </>
    )
}

export default TargetCovid;