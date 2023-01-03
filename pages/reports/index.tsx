import NavBar from "../../components/Navbar";
import SideBar from "../../components/sidebar";
import ListItem from "../../components/lists";

export default function Employees(){
    const items = ["Reports by Age", "Reports by Campus", "Reports by Department", "Full Time Reports", "Parttime Reports", "Gender Reports", "Reports by Position", "Reports by Status"]
    const links = ["/reports/reportsbyAge", "/reports/reportsbyCampus", "/reports/reportsbyDepartment", "/reports/reportsbyFullTime", "/reports/reportsbyParttime", "/reports/byGender", "/reports/reportsbyPosition", "/reports/reportsbyStatus"]
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