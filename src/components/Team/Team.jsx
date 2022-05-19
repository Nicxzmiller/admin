import React from 'react'
import "./team.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Team = () => {
    const rows = [
        {
            id: 1,
            image: "http://placeimg.com/640/480/people",
            name: "Papius John",
            email: "papj@gmail.com",
            phone: +3978063006647,
            gender: "M",
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/10016885/pexels-photo-10016885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "Jerry Smith",
            email: "jaysmith@gmail.com",
            phone: 489737828,
            gender: "M",
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/10016885/pexels-photo-10016885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "Anna Park",
            email: "annap@gmail.com",
            phone: 374892002,
            gender: "F",
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/10016885/pexels-photo-10016885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "Rita Kid",
            email: "ritakay@gmail.com",
            phone: 2347453320,
            gender: "F",
        },
        {
            id: 5,
            image: "https://images.pexels.com/photos/10016885/pexels-photo-10016885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "Paul Moon",
            email: "pmoon@gmail.com",
            phone: 2347903983,
            gender: "M",
        }
    ]
  return (
    <TableContainer component={Paper} className="table teamTable">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell className="tableCell">ID</TableCell>
                <TableCell className="tableCell">Profile Image</TableCell>
                <TableCell className="tableCell">Full Name</TableCell>
                <TableCell className="tableCell">Email</TableCell>
                <TableCell className="tableCell">Phone Number</TableCell>
                <TableCell className="tableCell">Gender</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
            <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.image} alt="" className="image" />
                    {rows.image}
                </div>
                </TableCell>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.email}</TableCell>
                <TableCell className="tableCell">{row.phone}</TableCell>
                <TableCell className="tableCell">{row.gender}</TableCell>
            </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default Team