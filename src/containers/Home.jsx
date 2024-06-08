import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="md:h-[90vh] flex flex-col p-4 text-white bg-zinc-800">
            <NavBar />

            <div className='flex flex-col md:grid md:grid-cols-3 md:h-2/5 lg:w-3/4 mx-auto'>

                {/* Partie gauche */}
                <div className='p-4 flex flex-col justify-evenly'>
                    <p className='text-4xl text-center md:text-left'>Votre coiffeur de confiance depuis 1995 !</p>
                    <Link to='/contact'>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold text-2xl md:text-base py-2 px-4 rounded-xl w-full mt-6 md:mt-0 lg:w-1/2 h-16">
                            Me contacter
                        </button>
                    </Link>
                </div>

                {/* Partie droite */}
                <div className='col-span-2 p-4 grid'>
                    <div className="h-full flex flex-col justify-center items-center">
                        <p className="text-6xl my-4 font-custom">Saint Louis</p>
                        <p className="text-4xl font-custom">Coiffure</p>
                    </div>
                </div>
            </div>

            {/* Partie images */}
            <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-2 md:h-1/2 lg:h-3/5 w-full lg:w-3/4 mx-auto mt-6 md:mt-0">
                <div className='text-center h-52 md:h-full rounded-xl bg-cover bg-center' style={{ backgroundImage: "url('https://uploads.lebonbon.fr/source/2022/november/18213/barbier-lyon_1_2000.jpg')" }}></div>
                <div className="md:col-start-1 md:row-start-2 h-52 my-2 md:my-0 md:h-full rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('https://salons.thebarbercompany.fr/UI/20230731-172100/img/sd/visuel_salon_defaut.jpg')" }}></div>
                <div className="md:col-span-2 md:row-span-2 h-52 my-2 md:my-0 md:h-full md:col-start-2 md:row-start-1 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('https://cdn1.treatwell.net/images/view/v2.i9437819.w1080.h720.xE0A2734B/')" }}></div>
            </div>
        </div>
    );
}
