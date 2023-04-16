
import Head from 'next/head'
import Feed2 from '../components/Feed2';
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from '../components/Login';
import Modal2 from '../components/Modal2';
import { useRecoilState } from 'recoil';
import { modalState2 } from '../atoms/modalAtom2';
import Widgets2 from '../components/Widgets2';

import { Menu } from '@headlessui/react'


export default function Index2({trendingResults, followResults, providers }) {
  const { data: session } = useSession(); 
  const [isOpen, setIsOpen] = useRecoilState(modalState2);

if(!session) return <Login providers={providers} />;
  return (
    <div className="">
      <Head>
        <title>eljardin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className="bg-white min-h-screen flex max-w-[1500px] mr-auto ml-30">
      

      <Feed2 />
     
      <Widgets2

     
          trendingResults={trendingResults}
          followResults={followResults}

          
        />
   
       
        
        

        {isOpen && <Modal2/>}
      </main>
    </div>
  );
}
  export async function getServerSideProps(context) {
    const providers = await getProviders();
    const session = await getSession(context);
  
    return {
      props: {
        providers,
        session,
      },
    };
  }
  