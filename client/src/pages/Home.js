import React from 'react';
import './home.css';
import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';

const Home = () => {
  // const [add, setAdd] = useState([]);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch(
  //       "http://localhost:4000/add"
  //     ).then((response) => response.json());
    
  //     // update the state
  //     setAdd(response);
  //     console.log(response)
  //   };
  //   fetchUsers();
  // }, []);
  return (
    <React.Fragment>
      {/* <h1>{add}</h1> */}
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
