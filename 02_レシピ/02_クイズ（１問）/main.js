const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

const reloadQuiz = function () {
  // 問題文と問題画像
  quizText.textContent = "Q. " + quiz.text
  quizImage.src = "./images/" + quiz.image

  // 選択肢ボタン
  for (let i = 0; i < quiz.choices.length; i++) {
    const choice = quiz.choices[i]
    const choiceButtton = document.createElement("button")
    choiceButtton.textContent = choice.text
    choiceButtton.onclick = function () {
      choose(i)
    }
    choicesContainer.append(choiceButtton)
  }
}

const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

reloadQuiz()
