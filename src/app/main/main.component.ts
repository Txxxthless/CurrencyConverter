import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrencyService } from '../shared/service/currency.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  options = ['USD', 'EUR', 'UAH', 'JPY', 'GBP', 'AUD', 'CAD'];

  leftForm = new FormGroup({
    value: new FormControl(1),
    unit: new FormControl('USD'),
  });

  rightForm = new FormGroup({
    value: new FormControl(1),
    unit: new FormControl('USD'),
  });

  constructor(private currencyService: CurrencyService) {}

  async onLeftChanged() {
    const value = this.leftForm.controls['value'].value;
    const from = this.leftForm.controls['unit'].value;
    const to = this.rightForm.controls['unit'].value;

    console.log(`Converting ${value} ${from} to ${to}`);

    if (from && to && value) {
      await this.currencyService.getExchangedValue(from, to, value).subscribe({
        next: (value) => {
          this.rightForm.controls['value'].setValue(value);
        },
      });
    }
  }

  async onRightChanged() {
    const value = this.rightForm.controls['value'].value;
    const from = this.rightForm.controls['unit'].value;
    const to = this.leftForm.controls['unit'].value;

    console.log(`${value} from ${from} to ${to}`);

    if (from && to && value) {
      await this.currencyService.getExchangedValue(from, to, value).subscribe({
        next: (value) => {
          this.leftForm.controls['value'].setValue(value);
        },
      });
    }
  }
}
