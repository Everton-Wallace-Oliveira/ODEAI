import axios from 'axios';
import { UPDATE_TESTIMONIAL_ENDPOINT } from '../../constants/urls';

export function updateTestimonials(
  id,
  title,
  nameInterviewed,
  interviewerName,
  description,
  date, 
  image,
  accessToken
) {
  let objToSubmit = {
    title: title,
    nameInterviewed: nameInterviewed,
    interviewerName: interviewerName,
    description: description,
    date: date, 
  };

  if (image) {
    objToSubmit.image = image;
  }

  return new Promise((resolve, reject) => {
    const headers = {
      'Content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    axios
      .patch(`${UPDATE_TESTIMONIAL_ENDPOINT}${id}`, objToSubmit, { headers })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error('Erro na resposta da API:', error.response.data);
          console.error('Status do erro:', error.response.status);
        } else if (error.request) {
          console.error('Erro na requisição:', error.request);
        } else {
          console.error('Erro ao configurar a requisição:', error.message);
        }
        reject(error);
      });
  });
}
