import React, { useState, useEffect } from 'react';
import axios from "axios";
// import CovidChart from '../components/CovidChart'
import UseTitle from '../hooks/UseTitle';
import Head from '../components/covidComponents/Head'

function Covid() {
    UseTitle({ title: "Covid" })

    const [covidData, setCovidData] = useState([]);


    const getDataCovid = async () => {
        const response = await axios.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations/181")
        const data = await response.request.response;
        setCovidData(JSON.parse(data))
    }

    useEffect(() => {
        getDataCovid()
    }, [])

    return (
        <>
            <div className="">
                {console.log(covidData)}
                {/* {covidData.location.last_updated} */}
                {/* <Head covidData={covidData.location}/> */}
            </div>
            {/* {console.log(covidData.location.timelines.confirmed)}
        <Bar
            data = {covidData.location.timelines.confirmed}
            width={100}
            height={50}
        /> */}
            {/* <CovidChart/> */}
        </>
    )
}

export default Covid;

