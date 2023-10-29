"use client"
export class Huis {
    nummer: number;
    waarde: number;
    jaar: number;
    hpm:number;
    ipm:number;
    spaargeldvoor:number;
    spaargeldna:number;
    hypotheek:number;
    cashflow:number;
    afbetaald:boolean;
    profit:number;

 


    constructor(iwaarde:number,iinkomen:number ,ispaargeldvoor:number, ispaargeldna:number, index:number) {
       this.nummer = index;
       this.waarde = iwaarde;
       this.jaar = 0;
       this.ipm = iinkomen;
       this.spaargeldvoor = ispaargeldvoor;
       this.spaargeldna = ispaargeldna;
       this.hypotheek = this.waarde - this.spaargeldvoor;
       if(this.hypotheek >= 0){
       this.hpm = (this.hypotheek/12)/15;
       }else{
        this.hpm = 0;
       }
       this.cashflow = this.ipm - this.hpm;
       this.afbetaald = false;
       this.profit = 0;

    
    }


    eenjaar(){
        this.hypotheek = this.hypotheek -(this.ipm * 12);
        this.jaar++;

        if (this.afbetaald == true){
            const profitjaar = (this.ipm * 12);
            this.profit = this.profit + profitjaar;
        }
        this.check();
    }
    check(){
        if(this.hypotheek <= 0){
            this.afbetaald= true;
            this.hpm = 0;
            this.hypotheek = 0;
            this.cashflow = this.ipm;

            
        }
    }


}