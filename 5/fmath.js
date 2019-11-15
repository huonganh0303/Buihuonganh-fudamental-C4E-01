// let a = Math.floor(Math.random()*10) // random number
// let b = Math.floor(Math.random() * 10)
// let c = Math.floor((Math.random() + 1) * 2)
// console.log(c)
// let res = a + b
// let dice = Math.random()
// if (dice <0.5) {
//     console.log(`${a} + ${b} = ${res}`) // string formating, show quiz
// } else {
//     console.log(`${a} + ${b} = ${res + c}`) // string formating

// }
// let answer = prompt(`T/F?`)
// if(dice < 0.5) {
//     if (answer == "T") {
//         console.log("yayy")
//     } else {
//         console.log("sai r T.T")
//     }
//     } else {
//     if (answer == "T") {
//         console.log("sai r T.T")
//     } else {
//         console.log("yayy")
//     }
// }

// function checkAnswer(dice, answer, score) {
//     if(dice < 0.5) {
//         if (answer == "T") {
//             return score + 1
//             console.log("yayy")
//         } else {
//             return score - 1
//         }
//     } else {
//         if (answer == "T") {
//            return score - 1
//         } else {
//             return score + 1
//         }
//     }
// }

function generateQuiz() {
    let a = Math.floor(Math.random()*10) // random number
    let b = Math.floor(Math.random() * 10)
    let c = Math.floor((Math.random() + 1) * 2)
    let res = a + b

    let dice = Math.random()
    if (dice <0.5) {
    console.log(`${a} + ${b} = ${res}`) // string formating, show quiz
    } else {
    console.log(`${a} + ${b} = ${res + c}`) // string formating 
    }
}

let score = 0
for(let i = 0; i <10; i+=1) {
    let dice = Math.random()
    generateQuiz(dice)
    let answer = prompt(`T/F?`)
    score = checkAnswer(dice, answer, score)
    console.log(score)
}

// function removeSpaces(text) {
//     sentenceNoSpace = ''
//     for (let index = 0; index < text.length; index++) {
//         if (text[index] !== " ") {
//             sentenceNoSpace += text[index];
//         }
//     return sentenceNoSpacesentenceNoSpace
//     }
// }
// let listNumbers = [];
// let number = "";

// let inputNumbers = prompt("Enter your list number, separated by space:");

// for (let index = 0; index < inputNumbers.length; index++) {
    
//     if (inputNumbers[index] !== " ") {
//         number += inputNumbers[index];
//     } else {
//         number = "";
//     }

//     if (number !== "") {
//         listNumbers.push(parseInt(number));
//     }        
// }

// let maxNumber = -999999;
// for (let index = 0; index < listNumbers.length; index++) {
//     if (listNumbers[index] > maxNumber) {
//         maxNumber = listNumbers[index];
//     }
// }

// console.log(maxNumber);

// let sentence = prompt("Enter your sentence, separated by space:");
// let sentenceNoSpace = "";


// console.log(sentenceNoSpace);
