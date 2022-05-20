//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let myPokemon = ['Pikachu', 'Snorlax', 'Bulbasaur'];
function foolMisty(arr){
    console.log(arr.reverse())
}

foolMisty(myPokemon);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let a = [5,7,20,25]
let b = [100,1,1]
function compareSumAndCube(arr1, arr2){
    return (arr1.reduce((prev,current) => prev += current**2, 0 ) > arr2.reduce((prev,current) => prev += current**2, 0))
}
console.log( compareSumAndCube(a,b))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function getIndexMultiples(arr){
    return arr.filter((x,i) => (x%i == 0))
}

console.log(getIndexMultiples([22, -6, 32, 82, 9, 25]))
console.log(getIndexMultiples([68, -1, 1, -7, 10, 10]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumRegardless(arr1){
    return arr1.reduce((prev,cur)=> prev + +cur,0)
}
 
console.log(sumRegardless([22, -6, 32, 82, 9, 25, 68, -1, 1, -7, 10, 10]))