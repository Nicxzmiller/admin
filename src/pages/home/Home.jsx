import React from 'react'
import Chart from '../../components/chart/Chart'
import Customers from '../../components/customers/Customers'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Team from '../../components/Team/Team'
import Widgets from '../../components/widgets/Widgets'
import './home.scss'

const Home = ({title}) => {
  return (
    <div className='home'>
        <Sidebar className="sidebar"/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widgets type="user"/>
            <Widgets type="order"/>
            <Widgets type="earning"/>
            <Widgets type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart title={"Last 6 Months (Revenue)"}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table/>
          </div>
          <div className="teamContainer">
            <div className="teamTitle">Team Members</div>
            <Team />
          </div>
          <div className="clientsContainer">
            <div className="clientsTitle">Clients</div>
            <Customers/>
          </div>
        </div>
    </div>
  )
}

export default Home