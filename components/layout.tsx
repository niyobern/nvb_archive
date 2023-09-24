import { useRouter } from "next/router"
import SideBar from "./sidebar"
import HomeNavBar from "./homenavbar"
import Footer from "./footer"
import AppBar from "./appbar"
import NavBar from "./navbar"

export default function Layout({children}: any){
    const router = useRouter()
    const route = router.pathname
    console.log(route)
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
                    <SideBar/>
                </div>
                <div className="col-span-3 h-screen overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-teal-700">{children}</div>
                <div className="hidden md:flex col-span-1">
                    <SideBar/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}