import React from 'react';
// import NewsPrincipal from '../components/NewsPrincipal'
// import Video from '../components/Video'
import NewsSecundarias from '../components/NewsSecundarias';
import Newsterciarias from '../components/Newsterciarias';



function Economia() {
    const typeNew = "/economy";

    return(
        <>
            <div className="col-lg-12">
                {/* <Video/> */}
            </div>
            <div className="col-lg-7 col-md-7 col-xl-7">
                <NewsSecundarias type={typeNew}/>

                {/* <NewsPrincipal type={typeNew} /> */}
            </div>
            <div className="col-lg-5 col-md-5 col-xl-5">
                <Newsterciarias type={typeNew}/>
            </div>
        </>

    );

}


export default Economia;