import axios from "axios";
import readCookie from "../cookies/readcookie";

const deleteTask = async (id) => {
    let cookie = await readCookie()
    try {
        const deletedTask = await axios.delete("https://anurag49-task-manager.herokuapp.com/tasks/" + id, {
            headers: {
                Authorization: `Bearer ${cookie.token}`,
            },
        })
        console.log(deletedTask)

    }
    catch (e) {
        console.log(e)
    }

}

export default deleteTask