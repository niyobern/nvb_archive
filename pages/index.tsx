import Hero from "../components/hero"
import Layout from "../components/layout"
export default function Home(){
    // useEffect(() => {
    //     axios.get("https://drive.deta.sh/v1/collection-key-silkworm-88o/drive/files", {headers: {"X-API-Key": "c0j5ubhk5sb_5Y1Qi9XAMj5sM5cZ3tpRoKF55TgJepdV"}})
    //     .then(res=> console.log(res))
    // })
    return (
        <Layout>
            <Hero/>
        </Layout>
    )
}