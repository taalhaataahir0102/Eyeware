import React from 'react';
import './home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);

  const handleClick = async () => {
    const response = await axios.post("https://eyeware-x7ui-5683s11k9-taalhaataahir0102.vercel.app/add", { a, b });
    console.log('result:', response.data.result);
    setResult(response.data.result);
  };
  return (
    <React.Fragment>
      <div>
        <label>
          A:
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
        </label>
        <br />
        <label>
          B:
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
        </label>
        <br />
        <button onClick={handleClick}>Add</button>
        {result && <p>Result: {result}</p>}
     </div>
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
      <h1 className="left-aligned">Home</h1>
      <img src={ require('./images/Home1.jpg') } alt="Logo"/>
      <br></br>
    </React.Fragment>
  );
};

export default Home;
