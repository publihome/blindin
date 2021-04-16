import React from 'react';
import NewsPrincipal from '../components/NewsPrincipal'
// import Video from '../components/Video'
import NewsSecundarias from '../components/NewsSecundarias';
import Newsterciarias from '../components/Newsterciarias';
import Section from '../components/Section';
// import UseTitle from '../hooks/UseTitle';
import { Helmet } from 'react-helmet'



function Deportes(props) {
    const metaDescription = "Espacio informatio de noticias sobre deportes";
    const title = "Deportes"
    const typeNew = "/sports";
    // UseTitle({title: "Deportes" , description: metaDescription})
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>
            <div className="col-lg-12">
                {/* <Video/> */}
                <Section name="Deportes" />
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

export default Deportes;