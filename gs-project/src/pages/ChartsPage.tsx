import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box } from "@mui/material";

const data = [
  { week: "Week 1", sales: 4000, gmDollars: 2400 },
  { week: "Week 2", sales: 3000, gmDollars: 1398 },
  { week: "Week 3", sales: 2000, gmDollars: 9800 },
  { week: "Week 4", sales: 2780, gmDollars: 3908 },
];

const ChartsPage = () => {
  return (
    <Box width="100%" height="calc(100vh - 100px)" p={2}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          <Line type="monotone" dataKey="gmDollars" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ChartsPage;

  