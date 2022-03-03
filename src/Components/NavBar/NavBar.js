import React from 'react';
import { Link } from 'react-dom';

//Subcomponets
import Colors from '../Colors';
import HighlightLink from './HighlightLink';

const NavBar = () => {

  return (
    <div style={styles.navBarMainWrapper}>
      <div style={styles.navBarListWrapper}>
        <HighlightLink name="Find Characters" to="FindCharacters"/>
        <HighlightLink name="New Characters" to="NewCharacters"/>
      </div>
    </div>
  )
};

const styles = {
  navBarMainWrapper: {
    backgroundColor: Colors.Primary,
    padding: 15,
    borderBottom: `2px solid ${Colors.Secondary}`
  },
  navBarListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    marginLeft: 20,
    color: Colors.Secondary,
    fontWeight: 'bold'
  }
};

export default NavBar;
