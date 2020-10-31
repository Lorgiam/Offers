import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Offers } from './offers.interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private http: HttpClient) {}

  getJSON(): Observable<Offers[]> {
    return this.http
      .get('assets/ofertas.json')
      .pipe(map((offers: Offers[]) => offers));
  }
}
