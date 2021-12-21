import { UnexpectedDateError } from "./UnexpectedDateError";

class Stock {
  private _historicalPrices = new Map<string, number>();
  private _name: string;

  public addPrice(date: Date, price: number): void {
    const dateAskey = date.toDateString()
    this._historicalPrices.set(dateAskey, price);
  }

  public getPrice(date: Date): number {
    const dateAskey = date.toDateString()
    const price = this._historicalPrices.get(dateAskey);
    
    if (price === undefined) {
      throw new UnexpectedDateError("Does not exists a price for given date")
    }

    return price
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}

export { Stock };
