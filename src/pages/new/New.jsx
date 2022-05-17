import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './New.scss'

const New = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="leftContainer">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="image" />
          </div>
          <div className="rightContainer">
            <form action="">
              <div className="formInput">
                <label htmlFor="Username">Username</label>
                <input type="text" placeholder='e.g Johnny' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New