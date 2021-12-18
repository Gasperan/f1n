import { Stock } from "./Stock";

class Portfolio {
    private _stocks: Array<Stock>

    constructor(initialStocks: Array<Stock>){
        this._stocks = initialStocks
    }

    get stocks(): Array<Stock> {
        return this._stocks
    }
}

export {Portfolio}
