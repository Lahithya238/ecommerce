import { createContext, useContext, useState } from "react";
import axios from 'axios'


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const isIntialLogin = !!localStorage.getItem('token');

    const [islogin, setislogin] = useState(isIntialLogin);

    const login = (logindetails) => {
        console.log("logindetails", logindetails);
        fetchdata(logindetails);

    }

    const fetchdata = async (logindetails) => {
        const response = await axios.post('https://fakestoreapi.com/auth/login', logindetails)
        console.log('wanted data', response);
        localStorage.setItem('token', response.data.token)
        setislogin(true);

    }
    const logout = () => {
        localStorage.clear();
        setislogin(false);
    }

    return (
        <AuthContext.Provider value={{ islogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);