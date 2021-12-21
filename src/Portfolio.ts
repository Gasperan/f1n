import { Stock } from "./Stock";

class Portfolio {
  private _stocks: Array<Stock> = new Array();

  get stocks(): Array<Stock> {
    return this._stocks;
  }

  public addStock(stock: Stock) {
    this._stocks.push(stock);
  }

  public getProfit(initialDate: Date, finalDate: Date): number {
    const sumOfInitialPrices = this._stocks.reduce((acumulator: number, currentStock: Stock) =>
      acumulator + currentStock.getPrice(initialDate)
    , 0)

    const sumOfFinalPrices = this._stocks.reduce((acumulator: number, currentStock: Stock) =>
      acumulator + currentStock.getPrice(finalDate)
    , 0)

    return (sumOfFinalPrices - sumOfInitialPrices) / sumOfFinalPrices
  }
}

export { Portfolio };
