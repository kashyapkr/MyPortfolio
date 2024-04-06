import React, { useState, useRef } from 'react';
import "./Contact.scss";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [msg, setMsg] = useState('');
  const form = useRef();
  const [error, setError] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      setError('Please fill out all fields');
      setMsg('');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setMsg('');
      return;
    }

    emailjs.sendForm('service_ihdgosq', 'template_x3h3vzy', form.current, 'x4n63gPNlj2emzTHa')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        e.target.reset();
        setError('');
        setMsg('Thanks! Will get back to you ASAP🤞');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='contact' id="contact">
      <div className="left">
      
        <img src="assets/shake.svg" alt="Shake" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={handelSubmit}>
          <input type="text" placeholder='Name' name="user_name" />
          <input type="email" name="user_email" placeholder='Email' />
          <textarea placeholder='Message' name="message"></textarea>
          <button type="submit" value="Send">Send</button>
          {error && <span className="error">{error}</span>}
          {msg && <span>{msg}</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;