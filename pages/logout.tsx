import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function Logout(){
    conrouter = useRouter()
    useEffect( ()=> {
        localStorage.removeItem("token")
        router.push("/")
    })
    return (
        <div></div>
    )
}