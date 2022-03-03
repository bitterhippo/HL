import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { IoCaretDownOutline, IoCaretUpOutline } from 'react-icons/io5';

const NamePlate = ({ name }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.namePlateWrapper}>
      <span> {name} </span>
      <span onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoCaretUpOutline size={18} /> : <IoCaretDownOutline size={18} />}
      </span>
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
    justifyContent: 'space-between',
  }
};

export default NamePlate