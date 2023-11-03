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
            {HuizenData.map((HuizenDats:any) => (
                <Huizen className='card'
                key={HuizenDats.nummer}
                waarde={ checkDuizenden(HuizenDats.waarde)}
                jaar={HuizenDats.jaar}
                hpm={ checkDuizenden(HuizenDats.hpm)}
                ipm={ checkDuizenden(HuizenDats.ipm)}
                spaargeldvoor={ checkDuizenden(HuizenDats.spaargeldvoor)}
                spaargeldna={checkDuizenden(HuizenDats.spaargeldna)}
                hypotheek={ checkDuizenden(HuizenDats.hypotheek)}
                cashflow={ checkDuizenden(HuizenDats.cashflow)}
                afbetaald={checkStatus(HuizenDats.afbetaald)}
                profit={checkDuizenden(HuizenDats.profit)}
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