import { useEffect, useState } from "react";
import { deleteActiveUser, getActiveUser, type IUserModel } from "../LocalStorage";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Text, Button, HStack } from "@chakra-ui/react";
import { RiLogoutBoxFill, RiLogoutBoxLine } from "react-icons/ri";

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
        <Header/>
        <Text textStyle="xl" textAlign="center">Welcome {activeUser?.name}</Text>
        <HStack justify="center">
            <Button colorPalette="teal" variant="solid" onClick={handleLogout}>
                <RiLogoutBoxFill /> Logout
            </Button>
            <Button colorPalette="teal" variant="outline" onClick={handleLogout}>
                Logout <RiLogoutBoxLine />
            </Button>
        </HStack>
        <Footer/>
    </>

    )
};

export default Home;
