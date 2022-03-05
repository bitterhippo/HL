import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { IoCaretDownOutline, IoCaretUpOutline, IoCloseCircle, IoCheckmarkSharp, IoCloseOutline } from 'react-icons/io5';


const NamePlate = ({ data, deleteOne, updateOne }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedAttribute, setSelectedAttribute] = useState();

  console.log(selectedAttribute)

  //Defaults values for formating the tray

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
              style={styles.attributeRow}
              key={data.name + cv.name}
              onClick={selectedAttribute ? null : () => setSelectedAttribute(cv.name)}
            >
              {cv.makeString(data[cv.name])}
              {selectedAttribute === cv.name &&
                <div style={styles.attributeRow}>
                  <IoCheckmarkSharp size={20} />
                  <input></input>
                  <div onClick={() => setSelectedAttribute()}>
                    <IoCloseOutline size={20} />
                  </div>
                </div>
              }
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
  attributeRow: {
    display: 'flex',
    flexDirection: 'row'
  }
};

export default NamePlate