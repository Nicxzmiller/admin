import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Datatable = () => {
  const actionColumn = [
    {
      filed:"action",
      headerName:"Action",
      width:200,
      renderCell:()=>{
        return(
          <div className="cellAction">
            <div className="viewButton">
               <VisibilityIcon className='viewButtonIcon'/>
            </div>
            <div className="deleteButton">
               <DeleteIcon className='deleteButtonIcon'/>
            </div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable'>
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable