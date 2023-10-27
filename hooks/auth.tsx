import { useEffect, useState } from "react";
import axios from "axios"
import { useRouter } from "next/router";

function fetchToken(){
    const url = "https://nvb_backend-1-z3745144.deta.app/auth"
    const token = window.localStorage.getItem("token")
    if (!token){
        return false
    }
    axios.post(url, {headers: {"Authorization": token}})
    .then( (data) => {
        console.log(token, typeof token)
        console.log(data.data)
        localStorage.setItem("token", data.data.token)
        localStorage.setItem("active", data.data.active)
        return true
    })
    .catch( (err) => console.log(err))
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
                router.push("/account")
            }
        }, 60000)
    })
}