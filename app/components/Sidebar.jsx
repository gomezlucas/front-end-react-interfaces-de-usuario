"use client";
import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { MdCreditCard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
import { usePathname } from 'next/navigation';


function Sidebar({ children }) {
  const pathname = usePathname();
console.log("the routeee", pathname)
  return (
    <>
        <div className="fixed  w-1/5   md:w-2/12 	 h-screen p-2 md:p-4 md:pt-10   flex-col justify-between pt-10 ">
          <div className="flex justify-center">
            <Link href="/" >
              <div className="  cursor-pointer my-2  rounded-lg inline-block flex  items-center">
                <FaPowerOff className="text-3xl md:text-5xl	"  />
              </div>
            </Link>
          </div>
          <ul className="menu  p-0 mt-5">
            <li className="group py-2 px-0.5 md:p-2 " >
              <Link href="/dashboard/main" className={`hover:bg-red focus:bg-white active:bg-white bg-white justify-center lg:justify-start  mt-2 
              ${pathname ==  "/dashboard/main" && "active-box"}`}>
                <div className="  cursor-pointer my-2  rounded-lg inline-block flex items-center ">
                  <MdDashboard className={`text-blue-300 	group-hover:text-blue-950  ${pathname ==  "/dashboard/main" && "active-link"}`} size={20} />
                  <p className={`ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block  ${pathname ==  "/dashboard/main" && "active-link"}`} >Dashboard</p>
                </div>
              </Link>              
           
            </li>
            <li className="group py-2 px-0.5 md:p-2">
              <Link href="/dashboard/sales" className={`hover:bg-white bg-white justify-center lg:justify-start  mt-2 
              ${pathname ==  "/dashboard/sales" && "active-box"}`}>
                <div className="  cursor-pointer my-2  rounded-lg inline-block flex  items-center">
                  <IoMdCart className={`text-blue-300	group-hover:text-blue-950  ${pathname ==  "/dashboard/sales" && "active-link"}`} size={20} />
                  <p className={`ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block  ${pathname ==  "/dashboard/sales" && "active-link"}`}>Ventas</p>
                </div>
              </Link>
            </li>
            <li className="group py-2 px-0.5 md:p-2">
              <Link href="/dashboard/products" className={`hover:bg-white bg-white justify-center lg:justify-start  mt-2 
              ${pathname =="/dashboard/products" && "active-box"}`}>
                <div className="cursor-pointer my-2  rounded-lg inline-block flex  items-center">
                  <FaBagShopping className={`text-blue-300	group-hover:text-blue-950  ${pathname ==  "/dashboard/products" && "active-link"}`} size={20} />
                  <p className={`ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block  ${pathname ==  "/dashboard/products" && "active-link"}`}>Productos</p>
                </div>
              </Link>
            </li>
            <li className="group py-2 px-0.5 md:p-2">
              <Link href="/dashboard/shipments" className={`hover:bg-white bg-white justify-center lg:justify-start  mt-2 
              ${pathname ==  "/dashboard/shipments" && "active-box"}`}>
                <div className="  cursor-pointer my-2  rounded-lg inline-block flex  items-center">
                  <FaTruck className={`text-blue-300	group-hover:text-blue-950  ${pathname ==  "/dashboard/shipments" && "active-link"}`} size={20} />
                  <p className={`ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block  ${pathname ==  "/dashboard/shipments" && "active-link"}`}>Envíos</p>
                </div>
              </Link>
            </li>
            <li className="group py-2 px-0.5 md:p-2">
              <Link href="/dashboard/receipts" className={`hover:bg-white bg-white justify-center lg:justify-start  mt-2 
              ${pathname ==  "/dashboard/receipts" && "active-box"}`}>
                <div className="  cursor-pointer my-2  rounded-lg inline-block flex  items-center">
                  <MdCreditCard className={`text-blue-300	group-hover:text-blue-950  ${pathname ==  "/dashboard/receipts" && "active-link"}`} size={20} />
                  <p className={`ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block  ${pathname ==  "/dashboard/receipts" && "active-link"}`}>Recibos</p>
                </div>
              </Link>
            </li>
            <li className="group py-2 px-0.5 md:p-2">
              <Link href="/dashboard/settings" className={`hover:bg-white bg-white justify-center lg:justify-start  mt-2 
              ${pathname ==  "/dashboard/settings" && "active-box"}`}>
                <div className=" cursor-pointer my-2  rounded-lg inline-block flex  items-center ">
                  <IoMdSettings className={`text-blue-300	group-hover:text-blue-950  ${pathname ==  "/dashboard/settings" && "active-link"}`} size={20} />
                  <p className={`ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block  ${pathname ==  "/dashboard/settings" && "active-link"}`}>Configuración</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
    </>
  );
}

export default Sidebar;
