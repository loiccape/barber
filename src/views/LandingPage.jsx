import React from 'react'
import Home from '../containers/Home'
import Gillou from '../containers/Gillou'
import LeSalon from '../containers/LeSalon'
import ListSalon from '../containers/ListSalon'
import Horaire from '../containers/Horaire'


export default function LandingPage() {
  return (
    <div className=''>
        <Home/>
        <Gillou/>
        <LeSalon/>
        <ListSalon/>
        <Horaire/>
        <footer className='h-[10vh] bg-zinc-800'></footer>
    </div>
  )
}
