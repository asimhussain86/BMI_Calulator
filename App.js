function checkBmi() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = bmiCalculator(weight, height);

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "The BMI is: " + bmi;
}

function bmiCalculator(mass, height) {
  return mass / height ** 2;
}
