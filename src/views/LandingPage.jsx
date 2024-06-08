import React from 'react'
import Home from '../containers/Home'
import Gillou from '../containers/Gillou'
import LeSalon from '../containers/LeSalon'
import ListSalon from '../containers/ListSalon'


export default function LandingPage() {
  return (
    <div className=''>
        <Home/>
        <Gillou/>
        <LeSalon/>
        <ListSalon/>
        <footer className='h-[10vh] bg-zinc-800'></footer>
    </div>
  )
}
