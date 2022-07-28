const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")
const nextQuizButton = document.getElementById("next-quiz")

let quizNumber = 0
const quizzes = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        isCorrect: false,
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        isCorrect: false,
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        isCorrect: true,
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
    ],
  },
  {
    text: "いま、何問目？",
    image: "Two.jpeg",
    choices: [
      {
        text: "１",
        isCorrect: false,
        feedback: "残念！ひとつ少ないよ。",
      },
      {
        text: "２",
        isCorrect: true,
        feedback: "正解！１でも３でもないよ！",
      },
      {
        text: "３",
        isCorrect: false,
        feedback: "残念！ひとつ多いよ。",
      },
    ],
  },
  {
    text: "この城の名前は？",
    image: "Maruoka.png",
    choices: [
      {
        text: "丸岡城",
        isCorrect: true,
        feedback: "正解！どこからどうみても丸岡城だね。",
      },
      {
        text: "丸亀城",
        isCorrect: true,
        feedback: "残念！どこからどうみても丸亀城ではないよ。",
      },
      {
        text: "丸子城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸子城ではないよ。",
      },
    ],
  },
]

/**
 * クイズを表示する
 * @param {Number} i 何問目のクイズか
 */
const reloadQuiz = function (i) {
  // 選択肢を削除
  choicesContainer.textContent = ""

  // 出題するクイズを取得
  const quiz = quizzes[i]

  // 問題文と問題画像をセット
  quizText.textContent = "Q. " + quiz.text
  quizImage.src = "./images/" + quiz.image

  // 選択肢ボタンの追加
  for (let i = 0; i < quiz.choices.length; i++) {
    const choice = quiz.choices[i]
    const choiceButtton = document.createElement("button")
    choiceButtton.textContent = choice.text
    choiceButtton.onclick = function () {
      choose(i)
    }
    choicesContainer.append(choiceButtton)
  }

  // 正解するまで次の問題へ行くボタンは隠しておく
  nextQuizButton.hidden = true
}

/**
 * 選んだ選択肢に応じて解説を出す
 * 正解かつ次の問題があるなら次の問題に進めるようにする
 * @param {Number} choiceNumber
 */
const choose = function (choiceNumber) {
  const choice = quizzes[quizNumber].choices[choiceNumber]
  feedback.textContent = choice.feedback
  if (choice.isCorrect) {
    if (quizNumber < quizzes.length - 1) {
      nextQuizButton.hidden = false
    }
  }
}

nextQuizButton.onclick = function () {
  quizNumber += 1
  reloadQuiz(quizNumber)
}

reloadQuiz(0)
