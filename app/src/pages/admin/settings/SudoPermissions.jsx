import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { FetchAdminList } from "../../../api/admin";
import { SudoPermissionsUpdate } from "../../../api/admin";

function SudoPermissions() {
  const [adminList, setAdminList] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchAdminList = async () => {
      const res = await FetchAdminList();
      setAdminList(res.result);
    };
    fetchAdminList();
  }, [update]);

  async function HandleSudo(username) {
    const admin = adminList.find((admin) => admin.username === username);
    if (admin) {
      const res = await SudoPermissionsUpdate(username, !admin.sudo);
      if (res.result == "success") {
        setUpdate((prev) => !prev);
      }
    } else {
      console.log(`Admin with username "${username}" not found.`);
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminList.map((admin) => (
              <TableRow
                key={admin.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{admin.username}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={admin.sudo}
                    onChange={() => {
                      HandleSudo(admin.username);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default SudoPermissions;
