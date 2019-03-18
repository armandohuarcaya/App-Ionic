import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 // apiUrl = 'https://jsonplaceholder.typicode.com';
  apiUrl = 'http://127.0.0.1:8000';

  constructor(public http: HttpClient) {
    console.log('hola mundo service');
   }
   getUsers() {
    return new Promise(resolve => {
    //  this.http.get(this.apiUrl + '/users').subscribe(data => {
      this.http.get(this.apiUrl + '/api/categorias').subscribe(data => {

        resolve(data);
        console.log(this.http.get);
      }, err => {
        console.log(err);
      });
    });
  }
}
