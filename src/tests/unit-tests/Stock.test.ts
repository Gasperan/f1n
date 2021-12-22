import { Stock } from "../../Stock";
import { UnexpectedDateError } from "../../UnexpectedDateError";

it("should return price given a date", () => {
  const stock: Stock = new Stock("Some great stock");
  const date: Date = new Date("2021-12-17");
  const price = 300;
  stock.addPrice(date, price);

  const priceResult = stock.getPrice(date);

  expect(priceResult).toEqual(300);
});

it("should return stock name", () => {
  const stock: Stock = new Stock("My Marvelous Stock");

  const stockName = stock.name;

  expect(stockName).toEqual("My Marvelous Stock");
});

it("should throw an exception when does not exists price for given date", () => {
  const stock: Stock = new Stock("Great Stock");
  const date: Date = new Date("2021-12-17");
  const price = 300;
  stock.addPrice(date, price);

  let thrownError: Error;
  try {
    const date: Date = new Date("2022-12-17");
    stock.getPrice(date);
  } catch (error: any) {
    thrownError = error;
  }

  expect(thrownError instanceof UnexpectedDateError).toBe(true);
  expect(thrownError.message).toBe("Does not exists a price for given date");
});
