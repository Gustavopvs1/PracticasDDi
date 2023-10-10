import React,{createContext,useState,useEffect} from 'react';
import { storageController } from '../api/Token';
import { userController } from '../api/users';
import { tokenExpired } from '../utils/tokenExpired';

export const AuthContext = createContext();

export const AuthProvider = (props) =>{
    const {children} = props;

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const login = async (token)=>{
        try{
            await storageController.setToken(token);
            const response = await userController.getMe();
            setUser(response);
            setLoading(false);
            console.log(response);
        }catch(error){
            console.log(error)
            setLoading(false);
        }
     
    }
    const getSession = async () => {
        const token = await storageController.getToken();
        if (!token){
            logout();
            setLoading(false);
            return;
        }
        if (tokenExpired(token)){
            logout();
        }else{
            login(token);
        }
    }   

    const upDateUser = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
    }

    useEffect(()=>{
        getSession();
    }, []);

    const logout = async () => {
        try {
            await storageController.removeToken();
            setUser(null);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const data = {
        user,
        login,
        logout,
        upDateUser: () =>console.log("update user"),
    }
    if (loading) return null;
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}