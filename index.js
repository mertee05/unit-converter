let inputField = document.getElementById("input-value");
let convertBtn = document.getElementById("convert-btn");
let lengthField = document.getElementById("length");
let volumeField = document.getElementById("volume");
let massField = document.getElementById("mass");

const meterToFeet = 3.28084;
const literToGallon = 0.264172;
const kilogramToPound = 2.20462;
const feetToMeter = 0.3048;
const gallonToLiter = 3.78541;
const poundToKilogram = 0.453592;

function convertion(unit) {
  let result = inputField.value * unit;
  let resultDecimal = Math.round(result * 1000) / 1000;
  return resultDecimal;
}

convertBtn.addEventListener("click", function () {
  let convertMeterToFeet = convertion(meterToFeet);
  let convertLiterToGallon = convertion(literToGallon);
  let convertKilogramToPound = convertion(kilogramToPound);
  let convertFeetToMeter = convertion(feetToMeter);
  let convertGallonToLiter = convertion(gallonToLiter);
  let convertPoundToKilogram = convertion(poundToKilogram);

  lengthField.textContent = `${inputField.value} meters = ${convertMeterToFeet} feet | ${inputField.value} feet = ${convertFeetToMeter} meters`;
  volumeField.textContent = `${inputField.value} liters = ${convertLiterToGallon} gallons | ${inputField.value} galoons = ${convertGallonToLiter} liters`;
  massField.textContent = `${inputField.value} kilos = ${convertKilogramToPound} pounds | ${inputField.value} pounds = ${convertPoundToKilogram} kilos`;
});
