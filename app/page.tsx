"use client"
import Image from 'next/image'
import Result from './components/Result'
import Button from './components/Button'
import Huizenlijst from './components/Huizenlijst'
import AddHuis from './components/AddHuis'
import Settings from './components/Settings'
import Settingsbutton from './components/Settingsbutton'
import ReFinance from './components/ReFinance'
import { useEffect, useState } from 'react'
import First from './components/First'
import ResultP2 from './components/ResultP2'
import ResultP3 from './components/ResultP3'




let index = 0;

export default function Home() {

  const [display, setDisplay] = useState(-1)
  const [p1, setP1] = useState('grid');
  const [p2, setP2] = useState('none');
  const [p3, setP3] = useState('none');

  let p1boolean = false;
  let p2boolean = false;
  let p3boolean = false;

  useEffect(()=>{console.log('ran')},[display])


  function handleP1(){
    if(p1boolean == false){
      setP1('grid')
      setP2('none')
      setP3('none')
      setDisplay(index++)
      p1boolean = true;
      p2boolean = false;
      p3boolean = false;

    }
  }


  function handleP2(){
    if(p2boolean == false){
      setP1('none')
      setP2('grid')
      setP3('none')
      setDisplay(index++)
      p1boolean = false;
      console.log(p1boolean)
      p2boolean = true;
      p3boolean = false;
      
    }
  }

  function handleP3(){
    if(p3boolean == false){
      setP1('none')
      setP2('none')
      setP3('grid')
      setDisplay(index++)
      p1boolean = false;
      p2boolean = false;
      p3boolean = true;

    }
  }



  return (
    <div className='app'>
    <div className='playersection'>
      <div></div>
      <button onClick={handleP1} className='p1b buttonSettings button' >1 Person</button>
      <button onClick={handleP2} className='p2b buttonSettings button' >2 Persons</button>
      <button onClick={handleP3} className='p3b buttonSettings button' >3 Persons</button>
      <div></div>

    </div>

    <div className='p1' style={{display:`${p1}` }}>
      <First />
      <Result />
    </div>

    <div className='p2' style={{display:`${p2}` }}>
    <First />
    <ResultP2 />
    </div>

    <div className='p3' style={{display:`${p3}` }}>
    <First />
    <ResultP3 />
    </div>

    
    <div className='container'>
    <div>

    </div>

    </div>

  </div>
  )

  

}


