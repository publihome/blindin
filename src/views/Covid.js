import React, { useState, useEffect } from 'react';
import axios from "axios";
import CovidChart from '../components/CovidChart'


function Covid(){
    // const [covidData, setCovidData ] = useState([]);


    // const getDataCodiv = async () => {
    //     const response = await axios.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations/181")
    //     const data = response.request.response;
    //     console.log(JSON.parse(data));
    //     setCovidData(JSON.parse(data))

    // }

    // useEffect(() => {
    //     getDataCodiv()
    // },[])

    return(
        <>
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

