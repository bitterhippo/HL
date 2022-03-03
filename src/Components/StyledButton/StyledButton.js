import React from 'react';

//Subcomponents
import Colors from '../Colors';

const StyledButton = ({ title, clickHandler }) => {
  return (
    <button 
    style={styles.buttonWrapper}
    onClick={() => clickHandler()}
    >
      {title}
    </button>
  )
};

const styles = {
  buttonWrapper : {
    backgroundColor: Colors.Primary,
    color: Colors.Secondary,
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 10,
    padding: '5px 20px',
    border: `1px solid ${Colors.Secondary}`
  }
};

export default StyledButton;
