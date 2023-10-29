"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { Huis } from '../types/Huizen';
import Huizen from './Huizen';
import { Bedrag } from '../types/Inleg';



//Settings
export var swaarde:number = 250000;
export var shypo:number = 0.4;
export var sinkomen:number = 1000;
export var sspaar:number = 30000*3;
let message = "up to date";

let i = 0;

//Huizenlijst
export const HuizenData:any = [];
export var index =-1;


//index useEffect
export let indexes = 0;
let jaarIndex= 0;

const moneyIn:any = [];

export let bedragIndex = 0;


//spaargeld
export var nspaar = 0;

//cashflow
export let totalCashflow = 0;





//check/add spaargeld
export function spaar(e:number):number{
  nspaar = nspaar + e;
  return nspaar;
}


//clear spaargeld
export function kopen():number{
  nspaar = 0;
  return nspaar;
}


//main section
const Result3 = () => {

  const data = HuizenData;

//index extra huis
  var newIndex = data.length -1;

// if jaar is clicked
  let jaar:boolean = false;

  //useStates


  
 const [datab, setDatab] = useState(-1);
  const [inbezit, setInbezit] = useState('0');
  const [nubetaald, setNuBetaald] = useState('0');
  const [nuhypotheek, setNuHypotheek] = useState('0');
  const [nuspaar, setNuSpaar] = useState('0');
  const [cashflowm, setCashFlowM] = useState('0');
  const [cashflowj, setCashFlowJ] = useState('0');
  const [liab, setLiab] = useState('0');
  const [liabj, setLiabj] = useState("0");
  const [inc, setInc] = useState('0');
  const [incj, setIncj] = useState('0')
  const [eqiut, setEquit] = useState('0');
  const [acq, setAcq] = useState('0');
  const [acr, setAcr] = useState('0');
  const [accir, setAccir] = useState('0');
  const [aceir, setAceir] = useState('0');
  const [aceirat, setAceirat] = useState('0');
  const [ace, setAce] = useState('0');
  const [acjib, setAcjib] = useState('0');
  const [message, setMessage] = useState('');


//useEffect
  useEffect(()=>{
      handle();

    //eslint-disable-next-line
  },[datab])

//values useStates
  const acib = eval(calculateBezit()+"");
  const acnb = eval(calculateAfbetaald()+"");
  const acnh = eval(calculateHypotheeks()+"");
  const acns = checkDuizenden(eval(spaar(0)+""));
  const acncm = checkDuizenden(eval(calculateCashflowMaand()+""));
  const acncj = checkDuizenden(eval(calculateCashflowJaar()+""));
  const acl = checkDuizenden(eval(calculateLiabilties()+""));
  const aclj = checkDuizenden(eval(calculateLiabiltiesJaar()+""));
  const acic = checkDuizenden(eval(calculateIncome()+""));
  const acicj = checkDuizenden(eval(calculateIncomeJaar()+""));
  const aceq = checkDuizenden(eval(calculateEquity()+""));
  const acac = checkDuizenden(eval(calculateFullEquity()+""));
  const acrd = checkDuizenden(eval(calculateEquityRatio() + ""));
  const accrd = checkDuizenden(eval(calculatecashflowratio() +""));
  const accird= checkDuizenden(eval(calculateearningratio()+""));
  const aciratd = checkDuizenden(eval(calculateearningratioat()+""));
  const aced = checkDuizenden(eval(calculateProfit()+""));
  const acjibd = checkDuizenden(eval(addJaar(0) + ""))



  //settings State
  let visible = false;
  
  const [updating, setUpdating] = useState(false);
  const [check, setCheck] = useState(false);
  const [see, setSee] = useState("grid");

  function handleVisiblity(){
    if(see == "none"){
    setSee('grid');
    }else{
      setSee("none");
      jaarIndex = 0;
      handle();

    }
  }


  useEffect(()=>{console.log('ran'); handleVisiblity();},[check])

  useEffect(()=>{handleMessage()},[check])




  function handleMessage(){
    setMessage('');
  }

  function showMessage(){
    setMessage('Opgeslagen')
  }



  return (
    <div className='dashbord'>
      <div className='settingsAlgemeen'>
        <div className='setting-section' style={{display: `${see}`}}>
            <div className='item'>
            <form className='settingspaarv' onSubmit={updateSpaar}>
            <label className='setting-spaart'>Sparen per jaar</label>
            <input onClick={handleMessage} type="text" name="settingspaar" id="settingspaar" className='settingspaar settingsinput' defaultValue={30000}/>
            <button onClick={showMessage} className="button" type="submit">submit</button>
            <div className='message'>{message}</div>
            </form>

            </div>


            <div className='item'>
            <form className='settingwaardev' onSubmit={updateWaarde}>
            <label className='setting-waardet'> Waarde van het huis</label>
            <input onClick={handleMessage} type="text" name="settingwaarde" id="settingwaarde" className='settingwaarde settingsinput' defaultValue={250000}/>
            <button onClick={showMessage} className="button" type="submit">submit</button>
            <div className='message'>{message}</div>
            </form>

            </div>

            <div className='item'>
            <form className='settinghuurv' onSubmit={updateHypo}>
            <label className='setting-huurt'>Procent afbetaald van hypotheek</label>
            <input onClick={handleMessage} type="text" name="settinghuur" id="settinghuur" className='settinghuur settingsinput' defaultValue={0.40}/>
            <button onClick={showMessage} className="button" type="submit">submit</button>
            <div className='message'>{message}</div>
            </form>

            </div>

            <div className='item'>
            <form className='settinginkomenv' onSubmit={updateInkomen}>
            <label className='setting-inkoment'>Inkomen aan huur per maand</label>
            <input onClick={handleMessage} type="text" name="settinginkomen" id="settinginkomen" className='settinginkomen settingsinput' defaultValue={1000}/>
            <button onClick={showMessage} className="button" type="submit">submit</button>
            <div className='message'>{message}</div>
            </form>

            </div>

            
        </div>



    <div className='buttonSettings'>
        <button onClick={()=>{console.log(data), handleVisiblity(),clear(1) }} className='button'>Settings</button>
    </div>
    </div>


      <div className='results'>
      <div className='stats hoofd'>
      <div className='koppel'>
      <div className='inBusinesst'>Jaar in business:
      </div>
      <div className='inBusiness'>{acjib}
      </div>
      </div>
      </div>



      <div className='stats hoofd'>
      <div className='koppel'>
        <div className='liquidst'>Spaargeld:
        </div>
        <div className='liquids'>{nuspaar}
        </div>
        </div>
      </div>
        <div className='stats'>
        <div className='koppel'>
        <div className='cashflow-maandt'> Cashflow per maand:
        </div>
        <div className='cashflow-maand'>{cashflowm}
        </div>
        </div>
        <div className='koppel'>
        <div className='cashflow-jaart'> Cashflow per jaar:
        </div>
        <div className='cashflow-jaar'>{cashflowj}
        </div>
        </div>
      </div>

        <div className='stats'>
        <div className='koppel'>
        <div className='bezitt'>In bezit:
        </div>
        <div className='bezit'>{inbezit}
        </div>
        </div>
        <div className='koppel'>
        <div className='donet'>Afbetaald:
        </div>
        <div className='done'>{nubetaald}
        </div>
        </div>
        <div className='koppel'>
        <div className='profitlesst'>In Hypotheek:
        </div>
        <div className='profitless'>{nuhypotheek}
        </div>
        </div>
      </div>







      <div className='stats'>
      <div className='koppel'>
      <div className='expensest'>Uitgave per maand:
      </div>
      <div className='expenses'>{liab}
      </div>
      </div>
      <div className='koppel'>
      <div className='expensesjt'>Uitgave per jaar:
      </div>
      <div className='expensesj'>{liabj}
      </div>
      </div>
      </div>
      <div className='stats'>
      <div className='koppel'>
      <div className='Income'>Inkomen vanuit huur per maand:
      </div>
      <div className='Income'>{inc}
      </div>
      </div>
      <div className='koppel'>
      <div className='Income'>Inkomen vanuit huur per jaar:
      </div>
      <div className='Income'>{incj}
      </div>
      </div>
      </div>

      <div className='stats'>
      <div className='koppel'>
      <div className='on-name'>Equity op papier:
      </div>
      <div className='on-name'>{eqiut}
      </div>
      </div>
      <div className='koppel'>
      <div className='acquired'>Waarvan:
      </div>
      <div className='acquired'>{acq} in eigen bezit
      </div>
      </div>
      <div className='koppel'>
      <div className='ratiot'>equity ratio:
      </div>
      <div className='ratio'>{acr}
      </div>
      </div>
      </div>

      <div className='stats'>
      <div className='koppel'>
      <div className='ratio_inlegt'>cashflow/inleg:
      </div>
      <div className='ratio_inleg'>{accir}
      </div>
      </div>
      <div className='koppel'>
      <div className='ratio_earnt'>earning/inleg:
      </div>
      <div className='ratio_earn'>{aceir}
      </div>
      </div>
      <div className='koppel'>
      <div className='ratio_earnatt'>earning/inleg all time:
      </div>
      <div className='ratio_earnat'>{aceirat}
      </div>
      </div>
      <div className='koppel'>
      <div className='earnedt'>verdiend
      </div>
      <div className='earned'>{ace}
      </div>
      </div>
      </div>
      </div>
      

      <div className='buttonSection'>
        <div></div>
      <div>
        <button onClick={()=>{
          update(),
          addJaar(1)
          console.log(data)
        }}className='button'>+ Jaar</button>
    </div>

    <div>
        <button onClick={()=>{handleClick()}} className='button'>add Huis</button>
    </div>

    <div>
      <button onClick={()=>{refinance(), console.log(data)}} className='button'>ReFinance</button>
    </div>
    </div>


    <div className='cardSection'>
    <div className='lijst'>
            {HuizenData.map((HuizenDats) => (
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
    </div>

    </div>

              




  )





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
    setDatab(indexes++)
    }
  
  
  
  async function updateSpaar(event: FormEvent<HTMLFormElement>){
      event.preventDefault()
      //get data
      const newSpaar = new FormData(event.currentTarget).get("settingspaar");
      //tijdelijk
      let tspaar:any = (JSON.stringify(newSpaar));
      tspaar = eval(tspaar)
      //settings
      sspaar = (eval(tspaar)*3);
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

//refinace-------------------------------------------------------
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
    let nieuwepanden = (nieuwAantalPanden - (nieuwAantalPanden%1));
    let nieuwePandenOver = nieuwAantalPanden%1;
    let nieuwspaar = (nieuwePandenOver*inlegPerPand);
    data.length=0;
    
   
    addHoeveelheid((nieuwepanden+1), (-1), ((nieuwepanden*inlegPerPand)/nieuwepanden), inlegPerPand);
    spaar(nieuwspaar);


}



//e = aantal 3
//i is index 1
//a is per huis hypotheek
//q is inleg per pand

function addHoeveelheid(e:number, i:number, a:number, q:number){
  const data = HuizenData;
  let hypo = a;
  if((e) > 1){
      if (hypo < q){
          hypo=q;
          extraHuisRefinance(i, q);
          i++;
          e = e-1;
          a= a-q;
          addHoeveelheid(e, i, a, q);
      }
      else{
      extraHuisRefinance(i, q);
      i++;
      e = e-1;
      a= a-q;
      addHoeveelheid(e, i, a, q);
      }
  }
}
//----------------------------------------------------------------


//handleClick addHuis
  function handleClick():void{
    newIndex = extraHuis(newIndex, 0)
}

//handle click plusJaar
  function update():void{

    let i=0;
    totalCashflow = 0;
      for (let i = 0; i < data.length; i++) {
        data[i].eenjaar();
        totalCashflow = totalCashflow + data[i].cashflow;
        }
        spaar(sspaar);
        spaar(calculateCashflowJaar())
        addBedrag(bedragIndex, sspaar, 0, 0);
        addBedrag(bedragIndex, 0, calculateCashflowJaar(), 0)
        addBedrag(bedragIndex, 0, 0, calculateIncomeJaar())
        jaar = true;
        setDatab(indexes++)

  }

  //e is index
  //a is geld inleg
  //ExtraHuis
function extraHuis(e:number, a:number):number{
  jaar = false;
  if(spaar(0) > (swaarde*shypo)){
  let tweevijfde = swaarde*shypo;
  let difference = spaar(0) - tweevijfde;
  let nIndex = e;
  nIndex++;
  const huisje = new Huis(swaarde, sinkomen, tweevijfde, kopen(), nIndex);
  HuizenData.push(huisje);
  kopen();
  spaar(difference);
  setDatab(indexes++)
  return nIndex
  }else{
    let nIndex = e;
    nIndex++;
    const huisje = new Huis(swaarde, sinkomen, spaar(a), kopen(), nIndex);
    HuizenData.push(huisje);
    kopen();
    spaar(nspaar)
    setDatab(indexes++)
    return nIndex
  }
  
}


  //e is index
  //a is geld inleg
  //ExtraHuis
  function extraHuisRefinance(e:number, a:number):number{
    jaar = false;
    let over = spaar(0);
    if(spaar(0) > swaarde){
      let nIndex = e;
      nIndex++;
      const huisje = new Huis(swaarde, sinkomen, a, kopen(), nIndex);
      HuizenData.push(huisje);
      kopen();
      spaar(over);
      setDatab(indexes++)
    return nIndex
    }else{
      let nIndex = e;
      nIndex++;
      const huisje = new Huis(swaarde, sinkomen, a, kopen(), nIndex);
      HuizenData.push(huisje);
      kopen();
      spaar(over);
      setDatab(indexes++)
      return nIndex
    }
    
  }
  

  

  //handle useEffect
  function handle(){
    setInbezit(acib);
    setNuBetaald(acnb);
    setNuHypotheek(acnh);
    setNuSpaar(acns);
    setCashFlowM(acncm);
    setCashFlowJ(acncj);
    setLiab(acl);
    setLiabj(aclj);
    setInc(acic);
    setIncj(acicj);
    setEquit(aceq);
    setAcq(acac)
    setAcr(acrd);
    setAccir(accrd);
    setAceir(accird);
    setAceirat(aciratd);
    setAce(aced);
    setAcjib(acjibd)
  }
}


//commas
function addDecimals(getal:number):string{
  let display ="";
  display = (Math.round(getal * 100) / 100).toFixed(2);
  return display
}

//display cijfers
function checkDuizenden(getal:number):string{
  let dissie = 0;
  dissie = eval(addDecimals(getal));
  return dissie.toLocaleString()
}


//huizen array
const data = HuizenData;


//----------------------------------------------------------------------------
//CALCULATORS
//in bezit calculator
function calculateBezit():number{
  let bezit = 0;
    bezit = bezit + data.length;


  return bezit;
}

//afbetaald calculator
function calculateAfbetaald(){
  let afbetaalde = 0;
  for(let i=0; i< data.length; i++){
    if( data[i].afbetaald == true){
      afbetaalde++;
    }
  }
  return afbetaalde;
}

//in hypotheek calculator
function calculateHypotheeks(){
  let inHypotheek = 0;
  for(let i=0; i< data.length; i++){
    if( data[i].afbetaald == false){
      inHypotheek++;
    }
  }
  return inHypotheek;
  
}
//cashflow calculators
function calculateCashflowMaand(){
  let cashflow = 0;
  for(let i=0; i<data.length; i++){
    cashflow = cashflow + data[i].cashflow;
  }
  return cashflow;
  
}
function calculateCashflowJaar():number{
  let cashflowJaar = 0;
  for(let i=0; i<data.length; i++){
    cashflowJaar = cashflowJaar + (data[i].cashflow)*12;
  }
  return cashflowJaar;
  
}

//koste calculators
function calculateLiabilties():number{
  let hpm = 0;
  for(let i=0; i< data.length; i++){
    hpm = hpm + data[i].hpm;
  }
  return hpm;
}

function calculateLiabiltiesJaar():number{
  let huurJaar =0;
  for(let i=0; i<data.length; i++){
    huurJaar = (huurJaar + (data[i].hpm)*12);
  }
  return huurJaar;
}

//Inkomen calculators
function calculateIncome():number{
  let ipm = 0;
  for(let i=0; i< data.length; i++){
    ipm = ipm + data[i].ipm;
  }
  return ipm;
}

function calculateIncomeJaar(){
  let ipmj = 0;

  for(let i=0; i<data.length; i++){
    ipmj = ipmj + (data[i].ipm*12);
  }
  return ipmj;
}

//Equity calculators 
function calculateEquity(){
  let equity = 0
  for(let i=0; i<data.length; i++){
    equity = equity+ data[i].waarde;
  }
  return equity;
}

function calculateFullEquity(){
  let hypotheek =0;
  let equity = 0;
  for(let i=0; i <data.length; i++){
    hypotheek = hypotheek + data[i].hypotheek;
    equity = (calculateEquity()- hypotheek);
  }
  return equity;
}

function calculateEquityRatio(){
  let ratio = 0;
  ratio = calculateFullEquity()/calculateEquity();
  return ratio;
}

function calculatecashflowratio(){
  let totaleInleg = 0;
  let totaleEarning= 0;
  for(let i=0; i <moneyIn.length; i++){
    totaleInleg = totaleInleg + moneyIn[i].inleg;
  }
  for(let i=0; i<moneyIn.length; i++){
    totaleEarning = totaleEarning + moneyIn[i].cashflow;

  }
  let ratio = totaleEarning/totaleInleg;

  return ratio;

}

function calculateearningratio(){
  if(moneyIn.length >0){
    let ratio = calculateIncomeJaar()/moneyIn[0].inleg;
    return ratio;
  }
}


function calculateearningratioat(){
  let totaleInleg = 0;
  let totaleEarning= 0;
  for(let i=0; i <moneyIn.length; i++){
    totaleInleg = totaleInleg + moneyIn[i].inleg;
  }
  for(let i=0; i<moneyIn.length; i++){
    totaleEarning = totaleEarning + moneyIn[i].inkomsten;
  }
  let ratio = totaleEarning/totaleInleg;
  return ratio;
}

function calculateProfit(){
  let totaleEarning= 0;
  if(data.length >0){
  for(let i=0; i<moneyIn.length; i++){
    totaleEarning = totaleEarning + moneyIn[i].inkomsten;
  }}
  return totaleEarning;
}

function addJaar(e:number){
  jaarIndex = jaarIndex + e;
  return jaarIndex;
}



//--------------------------------------------------------------


// index is key
//i is inleg
//c is cashflow
//e is inkomsten
function addBedrag(index:number, i:number, c:number, e:number){
  e++;
  const bedragje = new Bedrag(index, i, c , e)
  moneyIn.push(bedragje);
}



















export default Result3