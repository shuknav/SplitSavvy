import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PasswordChange from "./PasswordChange";
import CreateAdmin from "./CreateAdmin";
import SuperUserPermissions from "./SuperUserPermissions";

function Settings() {
  const [value, setValue] = useState("1");

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Password update" value="1" />
            <Tab label="Create a new admin" value="2" />
            <Tab label="Super user permissions" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <PasswordChange />
        </TabPanel>
        <TabPanel value="2">
          <CreateAdmin />
        </TabPanel>
        <TabPanel value="3">
          <SuperUserPermissions />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Settings;
