import Question from "../../components/questtion"
import Indicator from "../../components/timeindicator"
import Count from "../../components/questioncount"
import Navigate from "../../components/navigate"
import Layout from '../../components/layout';
import { useEffect, useState } from "react"
import { readFile } from 'fs/promises';
import path from 'path';
import Image from "next/image";
import test from "../../public/images/test.png"
import Link from "next/link";

export const getServerSideProps = (async (context: any) => {
    const dir = path.join(process.cwd(), 'data')
    const slug = context.params.test
    const rawLessons = await readFile(dir + "/lessons.json", {encoding: "utf-8"})
    const lessons = JSON.parse(rawLessons)
    const rawQuestions = await readFile(dir + `/tests/${slug}.json`, {encoding: "utf-8"})
    const questions = JSON.parse(rawQuestions)
    const links = {left: [{text: "", link: ""}], right: [{text: "", link: ""}]}
    lessons.forEach((item: any) => links.left.push({text: item.title, link: `/class/1/${item.key}`}))
    lessons.forEach((item: any) => links.right.push({text: item.title, link: `/class/1/${item.key}`}))
    links.left.shift()
    links.right.shift()
    return { props: { links: links, questions: questions, slug } }
})
export default function Result({ links, questions, slug }: any){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    const updatedLinks = {...links}
    updatedLinks.right = []
    numbers.forEach(item => updatedLinks.right.push({text: `Isuzumabumenyi #${item}`, link: `/tests/${item}`}))

    const [count, setCount] = useState(0)
    const [answers, setAnswers] = useState([0])

    useEffect(() => {
        const answersRaw = window.localStorage.getItem(`test${slug}`) || ""
        const answers = JSON.parse(answersRaw)
        setAnswers(answers)
    })

    function answer( move: number =  1){
        if ((count < 19 || move < 0) && (count > 0 || move > 0)){
            setCount(count + move)
        } 
    }
    return (
        <Layout links={updatedLinks}>
            <div className="bg-teal-100 px-1 gap-4 md:px-10 py-2 md:py-4 flex flex-col min-h-screen">
                <Count questions={answers} move={answer} count={count}/>
                <Question question={questions[count]} count={count} answer={answer}/>
                <Navigate test={true} move={answer} current={count}/>
            </div>
        </Layout>
    )
}