import { UnexpectedDateError } from "./UnexpectedDateError";

class Stock {
  private _historicalPrices = new Map<string, number>();
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public addPrice(date: Date, price: number): void {
    const dateAskey = date.toDateString();
    this._historicalPrices.set(dateAskey, price);
  }

  public getPrice(date: Date): number {
    const dateAskey = date.toDateString();
    const price = this._historicalPrices.get(dateAskey);

    if (price === undefined) {
      throw new UnexpectedDateError("Does not exists a price for given date");
    }

    return price;
  }

  get name(): string {
    return this._name;
  }

  get historicalPrices(): Map<string, number> {
    return this._historicalPrices;
  }
}

export { Stock };
