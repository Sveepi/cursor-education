function getRandomNumber(n, m) {
    let min = Math.min(n, m);
    let max = Math.max(n, m);

    return Math.floor(Math.random() * (max - min) + min);
}

function capitalLetter(str) {
    let uper = str.charAt(0).toUpperCase();
    let lower = str.slice(1).toLowerCase();
    let result = uper + lower;

    return result;
}

function deleteLetters(char, str) {
    let newStr = str.split(char).join("");
    return newStr;
}

function countLetters(char, str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count = count + 1;
        }
    }
    return count;
}

function getMaxDigit(str) {
    let maxDigit = "0";

    for (let i = 0; i < str.length; i++) {
        if (str[i] > maxDigit) {
            maxDigit = str[i];
        }
    }
    return maxDigit;
}

function countCurrency(str) {
    const currencyUah = "UAH";
    const indexUah = str.indexOf(currencyUah);
    const rate = 0.040;


    if (indexUah === -1) {
        return null
    }

    let currencyUsd = "$";
    let digits = parseFloat(str.slice(0, indexUah));
    let currency = digits * rate;
    let finalCurrency = Math.round(currency * 100) / 100 + currencyUsd;

    return finalCurrency;

}

console.log(getRandomNumber(1, 10));
console.log(capitalLetter("vLAD"));
console.log(deleteLetters("a", "blablabla"));
console.log(countLetters("a", "santa"));
console.log(getMaxDigit("1236"));
console.log(countCurrency("2500UAH"));