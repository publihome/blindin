import react from 'react';

function  Head(props){
    const {codivData} = props;
    return(
        codivData !== undefined ? 
        <>
        {/* {console.log(props)} */}
        {codivData.last_updated}
        </>
        : ""
    )
}

export default Head