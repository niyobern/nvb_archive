import { useEffect } from "react"
import axios from "axios"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Pricing from "../components/pricing"

export default function Home(){
    return (
        <Layout>
            <Hero/>
            <Pricing/>
        </Layout>
    )
}