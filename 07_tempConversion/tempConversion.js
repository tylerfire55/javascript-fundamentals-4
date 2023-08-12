const convertToCelsius = function(fahrenheiht) {
  let convertC = ((fahrenheiht-32) * 5 / 9 );
  return Math.round(convertC*10)/10;
};

const convertToFahrenheit = function(celsius) {
  let convertF = ((celsius * 9 / 5) + 32);
  return Math.round(convertF*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
