import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/News.css'
const url = "https://api.blindin.mx/api/terciarias"

function Newsterciarias(props){
    const [newsterciarias, setNewsTerciarias] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
        const response = await axios.get(`${url}${props.type}?page=${page}`)
        const data = response.data;
        console.log(response)
        if(newsterciarias === ""){
            setNewsTerciarias(data.data);
        }else{
            setNewsTerciarias(newsterciarias=> newsterciarias.concat(data.data))
        }
    }
    
    const getMoreData = async () => {
        await setPage(page + 1 );
        await getData();
    }

    return(
        <div className="news">
            { console.log(newsterciarias)}            
            <div className ="row">
            {
                newsterciarias.map((news) => {
                    return(
                        <div className="col-md-6" key={news.id}>
                            <a href={news.url}>
                            <div className="card-new">
                                <div className="target-terciaria">
                                    <img src={news.img} className="imagen-terciaria" alt={news.titulo}/>
                                    <h3 className="titulo-terciario">{news.titulo} <a href={news.url} className="link">Leer más....</a></h3>
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