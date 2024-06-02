import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bilan } from '../bilans/bilan.model';

@Injectable({
  providedIn: 'root'
})
export class BilanServiceService {
  constructor(private _http:HttpClient) { }
  private apiUrl = 'http://localhost:8081/';

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

  addBilan(bilan:Bilan ): Observable<Bilan> {
    const headers = this.createHeaders();
    return this._http.post<Bilan>(this.apiUrl+'api/element/create/bilan',bilan,{ headers });
  }

  getBilans(): Observable<Bilan[]> {
    const headers = this.createHeaders();
    return this._http.get<Bilan[]>(this.apiUrl+'api/element/all/bilan',{ headers });
  }
}
