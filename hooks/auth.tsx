import { useEffect, useState } from "react";
import axios from "axios"

function fetchToken(){    const url = "https://nvb_backend-1-z3745144.deta.app/auth"
    const token = window.localStorage.getItem("token")
    if (!token){
        return false
    }
    axios.post(url, {headers: {"Authentication": token}})
    .then( (data) => {
        localStorage.setItem("token", data.data)
        return true
    })
    .catch( () => localStorage.removeItem("token"))
    return false
}

export default async function useAuth(){
    const [auth, setAuth] = useState(true)
    useEffect( () => {
        setInterval( () => {
            const authenticated = fetchToken()
            if (!authenticated){
                setAuth(false)
                return
            }
        }, 60000)
    })
}