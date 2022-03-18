import React, { useState, useEffect } from 'react';

//Subcomponents
import MainContent from '../Components/PPC/MainContent';
import StyledButton from '../Components/StyledButton/StyledButton';
import API from '../Components/API/API';
import NamePlateList from '../Components/NamePlates/NamePlateList';

const FindCharacters = () => {

  const [searchedCharacters, setSearchedCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);

  //Utilities

  const deleteOne = target => {
    setSearchedCharacters(previousState => [...previousState.filter(cv => cv.name !== target)])
  }

  const updateOne = (target, field, newValue) => {
    setSearchedCharacters(previousState => {
      let targetCharacter = previousState.filter(cv => cv.name === target)
      let unchangedState = previousState.filter(cv => cv.name !== target)
      targetCharacter[0][field] = newValue
      return [...targetCharacter, ...unchangedState]
    })
  }

  return (
    <MainContent>
      <h1>Looking for a character?</h1>
      <p>
        The SWAPI (Star Wars API) can find characters at random from any of the movies or the expanded universe! By clicking on "Get One" you can get any random character from the Star Wars universe. The "Get 10" button will let you get the profile data on up to 10 characters at the same time.
      </p>
      <div style={styles.mainContentButtonList}>
        <StyledButton
          title="Get One"
          clickHandler={() => API.getOne(setSearchedCharacters, setIsLoading)}
        />
        <StyledButton
          title="Get Ten"
          clickHandler={() => API.getTen(setSearchedCharacters, setIsLoading)}
        />
      </div>
      <h1>Character List</h1>
      <div style={styles.charactersList}>
        {searchedCharacters.length < 1 && <h3>Press the "Get One" or "Get Ten" buttons above to access the biographic data of random characters from the Star Wars universe.</h3>}
        {searchedCharacters.length > 0 && <h3>The Star Wars API returned results with the follow characters. Expand their profiles to check their biographic data! If you find any mistakes, click on a characters attributes to edit them.</h3>}
        {isLoading === true && <h3>Fetching API Data...</h3>}
        {searchedCharacters && <NamePlateList 
        deleteOne={deleteOne}
        updateOne={updateOne}
        arrayData={searchedCharacters} 
        />}
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