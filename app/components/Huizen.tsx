import React from 'react'
import {Huis} from '@/app/types/Huizen'




export function  Huizen(props:any){
  return (
    <div className='productlist'>
    <div className='waardeT vraag'>Waarde</div>
    <div className='jaarT vraag'>jaar in bezit:</div>
    <div className='waarde antwoord'>{props.waarde}</div>
    <div className='jaar antwoord'>{props.jaar}</div>
    <div className='hpmt vraag'>Huur per maand</div>
    <div className='ipmt vraag'>inkomen per maand</div>
    <div className='hpm antwoord'>{props.hpm}</div>
    <div className='ipm antwoord'>{props.ipm}</div>
    <div className='spaargt vraag'>Spaargeld</div>
    <div className='hypot vraag'>Hypotheek</div>
    <div className='spaarg antwoord'>{props.spaargeld}</div>
    <div className='hypo antwoord'>{props.hypotheek}</div>
    <div className='cashft vraag'>Cashflow</div>
    <div className='afbt vraag'>Afbetaald</div>
    <div className='cashf antwoord'>{props.cashflow}</div>
    <div className='afb antwoord'>{props.afbetaald}</div>
    <div className='profitt vraag'>Profit</div>
    <div className='profit antwoord'>{props.profit}</div>
    </div>
  )
  
}




export default Huizen