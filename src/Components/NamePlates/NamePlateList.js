import React from 'react';

//Subcomponents

import NamePlate from './NamePlate';

const NamePlateList = ({ arrayData , deleteOne, updateOne }) => {

  return (
    <div style={styles.namePlateListWrappper}>
      {
        arrayData.map(currentItem => <NamePlate 
          deleteOne = {deleteOne}
          updateOne = {updateOne}
          data={currentItem} 
          key={currentItem.name}
          />)
      }
    </div>
  )
};

const styles = {
  namePlateListWrappper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: '50%'
  }
};

export default NamePlateList;