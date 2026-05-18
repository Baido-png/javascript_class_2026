/**
 * 
 * Given a string made up of letters a, b, and/or c, 
 * switch the position of letters a and b (change a to b and vice versa). 
 * Leave any incidence of c untouched. Example: 'acb' --> 'bca' 'aabacbaa' --> 'bbabcabb'
 */


//Method 1
// function switcheroo(x){
//     return x.split('').map(x => x === 'a' ? 'b' : 'a').join('')
// }

//Method 2
function switcheroo(x){
    return x.replace(/a/g, 'temp').replace(/b/g, 'a').replace(/temp/g, 'b')
}

//Method 3
// function switcheroo(x){
//     return x.replace(/a/g, 'b').replace(/b/g, 'a')
// }

//Method 4
// function switcheroo(x){
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] === 'a') {
//             x = x.substring(0, i) + 'b' + x.substring(i + 1);
//         } else if (x[i] === 'b') {
//             x = x.substring(0, i) + 'a' + x.substring(i + 1);
//         }
//     }
//     return x;
// }


//Method 5
// function switcheroo(x){
//     let result = '';
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] === 'a') {
//             result += 'b';
//         } else if (x[i] === 'b') {
//             result += 'a';
//         } else {
//             result += x[i];
//         }
//     }
//     return result;
// }

console.log(switcheroo('acb')) // 'bca'
console.log(switcheroo('aabacbaa')) // 'bbabcabb'