export class Bedrag {
    nummer: number;
    inleg: number;
    cashflow: number;
    inkomsten:number;

 


    constructor(index:number, iinleg:number, icashflow:number, iinkomsten:number) {
       this.nummer = index;
       this.inleg = iinleg;
       this.cashflow = icashflow;
       this.inkomsten = iinkomsten;
    }


}