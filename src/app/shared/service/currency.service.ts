import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  baseUrl = 'https://open.er-api.com/v6/latest/';

  constructor(private http: HttpClient) {}

  getExchangeRate(from: string, to: string) {
    return this.http.get<any>(`${this.baseUrl}${from}`).pipe(
      map(({ rates }) => {
        const rate = 1 / rates[to];
        return +rate.toFixed(4);
      })
    );
  }
}
