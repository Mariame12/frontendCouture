import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesure } from './mesure';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MesureService {
  private baseUrl = environment.baseUrlMesure;
  constructor(private httpClient: HttpClient) { }
  getListMesure(): Observable<Mesure[]> {
    return this.httpClient.get<Mesure[]>(`${this.baseUrl}` + 'mesures')

  }
  createMesure(mesure: Mesure): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + 'createmeasure', mesure);
  }

  getMesureById(id: number): Observable<Mesure> {
    return this.httpClient.get<Mesure>(`${this.baseUrl}${id}`);
  }

  updateMesure(id: number, mesure: Mesure): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}${id}`, mesure);
  }

  deleteMesure(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}${id}`);
  }
  getClientMeasureStatus(clientId: number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseUrl}hasMeasure/${clientId}`);
  }
}
