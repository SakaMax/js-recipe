//  イベントが発生する要素（ボタン）
const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

button.onclick = alertMessage

// input 要素とイベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")
// const sayHello = function () {
//   console.log("hello")
// }
const logValue = function (e) {
  console.log(e.target.value)
}
const logKey = function (e) {
  console.log(e.key)
}
inputText.oninput = logValue
inputDate.onkeydown = logValue
document.onkeydown = logKey
