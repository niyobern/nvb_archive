import Layout from '../../components/layout';
import { useState, useEffect }from "react"
import { readFile } from 'fs/promises';
import path from 'path';
import Image from "next/image";
import test from "../../public/images/test.png"
import Link from 'next/link';


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
export default function Tests( { links }: any){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    const updatedLinks = {...links}
    updatedLinks.right = []
    numbers.forEach(item => updatedLinks.right.push({text: `Isuzumabumenyi #${item}`, link: `/tests/${item}`}))
    function handleClick(item: number){
        setModal(!modal)
        setFocused(item)
    }
    const [modal, setModal] = useState(false)
    const [focused, setFocused] = useState(0)
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
    if (modal){
        return (
        <Layout links={updatedLinks}>
            <div className="absolute w-full h-full top-8 md:top-20 left-0 flex flex-col items-center">
                <div className="bg-white flex flex-col h-fit">
                    <Image src={test} width={500} height={500} alt="thumbnail" className="w-full"/>
                    <h1 className="font-medium text-lg leading-none p-1">Isuzumabumenyi #{focused} <span className="text-sm font-normal">Rigufasha kwitegura ikizamini cya provisoire</span></h1>
                </div>
                <div className="flex justify-between gap-8">
                    <Link href={`/tests/${focused}`}><div className="mt-4 text-xl text-white font-medium py-2 px-4 shadow bg-green-700 pointer-cursor hover:bg-green-800">Tangira</div></Link>
                    <div onClick={() => handleClick(0)} className="mt-4 text-lg text-white font-normal py-2 px-4 shadow bg-gray-700 pointer-cursor hover:bg-gray-800">Bireke</div>
                </div>
            </div>
        </Layout>
        )
    }
    return (
        <Layout links={updatedLinks}>
            <div className="flex flex-col h-full md:grid grid-cols-2 gap-4 bg-gray-100 p-2">
                {
                    numbers.map((item: number) => (
                        <div key={item} className="bg-white flex flex-col h-fit" onClick={() => handleClick(item)}>
                            <Image src={test} width={500} height={500} alt="thumbnail" className="w-full"/>
                            <h1 className="font-medium text-lg leading-none p-1">Isuzumabumenyi #{item} <span className="text-sm font-normal">Rigufasha kwitegura ikizamini cya provisoire</span></h1>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}