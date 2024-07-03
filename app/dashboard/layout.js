"use client";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import { useRouter } from 'next/navigation'
import {  useSelector } from 'react-redux';

const metadata = {
  title: "Next.js Dashboard",
  description: "Description metadataaa",
};

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const isAuthenticated = useSelector(state => state.auth?.isAuthenticated); // Optional chaining for nullish coalescing

  if (!isAuthenticated){
    router.push('/login');

  }
  return (  
       isAuthenticated &&
       (
         <section className="font-poppins">
         <Sidebar />
         <Header />
         <main className=" pt-28  w-4/5 lg:w-10/12 ml-auto	">{children}</main>
       </section>      

       )
     
    
    
  );
}
