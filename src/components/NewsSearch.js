import React, { useState } from "react";
import Section from "./Section";
import noImagen from "../icons/SIN-IMAGEN.jpg";
import "../css/News.css";
import Modal from "./Modal";

function NewsSearch(props) {
  // console.log(props.news)
  const [urlPage, setUrlPage] = useState("");
  const [img, setImg] = useState("");
  const [titlenew, setTitlenew] = useState("");
  const [modal, setModal] = useState(false);

  const togleModal = () => {
    setModal(!modal);
    setUrlPage("");
    setImg("");
    setTitlenew("");
  };

  if (props.news.length === 0) return "";
  return (
    <>
      <div className="container mb-3">
        <Section name="Busquedad" />
        {props.news.length >= 0 ? (
          props.news.map((n) => {
            return (
              <>
                {modal ? (
                  <Modal
                    modal={modal}
                    url={urlPage}
                    title={titlenew}
                    img={img}
                    toggle={togleModal}
                  />
                ) : (
                  ""
                )}
                <div
                  className="target target-search"
                  onClick={() => {
                    setModal(true);
                    setImg(n.img);
                    setTitlenew(n.titulo);
                    setUrlPage(n.texto);
                  }}
                  key={n.id}
                >
                  <div className="flex-target">
                    <div className="frame-search">
                      <img
                        src={n.img === "without image" ? noImagen : n.img}
                        alt={n.titulo}
                        className="search-img"
                      />
                    </div>
                    <p className="metadata category">{n.categoria}</p>
                    <div className="content-secondary">
                      <h3 className="title-search-new">{n.titulo}</h3>
                      <p>{n.resumen} </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className="target">
            <h4 className="p-2 text-center"> No existen coincidencias </h4>
          </div>
        )}
        <button
          className="btn-more-news"
          onClick={() => {
            props.searchNew();
          }}
        >
          Ver más...
        </button>
      </div>
    </>
  );
}

export default NewsSearch;
