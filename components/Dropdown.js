import { Menu, Transition} from '@headlessui/react'
import Link from 'next/link';

function MyDropdown() {
    return (
      <Menu>
           <div><h4 className="font-bold text-[#363636] text-xl px-4"> MyCollectives</h4></div>
       
       
              <div>
                {/*
                  Using `static`, `Menu.Items` is always rendered and
                  ignores the `open` state.
                */}
                <Menu.Items static>
                <Menu.Item>

          
            <Link
              className={'bg-green'}
              href="/index2"
            >
             <div className=" text-[#baf0a9]  text-sm px-5"> cigsafterher </div>
            </Link>
         
        </Menu.Item>
                </Menu.Items>
              </div>
              
           





             
              <div>
                {/*
                  Using `static`, `Menu.Items` is always rendered and
                  ignores the `open` state.
                */}
                <Menu.Items static>
                <Menu.Item>

          
            <Link
              className={'bg-green'}
              href="/index2"
            >
             <div className=" text-[#838383] text-sm px-5"> galeria2 </div>
            </Link>
         
        </Menu.Item>
                </Menu.Items>
              </div>
                 
              <div>
                {/*
                  Using `static`, `Menu.Items` is always rendered and
                  ignores the `open` state.
                */}
                <Menu.Items static>
                <Menu.Item>

          
            <Link
              className={'bg-green'}
              href="/index2"
            >
             <div className=" text-[#838383] text-sm px-5"> galeria3 </div>
            </Link>
         
        </Menu.Item>
                </Menu.Items>
              </div>
            

            
          
      
      </Menu>
    )
  }
  export default MyDropdown;