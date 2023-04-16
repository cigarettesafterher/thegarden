
import Head from 'next/head'
import Feed from '../components/Feed';
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from '../components/Login';
import Modal from '../components/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import Widgets from '../components/Widgets';


export default function Home({trendingResults, followResults, providers }) {
  const { data: session } = useSession(); 
  const [isOpen, setIsOpen] = useRecoilState(modalState);

if(!session) return <Login providers={providers} />;
  return (
    <div className="">
      <Head>
        <title>eljardin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className=" min-h-screen flex max-w-[4000px] mr-auto ml-30">
        <Sidebar />

      <Feed />
     
      <Widgets

     
          trendingResults={trendingResults}
          followResults={followResults}
        />

       
        
        

        {isOpen && <Modal />}
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
  
