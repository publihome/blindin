import React from 'react';
import NewsPrincipal from '../components/NewsPrincipal'
// import Video from '../components/Video'
import NewsSecundarias from '../components/NewsSecundarias';
import Newsterciarias from '../components/Newsterciarias';
import Section from '../components/Section'
// import UseTitle from '../hooks/UseTitle';
import { Helmet } from 'react-helmet'
const urlMobile = "https://api.blindin.mx/api";
const url = `https://api.blindin.mx/api/primarias`;


function Salud(props) {

    const metaDescription = "Espacio informatio de noticias sobre salud";
    const title = "Blindin | Salud"
    const typeNew = "/health";
    // UseTitle({title: "Salud", description: metaDescription})
    return (

        <>

            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>
            <div className="col-lg-12">
                {/* <Video/> */}
                <Section name="Salud" />
                {
                    window.innerWidth < 775 ? (
                        <>
                            <NewsPrincipal
                                type={typeNew}
                                region={props.region}
                                url={urlMobile}
                            />
                        </>
                    ) : (
                        <>

                            <div className="col-lg-7 col-md-7 col-xl-7">
                                <NewsPrincipal
                                    type={typeNew}
                                    region={props.region}
                                    url={url}

                                />

                            </div>
                            <div className="col-lg-5 col-md-5 col-xl-5">
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
                    )
                }
            </div>



        </>
    );
}

export default Salud;