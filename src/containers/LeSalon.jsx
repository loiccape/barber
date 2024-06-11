import React from 'react'
import barberShop from '../assets/images/barbershop.webp'
export default function LeSalon() {
  return (
    <div className='p-4 mt-2'>
      {/* Parent */}
      <div className='lg:w-3/4 mx-auto flex flex-col-reverse md:flex-row'>
        
        <img src={barberShop} className='w-full h-56 md:h-auto md:w-1/2 mt-6 md:mt-0 rounded-xl object-cover' alt="barber shop"/>
        {/* div droite */}
        <div className='md:w-1/2  flex flex-col justify-center lg:h-[50vh]'>
          <h3 className='text-center mb-8 font-custom text-5xl'>Le Salon</h3>
          <p className='mx-auto md:w-3/4 text-center'>Depuis son ouverture en 1995, Saint Louis Coiffure n'est pas juste un salon de coiffure, c'est une véritable institution. Au fil des années, mon style a évolué pour suivre les tendances du moment, mais une chose est restée immuable : mon engagement envers la convivialité et le service personnalisé.

            Que vous soyez un fidèle de longue date ou un nouveau venu, vous serez accueilli avec le même sourire et la même attention. Chez Saint Louis Coiffure, j'attache une importance particulière à établir des liens authentiques avec chacun de mes clients, car pour moi, la coiffure va bien au-delà de simples coupes.</p>
        </div>
      </div>
    </div>
  )
}
