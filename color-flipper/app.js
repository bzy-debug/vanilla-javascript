let mode = new URL(location.href).hash.slice(1) === "hex" ? "hex" : "simple";

const colors = ["#f1f5f8", "hotpink", "aliceblue", "orange"];
const colorText = document.getElementsByClassName("color")[0];

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

function getRandomColor() {
  const index = getRandomInt(colors.length);
  return colors[index];
}

function getRandomHexColor() {
  const color = getRandomInt(0x1000000);
  return `#${color.toString(16)}`;
}

function changeBackground() {
  console.log(mode);
  const color = mode === "hex" ? getRandomHexColor() : getRandomColor();
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
  colorText.style.color = color;
}

const button = document.getElementById("btn");
button.addEventListener("click", changeBackground);

window.addEventListener("hashchange", (e) => {
  mode = new URL(e.newURL).hash.slice(1) === "hex" ? "hex" : "simple";
});
