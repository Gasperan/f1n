import { Portfolio } from "../Portfolio";
import { Stock } from "../Stock";

it("should return list of stocks when getStocks is called", () => {
  const initialStock: Stock = new Stock();
  const initialStocks = [initialStock];
  const portfolio: Portfolio = new Portfolio(initialStocks);

  const stocks: Array<Stock> = portfolio.stocks;

  expect(stocks).toEqual(expect.arrayContaining(initialStocks));
});
