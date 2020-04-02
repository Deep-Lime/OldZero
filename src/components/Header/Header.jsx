import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
      <header>
        <div className={s.header}>
            <h2>Социальная сеть типо вк</h2>
        </div>
      </header>
  );
}

export default Header;
