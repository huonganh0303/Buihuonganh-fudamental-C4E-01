// // let person = [
// //     "Thọ", 20, "Nha Trang", 60, 2, false]

// // let person = {
// //     name: 'Thọ', 
// //     age: 20, 
// //     hometown: 'Nha Trang'
// // }
// // console.log(2)

// let movie = {
//     name: 'Bắc Kim Thang',
//     year: 2019,
//     type: 'hornor',
//     director: 'Trần Hữu Tuần'
// }
// //Read
// // console.log(movie.name)// trả về Bac Kim Thang

// // console.log(movie.director)
// // console.log(movie['name'])// tương tự trả về Bắc Kim Thang
// // console.log(movie['director'])
// // console.log(movie)

// // let key = prompt()
// // console.log(movie.name)
// // console.log(movie[key])
// // //Read all
// let key = 'name'
// for(let k in movie) {
//     console.log(k, movie[k]) 
// }

// // movie.actor = 'Trịnh Tài'// CREATE
// // movie['actor'] = 'Trịnh Tài' // kết quả như dòng trên
// let newKey = prompt('enter a new key')
// let newValue = prompt ('enter new value')
// movie[newKey] = newValue// dùng ngoặc vuông

// for(let k in movie) {
//     console.log(k, movie[k]) 
// }
// movie.name = 'Về Nhà Đi Con' // UPDATE
// movie.year = 2018

// delete movie.type// DELETE
// console.log(movie)

// let quiz = {// Mô tả trắc nghiệm
//     question: 'Con nhện có mấy chân?',
//     choices: [
//         '1 chân',
//         '2 chân',
//         '3 chân',
//         '6 chân'
//     ],    
//     answer: 3
// }
// console.log(quiz.question) // ko cần ngoặc vuông
// for (let i = 0; i<quiz.answer.length; i+=1) {
//     console.log(i + 1, quiz.answer[i])
// }
// let userchoice = prompt('choose 1 or 2 or 3 or 4')
// if(userchoice - 1 == quiz.answer) { // 2 dấu bằng là so sánh
//     console.log('hurray')
// }
// else {
//     console.log('sai mất rồi')
// }

// let quizzes = 
// [
//     {// Mô tả trắc nghiệm
//         question: 'Con nhện có mấy chân?',
//         choices: [
//             '1 chân',
//             '2 chân',
//             '3 chân',
//             '6 chân'
//         ],    
//         answer: 3
//     },
//   {
//         question: 'Con gà có mấy chân?',
//         choices: [
//             '10 chân',
//             '9 chân',
//             '2 chân',
//             '1 chân'
//          ],
//          answer: 2

//   }      
    
// ]
// // console.log(quizzes[0].question) 
// for (let i=0; i<quizzes.length; i +=1){
//     console.log(quizzes[i].question)
//      let choices = quizzes[i].choices; 
// for(let j=0; j < choices.length; j += 1) { 
//     console.log(j + 1, choices[j])
// }

// let userChoice = prompt('1 or 2 or 3 or 4')
// if (userChoice - 1 == quizzes[i].answer) {
//     console.log('hurrayy')
// }
// else {
//     console.log('sai r T.T')
//     }
// }

// let laptop = {
//     HP: 20,
//     DELL: 50,
//     MACBOOK: 12,
//     ASUS: 30
// }
// console.log(laptop)

// let m = laptop ['MACBOOK']
// console.log(m)

// laptop.TOSHIBA = 10
// console.log(laptop)

// let userchoice = prompt('choose a brand')
// console.log(laptop[userchoice])

// let newlaptop = prompt('enter a new laptop')
// let newquantity = Number(prompt('enter new quantity'))
// laptop[newlaptop] = newquantity

// laptop.FUJITSU = 15
// laptop.ALIENWARE = 5

// let sum = 0
// for(let i in laptop) {
//     sum = sum + laptop[i]
//     console.log(i,":" ,laptop[i])
// }
// console.log(sum)




// laptop.DELL = 10
// laptop.MACBOOK = 2
// console.log(laptop)


// for (let i = 0; i<quiz.answer.length; i+=1) {
//     console.log(i + 1, quiz.answer[i])
// }
// let userchoice = prompt('choose 1 or 2 or 3 or 4')
// if(userchoice - 1 == quiz.answer) { // 2 dấu bằng là so sánh
//     console.log('hurray')
// }
// else {
//     console.log('sai mất rồi')
// }

// Part4,5//
let Price = {
        HP: 600,
        DELL: 650,
        MACBOOK: 12000,
        ASUS: 400,
        ACER: 350,
        TOSHIBA: 600,
        FUJITSU: 900,
        ALIENWARE: 1000,
    }
// let m = Price['ASUS']
// console.log(m)

// let n = prompt('choose a brand')
// console.log(Price[n])

// let invoice = m*5
// console.log(invoice)

// let o = Number(prompt('enter new quantity'))
// let invoice2 = Price[n]*o
// console.log(invoice2)


let laptop = {
        HP: 20,
        DELL: 50,
        MACBOOK: 12,
        ASUS: 30
    }
laptop.FUJITSU = 15
laptop.ALIENWARE = 5

// let warehouse = Price[0] - laptop[0]
// for (let k in laptop) {
//     console.log(k, ":", Price[k] - laptop[k])
// }

// // Part6//

// let p = Price[0]*laptop[0]
// let sum = 0
// for (let k in laptop) {
//     sum = sum + Price[k]*laptop[k]
//     console.log(Price[k]*laptop[k])
// }
// console.log(sum)

// // Part7//

// let character = {
//     Name: "Light",
//     Age: 17,
//     Strength: 8,
//     Defense: 10,
//     HP: 100,
//     Backpack: ["Shield", "Bread Loaf"],
//     Gold: 100,
//     Level: 2
// }
// console.log(character)
// character.Gold = 50
// character.Backpack.push("FlintStone")

// character.Pocket = ['MonsterDex', 'Flashlight']

// Part8//

let skilllist = [ 
Skill1 = 
{
    Name: 'Tackle',
    'Minimumlevel': 1,
    Damage: 5,
    'Hit rate': 0.3
}, 
Skill2 =
{
    'Name': 'Quick attack',
    'Minimumlevel': 2,
    Damage: 3,
    'Hit rate': 0.5
},
Skill3 = 
{
    Name: 'Strong Kick',
    'Minimumlevel': 4,
    Damage: 9,
    'Hit rate': 0.2
}
]

// console.log(skilllist)
// console.log(Skill2)

// Skill2.Name
// for (let i=0; i < 1; i +=1){
// console.log(i+1, Skill2.Name)
// }

// part9//

let userlevel = prompt('choose level 1 or 2 or 3')
for (let i=0; i < skilllist.length; i +=1){
    console.log(skilllist[i])
    if(userlevel == skilllist[i].Minimumlevel) { 
        console.log('you are in', skilllist[i].Damage)
    }
    else {
        console.log('you are lost')
    }
    }
    

