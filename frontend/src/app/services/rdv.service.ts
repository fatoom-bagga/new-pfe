import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor() { }
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
}
