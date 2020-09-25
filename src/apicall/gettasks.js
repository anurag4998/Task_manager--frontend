import axios from "axios";
import readCookie from "../cookies/readcookie";

const cookie = readCookie();

const getTasks = async () => {
  const tasks = await axios.get(
    "https://anurag49-task-manager.herokuapp.com/tasks",
    {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    }
  );
  return tasks.data;
};
export default getTasks;
