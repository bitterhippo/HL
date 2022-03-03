import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <Link 
      to={to}
      style={styles.styledLink}
      >
        {name}</Link>
    </div>
  )
};

const styles = {
  linkDiv: {
    cursor: 'pointer'
  },
  selected: {
    textDecoration: 'underline',
  },
  styledLink: {
    textDecoration: 'none',
    color: `${Colors.Secondary}`
  }
};

export default HighlightLink;