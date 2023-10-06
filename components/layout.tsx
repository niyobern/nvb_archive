import { useRouter } from "next/router"
import SideBar from "./sidebar"
import HomeNavBar from "./homenavbar"
import Footer from "./footer"
import AppBar from "./appbar"
import NavBar from "./navbar"

export default function Layout({ children, lessons, titlel, titler }: any){
    const left = lessons.map( (item: any) => ({text: item.title, link: `/amasomo/${item.key}`}))
    const right = lessons.map((item: any) => ({text: item.contents[0].title, link: `/note/${item.contents[0].key}`}))
    const router = useRouter()
    const route = router.pathname
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
    }
    return (
        <div className="flex flex-col">
            <AppBar/>
            <NavBar/>
            <div className="flex flex-col md:grid grid-cols-5 relative">
                <div className="hidden md:flex col-span-1">
                    <SideBar data={left} title={titlel}/>
                </div>
                <div className="col-span-3 h-screen overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-teal-700">{children}</div>
                <div className="hidden md:flex col-span-1">
                    <SideBar data={right} title={titler}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}