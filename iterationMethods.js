const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

function filterHighTemperatures(temps) {
return temps.filter(temp => temp >= 25);
}

function filterLowTemperatures(temps) {
  return temps.filter(temp => temp < 20);
}

function convertCelsiusToFahrenheit(temps) {
  return temps.map(temp => (temp * 9/5) + 32);
}
function labelTemperatures(temps) {
  return temps.map(temp => 
    {if (temp >= 25) return "Warm";
    if (temp >=20) return "Mild";
    return "Cool";
  });
}

function getMaxTemperature(temps) {
  return Math.max(...temps);
}

function getMinTemperature(temps) {
  return Math.min(...temps);
}

module.exports = {
  filterHighTemperatures,
  filterLowTemperatures,
  convertCelsiusToFahrenheit,
  labelTemperatures,
  getMaxTemperature,
  getMinTemperature,
};
