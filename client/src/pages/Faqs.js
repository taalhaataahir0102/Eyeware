import React from 'react';
import './FAQ.css';

const FAQ = () => {
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
      <div className="question">
        <h3>What is Ainak?</h3>
        <p>bla bla</p>
      </div>
    </div>
    <br></br>
    </React.Fragment>
  );
};

export default FAQ;
