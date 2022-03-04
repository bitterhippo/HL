import React from 'react';

//Subcomponents

import NamePlate from './NamePlate';

const NamePlateList = ({ arrayData }) => {

  return (
    <div style={styles.namePlateListWrappper}>
      {
        arrayData.map(currentItem => <NamePlate 
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
    gap: 20
  }
};

export default NamePlateList;