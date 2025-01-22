import React, { useState, useEffect } from 'react';
import { getAllTestimonials } from '../../services/testimonials/getAllTestimonials';
import { deleteTestimonials } from '../../services/testimonials/deleteTestimonials';
import { useNavigate } from 'react-router-dom';
/**
 * Componente Carousel
 *
 * Este componente representa o Carousel exibido na página Testimonals.
 *
 */

export default function Carousel() {
  const navigate = useNavigate();

  const [listTestimonials, setListTestimonials] = useState([]);
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') == 'true';

  useEffect(() => {
    setTestimonials();
  }, []);

  function setTestimonials() {
    getAllTestimonials(token)
      .then((data) => {
        console.log(data);
        setListTestimonials(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function editTestimonials(testimonial) {
    localStorage.setItem('update-testimonials', JSON.stringify(testimonial));
    navigate('/admin/update-testimonials');
  }

  function removeTestimonials(id) {
    const confirm = window.confirm(
      'Tem certeza de que deseja remover esta atração?'
    );
    if (confirm) {
      deleteTestimonials(id, token)
        .then((data) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.response.status);
        });
    }
  }

  return (
    <section className="carousel slide" id="carousel">
      <div className="carousel-inner">
        {listTestimonials &&
          listTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={
                'carousel-item section' + (index == 0 ? ' active' : '')
              }
            >
              <h1 className="mainTitle">{testimonial.name}</h1>
              <img className="imagem" src={testimonial.image} alt={testimonial.name} />
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
                    data-bs-toggle="modal"
                    onClick={() => editTestimonials(testimonial)}
                  >
                    Editar informações
                  </button>
                </div>
              )}
              {isAdmin && (
                <div>
                  <button
                    className="btn-remove"
                    data-bs-toggle="modal"
                    onClick={() => removeTestimonials(testimonial._id)}
                  >
                    Remover atração
                  </button>
                </div>
              )}
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
