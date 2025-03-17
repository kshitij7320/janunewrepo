// console.log("hello");
// fullname = "John Doe";
// age = 24;
// price = 99.99;
// x = null;
// y = undefined;
// console.log(x);
// let name = prompt("hello");
// console.log(name);
// let num = prompt("enter the number")
// if(num % 5 === 0){
//     console.log("num is divisible of 5");
// }
// else{
//     console.log("num is not divisible of 5");
// }
// for (let i = 1; i <= 100000; i++) {
//     console.log("apna college");
// }
// let items = [250 , 250 , 250 , 250 , 102]

// let idx = 0;
// for (let i = 0; i < items.length; i++) {
//     if (items[i] > 200) {
//         idx = i;
//         break;
//     }
// }
// for (let val of items) {
//     console.log("value at index &{idx) = ${val)");
//     idx++;
// }
// function kshitij()
// {
//     console.log("welcome kshitij");
//     console.log("hello kshitij");
// }
// kshitij();
// const arrowmul = (x,y) => {
//     return(x*y);
// }
// function countvowels(str) {
//     let count = 0;
//     for(const char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++;
//         };
//         console.log(count);

//         else
        
//             console.log("Invalid input. Please enter a string");
        
//     }
// }
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function privateVal(val) {
//     console.log(val);
// });
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//     console.log(val);
// })
// let nums = [2, 3, 4, 5, 6];
// nums.forEach((num) => {
//     console.log(num * num);
// })
// let nums = [2, 3, 4, 5, 6];
// let calcSquare = (num) => {
//     console.log(num * num);
// };
// nums.forEach(calcSquare);
// let nums = [67 ,52 ,39];
// let newArr = nums.map((val) => {
//     return val * val;
// });
// console.log(newArr);
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let even = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(even);
// let arr = [1, 2, 3, 4];
// const arrc = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(arrc);
// let arr = [1, 2, 3, 4];
// const arrc = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(arrc);
// let n = prompt("Please enter");
// let arr = [];
// for(let i=1; i<=n; i++) {
//     arr[i-1] = i;
// }
// console.log(arr);

let new = document.createElement("button");
new.innertext = "Click Me";
console.log(new);

let div = document.querySelector("div");
div.append(new);