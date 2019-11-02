let numberList = [5, 1, 8, 92, 7, 30]
console.log (numberList)
for(let i=0; i<numberList.length; i+=1) {
    if (numberList[i]%2==0) {
        console.log (numberList [i])
    }

}

let numbers = prompt()
console.log(numbers) 
let List = numbers.split(',')
console.log(List)
for(let i=0; i<List.length; i+=1) {
    if (List[i]%2==0) {
        console.log (List [i])
    }
}