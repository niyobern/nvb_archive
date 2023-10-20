import Layout from '../components/layout';
import { readFile } from 'fs/promises';
import path from 'path';
import axios from "axios";
import { useEffect, useState } from 'react';
import AuthDialog from '../components/authdialog';
import Details from "../components/details"

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

export default function Account({ links }: any){
    const [auth, setAuth] = useState(true)
    const initialDetails = [{
        Name: '',
        Email: '',
        Phone: '',
        "Subscription Plan": '',
        "Days remaining": ''
    }]
    const [details, setDetails] = useState(initialDetails)
    useEffect( () => {
        const token = localStorage.getItem("token")
        if (!token){
            setAuth(false)
        }
        axios.get("https://nvb_backend-1-z3745144.deta.app/users/details", { headers: {'Authentication': token}})
        .then((res: any) => {
            setDetails(res.data)
        }).catch((err: any) => console.log(err))
    }, [])
    if (!auth){
        return <AuthDialog/>
    }
    return (
        <Layout links={links}>
            <div className="text-lg bg-sky-400 flex flex-col p-2 md:flex-row h-full">
               {details.map( (item: any, index: number) =>  <Details key={index} data={item}hk/>)}
            </div>
        </Layout>
    )
}