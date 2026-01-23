import React, { useState } from 'react';

/**
 * Página de contacto con formulario funcional usando Web3Forms.
 * Al enviar el formulario se muestra un mensaje de agradecimiento
 * y se oculta el formulario.
 */
const ContactPage = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '10a22d86-67ae-4839-b5dc-6c41cafa922f');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', 'Nuevo mensaje de contacto desde tu portfolio');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Error al enviar el formulario:', data);
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Si el formulario fue enviado exitosamente, mostrar solo el mensaje de agradecimiento
  if (submitted) {
    return (
      <section className="contact">
        <h1 className="contact__title">Contacto</h1>
        <div className="contact__success-message">
          <p className="contact__success-text">
            ¡Gracias! Tu mensaje ha sido recibido, te responderé a la mayor brevedad.
          </p>
        </div>
      </section>
    );
  }

  // Si no se ha enviado, mostrar el formulario
  return (
    <section className="contact">
      <h1 className="contact__title">Contacto</h1>
      <p className="contact__intro">Diseñemos algo increíble juntos.</p>
      
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__field">
          <label htmlFor="name">Nombre *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="contact__field">
          <label htmlFor="email">E‑mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="contact__field">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="contact__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </section>
  );
};

export default ContactPage;