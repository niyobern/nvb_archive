import Question from "../../components/questtion"
import Indicator from "../../components/timeindicator"
import Count from "../../components/questioncount"
import Navigate from "../../components/navigate"
import Layout from '../../components/layout';
import axios from "axios";
import { useEffect, useState } from "react"

async function fetchContent(keys: any, list: any){
    var contentsHere: any[] = []
    for (let i = 0; i < keys.length; i++){
      const item = await axios.get(`https://nvb_backend-1-z3745144.deta.app/lesson/content?lesson_id=${keys[i]}`)
      item.data._items.forEach((content: any) => {
        list[i].contents.push(content);
        contentsHere.push(content)
    })
    }
    return contentsHere
}

export const getServerSideProps = (async (context: any) => {
    const lessons = (await axios.get("https://nvb_backend-1-z3745144.deta.app/lesson/")).data._items.map((item: any) => ({...item, contents: []}))
    const lessonKeys = lessons.map((item: any) => item.key)
    const [questions, setQuestions] = useState()
    await fetchContent(lessonKeys, lessons)
    if (! lessons){
        return {
            notFound: true,
        }
    }
    return { props: { lessons: lessons } }
})
export default function Ibazwa(){
    useEffect(() => {
        axios.get("https://nvb_backend-1-z3745144.deta.app/question")
        .then((res: any) => console.log(res.data._items))
    }, [])
    
    const start = Date.now()
    const duration = 20*60*1000
    return (
        <Layout>
            <div className="bg-teal-100 px-1 gap-4 md:px-10 py-2 md:py-4 flex flex-col h-full">
                <Indicator start={start} duration={duration}/>
                <Count/>
                <Question/>
                <Navigate/>
            </div>
        </Layout>
    )
}