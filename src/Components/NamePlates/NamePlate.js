import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { IoCaretDownOutline, IoCaretUpOutline, IoCloseCircle, IoCheckmarkSharp, IoCloseOutline } from 'react-icons/io5';


const NamePlate = ({ data, deleteOne, updateOne }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedAttribute, setSelectedAttribute] = useState();
  const [textInput, setInput] = useState('5');

  console.log(selectedAttribute)

  //Defaults values for formating the tray

  const attributeDefaults = [
    {
      attribute: 'birth_year',
      makeString: value => `Birth Year: ${value}`
    },
    {
      attribute: 'gender',
      makeString: value => `Gender: ${value}`
    },
    {
      attribute: 'eye_color',
      makeString: value => `Eye Color: ${value}`
    },
    {
      attribute: 'height',
      makeString: value => `Height: ${value} cm`
    },
    {
      attribute: 'mass',
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
        <div style={styles.drawer}>
          {
            attributeDefaults.map(cv => <div
              style={{...styles.attributeRow, justifyContent:'space-between'}}
              key={data.name + cv.attribute}
              onClick={selectedAttribute ? null : () => setSelectedAttribute(cv.attribute)}
            >
              <span>{cv.makeString(data[cv.attribute])}</span>
              {selectedAttribute === cv.attribute &&
                <div style={styles.attributeRow}>
                  <div onClick={() => updateOne(name, cv.attribute, textInput)}>
                    <IoCheckmarkSharp size={20} />
                  </div>
                  <input style={styles.styledInput} />
                  <div onClick={() => setSelectedAttribute()}>
                    <IoCloseOutline size={20} />
                  </div>
                </div>
              }
            </div>)
          }
        </div>
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
  },
  styledInput: {
    height: '12px'
  },
  drawer: {
    marginTop: 20
  }
};

export default NamePlate