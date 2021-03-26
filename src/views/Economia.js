import React from 'react';
// import NewsPrincipal from '../components/NewsPrincipal'
// import Video from '../components/Video'
import NewsSecundarias from '../components/NewsSecundarias';
import Newsterciarias from '../components/Newsterciarias';
import Section from '../components/Section';
import UseTitle from '../hooks/UseTitle' 

function Economia(props) {
    const typeNew = "/economy";
    UseTitle({title: "Economía"})

    return(
        <>
            <div className="col-lg-12">
                {/* <Video/> */}
            <Section name="Economia"/>

            </div>
            <div className="col-lg-7 col-md-7 col-xl-7">
                <NewsSecundarias 
                    type={typeNew}
                    region={props.region}
                />

                {/* <NewsPrincipal type={typeNew} /> */}
            </div>
            <div className="col-lg-5 col-md-5 col-xl-5">
                <Newsterciarias 
                    type={typeNew}
                    region={props.region}
                />
            </div>
        </>

    );

}


export default Economia;