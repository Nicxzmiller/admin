import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./navbar.scss";
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon/>
          </div>
          <div className="item">
            <DarkModeIcon/>
          </div>
          <div className="item">
            <FullscreenExitIcon/>
          </div>
          <div className="item">
            <NotificationsNoneIcon/>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon/>
          </div>
          <div className="item">
            <ListIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar