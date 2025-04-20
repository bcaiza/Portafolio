import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [formData, setFormData] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cmcjmr7', 'template_j6tbjse', form.current, 'JBwG8oRliJcQ2HY3c')
      .then((result) => {
        console.log(result.text);

        setFormData({});

        Swal.fire(
          t('contact.alerts.success.title'), 
          t('contact.alerts.success.text'), 
          'success'
        );
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire(
          t('contact.alerts.error.title'), 
          t('contact.alerts.error.text'), 
          'error'
        );
      });
  };

  return (
    <div className="container mt-5">
      <div className='row justify-content-center mb-4'>
        <div className='col-sm-5'>
          <h2>{t('contact.title')}</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label" htmlFor="user_name">
                {t('contact.form.name')}
              </label>
              <input
                className="form-control"
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name || ''}
                onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="user_email">
                {t('contact.form.email')}
              </label>
              <input
                className="form-control"
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email || ''}
                onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                {t('contact.form.message')}
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message || ''}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button className="btn btn-danger" type="submit">
              {t('contact.form.send')}
            </button>
          </form>
        </div>
        <div className='col-sm-5'>
          <h2>{t('contact.social.title')}</h2>
          <ul className='icons mt-4'>
            <li>
              <a href='https://www.linkedin.com/in/boris-caiza-7396a3217/' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon mt-3" icon={faLinkedin} /> &nbsp; &nbsp; &nbsp; &nbsp; <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a href='https://github.com/BorisCaiza' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon mt-3" icon={faGithub} /> &nbsp; &nbsp; &nbsp; &nbsp; <span>GitHub</span>
              </a>
            </li>
            <li>
              <FontAwesomeIcon className="icon mt-3" icon={faPhone} /> &nbsp; &nbsp; <span>{t('contact.social.phone')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='row justify-content-center final mt-4'>
        <span>{t('contact.footer.copyright')}</span>
      </div>
    </div>
  );
};

export default ContactForm;