import React from 'react'
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* top section of sidebar */}
      <div className="top">
        <span className="logo">G-51 Admin</span>
      </div>

      {/* center section of sidebar */}
      <div className="center">
        <ul>
          <li><span>Dashboard</span></li>
          <li><span>Dashboard</span></li>
          <li><span>Dashboard</span></li>
          <li><span>Dashboard</span></li>
        </ul>
      </div>

      {/* bottom section of sidebar */}
      <div className="bottom">Color option</div>
    </div>
  )
}

export default Sidebar