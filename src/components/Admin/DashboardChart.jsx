import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const DashboardChart = () => {
  return (
    <div
    // className="overflow-x-scroll md:overflow-hidden w-full "
    >
      <div
        style={{
          width: "100%",
          height: "300px",
          marginTop: "100px",
        }}
      >
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#031f4bee" />
            <YAxis yAxisId="right" orientation="right" stroke="#55c3c1f7" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="pv" fill="#031f4bee" />
            <Bar yAxisId="right" dataKey="uv" fill="#55c3c1f7" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
