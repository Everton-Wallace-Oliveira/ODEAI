import React from 'react';
import '../../styles/global.css';
import '../../styles/home.css';
import '../../styles/linksuteis.css';
import OndaNavbar from '../navbar/OndaNavbar.jsx';

function LinksUteis() {
  return (
    <div className="container">
      <OndaNavbar />

      <main>
        <h2>Links Úteis</h2>
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
      </main>
    </div>
  );
}

export default LinksUteis;
