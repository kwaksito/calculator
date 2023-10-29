import React from 'react'
import { HuizenData, kopen, spaar } from './Result'
import { shypo, sinkomen, swaarde } from './Settings'
import { Huis } from '../types/Huizen'

const First = () => {
  return (
    <div></div>
  )
}

start(0, (swaarde*shypo));
//start simulation
function start(e:number,a: number){
let nIndex = e;
const huisje = new Huis(swaarde, sinkomen, spaar(a), kopen(), nIndex);
HuizenData.push(huisje);
console.log(HuizenData);
}

export default First