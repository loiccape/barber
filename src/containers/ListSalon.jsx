import React from 'react';
import Price from '../components/Price';
import { Link } from 'react-router-dom';
import siedel from '../assets/images/siedel.webp'
export default function ListSalon() {
  const menPriceList = React.useMemo(() => [
    { name: "Coupe classique", price: "16€" },
    { name: "Coupe semi-classique", price: "15€" },
    { name: "Coupe au rasoir", price: "16€" },
    { name: "Brosse", price: "16€" },
    { name: "Couronne", price: "13€" },
    { name: "Barbe", price: "8€" },
    { name: "Rasage", price: "10€" },
    { name: "Shampoing", price: "6€" },
  ], []);

  const childPriceList = React.useMemo(() => [
    { name: "Coupe jusqu'à 5ans", price: "13€" },
    { name: "Coupe de 6 à 8 ans", price: "15€" },
  ], []);

  return (
    <div className='mt-6 p-4 flex flex-col '>
      <p className='w-full mt-4 mx-auto font-custom text-5xl text-center'>
        Le Barber a votre service
      </p>

      <div className=' mt-10 md:w-full lg:w-3/4 mx-auto flex flex-col '>
        <div className=' flex flex-col md:flex-row'>
          <div className='flex flex-col md:w-1/2  p-4'>

            <p className='text-3xl'>Hommes</p>
            {menPriceList.map((item, index) => (
              <Price key={index} name={item.name} price={item.price} reverse={false} />
            ))}
          </div>

          <img src={siedel} className='mt-4 md:mt-0 md:w-1/2 h-56 md:h-auto  rounded-xl object-cover'  alt="coupe de barbe"/>
        </div>

        <p className='text-3xl mt-8 text-end'>Enfants</p>

        {childPriceList.map((item, index) => (
          <Price key={index} name={item.name} price={item.price} reverse={true} />
        ))}
       

<Link to='/contact'>
        <button className=" bg-green-500 hover:bg-green-700 text-white font-bold text-2xl md:text-base py-2 px-4 rounded-xl  w-full mt-12 md:mt-12 md:w-1/2 h-16" >
          Me contacter
        </button>
</Link>
     
      </div>
    </div>
  );
}
