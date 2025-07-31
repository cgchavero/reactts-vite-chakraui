import { useEffect, useState } from "react";
import { deleteActiveUser, getActiveUser, type IUserModel } from "../LocalStorage";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [activeUser, setActiveUser] = useState<IUserModel>();
    const navigate = useNavigate();

    useEffect(() => {
        const data = getActiveUser();
        if (data == null) {
            navigate("/login");
        }

        setActiveUser(data);
    }, []);

    const handleLogout = () => {
        deleteActiveUser();
        navigate("/login");
    };

    return (
    
    <>
        <div style={{color: "black"}}>Welcome {activeUser?.name}</div>
        <button onClick={handleLogout}>Logout</button>
    </>

    )
};

export default Home;
