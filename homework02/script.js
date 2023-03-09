let n;
while (true) {
    n = parseInt(prompt('Enter N'));

    if (isNaN(n)) {
        alert('N is not a number');
        continue;
    }

    break;
}

let m;
while (true) {
    m = parseInt(prompt('Enter M'));

    if (isNaN(m)) {
        alert('M is not a number');
        continue;
    }

    if (n >= m) {
        alert('M mast be grater than N!');
        continue;
    }

    break;
}

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