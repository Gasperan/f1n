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
    const profitByStock = this._stocks.map((stock: Stock) => {
        const priceDuringInitialDate: number = stock.getPrice(initialDate)
        const priceDuringFinalDate: number = stock.getPrice(finalDate)

        return priceDuringFinalDate - priceDuringInitialDate
      })
    console.log(profitByStock)

    return profitByStock.reduce((previousProfit, nextProfit) => previousProfit + nextProfit, 0)
  }
}

export { Portfolio };
