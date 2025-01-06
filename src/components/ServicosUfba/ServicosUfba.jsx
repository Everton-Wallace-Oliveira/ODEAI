import React from "react";
import '../../styles/ServicosUfba.css';

function ServicosUfba() {
  return (
    <main>
      <h2>Serviços UFBA</h2>
      <div className="links-section">
        <h3>Atendimento Acadêmico</h3>
        <a href="https://sistemas.ufba.br" target="_blank" rel="noopener noreferrer">
          Sistemas UFBA
        </a>

        <h3>Bibliotecas</h3>
        <a href="https://biblioteca.ufba.br" target="_blank" rel="noopener noreferrer">
          Biblioteca Universitária
        </a>

        <h3>Serviços Online</h3>
        <a href="https://siac.ufba.br" target="_blank" rel="noopener noreferrer">
          Portal do Aluno
        </a>
      </div>
    </main>
  );
}

export default ServicosUfba;
