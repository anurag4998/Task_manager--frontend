import axios from "axios";

const fetchdata = async () => {
  const response = await axios.get(
    "https://anurag49-task-manager.herokuapp.com/users/me",
    {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYzODlkYTFiZjc1MzAwMTcwOWI5YWIiLCJpYXQiOjE2MDAzNTg4NzR9.cXMy8pgtKuvxlG1kRMTzXqzgPeJhrF_j6ZIkIOjkNvQ",
      },
    }
  );
};

export default fetchdata;

// const response = await fetch(
//     "https://anurag49-task-manager.herokuapp.com/users/me",
//     {
//       method: "GET",
//       withCredentials: true,
//       credentials: "include",
//       headers: new Headers({
//         Authorization: bearer,
//       }),
//     }
//   );
