import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import CartButton from '../CartButton/CartButton';

function Header(){
  return(
    <header className='header'>
      <div className='container' style={{maxWidth: '800px', margin: '0 auto'}}>
        
        <SearchBar/>
        <CartButton/>

      </div>
    </header>
  );
}

export default Header;