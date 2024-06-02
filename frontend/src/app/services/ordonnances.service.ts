import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdonnancesService {
  constructor(private _http:HttpClient) { }
  private apiUrl = 'http://127.0.0.1:8081/'; 
  
  private createHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken');  // Supposez que vous stockez le token dans le localStorage
    if (token) {
      console.log('Token found: ', token);
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    } else {
      console.error('No token found in localStorage');
      return new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
  }

  addOrdonnance(ordonnance: any): Observable<any> {
    const headers = this.createHeaders();
    return this._http.post<any>(`${this.apiUrl}api/element/create/ord`, ordonnance, { headers });
  }

  getConnectedMedecin(): Observable<any> {
    const headers = this.createHeaders();
    return this._http.get<any>(`${this.apiUrl}api/connected`, { headers });
  }

  getPatientById(patientId: number): Observable<any> {
    const headers = this.createHeaders();
    return this._http.get<any>(`${this.apiUrl}api/element/patient/${patientId}`, { headers });
  }

  getOrd(): Observable<any[]> {
    const headers = this.createHeaders();
    return this._http.get<any[]>(this.apiUrl+ 'api/element/getAll/ord', { headers });
  }

  getOrdById(id: number): Observable<any> {
    const headers = this.createHeaders();
    return this._http.get<any>(`${this.apiUrl}api/element/ord/${id}`, { headers });
  }

  updateOrdonnance(id: number, ordonnance: any): Observable<any> {
    const headers = this.createHeaders();
    return this._http.put<any>(`${this.apiUrl}api/element/update/ordonnance/${id}`, ordonnance, { headers });
  }
}
