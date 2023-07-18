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
    this.currencyService.getExchangedValue('UAH', 'EUR', 1).subscribe({
      next: (value) => (this.rateToEUR = value),
    });

    this.currencyService.getExchangedValue('UAH', 'USD', 1).subscribe({
      next: (value) => (this.rateToUSD = value),
    });
  }
}
