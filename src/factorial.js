function factorial (number) {
    if (number === 2) {
        return 2;
    } else {
        return number * factorial (number-2);
    }
}
module.exports = factorial; 