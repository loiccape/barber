import React from 'react'

export default function Gillou() {
  return (
    <div  className='p-4 mt-2 '>
      {/* Parent */}
        <div className='lg:w-3/4 mx-auto flex flex-col md:flex-row '>
        
      {/* div gauche */}
        <div className=' md:w-1/2  flex flex-col justify-center lg:h-[50vh]'>
            <p className='text-center mb-8 font-custom text-5xl'>Carrigand Gilles</p>
            <p className='mx-auto md:w-3/4 text-center'>Depuis tout jeune, la coiffure est ma passion. Chaque jour, je prends plaisir à travailler avec vous, en créant des styles qui vous ressemblent et qui vous mettent en valeur. J'aime soigner chaque détail, car je sais combien cela compte pour vous. Mon but est de vous offrir un moment unique et agréable à chaque visite. Je suis toujours là pour discuter, créant ainsi une atmosphère chaleureuse et conviviale où chacun se sent écouté et apprécié.</p>
            </div>
      {/* div droite */}
        <div className='w-full h-56 md:h-auto md:w-1/2 mt-6 md:mt-0 bg-center bg-cover rounded-xl' style={{ backgroundImage: "url('https://uploads.lebonbon.fr/source/2022/november/18213/barbier-lyon_1_2000.jpg')" }}></div>
        </div>
    </div>
  )
}
