import { Portfolio } from "./Portfolio";
import { Stock } from "./Stock";

const NUMBER_OF_PRICES_FOR_EACH_STOCK = 5;

const getRandom = () => Math.floor(Math.random() * (1000 - 9000)) + 9000;

const facebookStock: Stock = new Stock("Facebook");
const teslaStock: Stock = new Stock("Tesla");
const spotifyStock: Stock = new Stock("Spotify");

const stocks: Array<Stock> = new Array();
stocks.push(facebookStock);
stocks.push(teslaStock);
stocks.push(spotifyStock);


const portfolio: Portfolio = new Portfolio();

stocks.forEach((stock: Stock) => {
  for (let index = 1; index < NUMBER_OF_PRICES_FOR_EACH_STOCK; index++) {
    const date = new Date(`2021-12-${index}`);
    const price = getRandom()
    stock.addPrice(date, price);
  }
  portfolio.addStock(stock);
});

console.log("### Portfolio Stocks ###\n");
console.log(JSON.stringify(portfolio.getDetailsAsJsonString(), null, 2));

for (let index = 1; index < NUMBER_OF_PRICES_FOR_EACH_STOCK - 1; index++) {
  const initialDate = new Date(`2021-12-${index}`);
  const finalDate = new Date(`2021-12-${index + 1}`);
  const profit = portfolio.getProfit(initialDate, finalDate);
  const profitAsPercentage = `${profit * 100} %`;

  console.log(
    `\n### Portfolio Profit beetwen ${initialDate.toDateString()} and ${finalDate.toDateString()} ###`
  );
  console.log(profitAsPercentage);
}
