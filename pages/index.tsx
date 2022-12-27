import NavBar from "../components/Navbar";
import SideBar from "../components/sidebar";

export default function Home(){
    return (
  <div className="flex flex-col h-screen">
    {/* The navbar */}
    <NavBar/>
    {/* the components below navbar */}
    <div className="flex flex-row h-full w-screen ">
      {/* the SideBar */}
      <div className="hidden md:flex h-full w-2/12 bg-sky-400">
        <SideBar/>
      </div> 
      <div className="h-full w-screen md:w-10/12 bg-red-400 flex flex-col">
        <div className="flex flex-row bg-blue-600 w-full justify-between  h-24 md:h-24">
          <div className="flex flex-row justify-between my-auto h-full w-8/12 pt-6">
            <div className="flex flex-col h-full justify-center"><div className="justify-self-center my-auto">Link 1</div></div>
            <div className="flex flex-col h-full justify-center"><div className="my-auto">Link 1</div></div>
            <div className="flex flex-col h-full justify-center"><div className="my-auto">Link 1</div></div>
          </div>
          <div className="my-auto pt-6">Title and search</div>
        </div>
            {/* the content space */} 
      <div className="flex flex-col justify-between sm:grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 bg-green-400 grid-rows-4 h-full w-full place-items-center">
        <div>Item1</div>
        <div>Item1</div>
        <div>Item1</div>
        <div>Item1</div>
        <div>Item1</div>
        <div>Item1</div>
        <div>Item1</div>
        <div>Item1</div>
        <div>Item1</div>
        <div>Item1</div>
        <div>Item1</div>
        <div>Item1</div>
      </div>
      </div>
    </div>
  </div>
    )
}