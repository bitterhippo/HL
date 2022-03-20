import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { IoCaretDownOutline, IoCaretUpOutline, IoCloseCircle, IoCheckmarkSharp, IoCloseOutline } from 'react-icons/io5';


const NamePlate = ({ data, deleteOne, updateOne }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedAttribute, setSelectedAttribute] = useState();
  const [textInput, setInput] = useState('');

  //Utilites

  const handleChange = (e) => {
    setInput(e.target.value);
  }

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

  const { name } = data;

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
              style={{ ...styles.attributeRow, justifyContent: 'space-between' }}
              key={data.name + cv.attribute}
              onClick={selectedAttribute ? null : () =>
                setSelectedAttribute(cv.attribute)
              }
            >
              <span>{cv.makeString(data[cv.attribute])}</span>
              {selectedAttribute === cv.attribute &&
                <div style={styles.attributeRow}>
                  <div
                    onClick={() => {
                      updateOne(name, cv.attribute, textInput)
                      setSelectedAttribute()
                    }}
                  >
                    <IoCheckmarkSharp size={20} />
                  </div>
                  <input 
                  onChange={(e) => handleChange(e)}
                  placeholder='Enter a new value here!'
                  style={styles.styledInput} 
                  />
                  <div
                    onClick={() => setSelectedAttribute()}
                  >
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
    flexDirection: 'row',
    cursor: 'pointer'
  },
  styledInput: {
    height: '12px'
  },
  drawer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 15
  }
};

export default NamePlate