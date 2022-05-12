import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./navbar.scss";
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon/>
            English
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar