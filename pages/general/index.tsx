import NavBar from "../../components/Navbar";
import SideBar from "../../components/sidebar";
import ListItem from "../../components/lists";

export default function General(){
    const items = ["Academic Ranks", "Contract Types", "Leave Types", "Probation Results", "Staff Departments", "Staff Doc Types", "Staff Placements", "Staff Position", "Staff Promotion", "Staff Types", "Workload"]
    const links = ["/general/academicRanks", "/general/contractType", "/general/leaveTypes", "/general/probationResult", "/general/staffDepartment", "/genera/staffDocType", "/genera/staffPlacement", "/general/staffPosition", "/general/staffPromotion", "/general/staffTypes", "/general/workload"]
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