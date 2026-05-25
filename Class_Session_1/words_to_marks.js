function wordsToMarks(string){

//     letters = [,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//     sum  = 0;

//    for(let i = 0; i < string.length; i++)
//    {
//     sum += letters.indexOf(string[i])
//    }

//    return sum

   return [...string].reduce((acc, char) => acc += char.charCodeAt(0) - 96, 0) 

}


// console.log(wordsToMarks('friendship'))


fruits = ['apple', 'orange', 'banana']

// console.log(fruits.indexOf('banana'))

// console.log('banana'.charCodeAt(0) - 96)
// console.log('banana'.charCodeAt(1) - 96)



// console.log('A'.charCodeAt(0))
// console.log('B'.charCodeAt(0))
// console.log('Z'.charCodeAt(0))



let a = 2
let b = 10

sum += check[i]

console.log(a)