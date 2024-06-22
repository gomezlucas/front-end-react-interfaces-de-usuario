import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { MdCreditCard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";

function Sidebar({ children }) {
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
              <Link href="/" className="hover:bg-white bg-white justify-center lg:justify-start  mt-2 active-box  ">
                <div className="  cursor-pointer my-2  rounded-lg inline-block flex items-center ">
                  <MdDashboard className=" text-blue-300 	group-hover:text-blue-950  active-link" size={20} />
                  <p className="ml-3 text-blue-300 group-hover:text-blue-950 active-link hidden lg:block">Dashboard</p>
                </div>
              </Link>              
           
            </li>
            <li className="group py-2 px-0.5 md:p-2">
              <Link href="/" className="hover:bg-white bg-white justify-center lg:justify-start ">
                <div className="  cursor-pointer my-2  rounded-lg inline-block flex  items-center">
                  <IoMdCart className="text-blue-300 group-hover:text-blue-950 	" size={20} />
                  <p className="ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block ">Órdenes</p>
                </div>
              </Link>
            </li>
            <li className="group py-2 px-0.5 md:p-2">
              <Link href="/" className="hover:bg-white bg-white justify-center lg:justify-start ">
                <div className="  cursor-pointer my-2  rounded-lg inline-block flex  items-center">
                  <FaBagShopping className="text-blue-300 group-hover:text-blue-950 " size={20} />
                  <p className="ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block">Productos</p>
                </div>
              </Link>
            </li>
            <li className="group py-2 px-0.5 md:p-2">
              <Link href="/" className="hover:bg-white bg-white justify-center lg:justify-start  ">
                <div className="  cursor-pointer my-2  rounded-lg inline-block flex  items-center">
                  <FaTruck className="text-blue-300	group-hover:text-blue-950 " size={20} />
                  <p className="ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block">Envíos</p>
                </div>
              </Link>
            </li>
            <li className="group py-2 px-0.5 md:p-2">
              <Link href="/" className="hover:bg-white bg-white justify-center lg:justify-start ">
                <div className="  cursor-pointer my-2  rounded-lg inline-block flex  items-center">
                  <MdCreditCard className="text-blue-300 group-hover:text-blue-950 " size={20} />
                  <p className="ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block ">Recibos</p>
                </div>
              </Link>
            </li>
            <li className="group py-2 px-0.5 md:p-2">
              <Link href="/" className="hover:bg-white bg-white justify-center  lg:justify-start ">
                <div className=" cursor-pointer my-2  rounded-lg inline-block flex  items-center ">
                  <IoMdSettings className="text-blue-300 group-hover:text-blue-950  " size={20} />
                  <p className="ml-3 text-blue-300 group-hover:text-blue-950 hidden lg:block">Configuración</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
    </>
  );
}

export default Sidebar;
