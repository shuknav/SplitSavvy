import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";

function AdminStats() {
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Successfull onboardings
            </Typography>
            <Typography variant="h5" component="div">
              {/* {just a dummy placeholder} */}
              200
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Expired Approvals
            </Typography>
            <Typography variant="h5" component="div">
              {/* {just a dummy placeholder} */}
              50
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Accepted Lastweek
            </Typography>
            <Typography variant="h5" component="div">
              {/* {just a dummy placeholder} */}
              50
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Rejected Lastweek
            </Typography>
            <Typography variant="h5" component="div">
              {/* {just a dummy placeholder} */}
              10
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Active" },
              { id: 1, value: 15, label: "Used" },
            ],
          },
        ]}
        width={200}
        height={200}
      />
      <BarChart
        xAxis={[
          {
            // sample domain and sample usage dummy
            data: ["Domain A", "Domain B", "Domain C", "Domain D", "Domain E"],
          },
        ]}
        series={[{ data: [4, 3, 5, 12, 4] }]}
        height={300}
      />
      {/* dummy data */}
      <LineChart
        xAxis={[
          {
            data: [1, 2, 3, 4, 5, 6],
          },
        ]}
        series={[
          {
            data: [2, 5, 1, 8, 10, 15],
          },
        ]}
        height={300}
      />
    </>
  );
}

export default AdminStats;
