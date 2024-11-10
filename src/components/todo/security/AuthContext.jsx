import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBasicAuthService, executejwtAuthService } from "../api/AuthenticationApiService";

 
 export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

 export default function AuthProvider({children}) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(false)

    const [token, setToken] = useState(null)

    // function login(username, password) {
    //     if (username === 'Aashish' && password === 'aashish') {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }
    //     else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    // async function login(username, password) {

    //     const baToken = 'Basic ' + window.btoa(username + ":" + password)
        
    //     try {
    //     const response = await executeBasicAuthService(baToken)

    //     if (response.status == 200) {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         setToken(baToken)
    //         apiClient.interceptors.request.use(
    //             (config) => {
    //                 config.headers.Authorization = baToken
    //                 return config
    //             }
    //         )
    //         return true
    //     }
    //     else {
    //         logout()
    //         return false
    //     }
    // }
    // catch(error) {
    //     logout()
    //     return false
    // }
    // }

    async function login(username, password) {
        
        try {
        const response = await executejwtAuthService(username, password)

        if (response.status == 200) {
            const jwtToken = 'Bearer ' + response.data.token
            setAuthenticated(true)
            setUsername(username)
            setToken(jwtToken)
            apiClient.interceptors.request.use(
                (config) => {
                    config.headers.Authorization = jwtToken
                    return config
                }
            )
            return true
        }
        else {
            logout()
            return false
        }
    }
    catch(error) {
        logout()
        return false
    }
    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }
 
    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
 }