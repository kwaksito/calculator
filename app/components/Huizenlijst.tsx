"use client"
import React from 'react'
import {Huis} from '@/app/types/Huizen'
import Huizen from './Huizen';
import Settings, { swaarde , shypo, sinkomen} from './Settings';



export const HuizenData:any = [];
export var index =-1;
var iwaarde:number = swaarde
var ihypo:number = shypo
var iinkomen:number = sinkomen


const Huizenlijst = () => {
  return (
        <div className='lijst'>
            {HuizenData.map(HuizenData => (
                <Huizen className='card'
                key={HuizenData.nummer}
                waarde={ checkDuizenden(HuizenData.waarde)}
                jaar={HuizenData.jaar}
                hpm={ checkDuizenden(HuizenData.hpm)}
                ipm={ checkDuizenden(HuizenData.ipm)}
                spaargeldvoor={ checkDuizenden(HuizenData.spaargeldvoor)}
                spaargeldna={checkDuizenden(HuizenData.spaargeldna)}
                hypotheek={ checkDuizenden(HuizenData.hypotheek)}
                cashflow={ checkDuizenden(HuizenData.cashflow)}
                afbetaald={checkStatus(HuizenData.afbetaald)}
                profit={checkDuizenden(HuizenData.profit)}
                />
            ))}
        </div>
  )
}



function plusHuis(){
    index++;
    const huisje = new Huis(iwaarde, iinkomen, 120000, 0, index);
    console.log(index);
    HuizenData.push(huisje);
    console.log(HuizenData)
}

function checkDuizenden(getal:number):string{
    let display:string  = "0";
    if ((getal/1000) >= 1){
  
      if ((getal/1000000) >=1){
        display = getal/1000000 + ".000.000"
      }
      else{
        display = getal/1000 + ".000"
      }
    }
    else {
        display = (getal+"");
    }
    return display
  }


  function checkStatus(status:boolean):string{
    let antwoord:string = "";
    if (status === false){
        antwoord = "nee";
    }
    else{
        antwoord = "ja";
    }

    return antwoord;
  }




export default Huizenlijst