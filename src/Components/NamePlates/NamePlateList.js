import React from 'react';

//Subcomponents

import NamePlate from './NamePlate';

const NamePlateList = ({ arrayData }) => {
  return (
    <div>
      {
        arrayData.map(currentItem => <NamePlate name={currentItem.name} />)
      }
    </div>
  )
};

const styles = {

};

export default NamePlateList;