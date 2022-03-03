import React from 'react';

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
  }
};

export default MainContent;