import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/auth';
  name :string = '';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        console.log('API Response:', response); // Log the full response

        if (response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('userRole', response.role);  // Store the user role
          localStorage.setItem('userName', response.name);
          this.name = response.name;  // Store the user name
          console.log('Token stored: ', localStorage.getItem('accessToken'));
          console.log('User role: ', localStorage.getItem('userRole'));
          console.log('User name: ', localStorage.getItem('userName'));
        } else {
          console.error('No access token in response');
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  getUserName(): string | null {
    return localStorage.getItem('userName');
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
  }
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
