import React from 'react';
import NewsPrincipal from '../components/NewsPrincipal'
// import Video from '../components/Video'
import NewsSecundarias from '../components/NewsSecundarias';
import Newsterciarias from '../components/Newsterciarias';
import Section from '../components/Section';


function Deportes(props){
    const typeNew = "/sports";
    return(
        <>
            <div className="col-lg-12">
                {/* <Video/> */}
            <Section name="Deportes"/>
            </div>
            <div className="col-lg-7 col-md-5 col-xl-7 col-sm-12 col-12">
                <NewsPrincipal
                 type={typeNew} 
                 region={props.region}

                 />
            </div>
            <div className="col-lg-5 col-md-5 col-xl-5 col-sm-12 col-12">
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