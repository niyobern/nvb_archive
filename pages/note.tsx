import Card from "../components/card"
import Navigate from "../components/navigate"
import Layout from '../components/layout';
import axios from "axios"
import { useState } from "react";

async function fetchContent(keys: any, list: any){
    const contents: any[] = []
    for (let i = 0; i < keys.length; i++){
      const item = await axios.get(`https://nvb_backend-1-z3745144.deta.app/lesson/content?lesson_id=${keys[i]}`)
      item.data._items.map((item: any) => list[i].contents.push(item))
    }
    return contents
}

export const getStaticProps = (async () => {
    const lessons = (await axios.get("https://nvb_backend-1-z3745144.deta.app/lesson/")).data._items.map((item: any) => ({...item, contents: []}))
    const lessonKeys = lessons.map((item: any) => item.key)
    await fetchContent(lessonKeys, lessons)
    const notes = (await axios.get("https://nvb_backend-1-z3745144.deta.app/lesson/note?content_id=02pm737jmixg")).data._items.map((item: any) => ({...item, contents: []}))
    return { props: { lessons: lessons, notes: notes} }
})

export default function Note({ lessons, notes }: any){
    const lefts = lessons.map((item: any) => ({text: item.title, link: `/amasomo/${item.key}`}))
    const rights = lessons[0].contents.map((i: any) => ({text: i.item, link: `/amasomo/${lessons[0].key}/${i.key}`}))
    return (
        <Layout left={lefts} right={rights}titlel="Amasomo" titler={lessons[0].title}>
            <div className="bg-teal-100 px-1 md:px-10 py-4 flex flex-col gap-6 md:gap-4 h-full">
                <Card note={notes[0]}/>
                <Navigate/>
            </div>
        </Layout>
    )
}