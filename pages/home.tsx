import NavBar from "../components/Navbar";
import NiceTable from "../components/nice_table";
import SideBar from "../components/sidebar";
import ListItem from "../components/lists";

export default function Home(){
    const items = ["Administration", "General", "Employees", "Leave Management", "Payments", "Payroll", "Reports"]
    const links = ["/administration", "/general", "/employees", "/leave", "/payments", "/payroll", "/reports"]
    return (
  <div className="flex flex-col h-screen">
    <NavBar/>
    <div className="flex flex-row h-full w-screen ">
      <div className="hidden md:flex h-full w-2/12 bg-sky-400">
        <SideBar items={items} links={links}/>
      </div> 
      <div className="h-screen w-screen md:w-10/12 flex flex-col overflow-scroll bg-sky-200">
        <ListItem items={items} links={links}/>
      </div>
    </div>
  </div>
    )
}