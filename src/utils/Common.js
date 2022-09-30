export const setUserSession = (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
}

export const removeUserSession= () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}

export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}