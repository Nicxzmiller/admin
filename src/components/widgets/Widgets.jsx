import React from 'react'
import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widgets = ({type}) => {

  let data;

  switch(type){
    case "user":
      data={
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon: <PersonIcon className='icon'/>
      };
      break;
      case "order":
      data={
        title:"ORDERS",
        isMoney:false,
        link:"See all orders",
        icon: <CreditCardIcon className='icon'/>
      };
      break;
      case "earning":
      data={
        title:"EARNINGS",
        isMoney:true,
        link:"View earnings",
        icon: <PaidIcon className='icon'/>
      };
      break;
      case "balance":
      data={
        title:"BALANCE",
        isMoney:true,
        link:"View balance info",
        icon: <AccountBalanceWalletIcon className='icon'/>
      };
      break;
      default:
        break;
  }
  return (
    <div className='widget'>
        <div className="left">
          <span className='title'>USERS</span>
          <span className="counter">21321</span>
          <span className="link">See all Users</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon/> 20%
          </div>
          <PersonIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widgets