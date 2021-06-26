import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIurl = "http://127.0.0.1:8000/api";

  constructor(private http:HttpClient) { }

  getClList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/clientes/')
  }

  addClient(val : any){
    return this.http.post(this.APIurl + '/clientes/', val);
  }

  updateClient(val : any){
    return this.http.put(this.APIurl + '/clientes/', val);
  }

  deleteClient(val : any){
    return this.http.delete(this.APIurl + '/clientes/' + val);
  }

}
