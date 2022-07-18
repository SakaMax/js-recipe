/**
 * メモと削除ボタンの入ったdivを作成する
 * @param {string} text メモの本文
 * @return {Element} メモの本文と削除ボタンの格納されたdiv
 */
const createMemo = function (text) {
  // 本文とボタンを格納するdiv, 本文, 削除ボタンを作成
  const memoDiv = document.createElement("div")
  const memoText = document.createElement("div")
  const deleteButton = document.createElement("button")

  // cssを働かせるためのクラス
  memoDiv.classList.add("memo-body")
  memoText.classList.add("memo-text")

  // 本文を要素に入れる
  memoText.textContent = text

  // ボタンの表示テキストを設定
  deleteButton.textContent = "削除"

  // 削除ボタンが押されたら親要素を消す
  deleteButton.onclick = function () {
    memoDiv.remove()
  }

  // 本文とボタンをmemoDivに格納する
  memoDiv.append(memoText)
  memoDiv.append(deleteButton)

  // 完成したmemoDivを返す
  return memoDiv
}

/**
 * input要素をリセットする
 * @param {Element} input
 */
const resetInput = function (input) {
  input.value = ""
}

// 要素を取得
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
const memoInput = document.getElementById("memo-input")

// メモの追加
// メモ要素を作成→コンテナに追加→入力をリセット
addButton.onclick = function () {
  const memoDiv = createMemo(memoInput.value)
  memoContainer.append(memoDiv)
  resetInput(memoInput)
}
