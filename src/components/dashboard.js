import React, { useState, useEffect } from "react";
import AddTask from "./addTaskbBar"
import Table from "./table"
import Header from "./dashboard/header"
import getUser from "../apicall/readprofile"

const Dashboard = () => {

  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />

      <AddTask created={setTasks} />
      <Table taskarray={tasks} />

    </div>
  );
};

export default Dashboard;
