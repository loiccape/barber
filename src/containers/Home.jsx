import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom'

import jack from '../assets/images/jack.webp'
import barbe from '../assets/images/barbe.webp'
import barbedeux from '../assets/images/barbedeux.webp'
export default function Home() {



    return (
        <div className="md:h-[90vh]  flex flex-col p-4  text-white bg-zinc-800">
            <NavBar />

                {/* Parent */}
            <div className=' flex flex-col md:grid md:grid-cols-3 md:h-2/5  lg:w-3/4 mx-auto  '>

                {/* Partie gauche */}
                <div className='  p-4 flex flex-col justify-evenly '>
                    <p className='text-4xl text-center md:text-start '>Votre coiffeur de confiance depuis 1995 sur <strong className=''>Auberchicourt</strong> !</p>
                    <Link to='/contact'>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold text-2xl md:text-base py-2 px-4 rounded-xl  w-full mt-6 md:mt-0 lg:w-1/2 h-16" >
                            Me contacter
                        </button>
                    </Link>
                </div>
                {/* Partie droite */}
                <div className='col-span-2 p-4 grid '>
                    <div className="h-full flex flex-col md:justify-center ">
                        <h1 className="text-6xl my-4 font-custom text-center">Saint Louis</h1>
                        <h2 className="text-4xl font-custom text-center">Coiffure</h2>
                        
                    </div>
                    
                </div>
            </div>

            
            <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-2 md:h-1/2 lg:h-3/5 w-full lg:w-3/4 mx-auto mt-6 md:mt-0">
                <img src={jack} className='h-52 md:h-full w-full object-cover  rounded-xl ' alt='Bouteille de jack'/>
                
                <img src={barbe} className="md:col-start-1 md:row-start-2  w-full h-52 my-2 md:my-0 md:h-full rounded-xl object-cover " alt="Taille de barbe"/>
                <img src={barbedeux} className="w-full md:col-span-2 md:row-span-2 h-52 my-2 md:my-0 md:h-full md:col-start-2 md:row-start-1  rounded-xl object-cover"/>
            </div>
        </div>
    );
}
