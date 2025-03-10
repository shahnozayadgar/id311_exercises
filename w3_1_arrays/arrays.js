const paragraph = `Call me Ishmael. Some years ago- never mind how long precisely- having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off- then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.`;

//split characters
const characters = paragraph.toLowerCase().trim().split('');
console.log(characters);
 //count letter a

const counter = Array(26).fill(0);

console.log(counter); 

//my solution
//loop through characters and count letter a
// for (const char of characters) {
//     const letter = char.charCodeAt(0) - 97;
//     if (letter >= 0 && letter < 26) {
//         counter[letter]++;
//     }
// } 
// console.log(counter);

//class solution
for (const char of characters) {
    if (char >= 'a' && char <= 'z') {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        counter[index]++;
    } 
}
console.log(counter);

// Print a frequency counter of all the letters of the alphabet appearing in the paragraph
// Ignore case


// CLASS NOTES

// create array
// cont things = []; const things = Array();

const arr = Array(5)
console.log(arr)

const arr2 = [1, 2, 3]
const copy = arr2.slice()

//mege two arrays
const merged = arr2.concat(copy)
console.log(merged)

//join
const arr3 = ["noza", "andrea"]
console.log(arr3.join('_'))

//multidimensional arrays
const cols = 5;
const jimmy = [Array(cols).fill(0), Array(cols).fill(0), Array(cols).fill(0)]
const jimmy2 = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
console.log(jimmy)

//destructing arrays
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]   
const [first, second, ...other] = arr4
console.log(first, second)
console.log(other)

let a = 1
let b = 2 

[a, b] = [b, a]
console.log(a, b)

//copying an array: shallow
const things2= [1, 2, 3, 4, 5]
const otherother = things2

const aa = [1, 2, 3]
const bb = a
bb[0] = 100
console.log(aa, bb) //100, 2, 3 100, 2, 3

const things1 = [1, 2, 3, 4, 5];
const other1 = Array.from(things)

//using library to do deep copy 
const things3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const other3 = _.cloneDeep(things3);
other3[0][0] = 100
console.log(things3, other3)

//

//objects

const person = {
    name: "Andrea",
    age: 25,
}

person.lastname = "Noza"

console.log( person.name, person.lastname)


//destructing objects
const person1 = {
    name: "Andrea",
    age: 25,
}   

const {name, age} = person1

let o1 = {num: 2}
let o2 = {num: 2}

console.log(o1 === o2) //false because the pointers are different in memory location 

//deep copy using JSON
const other4 = JSON.parse(JSON.stringify(thing3));
things3[0][0] = 100;
console.log(things3, other4);