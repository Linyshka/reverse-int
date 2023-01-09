module.exports = function reverse (n) {
    n = Math.abs(n);
    result = n.toString();
    return Number(result.split("").reverse().join(""));
}
