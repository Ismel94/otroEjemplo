import { Injectable } from '@angular/core'

import { Pieza } from './pieza'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  
  url = 'http://192.168.105.81:8080/api';
  
  constructor(private http: HttpClient){}


  
  public listPiezas(): Observable<Pieza[]>{
    console.log('entra a lisPiezas');
    return this.http.get<Pieza[]>(this.url + '/list');
  }
  
  public getPieza(id: number): Observable<Pieza>{
    return this.http.get<Pieza>(this.url + `/get/${id}`);
  }
  
  public save(pieza: Pieza): Observable<any>{
    return this.http.post<any>(this.url + '/add', pieza);
  }
}
