const reverseString = function(str) {
    let strRev = [];
    for (let i = 1; i <= str.length; i++) {
        strRev[i] = str[str.length-i]
    }

    return strRev.join("");
};

// Do not edit below this line
module.exports = reverseString;
