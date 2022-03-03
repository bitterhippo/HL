import React from 'react';

//Subcomponents
import MainContent from '../Components/PPC/MainContent';

const Home = () => {
  return (
    <MainContent>
      <h1>Documentation</h1>
      <p>
        Use the Find Characters page to search for all of your favorite Star Wars characters utilizing the incredible power of the Star Wars API.
      </p>
      <h2>Didn't find the character you were looking for?</h2>
      <p>
        Use the New Characters page to add a new character to the Star Wars universe! Fill out the form and on that page and create a new character.
      </p>
    </MainContent>
  )
};

export default Home;