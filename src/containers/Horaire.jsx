import React from 'react'
import Price from '../components/Price'
import pancarte from '../assets/images/pancarte.webp'
export default function Horaire() {
  return (
    <div className='p-4 mt-4 mb-8'>
    
      <div className='lg:w-3/4 mx-auto flex flex-col-reverse md:flex-row'>
        
        <img src={pancarte} className='w-full h-56 md:h-auto md:w-1/2 mt-6 md:mt-0 rounded-xl object-cover' alt="pancarte"/>
        
        <div className='md:w-1/2  flex flex-col justify-center lg:h-[50vh] p-4'>
          <h3 className='text-center mb-8 font-custom text-5xl'>Horaires</h3>
          <Price   name={"Lundi"} price={"Fermé"} reverse={false}/>
          <Price   name={"Mardi"} price={"08:30 - 19:00"} reverse={false}/>
          <Price   name={"Mercredi"} price={"08:30 - 19:00"} reverse={false}/>
          <Price   name={"Jeudi"} price={"08:30 - 19:00"} reverse={false}/>
          <Price   name={"Vendredi"} price={"08:30 - 19:00"} reverse={false}/>
          <Price   name={"Samedi"} price={"08:30 - 19:00"} reverse={false}/>
          <Price   name={"Dimanche"} price={"Fermé"} reverse={false}/>
          <Price   name={"Uniquement sur rendez-vous!"}  reverse={false}/>
        </div>
      </div>
    </div>
  )
}
