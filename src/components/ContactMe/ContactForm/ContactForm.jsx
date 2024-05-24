import React, { useState, useContext } from "react";
import "./ContactForm.css";
import { LanguageContext } from '../../../LanguageContext';

const ContactForm = () => {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...', formData);

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Data successfully sent to the server');
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: ""
        });
      } else {
        console.error('Error sending data to the server');
      }
    } catch (error) {
      console.error('Error during fetch request:', error);
    }
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            placeholder={language === 'en' ? "First Name" : "Имя"}
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            placeholder={language === 'en' ? "Last Name" : "Фамилия"}
          />
        </div>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder={language === 'en' ? "Email" : "Эл. почта"}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={language === 'en' ? "Message" : "Сообщение"}
          rows={3}
        />
        <button type="submit">{language === 'en' ? "SEND" : "ОТПРАВИТЬ"}</button>
      </form>
    </div>
  );
};

export default ContactForm;
