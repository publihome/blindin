import React from 'react';
import NewsPrincipal from '../components/NewsPrincipal'
// import Video from '../components/Video'
import NewsSecundarias from '../components/NewsSecundarias';
import Newsterciarias from '../components/Newsterciarias';

function Recientes(){

    const typeNew = "";
    return(
        <>
            <div className="col-lg-12">
                {/* <Video/> */}
            </div>
            <div className="col-lg-7 col-md-6 col-xl-7">
                <NewsPrincipal type={typeNew} />
            </div>
            <div className="col-lg-5 col-md-6 col-xl-5">
                <Newsterciarias type={typeNew}/>
                <NewsSecundarias type={typeNew}/>
            </div>
        </>
    );

}


export default Recientes;