import Card from "../../components/card"
import Navigate from "../../components/navigate"
import Layout from '../../components/layout';
import axios from "axios"
import { useRouter } from "next/router";
import { isTypeNode } from "typescript";

async function fetchContent(keys: any, list: any){
    var contentsHere: any[] = []
    for (let i = 0; i < keys.length; i++){
      const item = await axios.get(`https://nvb_backend-1-z3745144.deta.app/lesson/content?lesson_id=${keys[i]}`)
      item.data._items.forEach((item: any) => {
        list[i].contents.push(item);
        contentsHere.push(item.key)
    })
    }
    return contentsHere
}
async function fetchNotes(contents: any){
    var notesHere: any = {}
    for (let i = 0; i < contents.length; i++){
        const content = contents[i]
        const note = (await axios.get(`https://nvb_backend-1-z3745144.deta.app/lesson/note?content_id=${content}`)).data._items.map((item: any) => item)
        notesHere[content] = note
    }
    return notesHere
}

export const getStaticPaths = (async () => {
    const lessons = (await axios.get("https://nvb_backend-1-z3745144.deta.app/lesson/")).data._items.map((item: any) => ({...item, contents: []}))
    const lessonKeys = lessons.map((item: any) => item.key)
    const contents = await fetchContent(lessonKeys, lessons)
    const notes = await fetchNotes(contents)
    const links: any[] = []
    for (let i of contents){
        notes[i].forEach((note: any) => links.push(`/note/${i}/${note.key}`))
    }
    return {
      paths: links,
      fallback: true, // false or "blocking"
    }
})

export const getStaticProps = (async () => {
    const lessons = (await axios.get("https://nvb_backend-1-z3745144.deta.app/lesson/")).data._items.map((item: any) => ({...item, contents: []}))
    const lessonKeys = lessons.map((item: any) => item.key)
    const contents = await fetchContent(lessonKeys, lessons)
    const notes = await fetchNotes(contents)
    return { props: { lessons: lessons, notes: notes} }
})

export default function Note({ lessons, notes }: any){
    const router = useRouter()
    const slugs = router.query.note || [""]
    const chapter = notes[slugs[0]]
    var index = 0
    if (slugs.length > 1){
        index = chapter.findIndex((item: any) => item.key === slugs[1])
    }
    return (
        <Layout lessons={lessons}>
            <div className="bg-teal-100 px-1 md:px-10 py-4 flex flex-col gap-6 md:gap-4 h-full">
                <Card note={chapter}/>
                <Navigate/>
            </div>
        </Layout>
    )
}