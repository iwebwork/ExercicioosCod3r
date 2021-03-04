
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Somar(a, b) {
    return a + b
}

function Maior(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

function Menor(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}

export { Menor, Maior, Somar, getRandomIntInclusive }