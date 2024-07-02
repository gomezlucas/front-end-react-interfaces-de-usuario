import React, {useState, useEffect} from 'react';
import { data } from '../data/data.js';
import { FaTruck } from "react-icons/fa";
import Link from 'next/link.js';

const RecentOrders = () => {
  const [sales, setSales ] = useState([])

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const res = await fetch('/api/sales');
        const data = await res.json();
        setSales(data.sales);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchSales();
  }, []);
  return (
    <div className='md:col-span-1 col-span-3 w-full relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <div className='flex justify-between'>
      <p  className="text-base "> Ventas Recientes </p>
      <Link href="/dashboard/sales">
              <div className="font-bold text-blue-500">
                 Ver detalles
              </div>
      </Link>
      </div>

      <ul>
        {sales.map((order, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-blue-100 rounded-lg p-3'>
              <div className='text-blue-700' >

                <FaTruck />

              </div>
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>${order.total}</p>
              <p className='text-gray-400 text-sm'>{order.name.first}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;