import { useRouter } from "next/router"
import SideBar from "./sidebar"
import NavBar from "./navbar"
import Footer from "./footer"
export default function Layout({children}: any){
    const router = useRouter()
    const route = router.pathname
    console.log(route)
    if (route === "/"){
        return (
            <div>
                <NavBar/>
                {children}
                <Footer/>
            </div>
        )
    }
    return (
        <div className="flex flex-col">
            <NavBar/>
            <div className="grid grid-cols-5 relative">
                <div className="col-span-1">
                    <SideBar/>
                </div>
                <div className="col-span-3 h-screen overflow-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-300">{children}</div>
                <div className="col-span-1">
                    <SideBar/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}