import React, { useContext, useState, useRef } from 'react';
import Alert from '../login/Alert';
import { AlertContext } from '../../contexts/alertContext';
import { AlertTypeContext } from '../../contexts/alertTypeContext';
import { AlertColorContext } from '../../contexts/alertColorContext';
import { registerTestimonials } from '../../services/testimonials/registerTestimonials';
import Header from '../home/Header';
import { useNavigate } from 'react-router-dom';
import '../../styles/global.css';
import { Link } from 'react-router-dom';
import '../../styles/testimonials.css';

const initialFormState = {
  title: '',
  nameInterviewed: '',
  interviewerName: '',
  description: '',
  date: '',
  image: '',
};

export default function NewTestimonials() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialFormState);
  const [image, setImage] = useState('');
  const fileInputRef = useRef(null);
  const [showAlert, setShowAlert] = useContext(AlertContext);
  const [alertType, setAlertType] = useContext(AlertTypeContext);
  const [alertColor, setAlertColor] = useContext(AlertColorContext);
  const token = localStorage.getItem('token');

  function handleAlert(state, type, color = null) {
    setShowAlert(state);
    setAlertType(type);
    setAlertColor(color);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  
    if (
      form.title &&
      form.nameInterviewed &&
      form.interviewerName &&
      form.description &&
      form.date &&
      image
    ) {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('nameInterviewed', form.nameInterviewed);
      formData.append('interviewerName', form.interviewerName);
      formData.append('description', form.description);
      formData.append('date', form.date);
      formData.append('image', image);
  
      registerTestimonials(formData, token)
        .then(() => {
          handleAlert(true, 'Cadastro realizado com sucesso', 'success');
          setForm(initialFormState);
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
          navigate(-1);
        })
        .catch((error) => {
          handleAlert(
            true,
            'Algum erro ocorreu durante o cadastro, tente novamente',
            'danger'
          );
          console.log(error.response?.status);
        });
    } else {
      handleAlert(true, 'Preencha todos os campos', 'danger');
    }
  }  

  return (
    <>
      <Alert />
      <Header />
      <div className="background mainContainerTestmonials">
        <form className="subcontainer" onSubmit={handleSubmit}>
          <h3 className="titleTestmonials">Título</h3>
          <input
            className="inputTitle"
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />

          <h3 className="titleTestmonials">Nome(a) do Entrevistador(a)</h3>
          <input
            className="inputTitle"
            type="text"
            name="interviewerName"
            value={form.interviewerName}
            onChange={handleChange}
          />

          <h3 className="titleTestmonials">Nome(a) do Entrevistado(a)</h3>
          <input
            className="inputTitle"
            type="text"
            name="nameInterviewed"
            value={form.nameInterviewed}
            onChange={handleChange}
          />

          <h3 className="titleTestmonials">Data da entrevista</h3>
          <input
            type="date"
            className="inputDesc"
            name="date"
            value={form.date}
            onChange={handleChange}
            style={{ width: '200px', height: '40px' }}
          />

          <h3 className="titleTestmonials">Depoimento</h3>
          <textarea
            className="inputDesc"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <h3 className="titleTestmonials">Imagens</h3>
          {image && <img className="imagem" src={image} alt={form.title} />}
          <input
            className="inputFile"
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <div className="container-buttons2">
            <div className="action-buttons">
              <button className="confirm-button" type="submit">
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
