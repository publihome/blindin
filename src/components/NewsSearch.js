import React from 'react';
import Section from './Section';

function NewsSearch(props) {
    return (

        <>
            {/* {console.log(props.news)} */}
            <div className="container mb-3">
                <Section name="Busquedad" />
                {props.news.length == 0 ?
                    <div className="target">
                        <h4 className="p-2 text-center"> No existen coincidencias </h4>
                    </div>
                :
                    props.news.map((n) => {
                        return (
                            <>
                            <div className="target" key={n.id}>
                                <div className="flex-target">
                                    <div className="image-secondary">
                                        <img src={n.img} alt={n.titulo} className="secondary-img"/>
                                    </div>
                                    <div className="content-secondary">
                                        <div className="title">
                                            <h4>
                                                {n.titulo}
                                            </h4>
                                            <p>{n.resumen} <a href={n.url} className="link-secondary">leer más...</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        );
                    }
                    )
                }
                <button className="btn-more-news" onClick={() => {props.searchNew()}}>Ver más...</button>

            </div>
        </>
    )

}

export default NewsSearch;