import '../../styles/global.css';
import '../../styles/home.css';
import OndaNavbar from '../navbar/OndaNavbar.jsx';
import { Carousel } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import { getAllTestimonials } from '../../services/testimonials/getAllTestimonials.js';
import Footer from '../footer/Footer.jsx';


function Depoimentos() {
  const [reviews, setReviews] = useState([]);
  const [expandedReviewId, setExpandedReviewId] = useState(null);

  const handleReviewClick = (reviewId) => {
    setExpandedReviewId(expandedReviewId === reviewId ? null : reviewId);
  };

  useEffect(() => {
    getAllTestimonials().then((response) => {
      setReviews(response);
    });
  }, []);

  return (
    <>
      <OndaNavbar></OndaNavbar>

      <div className="depoimentos-body">
        <h1 className="depoimentos-title">Depoimentos</h1>

        <div className="depoimentos-descricao">
          <p>
            Ao se mencionar a palavra ‘depoimento’, vem a nossa cabeça palavras-chave, como: entrevista, matérias jornalísticas, reportagens. Entretanto, nessa sessão, mostraremos breves falas dos estudantes indígenas sobre a rotina na UFBA, compartilhando saberes, além de opinar sobre temas de relevância desse público-alvo.
          </p>
          <p>
            A motivação para estes depoimentos é dar voz aos estudantes indígenas para conhecermos melhor desde as experiências de vida, questões sobre o mundo acadêmico, relação entre os saberes científico e o ancestral.
          </p>
        </div>

        <div>
          {/* Carrossel dos depoimentos */}
          <Carousel>
            {reviews.map((review) => (
              <Carousel.Item key={review.id} onClick={() => handleReviewClick(review.id)}>
                <div className="depoimentos-carrossel">
                  <div className="depoimentos-details-header">
                    <div>
                      <h1 className="depoimentos-details-title">{review.title}</h1>
                      <h3 className="depoimentos-details-author">{review.nameInterviewed}</h3>
                    </div>
                    <div className="depoimentos-details-data">{review.date}</div>
                  </div>

                  <div className="depoimentos-details-descricao">
                    {expandedReviewId === review.id && (
                      <div className="depoimentos-details-extra">
                        <p>{review.description}</p>
                        <div><img className="depoimentos-details-img" src={review.image} /></div>
                        <p><em>Entrevista conduzida por {review.interviewerName}</em></p>
                      </div>
                    )}
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Depoimentos;
