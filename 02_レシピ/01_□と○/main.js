const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")
const rainbow = ["red", "orange", "yellow", "green", "blue", "cyan", "purple"]
let rainbowIndex = 0

figure.onclick = function () {
  figure.classList.toggle("rounded")
}

figure.onmouseenter = function () {
  figure.classList.remove(rainbow[rainbowIndex])
  rainbowIndex = (rainbowIndex + 1) % 7
  figure.classList.add(rainbow[rainbowIndex])
}

circleButton.onclick = function () {
  figure.classList.add("rounded")
}
squareButton.onclick = function () {
  figure.classList.remove("rounded")
}
