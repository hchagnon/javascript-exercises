const sumAll = function(a, b) {
    let start = a;
    let end = b;
    let sum = 0;

    if (typeof start !== 'number' || typeof end !== 'number' ||
        start < 0 || end < 0 ||
        start % 1 != 0 || end % 1 != 0) {
        return "ERROR";
    }
    if (start > end) {
        start = b;
        end = a;
    }
    for(i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
