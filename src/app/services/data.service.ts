import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.http.get('/assets/data/menu-opts.json'); //ojo mirar el json que no lo lee
  }


}
