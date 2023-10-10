import Lesson from "../components/lesson"
import Layout from '../components/layout';
import { readFile } from "fs/promises";
import path from "path";

export const getServerSideProps = (async (context: any) => {
    const dir = path.join(process.cwd(), 'data')
    const slugs = context.params.class
    const rawLessons = await readFile(dir + "/lessons.json", {encoding: "utf-8"})
    const lessons = JSON.parse(rawLessons)
    const links = {left: [{text: "", link: ""}], right: [{text: "", link: ""}]}
    lessons.forEach((item: any) => links.left.push({text: item.title, link: `/class/1/${item.key}`}))
    lessons.forEach((item: any) => links.right.push({text: item.title, link: `/class/1/${item.key}`}))
    links.left.shift()
    links.right.shift()
    return { props: { links: links } }
})

export default function Incamake({ links }: any){
    return (
        <Layout links={links}>
            <div className="p-1 px-2 h-content flex flex-col">
                <Lesson/>
            </div>
        </Layout>
    )
}