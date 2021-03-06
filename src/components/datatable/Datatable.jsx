import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const Datatable = () => {
  const actionColumn = [
    {
      filed:"action",
      headerName:"Action",
      width:200,
      renderCell:()=>{
        return(
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton">
                <VisibilityIcon className='viewButtonIcon'/>
              </div>
            </Link> 
            <Link to="">
              <div className="deleteButton">
                <DeleteIcon className='deleteButtonIcon'/>
              </div>
            </Link> 
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable'>
        <div className="datatableTitle">
          Add New User
          <Link to="/users/new" style={{textDecoration:"none"}} className="link">
          Add New
          </Link>
        </div>
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[9]}
            checkboxSelection
            className='datagrid'
        />
    </div>
  )
}

export default Datatable