let Highscores = [45, 66, 57, 78]
let n = Number(prompt('enter a score'))
Highscores.push(n)
for(let i = 0; i < Highscores.length; i+=1) {
    console.log(i+1, Highscores[i])
    }

     
    
let scores = [45, 67, 56, 78, 99, 54, 23]
for(let i = 0; i<scores.length; i+=1) {
    for(let j = 0; j < scores.length - i - 1; j+=1) {
        if(scores[j] > scores[j + 1]) {
            let temp = scores[j]
            scores[j] = scores[j + 1]
            scores[j + 1] = temp
        }
    }
}
console.log(scores)