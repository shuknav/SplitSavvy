import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import { fetchAdminList } from "../../../api/admin";
import { superUserPermissionsUpdate } from "../../../api/admin";

function SuperUserPermissions() {
  const [adminList, setAdminList] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchAdmin = async () => {
      const res = await fetchAdminList();
      if (res.success) {
        setAdminList(res.adminList);
      }
    };
    fetchAdmin();
  }, [update]);

  async function handleSuperUser(username) {
    const admin = adminList.find((admin) => admin.username === username);
    if (admin) {
      const res = await superUserPermissionsUpdate(username, !admin.super_user);
      if (res.success) {
        setUpdate((prev) => !prev);
      }
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
                key={admin.admin_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{admin.username}</TableCell>
                <TableCell>
                  {admin.super_admin ? (
                    <Tooltip title="Super Admin permissions can not be revoked">
                      <span>
                        <Checkbox disabled checked={admin.super_user} />
                      </span>
                    </Tooltip>
                  ) : (
                    <Checkbox
                      checked={admin.super_user}
                      onChange={() => {
                        handleSuperUser(admin.username);
                      }}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default SuperUserPermissions;
