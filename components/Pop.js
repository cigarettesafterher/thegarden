import { Popover } from '@headlessui/react'
import { CogIcon } from "@heroicons/react/solid";
import Link from 'next/link';

function MyPopover() {
  return (
    <Popover className="relative">
      <Popover.Button>   <CogIcon className="text-[#bbbbbb] h-[22px]" /></Popover.Button>

      <Popover.Panel className="text-[#b3b3b3] absolute z-20">

        <div className="grid grid-cols-2">
          <Link href="/">Terms and Conditions</Link>
          </div>
          
          
          
       
      
  

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  )
}
export default MyPopover;