import React, { useState } from 'react';
import { Link } from 'react-dom';

//Subcomponents
import Colors from '../Colors';

const HighlightLink = ({ name, to }) => {

  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...styles.linkDiv,
        ...(hover ? styles.selected : null)
      }}
    >
      {name}
    </div>
  )
};

const styles = {
  linkDiv: {
    cursor: 'pointer'
  },
  selected: {
    textDecoration: 'underline',
  }
};

export default HighlightLink;