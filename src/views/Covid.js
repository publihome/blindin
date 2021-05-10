import React, { useState, useEffect } from 'react';
import axios from "axios";
import TargetCovid from '../components/covidComponents/TargetCovid'
import Section from '../components/Section'
import { Helmet } from 'react-helmet'
const url = "https://api.blindin.mx/api/covid/oaxaca";


function Covid() {
    const metaDescription = "Espacio informatio de noticias sobre covid19";
    const title = "Blindin | Covid"
    const [covidData, setCovidData] = useState([]);
    const [newsCovid, setNewsCovid] = useState([])
    const [page, setPage] = useState(1);



    const getDataCovid = async () => {
        const response = await axios.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations/181")
        const data = await response.request.response;
        setCovidData(JSON.parse(data))
    }

    useEffect(() => {
        getDataCovid()
    }, [])


    const getNewsCovid = async () => {
        const response = await axios.get(`${url}?page=${page}`)
        setNewsCovid(response.data.data)
        if (newsCovid === "") {
            setNewsCovid(response.data.data);
        } else {
            setNewsCovid(newsRelevantes => newsRelevantes.concat(response.data.data))
        }
        setPage(page + 1)
    }

    useEffect(() => {
        getNewsCovid()
    }, [])

    const getMoreData = () => {
        getNewsCovid();
    }

    return (
        <>

            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>
            <div className="col-lg-12">
                <Section name="Covid" />

                <div className="row">
                    {
                        newsCovid.map(covid => (
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <TargetCovid
                                    id={covid.id}
                                    titulo={covid.titulo}
                                    img={covid.img}
                                    url={covid.url}
                                    resumen={covid.resumen}
                                    fecha={covid.fecha}
                                    categoria={covid.categoria}
                                />
                            </div>
                        ))
                    }
                </div>
                <button className="btn-see-more" onClick={getMoreData}>Ver más..</button>
            </div>

        </>
    )
}

export default Covid;

