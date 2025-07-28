import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonField from "../../components/ButtonField";
import { fetchWaitlistData } from "../../api/waitlist";
import { approveWaitlist } from "../../api/waitlist";
import { rejectWaitlist } from "../../api/waitlist";

function WaitistManagement() {
  const [waitlistData, setWaitlistData] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchWaitList = async () => {
      const res = await fetchWaitlistData();
      setWaitlistData(res.result);
    };
    fetchWaitList();
  }, [update]);

  async function HandleApprove(email) {
    await approveWaitlist(email);
    setUpdate(!update);
  }

  async function HandleReject(email) {
    await rejectWaitlist(email);
    setUpdate(!update);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {waitlistData.map((user) => (
              <TableRow
                key={user.waitlist_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                {user.status === "pending" ? (
                  <TableCell>
                    <ButtonField
                      text={"Accept"}
                      handleClick={() => {
                        HandleApprove(user.email);
                      }}
                    />
                    <ButtonField
                      text={"Reject"}
                      handleClick={() => {
                        HandleReject(user.email);
                      }}
                    />
                  </TableCell>
                ) : (
                  <TableCell>{user.status}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default WaitistManagement;
