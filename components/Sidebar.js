
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  CollectionIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import SidebarLink from "./SidebarLink";
import SidebarLink2 from "./SidebarLink2";
import { signOut,useSession } from "next-auth/react";




function Sidebar() {
  const { data: session } = useSession();


  return (
<div className="hidden sm:flex flex-col items-right xl:items-end xl:w-[200px] p-0 fixed h-full">
      <div className="flex items-z justify-center  w-15 h-20 hoverAnimation p-0 xl:ml-4">

        
      <img src="/logo.svg/" width={100} height={80} />
            </div>

            <div className="space-y-2.5 mt-0 mb-2.5 xl:ml-5 ">
        <SidebarLink2 Icon={HomeIcon} active2 />
        <SidebarLink  Icon={HashtagIcon} />
        <SidebarLink  Icon={CollectionIcon} active />
        <SidebarLink  Icon={BellIcon} />
        <SidebarLink  Icon={InboxIcon} />
        <SidebarLink Icon={BookmarkIcon} />
        <SidebarLink  Icon={ClipboardListIcon} />
        <SidebarLink Icon={UserIcon} />
        <SidebarLink  Icon={DotsCircleHorizontalIcon} />
      </div>

        

      <div
        className="text-[#727272] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5" onClick={signOut}>
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
      
    
    );
}

export default Sidebar;