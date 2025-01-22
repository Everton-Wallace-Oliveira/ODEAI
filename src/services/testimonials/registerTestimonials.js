import axios from 'axios';
import { NEW_TESTIMONIAL_ENDPOINT } from '../../constants/urls';

export function registerTestimonials(formData, accessToken) {
  return new Promise((resolve, reject) => {
    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .post(NEW_TESTIMONIAL_ENDPOINT, formData, headers)
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
