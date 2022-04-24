import React from "react";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
// import GraphInfo from "../hooks/graphinfo";
import CardGroup from "../Graph/myLineChart";
import graphInfo from "../hooks/graphinfo";
import App from "../Graph/barChart";
import "./dashboard.css";

const Dashboard = () => {
  // const { graphdata } = props;
  // const { month, investment, sell, revenue } = graphdata;
  const [graphdatas, setreviewdata] = graphInfo();
  return (
    <div className="graph">
      {/* {graphdatas.map((graphdata) => (
        // console.log(reviewdata)
        <CardGroup graphdata={graphdata}></CardGroup>
      ))} */}
      <CardGroup></CardGroup>
      <App></App>
    </div>
  );
};

export default Dashboard;
