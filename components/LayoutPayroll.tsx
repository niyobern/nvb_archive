import NavBar from "../components/Navbar";

export default function LayoutPayroll({ children, links, paths, current }: any){
    return (
  <div className="flex flex-col h-screen">
    {/* The navbar */}
    <NavBar links={links} paths={paths} current={current}/>
    {/* the components below navbar */}
    <div className="flex flex-row h-full w-screen ">
      <div className="h-full w-screen flex flex-col overflow-scroll bg-sky-200">
        <div>{children}</div>
      </div>
    </div>
  </div>
    )
}