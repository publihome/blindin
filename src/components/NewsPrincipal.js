import React, { useState, useEffect } from 'react';
import '../css/News.css'
import axios from 'axios';
import noImagen from '../icons/SIN-IMAGEN.jpg'
import Modal from './Modal'

function NewsPrincipal(props) {
    const url = `https://api.blindin.mx/api/primarias`
    const [newsRelevantes, setnewsRelevantes] = useState([]);
    const [page, setPage] = useState(1);
    const [modal, setModal] = useState(false);
    const [urlPage, setUrlPage] = useState("");

    const getData = async () => {
        try {
            const response = await axios.get(`${url}${props.type}/${props.region}?page=${page}`)
            const data = await response.data;
            console.log(data)
            if (newsRelevantes === "") {
                setnewsRelevantes(data.data);
            } else {
                setnewsRelevantes(newsRelevantes => newsRelevantes.concat(data.data))
            }
            setPage(page + 1)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        // setPage(page + 1);
        getData()
    }, []);

    const getMoreData = () => {
        getData();
    }

    const togleModal = () => {
        setModal(!modal)
        setUrlPage("")
    }


    return (
        <div className="news">
            {modal ? <Modal modal={modal} url={urlPage} toggle={togleModal} /> : ""}
            {
                newsRelevantes.map((news) => {
                    return (
                        <div className="target" key={news.id}>

                            <a href="#!" onClick={() => { setModal(true); setUrlPage(news.url) }} >
                                {props.region !== props.region ? getData : ""}
                                <div className="frame">
                                    <img src={news.img === "without image" ? noImagen : news.img} alt={news.titulo} className="image-new" />
                                </div>
                                <p className="metadata date">{news.fecha}</p>
                                <p className="metadata category">{news.categoria}</p>
                                <div className="content">
                                    <div className="title-principal">
                                        <h3>{news.titulo}</h3>
                                    </div>
                                    <p>{news.resumen}</p>
                                    <button onClick={() => { setModal(true); setUrlPage(news.url) }} className="btn-more-principal" >Leer más...</button>
                                </div>
                            </a>

                        </div>

                    )
                })

            }

            <button className="btn-see-more" onClick={getMoreData}>Ver más..</button>

        </div>

    )

}

export default NewsPrincipal;