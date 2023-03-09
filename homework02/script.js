let n = 1;
let m = 3;
let isSkipEven = true;

let result = 0;

for (let i = n; i <= m; i++) {
    if (isSkipEven && i % 2 === 0) {
        continue;
    }

    result = result + i;
}

console.log("sum: ", result);

