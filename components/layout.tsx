import { useRouter } from "next/router"
import SideBar from "./sidebar"
import HomeNavBar from "./homenavbar"
import Footer from "./footer"
import AppBar from "./appbar"
import NavBar from "./navbar"

export default function Layout({ children, lessons }: any){
    console.log(lessons)
    const router = useRouter()
    const route = router.pathname
    const slugs = router.query.content
    var index: number = 0
    if (slugs && slugs.length > 1){
        index = lessons.find((item: any) => item.key === slugs[1])
    }
    const left = lessons.map( (item: any) => ({text: item.title, link: `/amasomo/${item.key}`}))
    const right = lessons.map((item: any) => ({text: item.contents[index].item, link: `/note/${item.contents[0].key}`}))
    if (route === "/"){
        return (
            <div className="w-full min-h-screen flex flex-col justify-between">
                <HomeNavBar/>
                {children}
                <Footer/>
            </div>
        )
    } else if (route === "/user/login" || route === "/user/register"){
        return (
        <div>
            {children}
        </div>)
    } else if (route === "/account" || route === "/ikofi") {
        return (
            <div className="flex flex-col">
                <AppBar/>
                <NavBar/>
                <div className="flex flex-col md:grid grid-cols-5 relative">
                    <div className="hidden md:flex col-span-1">
                        <SideBar data={[{text: "Account", link: "/account"}]} title="Account"/>
                    </div>
                    <div className="col-span-3 h-screen overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-teal-700">{children}</div>
                    <div className="hidden md:flex col-span-1">
                        <SideBar  data={[{text: "Account", link: "/account"}]} title="Account"/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    return (
        <div className="flex flex-col">
            <AppBar/>
            <NavBar/>
            <div className="flex flex-col md:grid grid-cols-5 relative">
                <div className="hidden md:flex col-span-1">
                    <SideBar data={left} title="Amasomo"/>
                </div>
                <div className="col-span-3 h-screen overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-teal-700">{children}</div>
                <div className="hidden md:flex col-span-1">
                    <SideBar data={right} title={lessons[index].title}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}