import React from 'react';

const Header = props => {
      return (
        <header>
          <i className="fas fa-rocket header-logo"></i>
          <span className="header-name">My Habits</span>
          <span className="header-count">{props.count}</span>
        </header>
      )
};

export default Header;