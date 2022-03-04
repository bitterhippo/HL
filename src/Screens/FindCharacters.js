import React, { useState, useEffect } from 'react';

//Subcomponents
import MainContent from '../Components/PPC/MainContent';
import StyledButton from '../Components/StyledButton/StyledButton';
import API from '../Components/API/API';
import NamePlateList from '../Components/NamePlates/NamePlateList';

const FindCharacters = () => {

  const [searchedCharacters, setSearchedCharacters] = useState([]);

  console.log('%c Searched Character Test Log', 'color: orange')
  console.log(searchedCharacters)

  return (
    <MainContent>
      <h1>Looking for a character?</h1>
      <p>
        The SWAPI (Star Wars API) can find characters at random from any of the movies or the expanded universe! By clicking on "Get One" you can get any random character from the Star Wars universe. The "Get 10" button will let you get the profile data on up to 10 characters at the same time.
      </p>
      <div style={styles.mainContentButtonList}>
        <StyledButton
          title="Get One"
          clickHandler={() => API.getOne(setSearchedCharacters)}
        />
        <StyledButton
          title="Get Ten"
          clickHandler={() => API.getTen(setSearchedCharacters)}
        />
      </div>
      <div style={styles.charactersList}>
        {searchedCharacters && <NamePlateList arrayData={searchedCharacters} />}
      </div>
    </MainContent>
  )
};

const styles = {
  charactersList: {
    marginTop: 20
  },
  mainContentButtonList: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  }
}

export default FindCharacters;