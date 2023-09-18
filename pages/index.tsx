import Hero from "../components/hero"
import axios from "axios"
import { useEffect } from "react"
export default function Home(){
    useEffect(() => {
        axios.post("https://drive.deta.sh/v1/collection-key-silkworm-88o/drive", {headers: {"X-API-Key": "c0j5ubhk5sb_5Y1Qi9XAMj5sM5cZ3tpRoKF55TgJepdV"}})
    })
    return (
        <div>
            <Hero/>
        </div>
    )
}