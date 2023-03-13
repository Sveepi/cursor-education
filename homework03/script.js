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

