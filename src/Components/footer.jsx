import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'


const Footer = () => {
 
  return (
    <footer className="text-center mt-auto footer">
      <div className="py-2">
        <a href="https://www.linkedin.com/in/kamila-wroblewska-bb61142a5" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://github.com/kamilawroblewska" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://www.facebook.com/zyje.by.wygrac15" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
        <a href="https://twitter.com/queenk1509" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href="https://www.instagram.com/kamila.wroblewska15/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="mailto:kamila.wroblewska@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} className="icon" />
        </a>
      </div>
    </footer>
  );
}

  
  export default Footer;