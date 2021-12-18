class Stock {
  private _historicalPrices = new Map<string, number>();
  private _name: string;

  public addPrice(date: Date, price: number): void {
    this._historicalPrices.set(date.toDateString(), price);
  }

  public getPrice(date: Date): number {
    return this._historicalPrices.get(date.toDateString());
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}

export { Stock };
