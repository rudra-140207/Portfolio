import React, { useState, useRef } from 'react';
import './Contact.scss';
import Button from '@cred/neopop-web/lib/components/Button';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm('service_aw0siyn', 'template_a2rga0z', form.current, {
        publicKey: 'Zx5x7cglnNiNXN_2x',
      })
      .then(
        () => {
          setSuccess('Message Sent Successfully.');
          setError('');
          setName('');
          setEmail('');
          setMessage('');
          console.log('SUCCESS!');
        },
        (error) => {
          setError('Something Went Wrong!');
          setSuccess('');
          console.log('FAILED...', error.text);
        }
      );
  };

  const [isOver, setIsOver] = useState(false);
  const colorConfig = {
    backgroundColor: '#F7AF24',
    borderColor: '#18171C',
    edgeColors: {
      left: 'transparent',
      top: 'transparent',
      right: '#18171C',
      bottom: '#18171C',
    },
    color: '#18171C',
  };

  return (
    <>
      <section data-scroll-index="4" id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section__heading">Take a Coffee & Chat with me</h2>
            </div>
          </div>
          <div className="row contact__form">
            <div className="col-lg-6">
              <div className="contact__form-1">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row gx-3 gy-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Full name</label>
                        <input
                          name="user_name"
                          id="name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          placeholder="Name *"
                          className="form-control"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">Your Email</label>
                        <input
                          name="user_email"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          placeholder="Email *"
                          className="form-control"
                          type="email"
                          required
                        />
                        {error && <span className="error-message">{error}</span>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          placeholder="Your message *"
                          rows="4"
                          className="form-control"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="response__message">
                      <div className={success ? 'message__success text-center' : 'message__success text-center d-none'} role="alert">
                        <span>{success}</span>
                      </div>
                      <div className={error ? 'message__error text-center' : 'message__error text-center d-none'} role="alert">
                        <span>{error}</span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form__button text-center">
                        <p
                          type="button"
                          onClick={sendEmail}
                          onMouseOver={() => setIsOver(true)}
                          onMouseOut={() => setIsOver(false)}
                        >
                          <Button
                            colorConfig={colorConfig}
                            type="submit"
                            className={isOver ? 'active' : ''}
                            variant="primary"
                            kind="elevated"
                            size="medium"
                            colorMode="dark"
                          >
                            Send Message
                          </Button>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
