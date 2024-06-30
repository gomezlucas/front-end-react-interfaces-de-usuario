import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../../data/data.js';

const orders = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>        
        <p className="text-4xl font-bold">Recibos </p>                
      </div>
      <p className='px-4 mt-4'>Próximamente podrás utilizar está sección.. </p>
    </div>
  );
};

export default orders;