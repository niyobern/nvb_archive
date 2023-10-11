import Layout from '../components/layout';
import { readFile } from 'fs/promises';
import Image from 'next/image';
import path from 'path';
import banner from "../public/images/download.jpg"


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

export default function Subukura({ links }: any){
    return (
        <Layout links={links}>
            <div className='flex flex-col md:grid grid-cols-2 gap-2 p-2'>
                <div className=' shadow-md shadow-teal-500 pb-2'>
                    <Image src={banner} alt='Banner' width={500} height={500}/>
                    <h1 className='text-teal-900 font-medium text-xl px-1'>Ibisobanuro</h1>
                    <h2 className='leading-none px-1'>Ibijyanye n'amategeko y'umuhanda Heading 2</h2>
                    <span className='text-green-900 text-sm font-thin w-fit px-1'>Last Read 2 days ago</span>
                </div>
            </div>
        </Layout>
    )
}