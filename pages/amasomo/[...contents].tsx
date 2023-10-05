import Content from "../../components/contentitem"
import { useRouter } from "next/router"
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import axios from "axios"
import { __String } from "typescript"
   
//   type Repo = {
//     name: string
//     stargazers_count: number
//   }
   
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
    const lessons = (await axios.get("https://nvb_backend-1-z3745144.deta.app/lesson/")).data._items.map((item: any) => ({...item, "contents": []}))
    const lessonKeys = lessons.map((item: any) => item.key)
    const contents :any[] = ["a", "non"]
    for (let i of lessonKeys){
        axios.get(`https://nvb_backend-1-z3745144.deta.app/lesson/content?lesson_id=${i}`)
        .then((item)=>{
          item.data._items.map((i: any) => contents.push(i))
        })
    }
    console.log(contents)
    return { props: { lessons: contents } }
  })
   
  export default function Contents({ lessons }: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(lessons)
    return (
        <div className="flex flex-col gap-4 bg-gray-100 p-4 h-full">
            <Content id="1" current={true} time="40 cards" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Content id="2" time="200 cards" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Content id="3" time="30 cards" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Content id="4" time="57 cards" title="Introduction" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
    )
  }
