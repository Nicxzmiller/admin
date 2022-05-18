import React from 'react'
import "./sidebar.scss"
import GridViewIcon from '@mui/icons-material/GridView';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* top section of sidebar */}
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">G-51 Admin</span>
        </Link>
      </div>
      <hr />

      {/* center section of sidebar */}
      <div className="center">
        <ul>

          <p className="title">MAIN</p>

          <Link to="/" style={{textDecoration:"none"}}>
            <li>
              <GridViewIcon className="icon"/>
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>

          <Link to="/users" style={{textDecoration:"none"}}>
            <li>
              <GroupIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{textDecoration:"none"}}> 
            <li>
              <ShoppingBagIcon className="icon"/>
              <span>Products</span>
            </li>
          </Link>    
          <li>
            <CreditCardIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL LINKS</p>
          <li>
          <QueryStatsIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <HealthAndSafetyIcon className="icon"/>
            <span>Health</span>
          </li>
          <li>
            <DescriptionIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      {/* bottom section of sidebar */}
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar