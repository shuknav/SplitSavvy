import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function AdminLoginLog() {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-white">Admin login Logs</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>admin id</TableCell>
              <TableCell>log in date and time</TableCell>
              <TableCell>ip</TableCell>
            </TableRow>
          </TableHead>
          {/* placeholder dummy data */}
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>01/01/25 20:09:00</TableCell>
              <TableCell>some ip address</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminLoginLog;
