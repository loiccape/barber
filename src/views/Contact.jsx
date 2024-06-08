import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" md:h-screen flex flex-col p-4  text-white bg-zinc-800">
      <NavBar />

      <div className='flex flex-col lg:flex-row mt-20 lg:my-auto w-full lg:w-3/4 mx-auto lg:h-3/4  '>

        <div className='lg:w-1/2  flex flex-col justify-center '>
          <p className='text-center mb-8 font-custom text-5xl'>Me contacter</p>
          <p className='mx-auto w-3/4 text-center'>Telephone : 03 27 90 35 20 </p>
          <p className='mx-auto w-3/4 text-center'>Adresse : 86 rue Bernonville , Auberchicourt, France </p>
          
          <p className='mx-auto w-3/4 text-center'>Facebook : <a className=" text-blue-500 underline" href='https://www.facebook.com/SaintLouisCoiffure' target='_blank' rel="noreferrer">
            Mon Facebook
          </a>
          </p>
        </div>

        <div className='w-full h-72 md:h-96 lg:w-1/2 lg:h-auto mt-6 md:mt-12 lg:mt-0 bg-center bg-cover rounded-xl' style={{ backgroundImage: "url('https://cdn1.treatwell.net/images/view/v2.i9437819.w1080.h720.xE0A2734B/')" }}></div>
      </div>
    </div>
  );
}
