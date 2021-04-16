import React from 'react';
import NewsPrincipal from '../components/NewsPrincipal'
// import Video from '../components/Video'
import NewsSecundarias from '../components/NewsSecundarias';
import Newsterciarias from '../components/Newsterciarias';
import Section from '../components/Section'
// import UseTitle from '../hooks/UseTitle';
import { Helmet } from 'react-helmet'

function Recientes(props) {

    const metaDescription = "noticias de hoy, espacio informativo de noticias recientes";
    const title = "Recientes"

    const typeNew = "";
    // UseTitle({title: "Recientes", description: metaDescription})

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>
            <div className="col-lg-12">
                {/* {console.log(props)} */}
                {/* <Video/> */}
                <Section name="Recientes" />
            </div>
            <div className="col-lg-7 col-md-6 col-xl-7">
                <NewsPrincipal
                    type={typeNew}
                    region={props.region}
                />
            </div>
            <div className="col-lg-5 col-md-6 col-xl-5">
                <Newsterciarias
                    type={typeNew}
                    region={props.region}
                />
                <NewsSecundarias
                    type={typeNew}
                    region={props.region}
                />
            </div>
        </>
    );

}


export default Recientes;