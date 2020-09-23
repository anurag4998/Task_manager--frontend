import axios from "axios";
import createCookie from "../cookies/createcookie";

const postSignupData = async (name, email, password, age = 0) => {
  try {
    const post = await axios.post(
      "https://anurag49-task-manager.herokuapp.com/users",
      {
        name,
        email,
        password,
        age,
      }
    );
    const jwt = post.data.token;
    createCookie("taskmanagerlogin", jwt, 10);
    return { response: true, error: undefined };
  } catch (error) {
    return { response: false, error: error.response };
  }
};

export default postSignupData;
