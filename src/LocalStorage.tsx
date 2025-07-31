
const REGISTERED_USERS = "registred_users";
const ACTIVE_USER = "active_user";

export interface IUserModel {
    name: string;
    username: string;
    password: string;
}

const addNewUser = (user: IUserModel) => {
    const userStr = localStorage.getItem(REGISTERED_USERS) || "[]";
    const users = JSON.parse(userStr) as IUserModel[];
    users.push(user);
    
    localStorage.setItem(REGISTERED_USERS, JSON.stringify(users));
};

const isUsrAlreadyRegistred = (username: string): boolean => {
    const userStr = localStorage.getItem(REGISTERED_USERS) || null;
    if(userStr == null)
        return false;

    const users = JSON.parse(userStr) as IUserModel[];

    const foundUser = users.find(x => x.username == username);
    return foundUser != null;
}

const getUser = (username: string, password: string) => {
    const userStr = localStorage.getItem(REGISTERED_USERS) || null;
    if (userStr == null) return null;

    const users = JSON.parse(userStr) as IUserModel[];
    const foundUser = users.find(
        x => x.username == username && x.password == password
    );
    return foundUser;
};

const updateActiveUser = (user: IUserModel) => {
    localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
}

const getActiveUser = () => {
    const activeUser = localStorage.getItem(ACTIVE_USER) || null;
    if (activeUser == null)
        return null;

    return JSON.parse(activeUser);
};

const deleteActiveUser = () => {
    localStorage.removeItem(ACTIVE_USER);
};

export { 
    addNewUser,
    isUsrAlreadyRegistred,
    getUser,
    updateActiveUser,
    getActiveUser,
    deleteActiveUser
};
