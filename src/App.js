// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Recientes from './views/Recientes'
import Deportes from './views/Deportes'
import Economia from './views/Economia';
import Salud from './views/Salud';
import Add from './components/Add';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Covid from './views/Covid';
import Navbar2 from './components/Navbar2';
import axios from 'axios';
import NewsSearch from './components/NewsSearch'
import Adds from './components/Adds'


function App() {
  const [region, setRegion] = useState("oaxaca");
  const [newsData, setnewsData] = useState([]);
  const [page, setPage] = useState(1);
  const [word, setWord] = useState();
  const [adds, setAdds] = useState([]);


  const base_url = "https://api.blindin.mx/api/search/"
  const addUrl = "https://api.blindin.mx/api/anuncios/"
  
  const getAnuncios = async () => {
    try{
        const response= await axios.get(addUrl);
        setAdds(response.data)

    }catch (error) {
        console.error(error)
    }
} 

useEffect(()=>{
  getAnuncios()
},[])


  const changeRegion = (reg) => {
    setRegion(reg);
  }

  const setWordSearch = (word) => {
      setWord(word);
    
  }

  const searchNew = async () => {
    const response = await axios.get(`${base_url}${word}?page=${page}`)
    console.log(response)
    setNews(response.data.data)
    if(word){

    }
    setPage(page + 1)
  }

  const setNews = (response) => {
    if(response == ""){
      setnewsData([]);
      return;
    }
    if (newsData.length == 0) {
      setnewsData(response)
    } else {
      setnewsData(newsData => newsData.concat(response))
    }
  }

  const removeValuesState = () => {
    setnewsData([])
  }

  return (
    <Router>
      <Navbar
        changeRegion={changeRegion}
        removeValuesState={removeValuesState}
      />
      <Add
        position="top"
        img = "https://www.oaxaca.gob.mx/wp-content/uploads/2020/09/banner-OaxacaNuevaImagen.png"
        url= "https://sspo.gob.mx/"
      />
      {
       adds ? <Adds adds={adds}/> : ""
     }
     
      <hr />
      <Navbar2
        setWordSearch={setWordSearch}
        searchNew={searchNew}
      />
      <div className="container-lg container-md container">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            
            {/* {console.log(newsData)} */}
            { newsData.length != 0 ? 
               <NewsSearch 
                 news={newsData}
                searchNew={searchNew} 
                />
                :
                "" 
            }
            <Route path="/Deportes" >
              <Deportes
                region={region}
              />
            </Route>
            <Route path="/Salud" >
              <Salud
                region={region}
              />
            </Route>
            <Route path="/Economia" >
              <Economia
                region={region}
              />
            </Route>
            <Route path="/Covid" >
              <Covid
                region={region}
              />
            </Route>
            <Route path="/" exact >
              <Recientes
                region={region}

              />
            </Route>
          </div>
        </div>
      </div>
       {/* <Add 
      img="http://controversia-oax.com.mx/wp-content/uploads/2021/02/NEC_950x100-scaled.jpg"
      url = "https://www.oaxaca.gob.mx/smo/"
      position={"down"} 
      />  */}
      {/* <Adds/> */}
      {/* </div> */}
    </Router>

  );
}

export default App;
