let n = parseInt(prompt('Enter N'));
let m = parseInt(prompt('Enter M'));

if (!isNaN(n) && !isNaN(m)) {
    let isSkipEven = confirm('Do you want to skip even?');

    let result = 0;

    for (let i = n; i <= m; i++) {
        if (isSkipEven && i % 2 === 0) {
            continue;
        }

        result = result + i;
    }

    console.log("sum: ", result);
}