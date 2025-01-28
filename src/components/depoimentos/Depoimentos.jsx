import '../../styles/global.css';
import '../../styles/home.css';
import OndaNavbar from '../navbar/OndaNavbar.jsx';
import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getAllTestimonials } from '../../services/testimonials/getAllTestimonials.js';
import { deleteTestimonials } from '../../services/testimonials/deleteTestimonials.js';
import Footer from '../footer/Footer.jsx';
import { useNavigate } from 'react-router-dom';

function Depoimentos() {
  const [reviews, setReviews] = useState([]);
  const [expandedReviewId, setExpandedReviewId] = useState(null);
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const navigate = useNavigate();
  console.log(isAdmin)

  useEffect(() => {
    getAllTestimonials(token).then((response) => {
      setReviews(response);
    });
  }, [token]);

  const handleReviewClick = (reviewId) => {
    setExpandedReviewId(expandedReviewId === reviewId ? null : reviewId);
  };

  const editReview = (review) => {
    localStorage.setItem('update-testimonials', JSON.stringify(review));
    navigate('/admin/update-testimonials');
  };

  const removeReview = (id) => {
    const confirm = window.confirm(
      'Tem certeza de que deseja remover este depoimento?'
    );
    if (confirm) {
      deleteTestimonials(id, token)
        .then(() => {
          setReviews((prevReviews) =>
            prevReviews.filter((review) => review.id !== id)
          );
        })
        .catch((error) => {
          console.error('Erro ao remover o depoimento:', error);
        });
    }
  };

  // Função para formatar a data para o formato dd/mm/aa
  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  };

  return (
    <>
      <OndaNavbar />
      <div className="depoimentos-body">
        <h1 className="depoimentos-title">Depoimentos</h1>

        <div className="depoimentos-descricao">
          <p>
            Ao se mencionar a palavra ‘depoimento’, vem a nossa cabeça palavras-chave, como:
            entrevista, matérias jornalísticas, reportagens. Entretanto, nessa
            sessão, mostraremos breves falas dos estudantes indígenas sobre a
            rotina na UFBA, compartilhando saberes, além de opinar sobre temas de
            relevância desse público-alvo.
          </p>
          <p>
            A motivação para estes depoimentos é dar voz aos estudantes indígenas para
            conhecermos melhor desde as experiências de vida, questões sobre o mundo
            acadêmico, relação entre os saberes científico e o ancestral.
          </p>
        </div>

        <div>
          {/* Carrossel dos depoimentos */}
          <Carousel>
            {reviews.map((review) => (
              <Carousel.Item key={review.id || review._id} onClick={() => handleReviewClick(review.id || review._id)}>
                <div className="depoimentos-carrossel">
                  <div className="depoimentos-details-header">
                    <div>
                      <h1 className="depoimentos-details-title">{review.title}</h1>
                      <h3 className="depoimentos-details-author">{review.nameInterviewed}</h3>
                    </div>
                    <div className="depoimentos-details-data">
                      {/* Formatação da data */}
                      Data da entrevista: {formatDate(review.date)}
                    </div>
                  </div>

                  <div className="depoimentos-details-descricao">
                    {expandedReviewId === (review.id || review._id) && (
                      <div className="depoimentos-details-extra">
                        <p>{review.description}</p>
                        <div>
                          <img
                            className="depoimentos-details-img"
                            src={review.image}
                            alt={review.title}
                          />
                        </div>
                        <p>
                          <em>Entrevista conduzida por {review.interviewerName}</em>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Botões de administração */}
                  {isAdmin && (
                    <div className="depoimentos-admin-buttons">
                      <button
                        className="btn-info"
                        onClick={() => editReview(review)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn-remove"
                        onClick={() => removeReview(review.id || review._id)}
                      >
                        Remover
                      </button>
                    </div>
                  )}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Depoimentos;
