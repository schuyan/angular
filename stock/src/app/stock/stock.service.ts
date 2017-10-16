import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class StockService {

  /*
  private stocks = [
    new Stock(1, "第一只股票", 1.99, 3.5, "这是第一只股票", ["IT", "互联网"]),
    new Stock(2, "第二只股票", 2.99, 4.5, "这是第二只股票", ["金融"]),
    new Stock(3, "第三只股票", 3.99, 2.5, "这是第三只股票", ["IT"]),
    new Stock(4, "第四只股票", 4.99, 1.5, "这是第四只股票", ["互联网"]),
    new Stock(5, "第五只股票", 5.99, 2.4, "这是第五只股票", ["金融"]),
    new Stock(6, "第六只股票", 6.99, 3.5, "这是第六只股票", ["IT", "互联网"]),
    new Stock(7, "第七只股票", 7.99, 5.0, "这是第七只股票", ["IT", "金融"]),
    new Stock(8, "第八只股票", 8.99, 4.5, "这是第八只股票", ["金融", "互联网"]),
  ];
  */

  constructor(private http: Http) {
  }

  getStocks(): Observable<Stock[]> {
    //return this.stocks;
    return this.http.get('/api/stock').map(res => res.json());
  }

  getStock(id: number): Observable<Stock> {
    /*
    let stock = this.stocks.find(stock => stock.id == id);
    if (!stock) {
      stock = new Stock(0, "", 0, 0, "", []);
    }
    return stock;
    */
    return this.http.get('/api/stock/' + id).map(res => res.json());
  }

}


export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
