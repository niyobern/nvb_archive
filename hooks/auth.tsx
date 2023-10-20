import { useEffect, useState } from "react";
import axios from "axios"
import { useRouter } from "next/router";

function fetchToken(){
    const url = "https://nvb_backend-1-z3745144.deta.app/auth"
    const token = window.localStorage.getItem("token")
    if (!token){
        return false
    }
    axios.post(url, {headers: {"Authentication": token}})
    .then( (data) => {
        localStorage.setItem("token", data.data)
        axios.post("https://nvb_backend-1-z3745144.deta.app/user/details", {headers: {"Authentication": token}})
        .then( res => localStorage.setItem("active", res.data.active))
        .catch( err => console.log(err))
        return true
    })
    .catch( () => localStorage.removeItem("token"))
    return false
}

export default async function useAuth(){
    const [auth, setAuth] = useState(true)
    const router = useRouter()
    useEffect( () => {
        setInterval( () => {
            const authenticated = fetchToken()
            if (!authenticated){
                setAuth(false)
                return
            }
            const active = localStorage.getItem("active") || "0"
            if (active == "0"){
                router.push("/acount")
            }
        }, 60000)
    })
}