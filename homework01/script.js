const fantaPrice = 15.678;
const colaPrice = 123.965;
const spritePrice = 90.2345;

const maxPrice = Math.max(fantaPrice, colaPrice, spritePrice);
console.log("maxPrice", maxPrice);
const minPrice = Math.min(fantaPrice, colaPrice, spritePrice);
console.log("minPrice", minPrice);

const priceSum = fantaPrice + colaPrice + spritePrice;
console.log("priceSum", priceSum);

const fantaPriceTrunc = Math.trunc(fantaPrice);
console.log("fantaPriceTrunc", fantaPriceTrunc);
const colaPriceTrunc = Math.trunc(colaPrice);
console.log("colaPriceTrunc", colaPriceTrunc);
const spritePriceTrunc = Math.trunc(spritePrice);
console.log("spritePriceTrunc", spritePriceTrunc);

const sumOfTruncsPrices = fantaPriceTrunc + colaPriceTrunc + spritePriceTrunc;
console.log("sumOfTruncsPrices", sumOfTruncsPrices);

const sumPricesFloor = Math.floor(priceSum / 100) * 100;
console.log("sumPricesFloor", sumPricesFloor);

const boolPrices = sumPricesFloor % 2 ;
const boolPricesCheck = boolPrices === 0 ;
console.log("boolPricesCheck", boolPricesCheck);

const priceChange = 500 - priceSum;
console.log("priceChange", priceChange);

const sale = Math.round(Math.random() * 101);
console.log("random sale", sale);

const priceSumWithSale = Math.round(priceSum * sale) /100;
console.log("priceSumWIthSale", priceSumWithSale);

const profit = Math.round((priceSum / 2 - (priceSumWithSale * 100)) / 100);
console.log("profit", profit);
