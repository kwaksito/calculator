"use client"
import React, { FormEvent, useState, useEffect} from 'react'
import { HuizenData } from './Huizenlijst';
import First from './First';
import { Huis } from '../types/Huizen';
import { kopen, spaar } from './Result';
export var swaarde:number = 250000;
export var shypo:number = 0.4;
export var sinkomen:number = 1000;
export var sspaar:number = 30000;
let message = "up to date";

let i = 0;
const data = HuizenData;

const Settings = () => {


    let visible = false;
  
    const [check, setCheck] = useState(false)
    const [see, setSee] = useState("none");
  
    function handleVisiblity(){
      if(see == "none"){
      setSee('grid');
      }else{
        setSee("none");
      }

      console.log('jeejee')
    }
  
    useEffect(()=>{console.log('ran'); handleVisiblity();},[check])
  return (
    <div>
    <div className='setting-section' style={{display: `${see}`}}>
        <div className='item'>
        <form className='settingspaarv' onSubmit={updateSpaar}>
        <label className='setting-spaart'>Sparen per jaar</label>
        <input type="text" name="settingspaar" id="settingspaar" className='settingspaar settingsinput' defaultValue={30000}/>
        <button className="button" type="submit">submit</button>
        </form>
        <div className='message'>{message}</div>
        </div>


        <div className='item'>
        <form className='settingwaardev' onSubmit={updateWaarde}>
        <label className='setting-waardet'> Waarde van het huis</label>
        <input type="text" name="settingwaarde" id="settingwaarde" className='settingwaarde settingsinput' defaultValue={250000}/>
        <button className="button" type="submit">submit</button>
        </form>
        <div className='message'>{message}</div>
        </div>

        <div className='item'>
        <form className='settinghuurv' onSubmit={updateHypo}>
        <label className='setting-huurt'>Procent afbetaald van hypotheek</label>
        <input type="text" name="settinghuur" id="settinghuur" className='settinghuur settingsinput' defaultValue={0.40}/>
        <button className="button" type="submit">submit</button>
        </form>
        <div className='message'>{message}</div>
        </div>

        <div className='item'>
        <form className='settinginkomenv' onSubmit={updateInkomen}>
        <label className='setting-inkoment'>Inkomen aan huur per maand</label>
        <input type="text" name="settinginkomen" id="settinginkomen" className='settinginkomen settingsinput' defaultValue={1000}/>
        <button className="button" type="submit">submit</button>
        </form>
        <div className='message'>{message}</div>
        </div>

        
    </div>



    <div className='buttonSection'>
        <button onClick={()=>{console.log(data), handleVisiblity(),clear(1) }} className='button'>Settings</button>
    </div>
    </div>




  )


}


function clear(e:number){
  console.log(data)
    data.length =0;
    start(0, (swaarde*shypo));

}

  //start simulation
  function start(e:number,a: number){
  let nIndex = e;
  const huisje = new Huis(swaarde, sinkomen, spaar(a), kopen(), nIndex);
  HuizenData.push(huisje);
  }



async function updateSpaar(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    //get data
    const newSpaar = new FormData(event.currentTarget).get("settingspaar");
    //tijdelijk
    let tspaar:any = (JSON.stringify(newSpaar));
    tspaar = eval(tspaar)
    //settings
    sspaar = eval(tspaar);
}

async function updateWaarde(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    //get data
    const newWaarde = new FormData(event.currentTarget).get("settingwaarde");
    //tijdelijk
    let twaarde:any = (JSON.stringify(newWaarde));
    twaarde = eval(twaarde)
    //settings
    swaarde = eval(twaarde);
}

async function updateHypo(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    //get data
    const newHypo = new FormData(event.currentTarget).get("settinghuur");
    //tijdelijk
    let thypo:any = (JSON.stringify(newHypo));
    thypo = eval(thypo)
    //settings
    shypo = eval(thypo);
}

async function updateInkomen(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    //get data
    const newInkomen = new FormData(event.currentTarget).get("settinginkomen");
    //tijdelijk
    let tinkomen:any = (JSON.stringify(newInkomen));
    tinkomen = eval(tinkomen)
    //settings
    sinkomen = eval(tinkomen);
}




export default Settings