import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/public';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any): Observable<string> {
    return this.http.post(this.baseUrl + '/login', credentials, {
      responseType: 'text'   // IMPORTANT because backend returns plain string
    }).pipe(
      tap(token => {
        localStorage.setItem('token', token);
      })
    );
  }

  signup(data: any) {
    return this.http.post(this.baseUrl + '/signup', data);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
