const name="Subhadeep"
const repoCount= 5

// console.log(name+" "+repoCount+" repositories") /*old way of doing it */
console.log(`${name} has ${repoCount} repositories`) /* new way of doing it using template literals */

const newName = new String("Subhadeep-SA") /* this is not a primitive string, it is an object */

console.log(newName[0]);
console.log(newName.__proto__);


console.log(newName.length)
console.log(newName.toUpperCase())
console.log(newName.charAt(true))
console.log(newName.indexOf('e'))

const newstr = newName.substring(0,4)
console.log(newstr)
const anotherstr= newName.slice(1,4)
console.log(anotherstr);
const newUser=" Subhadeep  "
const trimmed= newUser.trim()
console.log(trimmed)

const url="https://abcd.com/llm lsds"

console.log(url.replace(' ','_'))
console.log(url.includes("ll"))
console.log(url.split(" "))
