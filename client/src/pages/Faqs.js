import React from 'react';
import './FAQ.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const FAQ = () => {

  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('https://eyeware-x7ui-5683s11k9-taalhaataahir0102.vercel.app/faq');
      setFaqs(response.data);
    }
    fetchUsers();
  }, []);
  return (
    <React.Fragment>
    <div className="logo">
        <img src={ require('./images/logo.png') } alt="logo"/>
        <img src={ require('./images/header6.jpg') } alt="Logo"/>
        <img src={ require('./images/header7.jpeg') } alt="Logo"/>
        <img src={ require('./images/header8.jpeg') } alt="Logo"/>
        <img src={ require('./images/header9.jpeg') } alt="Logo"/>
        <img src={ require('./images/header10.jpeg') } alt="Logo"/>
        <img src={ require('./images/header13.jpg') } alt="Logo"/>
        <img src={ require('./images/header11.jpg') } alt="Logo"/>
      </div>
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {/* <div className="question">
        <h3>What is Ainak?</h3>
        <p>bla bla</p>
      </div> */}
      <div>
      {faqs.map((user) => (
        <div className="question">
          <h2>{user.question}</h2>
          <p>{user.answer}</p>
        </div>
      ))}
    </div>
    </div>
    <br></br>
    </React.Fragment>
  );
};

export default FAQ;
