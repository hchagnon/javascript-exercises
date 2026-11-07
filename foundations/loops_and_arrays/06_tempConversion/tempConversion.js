const convertToCelsius = function(num) {
  let temp = ((num - 32) * (5/9));
  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(num) {
  let temp = ((num * (9/5) + 32));
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
