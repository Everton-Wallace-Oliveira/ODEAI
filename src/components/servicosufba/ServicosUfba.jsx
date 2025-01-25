import React from 'react';
import '../../styles/global.css';
import '../../styles/servicosufba.css';
import OndaNavbar from '../navbar/OndaNavbar.jsx';
import Footer from '../footer/Footer.jsx';

function ServicosUfba() {
  return (
    <>
      <OndaNavbar/>
        
      <div className="servicos-ufba">
        <div className="page-layout">
          <div className="layout">
              <h1 className="mainTitle">Serviços UFBA</h1>
              <p className="subtitle">Aqui estão serviços importantes oferecidos pela UFBA.</p>
                  <div className="links-section">
            <h3>PET Comunidades Indígenas da UFBA</h3>
            <a
              href="https://petcindigenas.ufba.br/"
              target="_blank"
              rel="noopener noreferrer"
              >
              PET Cindigenas
            </a>
  
            <h3>Bibliotecas</h3>
            <a
              href="https://www.pergamum.bib.ufba.br/pergamum/biblioteca/index.php"
              target="_blank"
              rel="noopener noreferrer"
              >
              Biblioteca Universitária
            </a>
  
            <h3>Pró-Reitoria de Ações Afirmativas e Assistência Estudantil </h3>
            <a
              href="https://proae.ufba.br/pt-br/proae"
              target="_blank"
              rel="noopener noreferrer"
              >
              PROAE
            </a>
            <h3> Pró- Reitoria de Ensino de Graduação </h3>
            <a
              href="https://prograd.ufba.br/"
              target="_blank"
              rel="noopener noreferrer"
              >
              PROGRAD
              </a>
            <h3> Pró-Reitoria de Pesquisa e Pós-Graduação </h3>
            <a
              href="https://prppg.ufba.br/"
              target="_blank"
              rel="noopener noreferrer"
              >
              PRPPG
            </a>
            <h3>Pró-Reitoria de Extensão</h3>
            <a
              href="https://proext.ufba.br/"
              target="_blank"
              rel="noopener noreferrer"
              >
              PROEXT
            </a>
            <h3>Saberes Indígenas</h3>
            <a
              href="https://saberesindigenas.isc.ufba.br/"
              target="_blank"
              rel="noopener noreferrer"
              >
              Saberes Indígenas(Relatório)
            </a>
            
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
    
  );
}

export default ServicosUfba;
