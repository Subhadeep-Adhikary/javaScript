const marvel_heros= ['Thor',"Ironman","Spiderman"]
const dc=["Superman","flash","batman"]

// marvel_heros.push(dc) //chamges the current array

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const all_heros=marvel_heros.concat(dc)//need to initiate a new array
console.log(all_heros)

const all_new_heros=[...marvel_heros,...dc]
console.log(all_new_heros)

const another_array=[1,3,2,[4,5,6],7,[6,7,[4,5]]]
const real_another_array =another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("monish"))
console.log(Array.from("manish"))
console.log(Array.from({name:"Manish"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))