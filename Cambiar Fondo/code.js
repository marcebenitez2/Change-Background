const button = document.querySelector("button");
const body = document.querySelector("body");

const colores = ["blue", "red", "yellow", "tomato", "grey", "pink"];

body.style.backgroundColor = "violet";
button.addEventListener("click", cambiarFondo);

function cambiarFondo() {
  const colorIndex = parseInt(Math.random() * colores.length);
  body.style.backgroundColor = colores[colorIndex];
}
