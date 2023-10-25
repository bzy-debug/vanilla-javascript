let value = 0;
const counter = document.getElementById("counter");

function updateText() {
  counter.textContent = value;
}

function updateColor() {
  if (value === 0) {
    counter.style.color = "black";
  } else if (value > 0) {
    counter.style.color = "green";
  } else if (value < 0) {
    counter.style.color = "red";
  }
}

document.getElementById("decrease").addEventListener("click", () => {
  value--;
  updateText();
  updateColor();
});

document.getElementById("reset").addEventListener("click", () => {
  value = 0;
  updateText();
  updateColor();
});

document.getElementById("increase").addEventListener("click", () => {
  value++;
  updateText();
  updateColor();
});
