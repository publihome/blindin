import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/News.css'
// import Add from '../components/Add' 

function NewsSecundarias(props){
    const url = `https://api.blindin.mx/api/secundarias`; 

    const [secondaryNews, setSecondaryNews] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getData();
        setPage(page + 1)
    },[])


    const getData = async () => {
        // console.log("data")
        const response = await axios.get(`${url}${props.type}/${props.region}?page=${page}`)
        // console.log(response)
        const data = response.data;
       if(secondaryNews === ""){
            setSecondaryNews(data.data)
       }else{
           setSecondaryNews(secondaryNews => secondaryNews.concat(data.data))
       } 
    } 

    const getMoreData = () => {
        setPage(page + 1 );
        getData();
    }


    return (
        <div className="secondary-news">
            {console.log(secondaryNews)}
            {
                secondaryNews.map((news) => {
                    return(
                        <div className="target" key={news.id}>
                            <a href={news.url} className="a">
                            <div className="flex-target" >
                                <div className="imagen-secondary" >
                                    <img src={news.img} alt={news.titulo} className="secondary-img"/>
                                </div>
                                <div className="content-secondary">
                                    <h3>{news.titulo}</h3>
                                    <p>{news.resumen} <a href={news.url} className="link-secondary">leer más...</a></p>                                    
                                </div>
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

export default NewsSecundarias;