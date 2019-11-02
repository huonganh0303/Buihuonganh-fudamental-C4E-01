let area = [11743, 9224, 4335, 1204, 996, 1009]
console.log(area)
let population = [150300, 247100, 333300, 266800, 420900, 318000]
console.log(population)
let density = [area / population]
for(let i = 0; i < area.length; i+=1) {
    density[i] = area [i] / population [i]
}
console.log(density)

let Quan = ['ST', 'BD', 'DTL', 'CG', 'ĐĐ', 'HBT']
let average = density[0] / Quan.length
for(let i=0; i < Quan.length; i+=1) {
    average = average + density[i++] / Quan.length
}
console.log(average)
