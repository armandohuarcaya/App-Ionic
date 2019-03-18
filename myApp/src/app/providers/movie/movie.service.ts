import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(
     public http: HttpClient) {
    console.log('hola mundo service');
   }
   getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users').subscribe(data => {
        resolve(data);
        console.log(this.http.get);
      }, err => {
        console.log(err);
      });
    });
  }

}
