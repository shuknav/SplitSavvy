import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function AdminPasswordGenLog() {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-white">Temp password Logs</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>email</TableCell>
              <TableCell>generated at</TableCell>
              <TableCell>expires at</TableCell>
              <TableCell>sent status</TableCell>
            </TableRow>
          </TableHead>
          {/* placeholder dummy data */}
          <TableBody>
            <TableRow>
              <TableCell>abhinav@abhinav.com</TableCell>
              <TableCell>01/01/25 20:09:00</TableCell>
              <TableCell>07/01/25 20:09:00</TableCell>
              <TableCell>sent</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminPasswordGenLog;
