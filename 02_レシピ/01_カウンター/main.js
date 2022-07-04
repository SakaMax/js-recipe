const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
// const minusButton = document.getElementById("minus-button")
// const multButton = document.getElementById("mult-button")
let count = 0

// ボタンのクリックハンドラ
plusButton.onclick = function () {
  //  カウントを増やしてdisplayに反映
  count += 1
  display.textContent = count
}
// minusButton.onclick = function () {
//   // カウントを減らしてdisplayに反映
//   count -= 1
//   display.textContent = count
// }
// multButton.onclick = function () {
//   // カウントをx2してdisplayに反映
//   count *= 2
//   display.textContent = count
// }
