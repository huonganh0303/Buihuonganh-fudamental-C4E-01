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

let quizzes = 
[
    {// Mô tả trắc nghiệm
        question: 'Con nhện có mấy chân?',
        choices: [
            '1 chân',
            '2 chân',
            '3 chân',
            '6 chân'
        ],    
        answer: 3
    },
  {
        question: 'Con gà có mấy chân?',
        choices: [
            '10 chân',
            '9 chân',
            '2 chân',
            '1 chân'
         ],
         answer: 2

  }      
    
]
// console.log(quizzes[0].question) 
for (let i=0; i<quizzes.length; i +=1){
    console.log(quizzes[i].question)
     let choices = quizzes[i].choices; 
for(let j=0; j < choices.length; j += 1) { 
    console.log(j + 1, choices[j])
}

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

// let userchoice = prompt('choose a brand')
// console.log(laptop[userchoice])


// for (let i = 0; i<quiz.answer.length; i+=1) {
//     console.log(i + 1, quiz.answer[i])
// }
// let userchoice = prompt('choose 1 or 2 or 3 or 4')
// if(userchoice - 1 == quiz.answer) { // 2 dấu bằng là so sánh
//     console.log('hurray')
// }
// else {
//     console.log('sai mất rồi')
}
