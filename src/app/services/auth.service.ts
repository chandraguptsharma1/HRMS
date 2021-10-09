import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';


let apiUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpService: HttpService,
    private storageService: StorageService,
    private router: Router) {}

    login(postData: any): Observable<any> {
      return this.httpService.post('validateLogin', postData);
      }
  // login(credentials) {
  //   return new Promise((resolve, reject) => {
  //       let headers = new Headers();
  //       headers.append('Content-Type', 'application/json');

  //       this.http.post(apiUrl+'login', JSON.stringify(credentials), {headers: headers})
  //         .subscribe(res => {
  //           resolve(res.json());
  //         }, (err) => {
  //           reject(err);
  //         });
  //   });
  // }

  
  
}
