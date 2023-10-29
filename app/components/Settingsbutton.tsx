"use client"
import React, {useState, useEffect}from 'react'
import Settings from './Settings'

const Settingsbutton = () => {
  let i = 0;
  let visible = false;

  const [check, setCheck] = useState('')
  const [see, setSee] = useState('');

  function handleVisiblity(){
    if(visible == true){
      visible = false;
      setSee( '')
    }else {
      visible = true;
    }

    console.log('jeejee')
  }

  useEffect(()=>{console.log('ran'); handleVisiblity();},[check])
  return (
    <div>
      <div>
        {see}
      </div>
        <button onClick={resize} className='button'>Settings</button>
    </div>
  )
  function resize(){
    i++
    setCheck(i++ +"")
    console.log(i)
  }



}


export default Settingsbutton