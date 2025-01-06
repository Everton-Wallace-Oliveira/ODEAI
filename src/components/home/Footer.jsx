import React from 'react';
import '../../styles/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-left">
          <p className="footer-name">Onda ODEAI</p>
        </div>
        <div className="footer-center">
          <p className="footer-text">Feito por @UFBA Todos os direitos reservados</p>
        </div>
        <div className="footer-right">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" id>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </footer>
    );
  };
  
export default Footer;
