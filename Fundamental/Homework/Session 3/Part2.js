let Quan = ['ST', 'BD', 'DTL', 'CG', 'ĐĐ', 'HBT']
console.log(Quan)
let Danso = [150300, 247100, 333300, 266800, 420900, 318000]
console.log(Danso)

let max = Danso[0]
let name = Quan[0]
for(let i=0; i<Danso.length; i+=1) {
    if (max<Danso[i]) {
        max= Danso[i]; name= Quan[i]
    }    
    
}
console.log(max, name)


let min = Danso[0]
let n = Quan[0]
for(let i=0; i>Danso.length; i+=1) {
    if (min>Danso[i]) {
        min=Danso[i]; name= Quan[i]
    }
}
console.log(min, n)
