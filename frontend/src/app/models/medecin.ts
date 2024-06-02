import { User } from './user';

export interface Medecin {
  id?: number;
  etatCivil?: string;
  nationnalite?: string;
  prenom: string;
  adresse?: string;
  genre: string;
  type?: string;
  consultations?: any[];  // Remplacez `any` par le type approprié si nécessaire
  rendezVous?: any[];     // Remplacez `any` par le type approprié si nécessaire
  bilans?: any[];         // Remplacez `any` par le type approprié si nécessaire
  certificats?: any[];    // Remplacez `any` par le type approprié si nécessaire
  fiches?: any[];         // Remplacez `any` par le type approprié si nécessaire
  user: User;
}
