import React from 'react';
import Search from './Search';

const Header = ({ title, onSearch }) => {
  return (
    <header className="header">
      <div className="header-title">{title}</div>
      <Search onSearch={onSearch} />
    </header>
  );
};

export default Header;
