import Link from "next/link";
import PaymentIcon from "./icons/payment";

export default function SideBar({ items, links }: any){
	console.log(links)
    return (
        <div className="hidden md:flex flex-col h-full p-3 dark:bg-gray-900 dark:text-gray-100">
        	<div className="space-y-3">
        		<div className="flex items-center justify-between">
        			<Link href="/home"><h2>Dashboard</h2></Link>
        
        		</div>
        		<div className="relative">
        			<span className="absolute inset-y-0 left-0 flex items-center py-4">
        				<button type="submit" className="p-2 focus:outline-none focus:ring">
        					<svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-400">
        						<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
        					</svg>
        				</button>
        			</span>
        			<input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
        		</div>
        		<div className="flex-1">
        			<ul className="pt-2 pb-4 space-y-1 text-sm">
        				{items.map((item: string, index: number) => (
							<li key={item} className="rounded-sm hover:bg-white">
        					<Link rel="noopener noreferrer" href={links[0]} className="flex items-center p-2 space-x-3 rounded-md">
        						{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
        							<path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
        						</svg> */}
        						<span>{item}</span>
        					</Link>
        				</li>  
						))}    	
        			</ul>
        		</div>
        	</div>
        </div>
            )
        }