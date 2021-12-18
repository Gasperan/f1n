import { Portfolio } from "../Portfolio";
import { Stock } from "../Stock";

it('should allow add stocks to Portfolio when stocks are set', () => {
  const portfolio: Portfolio = new Portfolio();
  const firstStock: Stock = new Stock()
  const secondStock: Stock = new Stock()
  portfolio.addStock(firstStock)
  portfolio.addStock(secondStock)

  const stocks: Array<Stock> = portfolio.stocks;

  expect(stocks).toEqual(expect.arrayContaining([firstStock, secondStock]));
})

fit('should return profit when two valid dates are given', () => {
  const portfolio: Portfolio = new Portfolio();

  const tesla: Stock = new Stock()
  tesla.name = "Tesla"
  tesla.addPrice(new Date("2021-12-15"), 500)
  tesla.addPrice(new Date("2021-12-16"), 400)
  tesla.addPrice(new Date("2021-12-17"), 500)

  const meta: Stock = new Stock()
  meta.name = "Meta"
  meta.addPrice(new Date("2021-12-15"), 300)
  meta.addPrice(new Date("2021-12-16"), 200)
  meta.addPrice(new Date("2021-12-17"), 100)

  portfolio.addStock(tesla)
  portfolio.addStock(meta)

  const initialDate = new Date("2021-12-15")
  const finallDate = new Date("2021-12-17")
  const profit = portfolio.getProfit(initialDate, finallDate)

  expect(profit).toEqual(-200)
})
