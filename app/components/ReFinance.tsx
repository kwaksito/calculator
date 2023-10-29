"use client"
import React from 'react'
import { HuizenData } from './Huizenlijst'
import { swaarde } from './Settings'
import AddHuis, { extraHuis } from './AddHuis'
import { nspaar, spaar } from './Button'


const ReFinance = () => {
  return (
    <button onClick={refinance} className='button'>ReFinance</button>
  )


}

function refinance(){
    const data = HuizenData;
    let totaalpanden = data.length;
    let totaalequity = 0;
    let huidigpercentage = 0;
    let huidigwaarde = 0;
    let perPand = swaarde;
    let inlegPerPand = (perPand/2);
    let nieuwAantalPanden =0;


    for (let i = 0; i < data.length; i++) {

        let huidigequity = data[i].waarde - data[i].hypotheek;
        totaalequity = totaalequity+huidigequity;

        huidigwaarde =  huidigwaarde + data[i].waarde;

    }
    huidigpercentage = totaalequity/totaalpanden;
    nieuwAantalPanden = totaalequity/inlegPerPand;

    
    
    let nieuwepanden = nieuwAantalPanden;
    let nieuwePandenOver = eval((nieuwepanden + "").split(".")[1])
    let addPanden:number = eval((nieuwepanden + "").split(".")[0])
    let nieuwePandRondHn = nieuwePandenOver/100;

    addHoeveelheid((addPanden+1), (data.length - 1), ((addPanden*inlegPerPand)/addPanden), inlegPerPand);

    let nieuwspaar = (nieuwePandenOver/100)*inlegPerPand;
}


//e = aantal
//i is index
//a is per huis hypotheek
//q is inleg per pand

function addHoeveelheid(e:number, i:number, a:number, q:number){
    const data = HuizenData;
    let hypo = q;
    if((e) > 1){


        if (hypo < q){
            hypo=q;
            extraHuis(i, q);
            i++;
            e = e-1;
            a= a-q;
            addHoeveelheid(e, i, a, q);
        }
        else{
        extraHuis(i, q);
        i++;
        e = e-1;
        a= a-q;
        addHoeveelheid(e, i, a, q);
        }



    }
    
    console.log(spaar(0))
}


export default ReFinance