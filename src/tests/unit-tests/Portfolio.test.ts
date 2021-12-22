import { Portfolio } from "../../Portfolio";
import { Stock } from "../../Stock";
import { UnexpectedDateError } from "../../UnexpectedDateError";

it("should allow add stocks to Portfolio when addStock method is called", () => {
  const portfolio: Portfolio = new Portfolio();
  const firstStock: Stock = new Stock("firstStock");
  const secondStock: Stock = new Stock("secondStock");
  portfolio.addStock(firstStock);
  portfolio.addStock(secondStock);

  const stocks: Array<Stock> = portfolio.stocks;

  expect(stocks).toEqual(expect.arrayContaining([firstStock, secondStock]));
});

it("should return profit for portfolio with one Stock when two valid dates are given", () => {
  const portfolio: Portfolio = new Portfolio();

  const meta: Stock = new Stock("Meta");
  meta.addPrice(new Date("2021-12-15"), 300);
  meta.addPrice(new Date("2021-12-16"), 750);
  meta.addPrice(new Date("2021-12-17"), 150);

  portfolio.addStock(meta);

  const negativeProfit = portfolio.getProfit(
    new Date("2021-12-15"),
    new Date("2021-12-17")
  );
  const positiveProfit = portfolio.getProfit(
    new Date("2021-12-15"),
    new Date("2021-12-16")
  );

  expect(negativeProfit).toEqual(-1);
  expect(positiveProfit).toEqual(0.6);
});

it("should return profit for portfolio with multiples Stocks when two valid dates are given", () => {
  const portfolio: Portfolio = new Portfolio();

  const meta: Stock = new Stock("Meta");
  meta.addPrice(new Date("2021-12-15"), 300);
  meta.addPrice(new Date("2021-12-16"), 750);
  meta.addPrice(new Date("2021-12-17"), 150);

  const tesla: Stock = new Stock("Tesla");
  tesla.addPrice(new Date("2021-12-15"), 550);
  tesla.addPrice(new Date("2021-12-16"), 1000);
  tesla.addPrice(new Date("2021-12-17"), 250);

  portfolio.addStock(meta);
  portfolio.addStock(tesla);

  const negativeProfit = portfolio.getProfit(
    new Date("2021-12-15"),
    new Date("2021-12-17")
  );
  const positiveProfit = portfolio.getProfit(
    new Date("2021-12-15"),
    new Date("2021-12-16")
  );

  expect(negativeProfit).toEqual(-1.125);
  expect(positiveProfit).toEqual(0.5142857142857142);
});

it("should throw an exception when calculate profit for wrong dates", () => {
  const portfolio: Portfolio = new Portfolio();

  const apple: Stock = new Stock("Apple");
  apple.addPrice(new Date("2021-12-15"), 300);
  apple.addPrice(new Date("2021-12-16"), 750);
  apple.addPrice(new Date("2021-12-17"), 150);

  portfolio.addStock(apple);

  let thrownError: any;
  try {
    portfolio.getProfit(new Date("2021-12-15"), new Date("2022-12-17"));
  } catch (error: any) {
    thrownError = error;
  }

  expect(thrownError instanceof UnexpectedDateError).toBe(true);
  expect(thrownError.message).toBe("Does not exists a price for given date");
});

it("should return portafolio details as json", () => {
  const portfolio: Portfolio = new Portfolio();

  const meta: Stock = new Stock("Meta");
  meta.addPrice(new Date("2021-12-15"), 300);
  meta.addPrice(new Date("2021-12-16"), 750);
  meta.addPrice(new Date("2021-12-17"), 150);

  const tesla: Stock = new Stock("Tesla");
  tesla.addPrice(new Date("2021-12-15"), 550);
  tesla.addPrice(new Date("2021-12-16"), 1000);
  tesla.addPrice(new Date("2021-12-17"), 250);

  portfolio.addStock(meta);
  portfolio.addStock(tesla);

  const portfolioAsJson: object = portfolio.getDetailsAsJsonString();

  expect(portfolioAsJson).toEqual({
    stocks: [
      {
        name: "Meta",
        prices: [
          { date: "Tue Dec 14 2021", price: 300 },
          { date: "Wed Dec 15 2021", price: 750 },
          { date: "Thu Dec 16 2021", price: 150 },
        ],
      },
      {
        name: "Tesla",
        prices: [
          { date: "Tue Dec 14 2021", price: 550 },
          { date: "Wed Dec 15 2021", price: 1000 },
          { date: "Thu Dec 16 2021", price: 250 },
        ],
      },
    ],
  });
});
