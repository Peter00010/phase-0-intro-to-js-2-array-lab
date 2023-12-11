// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
console.log(cats);

function destructivelyAppendCat(){
cats.push("Ralph")
console.log(cats);
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
    console.log(cats);
}

function destructivelyPrependCat(){
    cats.pop()
    console.log(cats);
}

function destructivelyRemoveLastCat(){
    cats.shift()
    console.log(cats);
}