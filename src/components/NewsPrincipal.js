import React, { useState, useEffect } from "react";
import "../css/News.css";
import axios from "axios";
import noImagen from "../icons/SIN-IMAGEN.jpg";
import Modal from "./Modal";

function NewsPrincipal(props) {
  const [newsRelevantes, setnewsRelevantes] = useState([]);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [urlPage, setUrlPage] = useState("");
  const [img, setImg] = useState("");
  const [titlenew, setTitlenew] = useState("");
  const { url, type, region } = props;

  const getData = async () => {
    try {
      const response = await axios.get(`${url}${type}/${region}?page=${page}`);
      const data = await response.data;
      console.log(data);
      if (newsRelevantes === "") {
        setnewsRelevantes(data.data);
      } else {
        setnewsRelevantes((newsRelevantes) => newsRelevantes.concat(data.data));
      }
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setnewsRelevantes([]);
    getData();
  }, [region]);

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
    <>
      <div className="row">
        {modal ? (
          <Modal modal={modal} url={urlPage} title={titlenew} img={img} toggle={togleModal} />
        ) : (
          ""
        )}
        {newsRelevantes.map((news) => {
          return (
            <div
              className="col-sm-6 col-xs-12 col-md-12"
              key={news.id}
              onClick={() => {
                setModal(true);
                setImg(news.img);
                setUrlPage(news.texto);
              }}
            >
              <div className="target">
                <div className="frame">
                  <img
                    src={news.img === "without image" ? noImagen : news.img}
                    alt={news.titulo}
                    className="image-new"
                  />
                </div>
                <p className="metadata date">{news.fecha}</p>
                <p className="metadata category">{news.categoria}</p>
                <div className="content">
                  <div className="title-principal">
                    <h3>{news.titulo}</h3>
                  </div>
                  <p>{news.resumen}</p>
                  <button
                    onClick={() => {
                      setModal(true);
                      setUrlPage(news.texto);
                      setImg(news.img);
                      setTitlenew(news.titulo);
                    }}
                    className="btn-more-principal"
                  >
                    Leer más...
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="btn-see-more" onClick={getMoreData}>
        Ver más..
      </button>
    </>
  );
}

export default NewsPrincipal;
