import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { IoCaretDownOutline, IoCaretUpOutline, IoCloseCircle } from 'react-icons/io5';

//Open drawer render function

const openDrawer = (birth_year, eye_color, gender, height, mass) =>
  <>
    <span>Birth Year: {birth_year}</span>
    <span>Gender: {gender} </span>
    <span>Eye Color: {eye_color} </span>
    <span>Height: {height} cm </span>
    <span>Mass: {mass} kg </span>
  </>

const NamePlate = ({ data, deleteOne }) => {

  const [isOpen, setIsOpen] = useState(false);

  const { name, birth_year, eye_color, gender, height, mass } = data;

  return (

    <div style={styles.namePlateWrapper}>
      <div style={styles.namePlateHeader}>
        <span> {name} </span>
        <div
          style={styles.namePlateToggle}>
          <div
            style={styles.namePlateToggleItem}
            onClick={() => setIsOpen(!isOpen)}
          >{isOpen ? <IoCaretUpOutline size={18} /> : <IoCaretDownOutline size={18} />}
          </div>
          <div
            style={styles.namePlateToggleItem}
            onClick={() => deleteOne(name)}
          >
            <IoCloseCircle size={18} />
          </div>
        </div>
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
    gap: 5,
    border: `1px solid ${Colors.Secondary}`
  },
  namePlateHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  namePlateToggle: {
    display: 'flex',
    gap: 20
  },
  namePlateToggleItem: {
    cursor: 'pointer',
  },
};

export default NamePlate