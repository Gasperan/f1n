import { Portfolio } from "../Portfolio";
import { Stock } from "../Stock";

it('should allow add stocks to Portfolio when stocks are set', () => {
  const portfolio: Portfolio = new Portfolio();
  const firstStock: Stock = new Stock()
  const secondStock: Stock = new Stock()
  portfolio.stocks = [firstStock, secondStock]

  const stocks: Array<Stock> = portfolio.stocks;

  expect(stocks).toEqual(expect.arrayContaining([firstStock, secondStock]));
})
