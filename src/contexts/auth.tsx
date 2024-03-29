import React, {
    createContext, useCallback, useState, useEffect, ReactNode
}from "react"; 
import { apiUser } from "../services/data";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import User, { IAuthenticate, IUserLogin } from "../services/data/User";
import { isAfter, parseISO } from "date-fns";
export interface IAuthContextData {
    singIn(credentials: IAuthenticate): Promise<void>
    singOut(): Promise<void>
    user?: IUserLogin
}
export interface IProvider{
    children?: ReactNode
}
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);
const AuthProvider = ({ children }: IProvider ) => {
    const [auth, setAuth] = useState<IUserLogin>({} as IUserLogin);

    const singIn = useCallback(async ({ email, password}: IAuthenticate) => {
        const response = await apiUser.login({
            email,
            password,
        });
        const user = response.data;
        console.log(user)
        api.defaults.headers.common.Authorization = `Bearer ${user.token.token}`;
        setAuth({...user});
        await AsyncStorage.setItem("user", JSON.stringify(user))
    },[]);
    const removeLocalStorage = async () => {
        await AsyncStorage.removeItem("user");
    };

    const singOut = useCallback(async () => {
       setAuth({} as IUserLogin);
       removeLocalStorage();
       delete api.defaults.headers.common.authorization;
    }, []);

    const loadUserStorageData = useCallback(async () => {
        const user = await AsyncStorage.getItem("user");
        if(user) {
          const userParse = JSON.parse(user) as IUserLogin
          if (isAfter(parseISO(userParse.token.expires_at), new Date())) {
            api.defaults.headers.common.authorization = `Bearer ${userParse.token.token}`;
            setAuth(userParse)
          } else {
            await removeLocalStorage()
          }
        }
        },[]);

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider
            value={{
            singIn,
            singOut,
            user: auth
            }}
            >
            {children}  
        </AuthContext.Provider>

    );
};

export { AuthProvider, AuthContext };