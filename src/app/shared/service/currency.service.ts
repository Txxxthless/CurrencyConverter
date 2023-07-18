import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getExchangeRates(from: string, to: string) {
    return this.http.get<any>(`https://open.er-api.com/v6/latest/${from}`).pipe(
      map(({ rates }) => {
        const rate = 1 / rates[to];
        return rate;
      })
    );
  }
}
