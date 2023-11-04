import Layout from '../components/layout';
import { readFile } from 'fs/promises';
import path from 'path';
import axios from "axios";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AuthDialog from '../components/authdialog';
import Image from 'next/image';
import Details from "../components/details"
import banner from "../public/images/download.jpg"
import test from "../public/images/test.png"

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
    const [lesson, setLesson] = useState({"path": "/class/1", "heading1": "", "heading2": ""})
    const [lastTest, setLastTest] = useState("")
    useEffect( () => {
        const token = localStorage.getItem("token")
        if (!token){
            setAuth(false)
        }
        axios.get("https://nvb_backend-1-z3745144.deta.app/users/details", { headers: {'Authorization': token}})
        .then((res: any) => {
            setDetails(res.data.details)
            setLesson(res.data.lesson)
            setLastTest(res.data.test)
        }).catch((err: any) => console.log(err))
    }, [lesson])
    if (!auth){
        return <AuthDialog/>
    }
    return (
        <Layout links={links}>
            <div className="text-lg bg-sky-400 flex flex-col p-2 gap-2 md:grid grid-cols-2 h-full">
               {details.map( (item: any, index: number) =>  <Details key={index} data={item}/>)}
               <Link className='shadow-md shadow-teal-500 pb-2 bg-white' href={lesson.path}>
                    <Image src={banner} alt='Banner' width={500} height={500}/>
                    <h1 className='text-teal-900 font-medium text-xl px-1'>{lesson.heading1}</h1>
                    <h2 className='leading-none px-1'>{lesson.heading2}</h2>
                    {/* <span className='text-green-900 text-sm font-thin w-fit px-1'>Last Read 2 days ago</span> */}
                </Link>
               <Link className='shadow-md shadow-teal-500 pb-2 bg-white' href={`/tests/${lastTest}`}>
                    <Image src={test} alt='Banner' width={500} height={500}/>
                    <h1 className='text-teal-900 font-medium text-xl px-1'>Test #{lastTest}</h1>
                    {/* <h2 className='leading-none px-1'>Ibijyanye n'amategeko y'umuhanda Heading 2</h2> */}
                    {/* <span className='text-green-900 text-sm font-thin w-fit px-1'>Last Read 2 days ago</span> */}
               </Link>
            </div>
        </Layout>
    )
}