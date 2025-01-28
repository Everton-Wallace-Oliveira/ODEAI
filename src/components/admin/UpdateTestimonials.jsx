import React, { useContext, useState, useRef } from 'react';
import Alert from '../login/Alert';
import { AlertContext } from '../../contexts/alertContext';
import { AlertTypeContext } from '../../contexts/alertTypeContext';
import { AlertColorContext } from '../../contexts/alertColorContext';
import { updateTestimonials } from '../../services/testimonials/updateTestimonials';
import '../../styles/global.css';
import '../../styles/testimonials.css';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';

export default function UpdateTestimonials() {
  const navigate = useNavigate();

  const testimonialsAsStr = localStorage.getItem('update-testimonials');
  const testimonials = JSON.parse(testimonialsAsStr);

  const [form, setForm] = useState({
    _id: testimonials._id ?? '',
    title: testimonials.name ?? '',
    desc: testimonials.description ?? '', // Descrição do depoimento
    nameInterviewed: testimonials.nameInterviewed ?? '', // Nome do entrevistado
    interviewerName: testimonials.interviewerName ?? '', // Nome do entrevistador
    image: testimonials.image ?? '',
    endereco: testimonials.address ?? '',
    horario: testimonials.openingHours ?? '',
    date: testimonials.date ?? '', // Campo de data
  });

  const [image, setImage] = useState('');
  const [imageToShow, setImageToShow] = useState(
    testimonials.image ?? undefined
  );

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
      setImageToShow(URL.createObjectURL(file));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const updatedFields = {};

    if (form.title !== testimonials.name) {
      updatedFields.title = form.title;
    }
    if (form.desc !== testimonials.description) {
      updatedFields.description = form.desc;
    }
    if (form.nameInterviewed !== testimonials.nameInterviewed) {
      updatedFields.nameInterviewed = form.nameInterviewed;
    }
    if (form.interviewerName !== testimonials.interviewerName) {
      updatedFields.interviewerName = form.interviewerName;
    }
    if (form.date !== testimonials.date) {
      updatedFields.date = form.date;
    }
    if (image && image !== testimonials.image) {
      updatedFields.image = image;
    }

    if (Object.keys(updatedFields).length > 0) {
      updateTestimonials(
        form._id,
        updatedFields.title,
        updatedFields.nameInterviewed,
        updatedFields.interviewerName,
        updatedFields.description,
        updatedFields.date,
        updatedFields.image,
        token
      )
        .then((data) => {
          handleAlert(true, 'Atualização realizada com sucesso', 'success');
          navigate(-1);
          fileInputRef.current.value = '';
        })
        .catch((error) => {
          handleAlert(
            true,
            'Algum erro ocorreu durante a atualização, tente novamente',
            'danger'
          );
          console.log(error.response.status);
        });
    } else {
      handleAlert(true, 'Nenhuma alteração foi feita', 'danger');
    }
  }

  return (
    <>
      <Alert />
      <Header />
      <div className="background mainContainertestimonials">
        <form className="subcontainer" onSubmit={handleSubmit}>
          <h1 className="testimonialsTitle">Atualização do depoimento</h1>

          <h3 className="titletestimonials">Título</h3>
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
            className="inputTitle"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <h3 className="titletestimonials">Descrição</h3>
          <textarea
            className="inputDesc"
            name="desc"
            value={form.desc}
            onChange={handleChange}
          />

          <h3 className="titletestimonials">Imagem</h3>
          {imageToShow && (
            <img className="imagem" src={imageToShow} alt={form.title} />
          )}
          <input
            className="inputFile"
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button className="button cadastrar" type="submit">
            Atualizar
          </button>
        </form>
      </div>
    </>
  );
}
