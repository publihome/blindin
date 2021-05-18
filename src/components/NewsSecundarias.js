import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/News.css";
import Modal from "./Modal";
import noImagen from "../icons/SIN-IMAGEN.jpg";


function NewsSecundarias(props) {
  const url = `https://api.blindin.mx/api/secundarias`;

  const [secondaryNews, setSecondaryNews] = useState([]);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [urlPage, setUrlPage] = useState("");
  const [img, setImg] = useState("");
  const [titlenew, setTitlenew] = useState("");
  const { type, region } = props;

  useEffect(() => {
    setSecondaryNews([]);
    getData();
  }, [region]);

  const getData = async () => {
    const response = await axios.get(`${url}${type}/${region}?page=${page}`);
    const data = response.data;
    console.log(data);
    if (secondaryNews === "") {
      setSecondaryNews(data.data);
    } else {
      setSecondaryNews((secondaryNews) => secondaryNews.concat(data.data));
    }
    setPage(page + 1);
  };

  const getMoreData = () => {
    getData();
  };

  const togleModal = () => {
    setModal(!modal);
    setUrlPage("");
    setImg("");
    setTitlenew("");
  };

  return (
    <div className="secondary-news ">
      {modal ? (
        <Modal modal={modal} url={urlPage} title={titlenew} img={img} toggle={togleModal} />
      ) : (
        ""
      )}
      {secondaryNews.map((news) => {
        return (
          <div
            className="target"
            key={news.id}
            onClick={() => {
              setModal(true);
              setImg(news.img);
              setUrlPage(news.texto);
              setTitlenew(news.titulo)
            }}
          >
            <div className="flex-target">
              <div className="imagen-secondary">
                <img
                  src={news.img !== "without image" ? news.img : <noImagen/>}
                  alt={news.titulo}
                  className="secondary-img"
                />
              </div>
              <div className="content-secondary">
                <h3>{news.titulo}</h3>
                <p>{news.resumen} </p>
              </div>
            </div>
          </div>
        );
      })}
      <button className="btn-see-more" onClick={getMoreData}>
        Ver más..
      </button>
    </div>
  );
}

export default NewsSecundarias;
