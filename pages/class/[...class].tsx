import Layout from "../../components/layout";
import Content from "../../components/contentitem";
import { readFile } from "fs/promises"
import path from "path"
import Card from "../../components/card";
import Navigate from "../../components/navigate";
import { useState, useEffect } from "react"
import AuthDialog from "../../components/authdialog";
import axios from "axios"

export const getStaticPaths = (async () => {
    const links = ["/class/1"]
    const dir = path.join(process.cwd(), 'data')
    const lessonKeys = ['jghfauabn4ss', 'cuph9802jeoz', 'sgordlwokriy', 'az0h6ngm23he']
    const rawContents = await readFile(dir + "/lesson_contents.json", {encoding: "utf-8"})
    const allContents = JSON.parse(rawContents)
    const rawNotes = await readFile(dir + "/lesson_chapters.json", {encoding: "utf-8"})
    const allNotes = JSON.parse(rawNotes)
    lessonKeys.forEach((item: any) => {
        links.push(`/class/1/${item}`)
        const contents = allContents[item]
        contents.forEach((content: any) => {
            links.push(`/class/1/${item}/${content.key}`)
            const notes = allNotes[item][content.key]
            for (let i = 0; i < notes.length; i++){
                links.push(`/class/1/${item}/${content.key}/${i}`)
            }
        })
    })
    return {
      paths: [...links],
      fallback: false,
    }
})

export const getStaticProps = (async (context: any) => {
    const dir = path.join(process.cwd(), 'data')
    const slugs = context.params.class
    
    if (slugs.length === 1){
        const rawLessons = await readFile(dir + "/lessons.json", {encoding: "utf-8"})
        const lessons = JSON.parse(rawLessons)
        const links = {left: [{text: "", link: ""}], right: [{text: "", link: ""}]}
        lessons.forEach((item: any) => links.left.push({text: item.title, link: `/class/1/${item.key}`}))
        lessons.forEach((item: any) => links.right.push({text: item.title, link: `/class/1/${item.key}`}))
        links.left.shift()
        links.right.shift()
        return { props: { links: links, contents: lessons, slugs: slugs } }
    } else if (slugs.length === 2){
        const lessonKeys = ['jghfauabn4ss', 'cuph9802jeoz', 'sgordlwokriy', 'az0h6ngm23he']
        if (!lessonKeys.includes(slugs[1])){
            return {
                notFound: true,
            } 
        }
        const rawLessons = await readFile(dir + "/lessons.json", {encoding: "utf-8"})
        const lessons = JSON.parse(rawLessons)
        const links = {left: [{text: "", link: ""}], right: [{text: "", link: ""}]}
        const rawContents = await readFile(dir + "/lesson_contents.json", {encoding: "utf-8"})
        const allContents = JSON.parse(rawContents)
        const contents = allContents[slugs[1]]
        lessons.forEach((item: any) => links.left.push({text: item.title, link: `/class/1/${item.key}`}))
        contents.forEach((content: any) => links.right.push({text: content.title, link: `/class/1/${slugs[1]}/${content.key}`}))
        links.left.shift()
        links.right.shift()
        return { props: { links: links, contents: contents, slugs: slugs } }
    } else if (slugs.length === 3){
        const lessonKeys = ['jghfauabn4ss', 'cuph9802jeoz', 'sgordlwokriy', 'az0h6ngm23he']
        if (!lessonKeys.includes(slugs[1])){
            return {
                notFound: true,
            } 
        }
        const rawLessons = await readFile(dir + "/lessons.json", {encoding: "utf-8"})
        const lessons = JSON.parse(rawLessons)
        const links = {left: [{text: "", link: ""}], right: [{text: "", link: ""}]}
        const rawContents = await readFile(dir + "/lesson_contents.json", {encoding: "utf-8"})
        const allContents = JSON.parse(rawContents)
        const contents = allContents[slugs[1]]
        if (!contents){
            return {
                notFound: true,
            } 
        }
        const rawNotes = await readFile(dir + "/lesson_chapters.json", {encoding: "utf-8"})
        const notes = JSON.parse(rawNotes)
        const lesson = notes[slugs[1]]
        if (!lesson){
            return {
                notFound: true,
            } 
        }
        const chapter = lesson[slugs[2]]
        if (!chapter){
            return {
                notFound: true,
            } 
        }
        const note = chapter[0]
        if (!note){
            return {
                notFound: true,
            } 
        }
        const params = slugs.slice(0, 3)
        const link = "/class/" + params.join("/")
        note["total"] = chapter.length
        note["index"] = 0
        note["prev"] = link
        note["next"] = `${link}/1`
        lessons.forEach((item: any) => links.left.push({text: item.title, link: `/class/1/${item.key}`}))
        contents.forEach((content: any) => links.right.push({text: content.title, link: `/class/1/${slugs[1]}/${content.key}`}))
        links.left.shift()
        links.right.shift()
        return { props: { links: links, note: note, slugs: slugs } }
    } else if (slugs.length === 4){
        const lessonKeys = ['jghfauabn4ss', 'cuph9802jeoz', 'sgordlwokriy', 'az0h6ngm23he']
        if (!lessonKeys.includes(slugs[1])){
            return {
                notFound: true,
            } 
        }
        const rawLessons = await readFile(dir + "/lessons.json", {encoding: "utf-8"})
        const lessons = JSON.parse(rawLessons)
        const links = {left: [{text: "", link: ""}], right: [{text: "", link: ""}]}
        const rawContents = await readFile(dir + "/lesson_contents.json", {encoding: "utf-8"})
        const allContents = JSON.parse(rawContents)
        const contents = allContents[slugs[1]]
        if (!contents){
            return {
                notFound: true,
            } 
        }
        const rawNotes = await readFile(dir + "/lesson_chapters.json", {encoding: "utf-8"})
        const notes = JSON.parse(rawNotes)
        const lesson = notes[slugs[1]]
        const chapter = lesson[slugs[2]]
        if (!chapter){
            return {
                notFound: true,
            } 
        }
        const note_index = Number(slugs[3])
        const note = chapter[note_index]
        if (!note){
            return {
                notFound: true,
            } 
        }
        const params = slugs.slice(0, 2)
        const link = "/class/" + params.join("/")
        note["total"] = chapter.length
        note["index"] = note_index
        note["prev"] = `${link}/${slugs[2]}/${note_index - 1}`
        note["next"] = `${link}/${slugs[2]}/${note_index + 1}`
        if (note_index === chapter.length - 1){
            note["next"] = link
        } else if (note_index === 0){
            note["prev"] = link
        }
        lessons.forEach((item: any) => links.left.push({text: item.title, link: `/class/1/${item.key}`}))
        contents.forEach((content: any) => links.right.push({text: content.title, link: `/class/1/${slugs[1]}/${content.key}`}))
        links.left.shift()
        links.right.shift()
        return { props: { links: links, note: note, slugs: slugs } }
    }
})
export default function Class({ links, note, contents, slugs }: any){
    const [auth, setAuth] = useState(true)
    useEffect( () => {
        const token = localStorage.getItem("token")
        if (!token){
            setAuth(false)
        }
        axios.post("https://nvb_backend-1-z3745144.deta.app/study/class", { "path": slugs.join("/")}, { headers: {"Authentication": token}})
    }, [slugs])
    if (!auth){
        return <AuthDialog/>
    }
    if (note){
        return (
            <Layout links={links}>
                <div className="bg-teal-100 px-1 md:px-10 flex fex-col justify-center py-4 flex-col gap-6 md:gap-4 h-full">
                    <Card note={note} position={(note.index + 1) + "/" + note.total}/>
                    <Navigate prev={note.prev} next={note.next}/>
                </div>
            </Layout>
        )
    }
    const link = "/class/" + slugs.join("/")
    return (
        <Layout links={links}>
            <div className="flex flex-col gap-4 bg-gray-100 p-4 h-full">
            {
                contents.map((value: any)=><Content  key={value.key} title={value.title} link={`${link}/${value.key}`}/>)
            }
            </div>
        </Layout>
    )
}