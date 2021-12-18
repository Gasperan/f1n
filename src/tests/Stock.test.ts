import { Stock } from "../Stock";

it("should return price given a date", () => {
  const stock: Stock = new Stock();
  const date: Date = new Date("2021-12-17");
  const price = 300;
  stock.addPrice(date, price);

  const priceResult = stock.getPrice(date);

  expect(priceResult).toEqual(300);
});

it("should return stock name", () => {
  const stock: Stock = new Stock();
  stock.name = "My Marvelous Stock";

  const stockName = stock.name;

  expect(stockName).toEqual("My Marvelous Stock");
});
