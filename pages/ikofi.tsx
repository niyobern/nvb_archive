import Layout from '../components/layout';
import { useState, useEffect } from 'react';
import AuthDialog from '../components/authdialog';
import { readFile } from "fs/promises";
import path from "path";

export const getServerSideProps = (async (context: any) => {
    const dir = path.join(process.cwd(), 'data')
    const rawLessons = await readFile(dir + "/lessons.json", {encoding: "utf-8"})
    const lessons = JSON.parse(rawLessons)
    const links = {left: [{text: "", link: ""}], right: [{text: "", link: ""}]}
    lessons.forEach((item: any) => links.left.push({text: item.title, link: `/class/1/${item.key}`}))
    lessons.forEach((item: any) => links.right.push({text: item.title, link: `/class/1/${item.key}`}))
    links.left.shift()
    links.right.shift()
    return { props: { links: links } }
})

export default function Ikofi(){
    const [auth, setAuth] = useState(true)
    useEffect( () => {
        const token = localStorage.getItem("token")
        if (!token){
            setAuth(false)
        }
    }, [])
    if (!auth){
        return <AuthDialog/>
    }
    return (
        <Layout>
            <div className="text-lg bg-sky-400 flex flex-col content-center justify-center h-full">
                <div className="bg-white rounded w-96 h-64 shadow-lg shadow-sky-600 mx-auto flex flex-col text-center justify-center">
                    <span className="text-4xl font-bold text-red-800">20 days</span>
                    <span className="text-gray-800 text-xl font-medium">Remaining in your subscription</span>
                </div>
            </div>
        </Layout>
    )
}