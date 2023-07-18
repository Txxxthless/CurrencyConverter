import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/shared/service/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  rateToUSD = 0;
  rateToEUR = 0;

  constructor(private currencyService: CurrencyService) {}

  async ngOnInit() {
    this.currencyService.getExchangeRates('UAH', 'EUR').subscribe({
      next: (rate) => (this.rateToEUR = rate),
    });

    this.currencyService.getExchangeRates('UAH', 'USD').subscribe({
      next: (rate) => (this.rateToUSD = rate),
    });
  }
}
