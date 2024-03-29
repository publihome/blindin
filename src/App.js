import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import axios from 'axios';
import NewsSearch from './components/NewsSearch'
import Adds from './components/Adds'
import Spinner from './components/Spinner';
import Routes from './components/Routes'

function App() {
  const [region, setRegion] = useState("oaxaca");
  const [newsData, setnewsData] = useState([]);
  const [page, setPage] = useState(1);
  const [word, setWord] = useState();
  const [addsTop, setAddsTop] = useState([]);
  const [addsbottom, setAddsbottom] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const base_url = "https://api.blindin.mx/api/search/"
  const addUrl = "https://api.blindin.mx/api/adds"

  const getAdds = async (ubication) => {
    try {
      const response = await axios.get(`${addUrl}/${ubication}`);
      if (ubication === "top") {
        setAddsTop(response.data)
      }

      if (ubication === "down") {
        setAddsbottom(response.data)
      }
      setIsLoading(true)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAdds("top")
    getAdds("down")

  }, [])


  const changeRegion = (reg) => {
    setRegion(reg);
  }

  const setWordSearch = (word) => {
    setWord(word);

  }

  const searchNew = async () => {
    if (word === "") {
      setWord("nada")
    }
    const response = await axios.get(`${base_url}${word}?page=${page}`)
    setNews(response.data.data)

    setPage(page + 1)
  }

  const setNews = (response) => {
    if (response === "") {
      setnewsData([]);
      return;
    }
    if (newsData.length === 0) {
      setnewsData(response)
    } else {
      setnewsData(newsData => newsData.concat(response))
    }
  }

  const removeValuesState = () => {
    setnewsData([])
  }

  if (isLoading === false) return (<Spinner />)

  return (
    <>
      <Router >
        <Navbar
          changeRegion={changeRegion}
          removeValuesState={removeValuesState}
        />
        <Adds adds={addsTop} position={"top"} />
        <hr />
        <Navbar2
          setWordSearch={setWordSearch}
          searchNew={searchNew}
        />
        <div className="container-lg container-md container">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-12">
                <NewsSearch
                  news={newsData}
                  searchNew={searchNew}
                />
              </div>
              <Routes
                region={region} />
            </div>
          </div>
        </div>
        <Adds adds={addsbottom} position={"down"} />

      </Router>
    </>

  );
}

export default App;
