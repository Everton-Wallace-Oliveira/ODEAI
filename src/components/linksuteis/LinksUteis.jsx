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
              <p className="subtitle">Encontre aqui alguns os links importantes.</p>
            <div className="links-section">
              <h3>Documentação Importante</h3>
                <a
                  href="https://www.ufba.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UFBA - Página Oficial
                </a>
  
              <h3>Recursos Acadêmicos</h3>
                <a
                  href="https://repositorio.ufba.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositório Institucional da UFBA
                </a>
  
              <h3>Plataformas Online</h3>
                <a
                  href="https://moodle.ufba.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Moodle UFBA
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
