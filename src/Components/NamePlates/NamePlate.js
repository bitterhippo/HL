import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { IoCaretDownOutline, IoCaretUpOutline } from 'react-icons/io5';

const openDrawer = (birth_year, eye_color, gender, height, mass) =>
  <>
    <span>Birth Year: {birth_year} </span>
    <span>Eye Color: {eye_color} </span>
    <span>Gender: {gender} </span>
    <span>Height: {height} </span>
    <span>Mass: {mass} </span>
  </>

const NamePlate = ({ data }) => {

  const [isOpen, setIsOpen] = useState(false);

  const { name, birth_year, eye_color, gender, height, mass } = data;

  return (

    <div style={styles.namePlateWrapper}>
      <div style={styles.namePlateHeader}>
        <span> {name} </span>
        <span onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoCaretUpOutline size={18} /> : <IoCaretDownOutline size={18} />}
        </span>
      </div>
      {isOpen && openDrawer(birth_year, eye_color, gender, height, mass)}
    </div>
  )
};

const styles = {
  namePlateWrapper: {
    backgroundColor: Colors.Primary,
    color: Colors.Secondary,
    borderRadius: 5,
    padding: '10px 25px',
    fontSize: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  },
  namePlateHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
};

export default NamePlate