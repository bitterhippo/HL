import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { IoCaretDownOutline, IoCaretUpOutline, IoCloseCircle, IoJournalSharp } from 'react-icons/io5';

//Open drawer render function

const NamePlate = ({ data, deleteOne, updateOne }) => {

  const [isOpen, setIsOpen] = useState(false);

  const { name, birth_year, eye_color, gender, height, mass } = data;

  // Demo for the innvocation of the updateOne button.
  // onClick={() => updateOne(name, 'height', 'lol')

  return (

    <div style={styles.namePlateWrapper}>
      {/*  Testing line */}
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
            <IoJournalSharp size={18} />
            <IoCloseCircle size={18} />
          </div>
        </div>
      </div>
      {/* Opened Drawer */}
      {
        isOpen &&
        <>
          <span>Birth Year: {birth_year}</span>
          <span>Gender: {gender} </span>
          <span>Eye Color: {eye_color} </span>
          <span>Height: {height} cm </span>
          <span>Mass: {mass} kg </span>
        </>
      }
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