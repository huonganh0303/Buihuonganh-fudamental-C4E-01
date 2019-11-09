//Ex1

// function calculateDogAge() {
//         let yourage = Math.floor(Math.random() * 70) 
//         puppyage = yourage/7 
//         for (let i = 0; i < 3; i+=1) {
//             console.log(`your doggie is ${puppyage} years old in dog years!` )
//         }
//     }
// calculateDogAge()


//Ex2

// function calculateSupply(maxage, amountperday) {
//     maxage = prompt(`enter your expectation of life`)
//     let age = prompt(`enter your age at present`) 
//     amountperday = (maxage - age) * 2 * 365 // ngày ăn 2 bữa snack
//     console.log(`You need ${amountperday} to last you until the ripe old age of ${maxage}`)
// }
//  calculateSupply()
//  calculateSupply()
//  calculateSupply()

//  //Ex3
//  let radius = prompt(`enter the radius`)
// function calcCircumfrence() {
//     let circumfrence = 0
//     circumfrence = radius * 2 * 3.14
//     console.log(`circumfrence is ${circumfrence}`)
// }
// calcCircumfrence()

// function calcArea() {
//    let area = 0
//     area = radius ** 2 * 3.14
//     console.log(`The area is ${area}`)
// }
// calcArea()


//Ex4

// let celsius = prompt('enter a celsius degree')
// function celsiusToFahrenheit() {
//     let fahrenheit = 0
//     fahrenheit = (celsius * 1.8) + 32
//     console.log(`${celsius} C degree is ${fahrenheit} F degree`)
// }
// celsiusToFahrenheit()

let fahrenheit = prompt('enter a fahrenheit degree')
function fahrenheitToCelsius() {
   let celsius = 0
    celsius = (fahrenheit - 32) / 1.8
    console.log(`${fahrenheit} F degree is ${celsius} C degree`)
   
}
fahrenheitToCelsius()