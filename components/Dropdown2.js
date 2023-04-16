import { Menu, Transition} from '@headlessui/react'
import Link from 'next/link';
function MyDropdown2() {
    return (
      <Menu>
           <Menu.Button><h4 className="font-bold text-[#363636] text-xl px-4"> MyCollectives</h4></Menu.Button>
       
       
       
        <Menu.Items>
          <Menu.Item>
             {({ active }) => (
              <Link
                className={`${active && 'bg-blue-500'}`}
                href="/index2"
              >
                Collective1
              </Link>
            )}
          </Menu.Item>
         
        </Menu.Items>

        <Menu.Items>
             <Menu.Item>
            {({ active }) => (
              <Link
                className={`${active && 'bg-blue-500'}`}
                href="/index2"
              >
                Collective2
              </Link>
            )}
          </Menu.Item> 
          </Menu.Items>
      </Menu>
    )
  }
  export default MyDropdown2;