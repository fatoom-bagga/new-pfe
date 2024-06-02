import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertService {

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

  addCert(cert:any ): Observable<any> {
    const headers = this.createHeaders();
    return this._http.post<any>(this.apiUrl+'api/element/create/cert',cert,{ headers });
  }

  getCert(): Observable<any[]> {
    const headers = this.createHeaders();
    return this._http.get<any[]>(this.apiUrl+'api/element/all/cert',{ headers });
  }
}


