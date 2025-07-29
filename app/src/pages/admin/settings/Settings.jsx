import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PasswordChange from "./PasswordChange";
import CreateAdmin from "./CreateAdmin";
import SuperUserPermissions from "./SuperUserPermissions";
import { isSuperUser } from "../../../api/admin";

function Settings() {
  const [value, setValue] = useState("1");
  const [isSuperUserLocal, setIsSuperUserLocal] = useState(false);

  const handleChange = (event, value) => {
    setValue(value);
  };

  useEffect(() => {
    const verifySuperUser = async () => {
      const res = await isSuperUser(sessionStorage.getItem("Admin Token"));
      setIsSuperUserLocal(res.superUser);
    };
    verifySuperUser();
  }, []);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Password update" value="1" />
            {isSuperUserLocal && <Tab label="Create a new admin" value="2" />}
            {isSuperUserLocal && (
              <Tab label="Super user permissions" value="3" />
            )}
          </TabList>
        </Box>
        {!isSuperUserLocal && (
          <Box sx={{ mt: 1, borderColor: "gray" }}>
            only super admins can access additional settings
          </Box>
        )}
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
