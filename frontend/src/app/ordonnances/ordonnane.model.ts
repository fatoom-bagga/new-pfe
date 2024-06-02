export interface Ordonnance{
    idOrd:number;
    Patient:number;
    date:Date;
    medicaments:Medicaments[];
}

export interface Medicaments{

    id:number;
    nom:String;
    quantite:String;
    posologie:String
}