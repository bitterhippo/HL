import React from 'react';

//Subcomponents
import Colors from '../Colors';

const MainContent = (props) => {
  return (
    <div style={styles.mainContentWrapper}>
      {props.children}
    </div>
  )
};

const styles = {
  mainContentWrapper: {
    width: '85%',
    margin: '20px auto 0 auto',
    color: Colors.Primary
  }
};

export default MainContent;