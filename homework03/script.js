function getRandomNumber(n, m) {
    let min = Math.min(n, m);
    let max = Math.max(n, m);

    return Math.floor(Math.random() * (max - min) + min);
}

