import React, { useState, useEffect } from "react";
import { getAllTestimonials } from "../../services/testimonials/getAllTestimonials";
import { deleteTestimonials } from "../../services/testimonials/deleteTestimonials";
import { useNavigate } from "react-router-dom";

/**
 * Componente Carousel
 *
 * Este componente representa o Carousel exibido na página Testimonials.
 */
export default function Carousel() {
  const navigate = useNavigate();

  const [listTestimonials, setListTestimonials] = useState([]);
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  
  useEffect(() => {
    setTestimonials();
  }, []);

  function setTestimonials() {
    getAllTestimonials(token)
      .then((data) => {
        setListTestimonials(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar os depoimentos:", error);
      });
  }

  function editTestimonials(testimonial) {
    localStorage.setItem("update-testimonials", JSON.stringify(testimonial));
    navigate("/admin/update-testimonials");
  }

  function removeTestimonials(id) {
    const confirm = window.confirm(
      "Tem certeza de que deseja remover este depoimento?"
    );
    if (confirm) {
      deleteTestimonials(id, token)
        .then(() => {
          setListTestimonials((prevList) =>
            prevList.filter((item) => item._id !== id)
          );
        })
        .catch((error) => {
          console.error("Erro ao remover o depoimento:", error);
        });
    }
  }

  return (
    <section className="carousel slide" id="carousel">
      <div className="carousel-inner">
        
        {listTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className={
              "carousel-item section" + (index === 0 ? " active" : "")
            }
            
          >
            <h1 className="mainTitle">{testimonial.name}</h1>
            <img
              className="imagem"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <p className="descricao">{testimonial.description}</p>
            <button
              className="btn-info"
              data-bs-toggle="modal"
              data-bs-target={`#modal${index}`}
            >
              Mais informações
            </button>

            {isAdmin && (
              <div>
                <button
                  className="btn-info"
                  onClick={() => editTestimonials(testimonial)}
                >
                  Editar informações
                </button>
                <button
                  className="btn-remove"
                  onClick={() => removeTestimonials(testimonial._id)}
                >
                  Remover atração
                </button>
              </div>
            )}

            {/* Modal para exibir mais informações */}
            <div className="modal" id={`modal${index}`} tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title">Detalhes do Depoimento</h3>
                    <button
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body text-start">
                    <h4>
                      <strong>Descrição:</strong> {testimonial.description}
                    </h4>
                    <br />
                    <h4>
                      <strong>Imagem:</strong>{" "}
                      <a href={testimonial.image} target="_blank" rel="noopener noreferrer">
                        Visualizar imagem
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          className="carousel-control-prev"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon icon"></span>
        </button>
      </div>
    </section>
  );
}
