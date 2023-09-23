import { useRouter } from "next/router"
import SideBar from "./sidebar"
import NavBar from "./navbar"
import Footer from "./footer"
import AppBar from "./appbar"

export default function Layout({children}: any){
    const router = useRouter()
    const route = router.pathname
    console.log(route)
    if (route === "/"){
        return (
            <div>
                <AppBar/>
                {/* <NavBar/>
                {children}
                <Footer/> */}
            </div>
        )
    }
    return (
        <div className="flex flex-col">
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