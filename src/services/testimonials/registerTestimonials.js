import axios from 'axios';
import { NEW_PLACE_ENDPOINT } from '../../constants/urls';

export function registerTestimonials(
  title,
  nameInterviewed,
  interviewerName,
  description,
  image,
  date,
  accessToken
) {
  return new Promise((resolve, reject) => {
    const headers = {
      headers: {
        'Content-type': 'application/json', 
        Authorization: `Bearer ${accessToken}`,
      },
    };

  
    const data = {
      title: title,
      nameInterviewed: nameInterviewed,
      interviewerName: interviewerName,
      description: description,
      date: date, 
      image: image, 
    };

    axios
      .post(NEW_PLACE_ENDPOINT, data, headers) 
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
