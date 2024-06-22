import React from  'react'
import Image from 'next/image';

const  Header  = () => {
    return(
        <div className='flex fixed w-full justify-between px-4 pr-8  pt-12 z-50        '>
            <h2> </h2>
            <div>
                <Image 
                  src='/assets/user-img.png'
                  alt='Description of the image'
                  width={50}
                  height={50}
                />
            </div>

        </div>
    )
}

export default Header