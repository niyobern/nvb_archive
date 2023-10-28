import { useEffect, useState } from "react";
import axios from "axios"
import { useRouter } from "next/router";

function fetchToken(){
    const url = "https://nvb_backend-1-z3745144.deta.app/auth"
    const token = window.localStorage.getItem("token")
    if (!token){
        return
    }
    axios.post(url, {}, { headers: {"Authorization": token}})
    .then( (data) => {
        localStorage.setItem("active", data.data.active)
    })
    .catch( () => {
        window.localStorage.removeItem("token")
    })
    return
}

export default async function useAuth(){
    const [auth, setAuth] = useState(true)
    const router = useRouter()
    useEffect( () => {
        setInterval( () => {
            const authenticated = localStorage.getItem("token")
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