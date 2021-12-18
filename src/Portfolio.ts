import { Stock } from "./Stock";

class Portfolio {
  private _stocks: Array<Stock>;

  constructor() {}

  get stocks(): Array<Stock> {
    return this._stocks;
  }

  set stocks(stocks: Array<Stock>) {
    this._stocks = stocks;
  }
}

export { Portfolio };
