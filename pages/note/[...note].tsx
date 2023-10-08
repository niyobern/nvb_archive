import Card from "../../components/card"
import Navigate from "../../components/navigate"
import Layout from '../../components/layout';
import axios from "axios"
import { useRouter } from "next/router";
import { useEffect } from "react";

async function fetchContent(keys: any, list: any){
    var contentsHere: any[] = []
    for (let i = 0; i < keys.length; i++){
      const item = await axios.get(`https://nvb_backend-1-z3745144.deta.app/lesson/content?lesson_id=${keys[i]}`)
      item.data._items.forEach((content: any) => {
        list[i].contents.push(content);
        contentsHere.push(content.key)
    })
    }
    return contentsHere
}

export const getServerSideProps = (async (context: any) => {
    const lessons = (await axios.get("https://nvb_backend-1-z3745144.deta.app/lesson/")).data._items.map((item: any) => ({...item, contents: []}))
    const lessonKeys = lessons.map((item: any) => item.key)
    const contents = await fetchContent(lessonKeys, lessons)
    const slugs = context.params.note
    const note = slugs.length === 1 ? (await axios.get(`https://nvb_backend-1-z3745144.deta.app/lesson/note?content_id=${slugs[0]}`)).data._items[0] : (await axios.get(`https://nvb_backend-1-z3745144.deta.app/lesson/note/${slugs[1]}`)).data
    if (! lessons || !note){
        return {
            notFound: true,
        }
    }
    if (slugs.length === 1){
        return {
            redirect: {
              destination: `/note/${slugs[0]}/${note.key}`,
              permanent: true,
            },
          }
    }
    const content = contents.find((item: any) => item.key == slugs[0])
    const lesson_id = content.lesson_id
    console.log(contents)
    const index = lessons.findIndex((item: any) => item.key == lesson_id)
    return { props: { lessons: lessons, note: note, index: index} }
})

export default function Note({ lessons, note, index }: any){
    const router = useRouter()
    const slugs = router.query.note || [""]
    return (
        <Layout lessons={lessons} lessonIndex={index}>
            <div className="bg-teal-100 px-1 md:px-10 flex fex-col justify-center py-4 flex-col gap-6 md:gap-4 h-full">
                <Card note={note} position={(note.index + 1) + "/" + note.total}/>
                <Navigate next={`/note/${slugs[0]}/${note.next}`} prev={`/note/${slugs[0]}/${note.prev}`}/>
            </div>
        </Layout>
    )
}