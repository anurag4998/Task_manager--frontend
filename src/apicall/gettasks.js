import axios from "axios";
import readCookie from "../cookies/readcookie";

const getTasks = async () => {
  let cookie = await readCookie()

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
