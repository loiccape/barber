import React from 'react';

export default function Price({ name, price, reverse }) {
  return (
    <div className='mt-3 text-2xl'>
      {reverse ? (
        <div className='flex flex-row-reverse justify-between md:w-1/2 border-b-2 border-black ms-auto'>
          <p className='text-right'>{name}</p>
          <p className='text-right'>{price}</p>
        </div>
      ) : (
        <div className='flex justify-between  border-b-2 border-black'>
          <p>{name}</p>
          <p>{price}</p>
        </div>
      )}
    </div>
  );
}
