import NavBar from "../components/Navbar";
import NiceTable from "../components/nice_table";
import SideBar from "../components/sidebar";
import Table from "./tableog";

export default function Layout({ children, items, links }: any){
    return (
  <div className="flex flex-col h-screen">
    {/* The navbar */}
    <NavBar/>
    {/* the components below navbar */}
    <div className="flex flex-row h-full w-screen ">
      {/* the SideBar */}
      <div className="hidden md:flex h-full w-2/12 bg-sky-400">
        <SideBar items={items} links={links}/>
      </div> 
      <div className="h-full w-screen md:w-10/12 flex flex-col overflow-scroll bg-sky-200">
        <div>{children}</div>
      </div>
    </div>
  </div>
    )
}