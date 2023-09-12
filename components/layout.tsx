import SideBar from "./sidebar"
import NavBar from "./navbar"
import Footer from "./footer"
export default function Layout({children}: any){
    return (
        <div className="flex flex-col h-screen">
            <NavBar/>
            <div className="grid grid-cols-5">
                <div className="col-span-1">
                    <SideBar/>
                </div>
                <div className="col-span-3">{children}</div>
                <div className="col-span-1">
                    <SideBar/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}