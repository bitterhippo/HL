import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { IoCaretDownOutline, IoCaretUpOutline, IoCloseCircle, IoJournalSharp } from 'react-icons/io5';


const NamePlate = ({ data, deleteOne, updateOne }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedAttribute, setSelectedAttribute] = useState();
  const attributeDefaults = [
    {
      name: 'birth_year',
      makeString: value => `Birth Year: ${value}`
    },
    {
      name: 'gender',
      makeString: value => `Gender: ${value}`
    },
    {
      name: 'eye_color',
      makeString: value => `Eye Color: ${value}`
    },
    {
      name: 'height',
      makeString: value => `Height: ${value} cm`
    },
    {
      name: 'mass',
      makeString: value => `Mass: ${value} kg`
    }
  ]

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
          >{
              isOpen
                ? <IoCaretUpOutline size={18} />
                : <IoCaretDownOutline size={18} />
            }
          </div>
          <div
            style={styles.namePlateToggleItem}
            onClick={() => deleteOne(name)}
          >
            <IoCloseCircle size={18} />
          </div>
        </div>
      </div>
      {/* Opened Drawer */}
      {
        isOpen &&
        <>
          {
          attributeDefaults.map(cv => <div
            key={data.name + cv.name}
            onClick={() => setSelectedAttribute(cv.name)}
          >
            {cv.makeString(data[cv.name])}
            {selectedAttribute === cv.name && <>test</>}
          </div>)
          }
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