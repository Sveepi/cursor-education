let n = parseInt(prompt("enter N"));
let m = parseInt(prompt("enter M"));
let isSkipEven = confirm("чи потрібно пропускати парні числа?");

let result = 0;

for (let i = n; i <= m; i++) {
    if (isSkipEven && i % 2 === 0) {
        continue;
    }

    result = result + i;
}

console.log("sum: ", result);

