import Question from "../../components/questtion"
import Indicator from "../../components/timeindicator"
import Count from "../../components/questioncount"
import Navigate from "../../components/navigate"
import Layout from '../../components/layout';
import { useEffect, useState } from "react"
import { readFile } from 'fs/promises';
import path from 'path';
import axios from "axios";
import Image from "next/image";
import test from "../../public/images/test.png"
import Link from "next/link";
import SubmitDialog from "../../components/submitDialog";
import { useRouter } from "next/router";
import AuthDialog from "../../components/authdialog";

export const getStaticPaths = (async () => {
    const links = ["/tests/0"]
    for (let i=1;i<20;i++){
        links.push(`/tests/${i}`)
    }
    return {
      paths: [...links],
      fallback: false,
    }
})
export const getStaticProps = (async (context: any) => {
    const dir = path.join(process.cwd(), 'data')
    const slug = Number(context.params.test)
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
export default function Ibazwa({ links, questions, slug }: any){
    const [start, setStart] = useState(0)
    const [score, setScore] = useState(0)
    const [answers, setAnswers] = useState([0]) 
    const [submit, setSubmit] = useState(false)
    const [consent, setConsent] = useState(false)
    const [count, setCount] = useState(0)
    const [auth, setAuth] = useState(true)
    const router = useRouter()
    const duration = 20*60*1000
    useEffect( () => {
        const token = localStorage.getItem("token")
        if (!token){
            setAuth(false)
        }
        const time = localStorage.getItem("start") || String(Date.now())
        setStart(Number(time))
        if (Number(time) + duration < Date.now()){
            setSubmit(true)
        }
    })
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const updatedLinks = {...links}
    updatedLinks.right = []
    numbers.forEach(item => updatedLinks.right.push({text: `Isuzumabumenyi #${item}`, link: `/tests/${item-1}`}))

    useEffect(() => {
        setConsent(false);
        setCount(0);
        setAnswers([0])
        setSubmit(false)
        setStart(0)
    }, [slug])

    if (!auth){
        return <AuthDialog/>
    }
    if (!consent){
        return (
        <Layout links={updatedLinks}>
            <div className="absolute w-full h-screen top-8 md:top-16 left-0 flex flex-col items-center">
                <div className="bg-white flex flex-col h-fit">
                    <Image src={test} width={500} height={500} alt="thumbnail" className="w-full"/>
                </div>
                <p className="text-slate-600 font-medium text-xl leading-relaxed">Ugiye gutangira ikizamini</p>
                <div className="font-bold text-gray-800"><span className="font-normal text-base">Umubare w'ibibazo: </span>20</div>
                <div className="font-bold text-gray-800"><span className="font-normal text-base">Iminota iteganyijwe: </span>20</div>
                <div className="flex justify-between gap-8">
                    <div onClick={startTest} className="mt-4 text-xl text-white font-medium py-2 px-4 shadow bg-emerald-700 cursor-pointer hover:bg-green-800">Tangira</div>
                    <Link href="/tests"><div className="mt-4 text-lg text-white font-normal py-2 px-4 shadow bg-red-700 hover:bg-gray-800">Bireke</div></Link>
                </div>
            </div>
        </Layout>
        )
    }

    function startTest(){
        setConsent(true)
        localStorage.setItem("start", String(Date.now()))
    }
    function answer(index: number, choice: number, move: number =  1, target: number = -1){
        if (choice === questions[index].answer){
            setScore(score + 1)
        }
        const answersCopy = [...answers]
        answersCopy[index] = choice
        setAnswers(answersCopy)
        if (target > 0){
            setCount(target)
        }
        if (index <= 0 && move < 0){
            return
        } else if (index >= questions.length - 1 && move > 0){
            setSubmit(true)
        } else { setCount(index + move) 
        }
    }
    function handleSubmit(a: number = 1, b: boolean = true){
        a && window.localStorage.setItem(`test${slug}`, JSON.stringify(answers))
        a && window.localStorage.setItem(`test${slug}_score`, JSON.stringify(score))
        const token = localStorage.getItem("token")
        setSubmit(b)
        if (a && !b){
            axios.post("https://nvb_backend-1-z3745144.deta.app/study/end", {"test_id": slug, "marks": score}, { headers: {"Authorization": token}})
            router.push(`/results/${slug}`)
            window.location.assign(`/results/${slug}`)
            // setConsent(false);
            // setCount(0);
            // setAnswers([0])
            // localStorage.removeItem("start")
        }
    }

    return (
        <Layout links={updatedLinks}>
            <div className="bg-teal-100 px-1 gap-4 md:px-10 py-2 md:py-4 flex flex-col min-h-screen">
                {start !== 0 && <Indicator start={start} duration={duration}/>}
                <Count questions={answers} move={answer} count={count} total={questions.length}/>
                <Question question={questions[count]} count={count} answer={answer} test={true}/>
                <Navigate test={true} move={answer} index={count} currentAnswer={answers[count] || 0}/>
            </div>
            <div className={`${submit ? "flex": "hidden"}`}><SubmitDialog submit={handleSubmit}/></div>
        </Layout>
    )
}