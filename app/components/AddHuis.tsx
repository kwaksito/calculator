"use client"
import React from 'react'
import { Huis } from '../types/Huizen';
import Huizenlijst, { HuizenData, index } from './Huizenlijst';
import Settings, { swaarde , shypo, sinkomen} from './Settings';
import { kopen, spaar } from './Button';


const AddHuis = () => {

    var data = HuizenData
    var newIndex = data.length;


  return (
    <div>
        <button onClick={handleClick} className='button'>add Huis</button>
    </div>
  )

  function handleClick():void{
    newIndex = extraHuis(newIndex, 0)
    console.log(HuizenData)
}

    
}


export function extraHuis(e:number, a:number):number{
    let nIndex = e;
    nIndex++;
    const huisje = new Huis(swaarde, sinkomen, spaar(a), kopen(), nIndex);
    HuizenData.push(huisje);
    return nIndex
}
export default AddHuis