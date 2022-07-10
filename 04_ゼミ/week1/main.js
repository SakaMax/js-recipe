// ここにスクリプト

const suzusino = document.getElementById("suzushino")
const garatsuma = document.getElementById("garatsuma")
const shousui = document.getElementById("shousui")
const katabira = document.getElementById("katabira")
const answer = document.getElementById("answer")

katabira.onclick = function () {
  answer.textContent = "正解です！！"
}

suzusino.onclick = function () {
  answer.textContent = "「つじ」は合ってます。"
  answer.style = "color:black"
}

garatsuma.onclick = function () {
  answer.textContent = "音の数は合ってます。"
  answer.style = "color:black"
}

shousui.onclick = function () {
  answer.style = "color:red"
  answer.textContent = "かすってもないです。"
}
