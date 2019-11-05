// let numbers = prompt()
// // console.log(numnbers) 
// let numberList = numbers.split(',')
// console.log(numberList)
// let sum = 0
// for(let i=0; i < numberList.length; i+=1) {
//     numberList[0] = Number(numberList[i])
//     sum = sum + numberList[i]
// }
// console.log(sum)

// let numberList = [5, 1, 8, 92, 7, 30]
// console.log (numberList)
// for(let i=0; i<numberList.length; i+=1) {
//     if (numberList[i]%2==0) {
//         console.log (numberList [i])
//     }

// }

// let numbers = prompt()
// console.log(numbers) 
// let numberList = numbers.split(',')
// console.log(numberList)
// for(let i=0; i<numberList.length; i+=1) {
//     if (numberList[i]%2==0) {
//         console.log (numberList [i])
//     }
// }



let Highscores = [45, 66, 57, 78]
Highscores.sort()
for (let i=0; i < Highscores.length; i+=1) {
    if (Highscores[i] < Highscores[i+1]) {
        return (Highscores[i])
    }
}
console.log(i+1, Highscores[i])

// arr.sort(function(a, b){return b-a})

