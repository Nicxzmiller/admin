import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Single.scss'
import BasicTable from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information </h1>
              <div className="item">
                <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <div className="itemKey">Email:</div>
                    <a href='mailto:JaneDoe@gmail.com' className="itemValue">JaneDoe@gmail.com</a>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Phone:</div>
                    <div className="itemValue">+1 234 567 89</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Address:</div>
                    <div className="itemValue">James Avenue 234 Garden street</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Country:</div>
                    <div className="itemValue">Belgium</div>
                  </div>
                </div>
              </div>
          </div>
          <div className="right">
            <Chart aspect={4 / 1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Transactions </h1>
          <BasicTable/>
        </div>
      </div>
    </div>
  )
}

export default Single