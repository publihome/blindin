import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/News.css'
import Modal from './Modal'


function Newsterciarias(props){
    const url = `https://api.blindin.mx/api/terciarias`;
    const [newsterciarias, setNewsTerciarias] = useState([]);
    const [page, setPage] = useState(1);
    const [modal, setModal] = useState(false);
    const [urlPage, setUrlPage] = useState("");


    useEffect(() => {        
        getData()
    },[])

    const getData = async() => {
        const response = await axios.get(`${url}${props.type}/${props.region}?page=${page}`)
        const data = response.data;
        // console.log(response)
        if(newsterciarias === ""){
            setNewsTerciarias(data.data);
        }else{
            setNewsTerciarias(newsterciarias=> newsterciarias.concat(data.data))
        }
        setPage(page +1)

    }
    
    const getMoreData = () => {
        getData();
    }

    const togleModal = () => {
        setModal(!modal)
        setUrlPage("")
    }

    return(
        <div className="news">
            <div className ="row">
                {modal ? <Modal modal={modal} url={urlPage} toggle={togleModal}/> : ""}
            {
                newsterciarias.map((news) => {
                    return(
                        <div className="col-md-6 p-1" key={news.id}>
                            <a href="#!" onClick={()=> {setModal(true); setUrlPage(news.url)}}>
                            <div className="card-new">
                                <div className="target-terciaria">
                                    <img src={news.img} alt={news.titulo} className="imagen-terciaria" />
                                    <div className="bg">
                                    </div>
                                        <h3 className="titulo-terciario">{news.titulo}</h3>
                                </div>
                            </div>   
                            </a>
                        </div>
                    )
                })
            }
        </div>
            <button className="btn-see-more" onClick={getMoreData}>Ver más..</button>

        </div>
    )
}

export default Newsterciarias;