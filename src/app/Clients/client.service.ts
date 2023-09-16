import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Client } from './client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = environment.baseUrlClient;

  constructor(private httpClient: HttpClient) { }
  getClientsList(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseUrl}` + 'clients')

  }
  createClient(client: Client): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + 'createclient', client);
  }

  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.baseUrl}${id}`);
  }

  updateClient(id: number, client: Client): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}${id}`, client);
  }

  deleteClient(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}${id}`);
  }
  getClientWithMesureById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}${id}`);
  }

}
