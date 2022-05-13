import React from 'react'
import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widgets = ({type}) => {

  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch(type){
    case "user":
      data={
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon: <PersonIcon className='icon' style={{color:"crimson"}}/>
      };
      break;
      case "order":
      data={
        title:"ORDERS",
        isMoney:false,
        link:"See all orders",
        icon: <CreditCardIcon className='icon' style={{color:"#2979ff"}}/>
      };
      break;
      case "earning":
      data={
        title:"EARNINGS",
        isMoney:true,
        link:"View earnings",
        icon: <PaidIcon className='icon' style={{color:"#3f51b5"}}/>
      };
      break;
      case "balance":
      data={
        title:"BALANCE",
        isMoney:true,
        link:"View balance info",
        icon: <AccountBalanceWalletIcon className='icon' style={{color:"#ff5722"}}/>
      };
      break;
      default:
        break;
  }
  return (
    <div className='widget'>
        <div className="left">
          <span className='title'>{data.title}</span>
          <span className="counter">{data.isMoney && "$"} {amount}</span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon/> {diff} %
          </div>
          {data.icon}
        </div>
    </div>
  )
}

export default Widgets