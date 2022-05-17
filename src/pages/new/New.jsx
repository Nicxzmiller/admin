import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import UploadIcon from '@mui/icons-material/Upload';
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
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="profile pic" />
          </div>
          <div className="rightContainer">
            <form>
              <div className="formInput">
                <label htmlFor='file' > 
                  Image: <UploadIcon className='icon'/>
                </label>
                <input type="file" id="file" style={{display:'none'}}/>
              </div>
              <div className="formInput">
                <label htmlFor="Username">Username</label>
                <input type="text" placeholder='e.g john_doe' />
              </div>
              <div className="formInput">
                <label htmlFor="fullname">Name and surname</label>
                <input type="text" placeholder='e.g John Doe' />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='e.g john_doe@gmail.com' />
              </div>
              <div className="formInput">
                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder='e.g +1 234 566 89' />
              </div>
              <div className="formInput">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='********' />
              </div>
              <div className="formInput">
                <label htmlFor="address">Address</label>
                <input type="text" placeholder='address' />
              </div>
              <div className="formInput">
                <label htmlFor="country">Country</label>
                <input type="text" placeholder='e.g USA' />
              </div>
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New