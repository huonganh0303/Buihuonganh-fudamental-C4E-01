let Highscores = [45, 66, 57, 78]
let n = Number(prompt('enter a score'))
Highscores.push(n)
for(let i = 0; i < Highscores.length; i+=1) {
    console.log(i+1, Highscores[i])
    }

    arr.sort(function(a, b){return b-a})        