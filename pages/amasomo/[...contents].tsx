import Content from "../../components/contentitem"
import { useRouter } from "next/router"
import type { InferGetStaticPropsType, GetStaticPaths } from 'next'
import axios from "axios"
import Layout from '../../components/layout';


async function fetchContent(keys: any, list: any){
    const contents: any[] = []
    for (let i = 0; i < keys.length; i++){
      const item = await axios.get(`https://nvb_backend-1-z3745144.deta.app/lesson/content?lesson_id=${keys[i]}`)
      item.data._items.map((item: any) => list[i].contents.push(item))
    }
    return contents
}
export const getStaticPaths = (async () => {
    const lessonKeys = (await axios.get("https://nvb_backend-1-z3745144.deta.app/lesson")).data._items.map((item: any) => item.key)
    const lessons = lessonKeys.map((item: any) => "/amasomo/"+ item)
    const contents: string[] = []
    lessonKeys.forEach((value: any)=>{
        axios.get(`https://nvb_backend-1-z3745144.deta.app/lesson/content?lesson_id=${value}`)
        .then((item)=>{
            contents.push(item.data._items.map((item: any) => item.key))
        })
    })
    return {
      paths: [...lessons, ...contents],
      fallback: true, // false or "blocking"
    }
}) satisfies GetStaticPaths
   
export const getStaticProps = (async () => {
    const lessons = (await axios.get("https://nvb_backend-1-z3745144.deta.app/lesson/")).data._items.map((item: any) => ({...item, contents: []}))
    const lessonKeys = lessons.map((item: any) => item.key)
    await fetchContent(lessonKeys, lessons)
    return { props: { lessons: lessons} }
  })
   
export default function Contents({ lessons }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()
    const slugs = router.query.contents || []
    if (slugs.length === 1){
      return (
        <Layout>
            <div className="flex flex-col gap-4 bg-gray-100 p-4 h-full">
                {
                lessons.map((value: any)=><Content key={value.key} id={value.key} current={true} time="40 cards" title={value.title} description={value.description === "string" ? "Empty Description": value.description}/>)
                }
            </div>
        </Layout>
    )
    }else if (slugs.length === 2){
      const key = slugs[1]
      const lesson = lessons.find((item: any) => item.key === key)
      if (!lesson){ (
        <Layout lessons={lessons}>        
          <div className="flex flex-col gap-4 bg-gray-100 p-4 h-full"></div>
        </Layout>
      )
    }
      return (
        <Layout lesson={lessons}>
            <div className="flex flex-col gap-4 bg-gray-100 p-4 h-full">
              {
                lesson.contents.map((value: any)=><Content  key={value.key} current={true} time="40 cards" title={value.item} link={`/note/${lesson.key}/${value.key}`}/>)
              }
            </div>
        </Layout>
    )
    } else {
      return (
        <Layout lesson={lessons} titlel="Amasomo" titler={lessons[0].title}>
            <div className="flex flex-col gap-4 bg-gray-100 p-4 h-full"></div>
        </Layout>
    )
    }

}
