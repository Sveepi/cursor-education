let n;
do {
    n = parseInt(prompt('Enter N'));
}
while (isNaN(n))

let m;
do {
    m = parseInt(prompt('Enter M'));
}
while (isNaN(m) || n >= m)

let isSkipEven = confirm('Do you want to skip even?');

console.log(`You have entered N: ${n}, M: ${m}, Is skip even: ${isSkipEven}`);

let result = 0;

for (let i = n; i <= m; i++) {
    if (isSkipEven && i % 2 === 0) {
        continue;
    }

    result = result + i;
}

console.log("Sum: ", result);