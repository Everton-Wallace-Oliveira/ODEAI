import React from 'react';
import '../../styles/global.css';
import '../../styles/servicosufba.css';
import OndaNavbar from '../navbar/OndaNavbar.jsx';
import Footer from '../footer/Footer.jsx';

function ServicosUfba() {
  return (
    <>
      <OndaNavbar />
      <div className="layout">
        <h1 className="mainTitle">Serviços UFBA</h1>
        <p className="subtitle">
          Aqui estão serviços importantes oferecidos pela UFBA.
        </p>
        <div className="links-section">
          <h3>Atendimento Acadêmico</h3>
          <a
            href="https://sistemas.ufba.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sistemas UFBA
          </a>

          <h3>Bibliotecas</h3>
          <a
            href="https://biblioteca.ufba.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Biblioteca Universitária
          </a>

          <h3>Serviços Online</h3>
          <a
            href="https://siac.ufba.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portal do Aluno
          </a>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ServicosUfba;
