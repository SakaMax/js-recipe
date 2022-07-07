const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0
let id = null
let startUnixTime
let endUnixTime

const countUp = function () {
  // カウントは10ms
  count += 1
  display.textContent = count / 100
}

// 10秒測ったとき誤差12ms。
// これが答え？
// This API does not guarantee that timers will run exactly on schedule. Delays due to CPU load, other tasks, etc, are to be expected.
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
button.onclick = function () {
  if (id == null) {
    // タイマーが起動していない
    id = setInterval(countUp, 10)
    startUnixTime = new Date().getTime()
    button.textContent = "stop"
  } else {
    clearInterval(id)
    endUnixTime = new Date().getTime()
    let timeElapsed = endUnixTime - startUnixTime
    console.log(`${timeElapsed} (delta = ${timeElapsed - count * 10})`)
    id = null
    button.textContent = "start"
  }
}
