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
    const sumOfInitialPrices = this._stocks.reduce(
      (acumulator: number, currentStock: Stock) =>
        acumulator + currentStock.getPrice(initialDate),
      0
    );

    const sumOfFinalPrices = this._stocks.reduce(
      (acumulator: number, currentStock: Stock) =>
        acumulator + currentStock.getPrice(finalDate),
      0
    );

    return (sumOfFinalPrices - sumOfInitialPrices) / sumOfFinalPrices;
  }

  public getDetailsAsJsonString(): object {
    const stocks: any = this._stocks.map((stock: Stock) => {
      const name = stock.name;
      const prices: Map<string, number> = stock.historicalPrices;

      const pricesAsArray = Array.from(prices.entries()).map((priceEntry) => {
        const keyIndex = 0
        const valueIndex = 1
        const date = priceEntry[keyIndex];
        const price = priceEntry[valueIndex];
        
        return { price, date };
      });

      return {
        name,
        prices: pricesAsArray,
      };
    });

    return { stocks };
  }
}

export { Portfolio };
