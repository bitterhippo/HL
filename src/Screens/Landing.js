import React from 'react';

//Subcomponents
import NavBar from '../Components/NavBar/NavBar';
import API from '../Components/API/API';

const Landing = () => {
  return (
    <>
    <NavBar />
    LOL
    { API.getOne()}
    </>
  )
};

export default Landing;