import Banner from "../../components/lessonbanner"
import Layout from '../../components/layout';
import axios from "axios"

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
    return { props: { lessons: lessons} }
  })

export default function amasomo(){
    return (
        <Layout>
            <div className="flex flex-col md:grid grid-cols-2 gap-4 bg-gray-100 p-2">
                <Banner/>
                <Banner/>
                <Banner/>
                <Banner/>
            </div>
        </Layout>
    )
}