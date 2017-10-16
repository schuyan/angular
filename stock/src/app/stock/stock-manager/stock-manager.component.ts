import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {

  //stocks: Array<Stock>;
  stocks: Observable<Stock[]>;

  nameFilter: FormControl = new FormControl();

  keyword: string;

  constructor(private router: Router, private stockService: StockService) {
  }

  ngOnInit() {

    this.stocks = this.stockService.getStocks();

    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe((value) => {
      this.keyword = value;
    });

  }

  create() {
    this.router.navigateByUrl('/stock/0')
  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id)
  }

}
