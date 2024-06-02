import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServService {

  constructor(private _http: HttpClient) { }

  private url = 'http://127.0.0.1:8081/';
  

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

  createPatient(patient: any): Observable<any> {
    const headers = this.createHeaders();
    return this._http.post(this.url + 'api/patient/create/patient', patient, { headers });
  }

  getPatients(): Observable<any[]> {
    const headers = this.createHeaders();
    return this._http.get<any[]>(this.url + 'api/patient/getAll/patient', { headers });
  }

  updatePatient(id: number, patient: any): Observable<any> {
    const headers = this.createHeaders();
    return this._http.put(`${this.url}api/patient/update/patient/${id}`, patient, { headers });
  }

  getPatientById(id: number): Observable<any> {
    const headers = this.createHeaders();
    return this._http.get<any[]>(`${this.url}api/patient/patient/${id}`, { headers });
  }

  
}
