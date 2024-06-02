export interface MedicamentDto {
    nom: string;
    quantite: string;
    posologie: string;
  }
  
  export interface MedecinDto {
    id: number;
    nom: string;
    prenom: string;
  }
  
  export interface PatientDto {
    id: number;
    nom: string;
    prenom: string;
  }
  
  export interface OrdonnanceDto {
    idOrd?: number;
    patient: PatientDto;
    medecin: MedecinDto;
    date: Date;
    medicaments: MedicamentDto[];
  }
  