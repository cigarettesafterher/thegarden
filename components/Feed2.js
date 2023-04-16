import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import Input2 from "./Input2";
import Post2 from "./Post2";
import { useRouter } from "next/router";


function Feed2() {

  const [gallery,setPosts] = useState([]);
  const router = useRouter();

  // MESSY
    // useEffect(() => {
    //   const unsubscribe = onSnapshot(
    //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
    //     (snapshot) => {
    //       setPosts(snapshot.docs);
    //     }
    //   );
  
    //   return () => {
    //     unsubscribe();
    //   };
    // }, [db]);
   
    // CLEAN
    useEffect(
      () =>
        onSnapshot(
          query(collection(db, "gallery"), orderBy("timestamp", "desc")),
          (snapshot) => {
            setPosts(snapshot.docs);
          }
        ),
      [db]  
    );
  console.log(gallery);

  return (
    <div className="flex-grow border-l border-r border-[#dddddd] max-w-2xl sm:ml-[73px] xl:ml-[200px]">
      <div
                className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
                onClick={() => router.push("/")}
              >
                <ArrowLeftIcon className="h-5 text-black" />
              </div>
    <div className="text-[ #363636] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-white">
      <h2 className="text-lg sm:text-xl font-bold">cigsafterher</h2>
      
      <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">


     

            </div>
            </div>
            
           
          <Input2 />
        
          
      <div className="pb-72">
        {gallery.map((post) => (
          <Post2 key={post.id} id={post.id} post={post.data()} />
        ))}
   
      </div>
   
    </div>
  );
}

export default Feed2