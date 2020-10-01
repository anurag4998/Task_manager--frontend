import axios from "axios";
import readCookie from "../cookies/readcookie";


const updateTask = async (completed, id) => {
    let cookie = await readCookie()
    try {
        await axios.patch("https://anurag49-task-manager.herokuapp.com/tasks/" + id,
            {
                completed
            },
            {
                headers: {
                    Authorization: `Bearer ${cookie.token}`,
                },
            })

    }

    catch (e) {
        console.log(e)
    }
}

export default updateTask