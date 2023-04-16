
import { useRouter } from "next/router";

function SidebarLink({ Icon, text, active }) {
  const router = useRouter();
  return (
    
    <div
    
      className={`text-[#363636] flex items-center justify-right xl:justify-start text-xl  hoverAnimation ${
        active && "font-bold"
      }`}
      onClick={() => active && router.push("/Profile")}
    >
      
      <Icon className="h-6" />
      <span className="hidden xl:inline">{text}</span>
    </div>
    
  );
}

export default SidebarLink;