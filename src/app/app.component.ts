import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calc';
  pv_prod: string = '';
  pv_use: string = '';
  cloud_stored: number = 0;
  cloud_use: string = '';
  sold: number = 0;
  sell_price: string = '';
  revenue: number = 0;
  cloud_cost: string = '';
  result: number = 0;

  constructor() {}

  calc_cloud_stored() {
    const _pv_prod: number = +this.pv_prod;
    const _pv_use: number = +this.pv_use;
    this.cloud_stored = _pv_prod - _pv_use;
  }

  calc_sold() {
    const _cloud_use: number = +this.cloud_use;
    this.sold = this.cloud_stored - _cloud_use;
  }

  calc_revenue() {
    const _sell_price: number = +this.sell_price;
    this.revenue = +Number(this.sold * _sell_price).toFixed(2);
  }

  calc_result() {
    const _cloud_cost: number = +this.cloud_cost;
    this.result = this.revenue - _cloud_cost;
  }

  update_pv_prod(value: string) {
    this.pv_prod = value.replace(',', '.');
    this.calc_cloud_stored();
  }

  update_pv_use(value: string) {
    this.pv_use = value.replace(',', '.');
    this.calc_cloud_stored();
  }

  update_cloud_use(value: string) {
    this.cloud_use = value.replace(',', '.');
    this.calc_sold();
  }

  update_sell_price(value: string) {
    this.sell_price = value.replace(',', '.');
    this.calc_revenue();
  }

  update_cloud_cost(value: string) {
    this.cloud_cost = value.replace(',', '.');
    this.calc_result();
  }
}
