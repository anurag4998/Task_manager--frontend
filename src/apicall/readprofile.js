import axios from "axios";
import readCookie from "../cookies/readcookie";

const getUser = async () => {
    let cookie = await readCookie()
    try {
        const user = await axios.get("https://anurag49-task-manager.herokuapp.com/users/me", {
            headers: {
                Authorization: `Bearer ${cookie.token}`,
            },
        });

        return user.data.name
    }

    catch (e) {
        return { error: "Check your connection or Try again" }
    }

}

export default getUser