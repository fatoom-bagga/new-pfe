import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medecin } from '../models/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private apiUrl = 'http://localhost:8081/api/medecin';
  private userApiUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient) { }

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

  createUser(user: any): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post(`${this.userApiUrl}/create`, user, { headers });
  }

  createMedecin(data: any): Observable<any> {
    const headers = this.createHeaders();
    console.log('Headers for createMedecin:', headers);
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: 'MEDECIN'
    };

    console.log('Creating user with role:', user.role);  // Print the role of the user

    const medecin = {
      prenom: data.prenom,
      genre: data.genre,
      // Autres propriétés du médecin
    };

    return new Observable(observer => {
      this.createUser(user).subscribe(
        userResponse => {
          this.http.post(`${this.apiUrl}/create/medecin?email=${user.email}`, medecin, { headers }).subscribe(
            medecinResponse => {
              observer.next(medecinResponse);
              observer.complete();
            },
            err => observer.error(err)
          );
        },
        err => observer.error(err)
      );
    });
  }

  getAllMedecins(): Observable<Medecin[]> {
    const headers = this.createHeaders();
    console.log('Headers for getAllMedecins:', headers);
    return this.http.get<Medecin[]>(`${this.apiUrl}/getAll/medecin`, { headers });
  }

  getMedecinById(id: number): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(`${this.apiUrl}/${id}`,{ headers });
  }

  getCurrentMedecinId(): Observable<any> {
    
    const headers = this.createHeaders();
    return this.http.get<any>(`${this.apiUrl}/me`,{ headers });
  }

}
