import axios from 'axios';
import { UPDATE_TESTIMONIAL_ENDPOINT } from '../../constants/urls';

export function updateTestimonials(
  id,
  title,
  nameInterviewed,
  interviewerName,
  description,
  image,
  accessToken
) {
  let objToSubmit = {
    title: title,
    nameInterviewed: nameInterviewed,
    interviewerName: interviewerName,
    description: description,
    date: new Date().toISOString(), 
  };

  objToSubmit = image ? { ...objToSubmit, image: image } : objToSubmit;

  return new Promise((resolve, reject) => {
    const headers = {
      headers: {
        'Content-type': 'application/json', 
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .patch(`${UPDATE_TESTIMONIAL_ENDPOINT}${id}`, objToSubmit, headers) 
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
