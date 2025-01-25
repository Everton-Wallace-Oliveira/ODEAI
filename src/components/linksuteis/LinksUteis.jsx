import React from 'react';
import '../../styles/linksuteis.css';
import OndaNavbar from '../navbar/OndaNavbar.jsx';
import Footer from '../footer/Footer.jsx';

function LinksUteis() {
  return (
    <>
      <OndaNavbar></OndaNavbar>

      <div className="links-uteis">
        <div className="page-layout">
          <div className="layout">
            <h1 className="mainTitle">Links Úteis</h1>
            <p className="subtitle">
              Encontre aqui alguns os links importantes.
            </p>
            <div className="links-section">
              <h3>Secretaria Especial de Saúde Indígena</h3>
              <a
                href="https://www.gov.br/saude/pt-br/composicao/sesai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sesai
              </a>

              <h3>Secretaria Estadual da Saúde (Bahia)</h3>
              <a
                href="https://www.saude.ba.gov.br/atencao-a-saude/saude-de-todos-nos/saude-dos-povos-indigenas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sesab
              </a>

              <h3>Fundação Nacional do Índio</h3>
              <a
                href="http://www.funai.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Funai
              </a>

              <h3>Conselho Indigenista Missionário</h3>
              <a
                href="https://cimi.org.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cimi
              </a>

              <h3>Associação Nacional de Ação Indigenista</h3>
              <a
                href="http://anai.org.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anai
              </a>

              <h3>Jornada Agroecológica da Bahia</h3>
              <a
                href="http://teiadospovos.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teia dos Povos
              </a>

              <h3>Recursos Acadêmicos</h3>
              <a
                href="https://repositorio.ufba.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositório Institucional da UFBA
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default LinksUteis;
