import {User} from './user.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  id = 0;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getUsers(): Observable<User>{
    return this.http.get<User>(this.apiUrl + '/users');
  }
  createUser(user): Observable<User>{
    return this.http.post<User>(this.apiUrl + '/users', JSON.stringify(user), this.httpOptions);
  }
}
