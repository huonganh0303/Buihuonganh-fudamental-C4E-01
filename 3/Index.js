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

// let Quan = ['ST', 'BD', 'DTL', 'CG', 'ĐĐ', 'HBT']
// console.log(Quan)
// let Danso = [150300, 247100, 333300, 266800, 420900, 318000]
// let max = Danso[0]
// let name = Quan[0]
// console.log(Danso)

// for(let i=0; i<Danso.length; i+=1) {
//     if (max<Danso[i]) {
//         max= Danso[i]; name= Quan[i]
//     }    
    
// }
// console.log(max, name)


// let min = Danso[0]
// let n = Quan[0]
// for(let i=0; i>Danso.length; i+=1) {
//     if (min>Danso[i]) {
//         min=Danso[i]; name= Quan[i]
//     }
// }
// console.log(min, n)

// let area = [11743, 9224, 4335, 1204, 996, 1009]
// console.log(area)
// let population = [150300, 247100, 333300, 266800, 420900, 318000]
// console.log(population)
// let density = [area / population]
// for(let i = 0; i < area.length; i+=1) {
//     density[i] = area [i] / population [i]
// }
// console.log(density)

// let Highscores = [45, 66, 57, 78]
// let n = Number(prompt('enter a score'))
// Highscores.push(n)
// for(let i = 0; i < Highscores.length; i+=1) {
//     console.log(i+1, Highscores[i])
//     }

let Highscores = [45, 66, 57, 78]
Highscores.sort()
for (let i=0; i < Highscores.length; i+=1) {
    if (Highscores[i] < Highscores[i+1]) {
        return (Highscores[i])
    }
}
console.log(i+1, Highscores[i])

// arr.sort(function(a, b){return b-a})

// let n = Number(prompt('enter new score'))
// Highscores.push(n)
// for(let i = 0; i < Highscores.length; i+=1) {
//     console.log(i+1, Highscores[i])
//     }