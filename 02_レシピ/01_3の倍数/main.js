// const number = 24

// if (number % 3 === 0) {
//   console.log(number + "!!!!!!")
// } else {
//   console.log(number)
// }

// for (let index = 1; index <= 24; index++) {
//   if (index % 3 === 0) {
//     console.log(index + "!!!!!!")
//   } else {
//     console.log(index)
//   }
// }

const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!")
    } else {
      console.log(n)
    }
  }
}

//  発展☆ FizzBuzz

const FizzBuzz = function (number) {
  for (let i = 1; i <= number; i++) {
    let output = ""
    if (i % 3 === 0) {
      output += "Fizz"
    }
    if (i % 5 === 0) {
      output += "Buzz"
    }
    if (i % 3 && i % 5) {
      output = i
    }
    console.log(output)
  }
}

const FizzBuzz2 = function (number) {
  for (let i = 1; i <= number; i++) {
    const output = (i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i
    console.log(output)
  }
}

//  発展☆☆ ３が大好き
//  sentence.includes(word)     word in sentence 的な動作
//  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/includes

const SanDaisuki = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 || String(i).includes("3")) {
      console.log(`${i}!!!!!`)
    } else {
      console.log(i)
    }
  }
}
