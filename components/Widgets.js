import { SearchIcon } from "@heroicons/react/outline";
import Trending from "./Trending";
import Image from "next/image";
import MyDropdown from "./Dropdown";
import MyDropdown2 from "./Dropdown2";


function Widgets({ trendingResults, followResults }) {
  return (
    <div className="hidden lg:inline ml-10 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-white z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#eeeeee] p-3 rounded-full relative">
          
          <SearchIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#f5f8f6] rounded-full focus:bg-white focus:shadow-lg"
            placeholder="Search..."
          />
        </div>
       
      </div>
     

      <div className="text-[#f3f3f3] space-y-5 bg-[#fcfcfc] pt-5 pb-10 rounded-xl w-11/12 xl:w-9/12">
        
        
        <MyDropdown>
      
      </MyDropdown>
    
      </div>
      <div className="text-[#d9d9d9] space-y-3 bg-[#f8f8f8] pt-0 rounded-xl w-11/12 xl:w-9/12">
        
        
        <MyDropdown2>
      


            
      </MyDropdown2>
    
      </div>

     
    </div>
  );
}

export default Widgets;
