import React from 'react';
import { Link } from 'react-dom';

//Subcomponets
import Colors from '../Colors';

const NavBar = () => {
  return (
    <div style={styles.navBarMainWrapper}>
      <div style={styles.navBarListWrapper}>
        <div>
          TEST
        </div>
        <div>
          THIS
        </div>
      </div>
    </div>
  )
};

const styles = {
  navBarMainWrapper: {
    backgroundColor: Colors.Secondary
  },
  navBarListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  }
};

export default NavBar;
