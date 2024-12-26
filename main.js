const color = document.getElementById("color");

function addColor() {
  let randomNumber = Math.floor(Math.random() * 1000000);
  let generatedColor = `#${randomNumber}`;
  document.body.style.backgroundColor = generatedColor;
  color.innerHTML = generatedColor;
}
