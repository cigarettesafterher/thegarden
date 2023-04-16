import { SearchIcon } from "@heroicons/react/outline";
import Trending from "./Trending";
import Image from "next/image";
import MyDropdown from "./Dropdown";
import MyDropdown2 from "./Dropdown2";
import Text from "./Text";


function Widgets2({ trendingResults, followResults }) {
  return (
    <div className="hidden lg:inline ml-10 xl:w-[450px] py-1 space-y-5">

      <div className="sticky top-0 py-1.5 bg-white z-50 w-11/12 xl:w-9/12">
        
        
         
        
      
       
      </div>
     

      <Text/>

          
      <div className=" bg-[#f9f9f9] p-3 rounded-[12px] relative">
      <h1 className="text-lg sm:text-xl pb-5 font-bold flex items-center "> Manifiesto ✌🏻</h1>
     
     
      <div className="text-lg sm:text-sm flex items-center ">


      Colectivo creado para subir cosas guays 
    </div>
    
      </div>
   
    
        
          
          


<Text/>

      
        
      
     
    
      </div>
    
      
     
   
  );
}

export default Widgets2;
