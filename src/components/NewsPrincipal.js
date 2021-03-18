import React, {useState, useEffect} from 'react';
import '../css/News.css'
import axios from 'axios'; 
import noImagen from '../icons/SIN-IMAGEN.jpg' 

function NewsPrincipal(props){
    const url = `https://api.blindin.mx/api/primarias` 
    const [newsRelevantes, setnewsRelevantes] = useState([]);
    const [page, setPage] = useState(1);


    const getData = async () => {
        try {
         const response = await axios.get(`${url}${props.type}/${props.region}?page=${page}`)
         const data = await response.data;
         console.log(data)
         if(newsRelevantes === ""){
             setnewsRelevantes(data.data);
         }else{
             setnewsRelevantes(newsRelevantes => newsRelevantes.concat(data.data))
         }
         
         } catch (error) {
             console.error(error)
         }
    }
    // props.region ? getData : getData

    useEffect(() => {
        setPage(page +1)
        getData()
    },[]);



   const getMoreData = () => {
        setPage(page + 1 );
        getData();
    }


    return (
        <div className="news">
            {console.log(props)}
            {
            newsRelevantes.map((news) => {
                return(
                    <div className="target" key={news.id}>
                        <div className="frame">
                            <img src={news.img === "without image" ?  noImagen : news.img } alt={news.titulo} className="image-new" />
                        </div>
                        <p className="metadata date">{news.fecha}</p>
                        <p className="metadata category">{news.categoria}</p>
                        <div className="content">
                            <div className="title-principal">
                                <h3>{news.titulo}</h3>
                            </div> 
                            <p className="resumen">{news.resumen}</p>
                            <p>{news.author}</p>
                            <a href={news.url} className="btn-more-principal" >Saber más</a>
                        </div>
                    </div>
                )
            })
            
            }

            <button className="btn-see-more" >Ver más..</button>
        </div>

    )

}

export default NewsPrincipal;