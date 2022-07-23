import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Client } from '../models/client-models'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_URI = 'http://localhost:3000/register';

  constructor(private http: HttpClient) { }

  getClient(){
    return this.http.get(`${this.API_URI}/cliente`);
  }

  getOneClient(id: string){
    return this.http.get(`${this.API_URI}/cliente/${id}`);
  }

  deleteClient(id: string){
    return this.http.delete(`${this.API_URI}/cliente/${id}`);
  }

  updateClient(id: string, update: Client){
    return this.http.put(`${this.API_URI}/cliente/${id}`, update);
  }

  saveClient(cliente: Client){
    return this.http.post(`${this.API_URI}/cliente`, cliente);
  }


}
