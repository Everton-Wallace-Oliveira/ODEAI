import axios from 'axios';
import { NEW_PLACE_ENDPOINT } from '../../constants/urls';

export function registerTestimonials(
  title,
  nameInterviewed,
  interviewerName,
  description,
  image,
  accessToken
) {
  return new Promise((resolve, reject) => {
    const headers = {
      headers: {
        'Content-type': 'application/json', // Usando JSON agora
        Authorization: `Bearer ${accessToken}`,
      },
    };

    // Criar o objeto de dados a ser enviado
    const data = {
      title: title,
      nameInterviewed: nameInterviewed,
      interviewerName: interviewerName,
      description: description,
      date: new Date().toISOString(), // Adicionando a data no formato ISO
      image: image, // A imagem já está em base64
    };

    axios
      .post(NEW_PLACE_ENDPOINT, data, headers) // Envia o objeto de dados
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
