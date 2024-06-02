// import { Patient } from '../patients/patient.model';

export interface Bilan {
  id: number;
  typeBilan: string;
  date: String;
  medecinId: number;
  patientId: number;
  content: string;
}