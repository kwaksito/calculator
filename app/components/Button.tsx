"use client"
import React, { useEffect, useState } from 'react'
import { Huis } from '../types/Huizen';
import Huizen from './Huizen';
import Huizenlijst from './Huizenlijst';
import { HuizenData } from './Huizenlijst';
import { sspaar } from './Settings';
import Result from './Result';




export var nspaar = 0;

export let totalCashflow = 0;

const Button = () => {
    
  return (
    <div>
        <button onClick={update} className='button'>+ Jaar</button>
    </div>
  )
}

const data = HuizenData;


function update():void{
  let i=0;
  totalCashflow = 0;
    for (let i = 0; i < data.length; i++) {
      data[i].eenjaar();
      totalCashflow = totalCashflow + data[i].cashflow;
      console.log(data[i])
      }
      spaar(sspaar);
      




}

export function spaar(e:number):number{
  nspaar = nspaar + e;
  return nspaar;
}



export function kopen():number{
  nspaar = 0;
  return nspaar;
}





export default Button