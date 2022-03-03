import React from 'react';
import { Link } from 'react-dom';

//Subcomponets
import Colors from '../Colors';
import HighlightLink from './HighlightLink';

const NavBar = () => {

  return (
    <div style={styles.navBarMainWrapper}>
      <div style={styles.navBarListWrapper}>
        <HighlightLink name="Find Characters" to="FindCharacters" />
        <HighlightLink name="New Characters" to="NewCharacters" />
      </div>
      <div style={{marginRight: '5vw'}}>
        <HighlightLink name="Documentation" to="/" />
      </div>
    </div>
  )
};

const styles = {
  navBarMainWrapper: {
    backgroundColor: Colors.Primary,
    padding: 15,
    borderBottom: `2px solid ${Colors.Secondary}`,
    display: 'flex',
    justifyContent: 'space-between'
  },
  navBarListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    color: Colors.Secondary,
    marginLeft: '5vw'
  }
};

export default NavBar;
