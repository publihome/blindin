import React from 'react';
import Section from './Section';
import noImagen from '../icons/SIN-IMAGEN.jpg' 

function NewsSearch(props) {
    console.log(props.news)
    if(props.news.length === 0) return("")
    return (

        <>
            <div className="container mb-3">
                <Section name="Busquedad" />
                {props.news.length >= 0 ?
                    props.news.map((n) => {
                        return (
                            <>
                                <div className="target target-search" key={n.id}>
                                    <div className="flex-target">
                                    <div className="frame-search">
                                        <img src={n.img === "without image" ? noImagen : n.img } alt={n.titulo} className="search-img" />
                                    </div>
                                        <p className="metadata category">{n.categoria}</p>
                                        <div className="content-secondary">
                                            {/* <div className="title"> */}
                                                <h3>
                                                    {n.titulo}
                                                </h3>
                                                <p>{n.resumen} <a href={n.url} className="link-secondary">leer más...</a></p>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    }
                    )

                    :
                    <div className="target">
                        <h4 className="p-2 text-center"> No existen coincidencias </h4>
                    </div>

                }
                <button className="btn-more-news" onClick={() => { props.searchNew() }}>Ver más...</button>

            </div>
        </>
    )

}

export default NewsSearch;